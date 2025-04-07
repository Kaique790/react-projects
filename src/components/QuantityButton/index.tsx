import { useContext } from "react";
import { ButtonContainer } from "./styles";
import { Minus, Plus } from "@phosphor-icons/react";
import { CoffeesContext } from "../../contexts/CoffeesContext";

interface QuantityButtonProps {
  quantityAdded: number;
  coffeeId: number;
}

export function QuantityButton({
  quantityAdded,
  coffeeId,
}: QuantityButtonProps) {
  const { increaseACoffeeItem, decreaseACoffeeItem } =
    useContext(CoffeesContext);

  return (
    <ButtonContainer>
      <Minus
        size={14}
        weight="bold"
        onClick={() => decreaseACoffeeItem(coffeeId)}
      />
      <button>{quantityAdded}</button>
      <Plus
        size={14}
        weight="bold"
        onClick={() => increaseACoffeeItem(coffeeId)}
      />
    </ButtonContainer>
  );
}
