import { CoffeeCard } from "./components/CoffeeCard";
import { HeroSection } from "./components/HeroSection";
import { CoffeeListContainer, HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <div>
        <HeroSection />

        <CoffeeListContainer>
          <h2>Lista de cafés</h2>

          <ul>
            <li>
              <CoffeeCard />
            </li>
            <li>
              <CoffeeCard />
            </li>
            <li>
              <CoffeeCard />
            </li>
            <li>
              <CoffeeCard />
            </li>
          </ul>
        </CoffeeListContainer>
      </div>
    </HomeContainer>
  );
}
