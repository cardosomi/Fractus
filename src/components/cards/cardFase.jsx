import { useNavigate } from 'react-router-dom';
import styles from './cardFase.module.css';

function CardFase({ fase, desbloqueada }) {
  const navigate = useNavigate();

  function abrirFase() {
    if (desbloqueada) {
      navigate(`/desafio?fase=${fase}`);
    }
  }

  return (
    <button
      className={styles.fase}
      onClick={abrirFase}
      disabled={!desbloqueada}
    >
      {desbloqueada ? '🔓' : '🔒'} {fase}
    </button>
  );
}

export default CardFase;