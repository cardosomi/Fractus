import { Link } from 'react-router-dom';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>FR∆CTUS</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/fases">Fases</Link>
        <Link to="/recompensas">Recompensas</Link>
      </nav>

    </header>
  );
}

export default Header;