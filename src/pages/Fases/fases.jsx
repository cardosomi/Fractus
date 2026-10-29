
import CardFase from '../../components/cards/cardFase';
import Header from '../../components/header/header';

function Fases() {
  const nivelAluno =
    localStorage.getItem('nivelAluno') || 'Iniciante';

  const nomesDosNiveis = {
    'Iniciante': 'Facil',
    'Intermediário': 'Intermediario',
    'Avançado': 'Avancado'
  };

  const nivel = nomesDosNiveis[nivelAluno] || 'Facil';

  const fases = Array.from({ length: 6 }, (_, index) => {
    const id = index + 1;

    return {
      id,
      desbloqueada:
        id === 1 ||
        localStorage.getItem(
          `fase${id - 1}Concluida_${nivel}`
        ) === 'true'
    };
  });

  return (
    <>
      <Header />

      <main className="mapa" aria-label="Mapa de fases">
        <p className="mapa-kicker">SUA JORNADA</p>
        <h1>Mapa de fases</h1>
        <p className="mapa-descricao">Complete cada desafio para desbloquear o próximo.</p>
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
            <g className="mapa-piramide">
              <path d="M7 220 16 202 25 220Z" />
              <path d="M13 220 22 198 33 220Z" />
            </g>
            <g className="mapa-piramide mapa-piramide-distante">
              <path d="M73 610 82 592 91 610Z" />
              <path d="M80 610 88 594 97 610Z" />
            </g>
          </svg>
          <span className="mapa-sol" aria-hidden="true" />
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
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Fases;
