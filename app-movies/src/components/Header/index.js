/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>AppMovies</span>
            </Link>
            <nav>
                <Link to="/">
                    Inicio
                </Link>
                <Link to="/favorites">
                   Favoritos
                </Link>
                <Link to="/search">
                   Buscar
                </Link>
            </nav>
        </header>
    );
}

export default Header;
