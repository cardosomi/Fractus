import Header from '../../components/header/header';

function Recompensas() {
  const medalhaGanha = localStorage.getItem('medalhaFase1');
  const medalhas = {
    ouro: '🥇 Medalha de Ouro',
    prata: '🥈 Medalha de Prata',
    bronze: '🥉 Medalha de Bronze'
  };

  return (
    <>
      <Header />

      <main className="recompensas">
        <h1>Recompensas</h1>

        {medalhaGanha ? (
          <div className="medalha">
            <span>{medalhas[medalhaGanha]}</span>
            <p>Conquistada na fase 1</p>
          </div>
        ) : (
          <p className="sem-medalha">Você ainda não conquistou medalhas.</p>
        )}
      </main>
    </>
  );
}

export default Recompensas;