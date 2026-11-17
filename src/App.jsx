import { useEffect, useState } from 'react';
import AppRoutes from './Routes/appRoutes';
import { clearAccessToken, getAccessToken, getProfile } from './api';
import Auth from './pages/Auth/auth';

function App() {
  const [status, setStatus] = useState(() => (
    getAccessToken() ? 'checking' : 'unauthenticated'
  ));
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    const handleSessionEnded = (event) => {
      setError(event.detail || '');
      setStatus('unauthenticated');
    };

    window.addEventListener('fractus:session-ended', handleSessionEnded);

    if (getAccessToken()) {
      getProfile().then(() => {
        if (active) setStatus('authenticated');
      }).catch((requestError) => {
        if (!active) return;
        if (requestError.status === 401) {
          clearAccessToken();
          setStatus('unauthenticated');
        } else {
          setError(requestError.message);
          setStatus('unavailable');
        }
      });
    }

    return () => {
      active = false;
      window.removeEventListener('fractus:session-ended', handleSessionEnded);
    };
  }, []);

  if (status === 'checking') {
    return <main className="auth-loading">Verificando sessão...</main>;
  }

  if (status === 'unavailable') {
    return (
      <main className="auth-loading">
        <p role="alert">Não foi possível verificar sua sessão: {error}</p>
        <button className="botao-iniciar" onClick={() => window.location.reload()}>
          Tentar novamente
        </button>
      </main>
    );
  }

  if (status === 'unauthenticated') {
    return <Auth message={error} onAuthenticated={() => setStatus('authenticated')} />;
  }

  return <AppRoutes />;
}

export default App;