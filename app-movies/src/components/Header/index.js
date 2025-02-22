/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <span>AppMovies</span>
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Assistir</a>
            </nav>   
        </header>
    );
}

export default Header;
