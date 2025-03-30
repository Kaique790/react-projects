import { HeroSection } from "./components/heroSection";
import { CoffeeListContainer, HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <div>
        <HeroSection />

        <CoffeeListContainer>
          <h2>Lista de cafés</h2>

          <div></div>
        </CoffeeListContainer>
      </div>
    </HomeContainer>
  );
}
