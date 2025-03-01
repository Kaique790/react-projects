import Header from "../../components/Header";
import Container from "components/Container";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import styles from "./Watch.module.css";
import { useParams } from "react-router-dom";
import videos from "../../json/videos.json";
import NotFound from "../NotFound";

function Watch() {
  const params = useParams();
  const video = videos.find((video) => video.id === params.id);
  if (!video) return <NotFound />;

  return (
    <>
      <Header />
      <Banner image="assistir" />
      <Container>
        <section className={styles.watch}>
          <iframe
            width="854"
            height="480"
            src={`https://www.youtube.com/embed/${video.id}`}
            title="YouTube video player"
            style={{ border: "none" }}
            allow="accelerometer; autoplay; clipboard-write;
            encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Watch;