import Header from '../../components/header/header';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const nome = localStorage.getItem('nomeJogador') || '';
  const fase1Concluida = localStorage.getItem('fase1Concluida') === 'true';
  const nivel = localStorage.getItem('nivelAluno');
  const fasesConcluidas = fase1Concluida ? 1 : 0;
  const progresso = (fasesConcluidas / 6) * 100;
  const faseAtual = fase1Concluida ? 'Comparação' : 'Frações Básicas';
  const destino = !nivel ? '/nivelamento' : !fase1Concluida ? '/desafio' : '/fases';
  const textoBotao = !nivel
    ? 'Iniciar jornada'
    : !fase1Concluida
      ? 'Continuar fase 1'
      : 'Continuar jornada';

  return (
    <>
      <Header />

      <main className="home-painel">
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
            >
              {textoBotao}
            </button>
          </div>

          <div className="mascote" aria-label="Faraó do Fractus">
            <img
              src="/farao-e-gato-dupla-encantadora-desenhada-a-mao_53876-1280593.avif"
              alt="Faraó e gato do Fractus"
            />
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
              {fase1Concluida ? 'Você já concluiu a primeira fase.' : 'Faça o nivelamento para começar.'}
            </p>
          </article>

          <article className="jornada-card">
            <div className="card-heading">
              <div>
                <p className="card-label">Mapa da jornada</p>
                <h2>Seu caminho</h2>
              </div>
              <span className="jornada-destino">→</span>
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