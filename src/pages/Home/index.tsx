import { CoffeeCard } from "./components/CoffeeCard";
import { HeroSection } from "./components/HeroSection";
import { CoffeeListContainer } from "./styles";
import { MainContainer } from "../../components/mainContainer";
import { useContext } from "react";
import { CoffeesContext } from "../../contexts/CoffeesContext";

export function Home() {
  const { coffees } = useContext(CoffeesContext);

  return (
    <MainContainer>
      <div>
        <HeroSection />

        <CoffeeListContainer>
          <h2>Lista de cafés</h2>

          <ul>
            {coffees.map((coffee) => {
              return (
                <li>
                  <CoffeeCard
                    coffeeName={coffee.coffeeName}
                    coffeeTypes={coffee.coffeeTypes}
                    description={coffee.description}
                    pathImage={coffee.pathImage}
                    princing={coffee.princing}
                    quantityAdded={coffee.QuantityAdded}
                    coffeeId={coffee.id}
                    key={coffee.id}
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
