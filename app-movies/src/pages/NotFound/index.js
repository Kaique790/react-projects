import Footer from '../../components/Footer';
import Header from '../../components/Header'
import styles from './NotFound.module.css'
import erro404img from './erro404.png'

function NotFound() {
    return (
        <>
            <Header />
            <section className={styles.container}>
                <h2>Página não encontrada!</h2>
                <img src={erro404img} alt="Page Not Found Logo" />
            </section>
            <Footer />
        </>  
    );
}

export default NotFound;