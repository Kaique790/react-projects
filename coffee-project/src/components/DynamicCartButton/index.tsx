import { ShoppingCart } from "@phosphor-icons/react";
import { CartContainer } from "./styles";
import { Link } from "react-router-dom";
import { CoffeesContext } from "../../contexts/CoffeesContext";
import { useContext } from "react";

interface DynamicCartProps {
  type: "yellow" | "purple";
  coffeeId?: number;
}

export function DynamicCartButton({
  type = "yellow",
  coffeeId,
}: DynamicCartProps) {
  const { increaseACoffeeItem } = useContext(CoffeesContext);

  return (
    <Link to="/checkout">
      <CartContainer
        cartType={type}
        onClick={() => {
          if (coffeeId !== undefined) {
            increaseACoffeeItem(coffeeId);
          }
        }}
      >
        <ShoppingCart size="1.375rem" weight="fill" />
      </CartContainer>
    </Link>
  );
}
