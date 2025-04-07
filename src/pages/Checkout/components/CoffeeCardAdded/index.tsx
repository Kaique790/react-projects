import { Trash } from "@phosphor-icons/react";
import { QuantityButton } from "../../../../components/QuantityButton";
import { CartButtonsCardContainer, CoffeeCardAddedContainer } from "./styles";
import { useContext } from "react";
import { CoffeesContext } from "../../../../contexts/CoffeesContext";

interface CoffeeCardAddedProps {
  pathImage: string;
  coffeeName: string;
  princing: number;
  quantityAdded: number;
  coffeeId: number;
}

export function CoffeeCardAdded({
  pathImage,
  coffeeName,
  princing,
  quantityAdded,
  coffeeId,
}: CoffeeCardAddedProps) {
  const { removeCoffeeItem } = useContext(CoffeesContext);

  return (
    <CoffeeCardAddedContainer>
      <img src={pathImage} alt="" />
      <CartButtonsCardContainer>
        <div>
          <div>
            <h4>{coffeeName}</h4>
          </div>
          <div>
            <QuantityButton coffeeId={coffeeId} quantityAdded={quantityAdded} />
            <button onClick={() => removeCoffeeItem(coffeeId)}>
              <Trash size={16} /> Remover
            </button>
          </div>
        </div>
        <span>{princing}</span>
      </CartButtonsCardContainer>
    </CoffeeCardAddedContainer>
  );
}
