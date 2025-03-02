import { Link } from "react-router-dom";
import styles from "./Home.module.css"
import Container from "../../components/Container";

function Home() {
  return (
    <>
      <Container>
        <section className={styles.home}>
          <div>
            <p>
              Alô?? O <br />
              <span>Dev Kaique</span> <br />
              Full Stack <br />
              Está na linha
            </p>

            <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`} >Saiba mais sobre mim</Link>
          </div>
          <figure>
            <img className={styles.img_home} src="/developer-red.svg" alt="Home Image" />
          </figure>
        </section>
      </Container>
    </>
  );
}

export default Home;
