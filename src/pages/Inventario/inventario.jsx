import { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import { getProfile } from '../../api';

function Inventario() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getProfile().then(setProfile).catch((requestError) => {
      setError(requestError.message);
    });
  }, []);

  return (
    <>
      <Header />

      <main className="inventario">
        <div className="inventario-card">
          <span className="inventario-icone" aria-hidden="true">🎒</span>
          <h1>Inventário</h1>
          {error ? <p role="alert">{error}</p> : (
            <p>
              {profile
                ? `Moedas conquistadas: ${profile.coins}`
                : 'Carregando seu inventário...'}
            </p>
          )}
        </div>
      </main>
    </>
  );
}

export default Inventario;
