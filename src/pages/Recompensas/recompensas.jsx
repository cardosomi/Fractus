import { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import configuracaoJogo from '../../data/configuraçãoJogo';
import { getProfile } from '../../api';

function Recompensas() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getProfile().then(setProfile).catch((requestError) => {
      setError(requestError.message);
    });
  }, []);

  const nivel = profile?.level || 'Facil';
  const fasesConcluidas = (profile?.rewards || []).map((reward) => {
    const limites = configuracaoJogo[nivel]?.[reward.phase]?.pergaminhos || [];
    const medalha = reward.best_score >= (limites[2] || Infinity)
      ? ' Ouro'
      : reward.best_score >= (limites[1] || Infinity)
        ? 'Prata'
        : reward.best_score >= (limites[0] || Infinity)
          ? 'Bronze'
          : null;

    return {
      fase: reward.phase,
      recorde: reward.best_score,
      medalha,
      conquista: configuracaoJogo[nivel]?.[reward.phase]?.conquista
    };
  });

  return (
    <>
      <Header />

      <main className="recompensas">
        <h1>Recompensas</h1>
        {error && <p role="alert">{error}</p>}

        {fasesConcluidas.length ? (
          <div className="recompensas-lista">
            {fasesConcluidas.map(({ fase, recorde, medalha, conquista }) => (
              <article className="medalha" key={fase}>
                <span>Fase {fase}: {conquista}</span>
                <p>Recorde salvo: {recorde} pontos</p>
                <p>{medalha || 'Fase concluída'}</p>
              </article>
            ))}
          </div>
        ) : profile ? (
          <p className="sem-medalha">
            Nenhuma fase concluída ainda. Conclua uma fase para salvar suas recompensas.
          </p>
        ) : !error && <p>Carregando suas recompensas...</p>}
      </main>
    </>
  );
}

export default Recompensas;