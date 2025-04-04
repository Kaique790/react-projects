import { CoffeeCardItem, TypesContainer } from "./styles";
import { DynamicCartButton } from "../../../../components/DynamicCartButton";
import { QuantityButton } from "../../../../components/QuantityButton";

interface CoffeecardProps {
  pathImage: string;
  coffeeName: string;
  coffeeTypes: string[];
  description: string;
  princing: number;
}

export function CoffeeCard({
  pathImage,
  coffeeName,
  coffeeTypes,
  description,
  princing,
}: CoffeecardProps) {
  return (
    <CoffeeCardItem>
      <div>
        <img src={pathImage} />
      </div>

      <TypesContainer>
        {coffeeTypes.map((type) => {
          return <h4>{type}</h4>;
        })}
      </TypesContainer>

      <h3>{coffeeName}</h3>
      <p>{description}</p>

      <footer>
        <div>
          <span>R$</span>
          {princing}
        </div>
        <div>
          <QuantityButton />
          <DynamicCartButton type="purple" />
        </div>
      </footer>
    </CoffeeCardItem>
  );
}
