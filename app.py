import json
import os
import secrets
import sqlite3
import uuid
from datetime import datetime, timedelta, timezone
from pathlib import Path

from flask import Flask, abort, g, jsonify, request, send_from_directory, session


ROOT = Path(__file__).resolve().parent
DATABASE = Path(os.environ.get("FRACTUS_DATABASE", ROOT / "instance" / "fractus.sqlite3"))
SECRET_FILE = ROOT / "instance" / ".flask_secret"
LEVELS = {"Facil", "Intermediario", "Avancado"}


def load_secret_key():
    configured_key = os.environ.get("FLASK_SECRET_KEY")
    if configured_key:
        return configured_key

    SECRET_FILE.parent.mkdir(parents=True, exist_ok=True)
    if SECRET_FILE.exists():
        existing_key = SECRET_FILE.read_text(encoding="utf-8").strip()
        if existing_key:
            return existing_key

    generated_key = secrets.token_hex(32)
    SECRET_FILE.write_text(generated_key, encoding="utf-8")
    return generated_key


app = Flask(__name__)
app.config.update(
    SECRET_KEY=load_secret_key(),
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE="Lax",
    SESSION_PERMANENT=True,
    PERMANENT_SESSION_LIFETIME=timedelta(days=365),
)


def connect_database():
    DATABASE.parent.mkdir(parents=True, exist_ok=True)
    connection = sqlite3.connect(DATABASE)
    connection.row_factory = sqlite3.Row
    connection.execute("PRAGMA foreign_keys = ON")
    return connection


def initialize_database():
    connection = connect_database()
    try:
        connection.executescript(
            """
            CREATE TABLE IF NOT EXISTS profiles (
                id TEXT PRIMARY KEY,
                name TEXT NOT NULL DEFAULT '',
                level TEXT,
                coins INTEGER NOT NULL DEFAULT 0,
                game_data TEXT NOT NULL DEFAULT '[]'
            );
            CREATE TABLE IF NOT EXISTS phase_progress (
                profile_id TEXT NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
                level TEXT NOT NULL,
                phase INTEGER NOT NULL CHECK (phase BETWEEN 1 AND 6),
                best_score INTEGER NOT NULL DEFAULT 0,
                coins INTEGER NOT NULL DEFAULT 0,
                completed_at TEXT NOT NULL,
                PRIMARY KEY (profile_id, level, phase)
            );
            """
        )
        connection.commit()
    finally:
        connection.close()


def database():
    if "database" not in g:
        g.database = connect_database()
    return g.database


@app.teardown_appcontext
def close_database(_error=None):
    connection = g.pop("database", None)
    if connection is not None:
        try:
            if _error is None:
                connection.commit()
            else:
                connection.rollback()
        finally:
            connection.close()


def profile_id():
    identifier = session.get("profile_id")
    if identifier is None:
        identifier = uuid.uuid4().hex
        session["profile_id"] = identifier
        session.permanent = True
        database().execute("INSERT INTO profiles (id) VALUES (?)", (identifier,))
    return identifier


def load_profile():
    identifier = profile_id()
    profile = database().execute(
        "SELECT id, name, level, coins, game_data FROM profiles WHERE id = ?",
        (identifier,),
    ).fetchone()
    if profile is None:
        abort(401, description="Sessão inválida. Atualize a página para tentar novamente.")
    return profile


def profile_response(profile):
    completed = []
    rewards = []
    if profile["level"]:
        rows = database().execute(
            """
            SELECT phase, best_score, coins, completed_at
            FROM phase_progress
            WHERE profile_id = ? AND level = ?
            ORDER BY phase
            """,
            (profile["id"], profile["level"]),
        ).fetchall()
        completed = [row["phase"] for row in rows]
        rewards = [dict(row) for row in rows]

    return {
        "name": profile["name"],
        "level": profile["level"],
        "coins": profile["coins"],
        "completedPhases": completed,
        "rewards": rewards,
    }


def valid_integer(value, minimum=0):
    return isinstance(value, int) and not isinstance(value, bool) and value >= minimum


@app.get("/api/profile")
def get_profile():
    return jsonify(profile_response(load_profile()))


