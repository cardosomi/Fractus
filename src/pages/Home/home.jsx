import { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../../api';

function Home() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getProfile().then(setProfile).catch((requestError) => {
      setError(requestError.message);
    });
  }, []);

  const nome = profile?.name || '';
  const nivel = profile?.level;
  const fasesConcluidas = profile?.completedPhases?.length || 0;
  const fase1Concluida = fasesConcluidas > 0;
  const progresso = (fasesConcluidas / 6) * 100;
  const faseAtual = fasesConcluidas === 6
    ? 'Jornada concluída'
    : `Fase ${fasesConcluidas + 1}`;
  const destino = !nivel ? '/nivelamento' : '/fases';
  const textoBotao = !nivel
    ? 'Iniciar jornada'
    : fasesConcluidas === 6
      ? 'Rever fases'
      : `Continuar fase ${fasesConcluidas + 1}`;

  return (
    <>
      <Header />

      <main className="home-painel">
        {error && <p role="alert">{error}</p>}
        <section className="home-hero">
          <div className="home-copy">
            <p className="home-kicker">Sua jornada de matemática</p>
            <h1>Olá, {nome || 'jogador'}!</h1>
            <p className="home-motivacao">
              Cada fração que você entende é um passo a mais na sua conquista.
            </p>

            <button
              className="botao-iniciar"
              onClick={() => navigate(destino)}
              disabled={!profile}
            >
              {textoBotao}
            </button>
          </div>

          <div className="mascote" aria-label="Faraó do Fractus">
            <img src="/../../../public/fotoHome/delta.png" alt="delta simbolo do FRACTUS" />
            <span className="mascote-simbolo">1/2</span>
          </div>
        </section>

        <section className="home-grid">
          <article className="progresso-card">
            <div className="card-heading">
              <div>
                <p className="card-label">Seu progresso</p>
                <h2>Fase atual: {faseAtual}</h2>
              </div>
              <strong>{fasesConcluidas}/6</strong>
            </div>
            <div className="barra-progresso" aria-label={`${fasesConcluidas} de 6 fases concluídas`}>
              <span style={{ width: `${progresso}%` }} />
            </div>
            <p className="progresso-legenda">
              {fasesConcluidas
                ? `Você já concluiu ${fasesConcluidas} de 6 fases.`
                : 'Faça o nivelamento para começar.'}
            </p>
          </article>

          <article className="jornada-card">
            <div className="card-heading">
              <div>
                <p className="card-label">Mapa da jornada</p>
                <h2>Seu caminho</h2>
              </div>
            </div>
            <div className="mapa-mini">
              <span className="mapa-linha" />
              <div className="mapa-etapa mapa-etapa-concluida">
                <span>1</span>
                <small>Frações</small>
              </div>
              <div className={`mapa-etapa ${fase1Concluida ? 'mapa-etapa-atual' : 'mapa-etapa-bloqueada'}`}>
                <span>{fase1Concluida ? '2' : '🔒'}</span>
                <small>Comparação</small>
              </div>
              <div className="mapa-etapa mapa-etapa-bloqueada">
                <span>🔒</span>
                <small>Desafios</small>
              </div>
            </div>
          </article>
        </section>

        <section className="atalhos">
          <div>
            <p className="card-label">Acesso rápido</p>
            <h2>Continue de onde parou</h2>
          </div>
          <div className="atalhos-botoes">
            <button onClick={() => navigate('/fases')}>🗺️ Fases</button>
            <button onClick={() => navigate('/inventario')}>🎒 Inventário</button>
            <button onClick={() => navigate('/recompensas')}>🏆 Conquistas</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;