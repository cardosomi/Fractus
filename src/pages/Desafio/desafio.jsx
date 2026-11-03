
import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styles from './desafio.module.css';
import { getGameData } from '../../api';

function Desafio() {
  const [parametros] = useSearchParams();
  const navigate = useNavigate();
  const [gameData, setGameData] = useState(null);
  const [error, setError] = useState('');

  const faseInformada = Number(parametros.get('fase'));
  const fase =
    Number.isInteger(faseInformada) &&
    faseInformada >= 1 &&
    faseInformada <= 6
      ? faseInformada
      : 1;

  useEffect(() => {
    getGameData().then(setGameData).catch((requestError) => {
      setError(requestError.message);
    });
  }, []);

  return (
    <main className={styles.jogoPagina}>
      {error && (
        <p role="alert">
          {error} <button onClick={() => navigate('/fases')}>Voltar às fases</button>
        </p>
      )}
      {!gameData && !error && <p>Carregando o jogo...</p>}
      {gameData && (
          <iframe
            key={`${gameData.level}-${fase}`}
            className={styles.jogoFrame}
            title={`Fractus - Fase ${fase}`}
            src={`/jogo/index.html?fase=${fase}`}
            allow="fullscreen"
          />
      )}
    </main>
  );
}

export default Desafio;
