import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { logout } from '../../api';

function Header() {
  return (
    <header className={styles.header}>
      <h1>FR∆CTUS</h1>

      <nav>
        <Link to="/inicio">Home</Link>
        <Link to="/fases">Fases</Link>
        <Link to="/recompensas">Recompensas</Link>
        <button type="button" onClick={logout}>Sair</button>
      </nav>

    </header>
  );
}

export default Header;