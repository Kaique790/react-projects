import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Category, { categories, filterCategory } from "../../components/Category";
import Loader from "../../components/Loader";
import { useEffect, useState } from "react";




function Home() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      <Header />
      <ScrollToTopButton />
      <Banner image="home" />
      <Container>
      {loading ? (
        <Loader />
      ) : (
        categories.map((category, index) => (
          <Category category={category}>
            <Carousel>
              {filterCategory(index).map((video) => (
                <Card id={video.id} key={video.id} />
              ))}
            </Carousel>
          </Category>
        ))
      )}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
