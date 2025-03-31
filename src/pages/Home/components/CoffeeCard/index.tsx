import coffeeImage from "../../../../assets/coffee.svg";
import { CoffeeCardItem } from "./styles";
import { DynamicCart } from "../../../../components/DynamicCart";
import { QuantityButton } from "../../../../components/QuantityButton";

export function CoffeeCard() {
  return (
    <CoffeeCardItem>
      <div>
        <img src={coffeeImage} alt="Café Tradicional" />
      </div>
      <h4>TRADICIONAL</h4>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café com água quente e grãos moídos</p>

      <footer>
        <div>
          <span>R$</span>
          9.90
        </div>
        <div>
          <QuantityButton />
          <DynamicCart type="purple" />
        </div>
      </footer>
    </CoffeeCardItem>
  );
}