@app.patch("/api/profile")
def update_profile():
    body = request.get_json(silent=True)
    if not isinstance(body, dict):
        abort(400, description="Envie um objeto JSON.")

    level = body.get("level")
    if level not in LEVELS:
        abort(400, description="Nível de jogo inválido.")

    profile = load_profile()
    database().execute(
        "UPDATE profiles SET level = ? WHERE id = ?",
        (level, profile["id"]),
    )
    return jsonify(profile_response(load_profile()))


@app.put("/api/game-data")
def save_game_data():
    body = request.get_json(silent=True)
    if not isinstance(body, dict):
        abort(400, description="Envie um objeto JSON.")

    level = body.get("level")
    phases = body.get("phases")
    if level not in LEVELS or not isinstance(phases, list):
        abort(400, description="Dados de fases ou nível inválidos.")

    profile = load_profile()
    if profile["level"] != level:
        abort(400, description="Conclua o nivelamento antes de selecionar uma fase.")

    database().execute(
        "UPDATE profiles SET level = ?, game_data = ? WHERE id = ?",
        (level, json.dumps(phases, ensure_ascii=False), profile["id"]),
    )
    return jsonify({"saved": True})


@app.get("/api/game-data")
def get_game_data():
    profile = load_profile()
    if not profile["level"]:
        abort(404, description="Conclua o nivelamento antes de iniciar uma fase.")

    try:
        phases = json.loads(profile["game_data"])
    except (TypeError, json.JSONDecodeError):
        abort(500, description="Os dados das fases salvos no servidor estão inválidos.")

    if not isinstance(phases, list) or not phases:
        abort(404, description="Selecione uma fase antes de iniciar o jogo.")

    return jsonify({"level": profile["level"], "phases": phases})


@app.post("/api/complete-phase")
def complete_phase():
    body = request.get_json(silent=True)
    if not isinstance(body, dict):
        abort(400, description="Envie um objeto JSON.")

    phase = body.get("phase")
    score = body.get("score")
    coins = body.get("coins")
    if not valid_integer(phase, 1) or phase > 6:
        abort(400, description="Fase inválida.")
    if not valid_integer(score) or not valid_integer(coins):
        abort(400, description="Pontuação ou moedas inválidas.")

    profile = load_profile()
    level = profile["level"]
    if level not in LEVELS:
        abort(400, description="Conclua o nivelamento antes de salvar a fase.")

    connection = database()
    if phase > 1:
        previous = connection.execute(
            """
            SELECT 1 FROM phase_progress
            WHERE profile_id = ? AND level = ? AND phase = ?
            """,
            (profile["id"], level, phase - 1),
        ).fetchone()
        if previous is None:
            abort(403, description="Conclua a fase anterior primeiro.")

    connection.execute(
        """
        INSERT INTO phase_progress (profile_id, level, phase, best_score, coins, completed_at)
        VALUES (?, ?, ?, ?, ?, ?)
        ON CONFLICT (profile_id, level, phase) DO UPDATE SET
            best_score = MAX(best_score, excluded.best_score),
            coins = MAX(coins, excluded.coins),
            completed_at = excluded.completed_at
        """,
        (
            profile["id"],
            level,
            phase,
            score,
            coins,
            datetime.now(timezone.utc).isoformat(),
        ),
    )
    total_coins = connection.execute(
        """
        SELECT COALESCE(SUM(coins), 0) AS total
        FROM phase_progress
        WHERE profile_id = ?
        """,
        (profile["id"],),
    ).fetchone()["total"]
    connection.execute(
        "UPDATE profiles SET coins = ? WHERE id = ?",
        (total_coins, profile["id"]),
    )
    return jsonify(profile_response(load_profile()))


@app.errorhandler(400)
@app.errorhandler(401)
@app.errorhandler(403)
@app.errorhandler(404)
@app.errorhandler(500)
def handle_api_error(error):
    if request.path.startswith("/api/"):
        return jsonify({"error": error.description}), error.code
    return error


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_frontend(path):
    if path.startswith("api/"):
        abort(404)
    build_directory = ROOT / "dist"
    requested_file = build_directory / path
    if path and requested_file.is_file():
        return send_from_directory(build_directory, path)
    index_file = build_directory / "index.html"
    if index_file.is_file():
        return send_from_directory(build_directory, "index.html")
    return jsonify({"error": "Frontend não compilado. Execute npm run build."}), 404


initialize_database()


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=os.environ.get("FLASK_DEBUG") == "1")
