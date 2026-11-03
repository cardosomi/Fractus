
import { useEffect, useState } from 'react';
import CardFase from '../../components/cards/cardFase';
import Header from '../../components/header/header';
import { getProfile } from '../../api';
import dadosFases from '../../data/dadosfases';

function Fases() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getProfile().then(setProfile).catch((requestError) => {
      setError(requestError.message);
    });
  }, []);

  const nivel = profile?.level || 'Facil';
  const fasesConcluidas = new Set(profile?.completedPhases || []);

  const fases = Array.from({ length: 6 }, (_, index) => {
    const id = index + 1;

    return {
      id,
      concluida: fasesConcluidas.has(id),
      desbloqueada: Boolean(profile?.level) && (id === 1 || fasesConcluidas.has(id - 1))
    };
  });

  return (
    <>
      <Header />

      <main className="mapa" aria-label="Mapa de fases">
        <p className="mapa-kicker">SUA JORNADA</p>
        <h1>Mapa de fases</h1>
        <p className="mapa-descricao">Complete cada desafio para desbloquear o próximo.</p>
        {error && <p role="alert">{error}</p>}
        {!profile && !error && <p>Carregando seu progresso...</p>}
        {profile && !profile.level && (
          <p>
            Faça o nivelamento antes de começar.{' '}
            <a href="/nivelamento">Ir para o nivelamento</a>
          </p>
        )}
        <div className="mapa-trilha">
          <svg
            className="mapa-trilha-svg"
            viewBox="0 0 100 840"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="trilha-sombra"
              d="M28 70 C28 142 72 138 72 210 C72 282 28 278 28 350 C28 422 72 418 72 490 C72 562 28 558 28 630 C28 702 72 698 72 770"
            />
            <path
              className="trilha-pontilhada"
              d="M28 70 C28 142 72 138 72 210 C72 282 28 278 28 350 C28 422 72 418 72 490 C72 562 28 558 28 630 C28 702 72 698 72 770"
            />
          </svg>
          {fases.map((fase, index) => (
            <div
              key={fase.id}
              className="mapa-parada"
              style={{
                top: `${((index + 0.5) / fases.length) * 100}%`,
                left: index % 2 === 0 ? '28%' : '72%'
              }}
            >
              <CardFase
                fase={fase.id}
                nivel={nivel}
                desbloqueada={fase.desbloqueada}
                concluida={fase.concluida}
                phasesData={dadosFases[nivel] || dadosFases.Facil}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Fases;
