import { CoffeeCard } from "./components/CoffeeCard";
import { HeroSection } from "./components/HeroSection";
import { CoffeeListContainer } from "./styles";
import data from "../../data.json";
import { MainContainer } from "../../components/mainContainer";

const coffeesList = data;

export function Home() {
  return (
    <MainContainer>
      <div>
        <HeroSection />

        <CoffeeListContainer>
          <h2>Lista de cafés</h2>

          <ul>
            {coffeesList.map((coffee) => {
              return (
                <li>
                  <CoffeeCard
                    coffeeName={coffee.coffeeName}
                    coffeeTypes={coffee.coffeeTypes}
                    description={coffee.description}
                    pathImage={coffee.pathImage}
                    princing={coffee.princing}
                  />
                </li>
              );
            })}
          </ul>
        </CoffeeListContainer>
      </div>
    </MainContainer>
  );
}
