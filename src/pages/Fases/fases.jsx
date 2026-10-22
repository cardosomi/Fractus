import CardFase from '../../components/cards/cardFase'
import Header from '../../components/header/header'

function Fases() {
  const nivelAluno = localStorage.getItem('nivelAluno') || 'Iniciante';

  const nomesDosNiveis = {
    'Iniciante': 'Facil',
    'Intermediário': 'Intermediario',
    'Avançado': 'Avancado'
  };

  const nivel = nomesDosNiveis[nivelAluno] || 'Facil';

  const fases = [
    { id: 1, desbloqueada: true },
    { id: 2, desbloqueada: localStorage.getItem('fase1Concluida') === 'true' },
    { id: 3, desbloqueada: localStorage.getItem('fase2Concluida') === 'true' },
    { id: 4, desbloqueada: localStorage.getItem('fase3Concluida') === 'true' },
    { id: 5, desbloqueada: localStorage.getItem('fase4Concluida') === 'true' },
    { id: 6, desbloqueada: localStorage.getItem('fase5Concluida') === 'true' },
  ];

  return (
    <>
      <Header />

      <div className="mapa">
        {fases.map((fase, index) => (
          <div
            key={fase.id}
            className={index % 2 === 0 ? 'direita' : 'esquerda'}
          >
            <CardFase
              fase={fase.id}
              nivel={nivel}
              desbloqueada={fase.desbloqueada}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Fases;