
import { useNavigate } from 'react-router-dom';
import dadosFases from '../../data/dadosfases';
import styles from './cardFase.module.css';

function CardFase({ fase, desbloqueada, nivel }) {
  const navigate = useNavigate();

  function abrirFase() {
    if (!desbloqueada) return;

    // Salva o nível definido pelo nivelamento.
    localStorage.setItem('nivelJogo', nivel);

    // Entrega os dados das fases ao jogo.
    localStorage.setItem(
      'dadosNiveisJogo',
      JSON.stringify(dadosFases[nivel] || dadosFases.Facil)
    );

    // Abre diretamente o jogo da fase clicada.
    navigate(`/desafio?fase=${fase}`);
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
