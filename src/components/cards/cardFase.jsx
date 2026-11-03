
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dadosFases from '../../data/dadosfases';
import { saveGameData } from '../../api';
import styles from './cardFase.module.css';

function CardFase({ fase, desbloqueada, concluida, nivel, phasesData }) {
  const navigate = useNavigate();
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState('');

  async function abrirFase() {
    if (!desbloqueada || salvando) return;

    setSalvando(true);
    setErro('');
    try {
      await saveGameData({
        level: nivel,
        phases: phasesData || dadosFases[nivel] || dadosFases.Facil
      });
      navigate(`/desafio?fase=${fase}`);
    } catch (requestError) {
      setErro(requestError.message);
    } finally {
      setSalvando(false);
    }
  }

  return (
    <div>
      <button
        className={styles.fase}
        onClick={abrirFase}
        disabled={!desbloqueada || salvando}
      >
        {desbloqueada ? (concluida ? '✅' : '🔓') : '🔒'} {fase}
      </button>
      {erro && <p role="alert">{erro}</p>}
    </div>
  );
}

export default CardFase;
