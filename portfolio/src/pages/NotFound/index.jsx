import styles from "./NotFound.module.css";
import Container from "../../components/Container";

function NotFound() {
    return (
        <>
            <Container>
                <h2 className={styles.title2} >Página não localizada...</h2>
                <div className={styles.texts} >
                    <span className={styles.big_text}>404</span>
                    <strong className={styles.red_text}>Tente novamente mais tarde :(</strong>
                </div>
            </Container>
        </>
    );
}

export default NotFound;