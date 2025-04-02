import { CoffeeCardItem } from "./styles";
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
      <h4>{coffeeName}</h4>
      <h3>{coffeeTypes}</h3>
      <p>O{description}</p>

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
