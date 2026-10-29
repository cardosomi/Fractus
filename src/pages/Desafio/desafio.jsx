
import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styles from './desafio.module.css';

function Desafio() {
  const [parametros] = useSearchParams();
  const navigate = useNavigate();

  const faseInformada = Number(parametros.get('fase'));
  const fase =
    Number.isInteger(faseInformada) &&
    faseInformada >= 1 &&
    faseInformada <= 6
      ? faseInformada
      : 1;

  useEffect(() => {
    if (!localStorage.getItem('dadosNiveisJogo')) {
      navigate('/fases', { replace: true });
    }
  }, [navigate]);

  const nivel = localStorage.getItem('nivelJogo') || 'Facil';

  return (
    <main className={styles.jogoPagina}>
          <iframe
            key={`${nivel}-${fase}`}
            className={styles.jogoFrame}
            title={`Fractus - Fase ${fase}`}
            src={`/jogo/index.html?fase=${fase}&nivel=${encodeURIComponent(nivel)}`}
            allow="fullscreen"
          />
    </main>
  );
}

export default Desafio;
