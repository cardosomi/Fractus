import Header from '../../components/header/header';

function Inventario() {
  return (
    <>
      <Header />

      <main className="inventario">
        <div className="inventario-card">
          <span className="inventario-icone" aria-hidden="true">🎒</span>
          <h1>Inventário</h1>
          <p>Seus itens e recursos aparecerão aqui.</p>
        </div>
      </main>
    </>
  );
}

export default Inventario;
