import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Container from "./components/container";
import Card from "./components/Card";
import videos from "./json/db.json";

function App() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>
        <h1>Geografia</h1>
        <section className="cards">
          { videos.map((video) => <Card id={video.id} key={video.id} />) }
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default App;
