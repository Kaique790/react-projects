import Container from "components/Container";
import Footer from "../../components/Footer";
import VideoList from "../../components/VideoList";
import Header from "../../components/Header";
import styles from "./Favorites.module.css";
import { useFavoriteContext } from "../../contexts/Favorites";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import ScrollToTopButton from "../../components/ScrollToTopButton";

function Favorites() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const { favorite } = useFavoriteContext();

  return (
    <>
      <Header />
      <ScrollToTopButton />
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <section className={styles.favorites}>
            <h2>Meus Favoritos:</h2>
            {<VideoList videos={favorite} emptyHeading="Nenhum favorito :(" />}
          </section>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default Favorites;
