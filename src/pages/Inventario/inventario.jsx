import Header from '../../components/header/header';

function Inventario() {
  const moedas = Number(localStorage.getItem('moedasTotais')) || 0;

  return (
    <>
      <Header />

      <main className="inventario">
        <div className="inventario-card">
          <span className="inventario-icone" aria-hidden="true">🎒</span>
          <h1>Inventário</h1>
          <p>Moedas conquistadas: {moedas}</p>
        </div>
      </main>
    </>
  );
}

export default Inventario;
