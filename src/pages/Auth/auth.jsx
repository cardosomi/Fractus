import { useState } from 'react';
import styles from './auth.module.css';
import { login, register } from '../../api';

function Auth({ message, onAuthenticated }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState(message || '');
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');

    if (isRegistering && password !== passwordConfirmation) {
      setError('As senhas não coincidem.');
      return;
    }

    setSubmitting(true);
    try {
      if (isRegistering) {
        await register(email, password);
      } else {
        await login(email, password);
      }
      onAuthenticated();
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setSubmitting(false);
    }
  }

  function toggleMode() {
    setIsRegistering((current) => !current);
    setError('');
    setPassword('');
    setPasswordConfirmation('');
  }

  return (
    <main className={styles.page}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <p className={styles.kicker}>FR∆CTUS</p>
        <h1>{isRegistering ? 'Criar conta' : 'Entrar'}</h1>
        <p className={styles.description}>
          {isRegistering
            ? 'Crie sua conta para salvar sua jornada.'
            : 'Entre para continuar sua jornada de matemática.'}
        </p>

        <label htmlFor="auth-email">E-mail</label>
        <input
          id="auth-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          maxLength={254}
        />

        <label htmlFor="auth-password">Senha</label>
        <input
          id="auth-password"
          type="password"
          autoComplete={isRegistering ? 'new-password' : 'current-password'}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          minLength={8}
          maxLength={128}
        />

        {isRegistering && (
          <>
            <label htmlFor="auth-confirm-password">Confirme a senha</label>
            <input
              id="auth-confirm-password"
              type="password"
              autoComplete="new-password"
              value={passwordConfirmation}
              onChange={(event) => setPasswordConfirmation(event.target.value)}
              required
              minLength={8}
              maxLength={128}
            />
          </>
        )}

        {error && <p className={styles.error} role="alert">{error}</p>}

        <button className={styles.submit} type="submit" disabled={submitting}>
          {submitting ? 'Aguarde...' : isRegistering ? 'Criar conta' : 'Entrar'}
        </button>

        <p className={styles.switch}>
          {isRegistering ? 'Já tem uma conta?' : 'Ainda não tem uma conta?'}
          <button type="button" onClick={toggleMode}>
            {isRegistering ? 'Entrar' : 'Criar conta'}
          </button>
        </p>
      </form>
    </main>
  );
}

export default Auth;
