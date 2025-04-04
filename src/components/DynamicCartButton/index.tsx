import { ShoppingCart } from "@phosphor-icons/react";
import { CartContainer } from "./styles";
import { Link } from "react-router-dom";

interface DynamicCartProps {
  type: "yellow" | "purple";
}

export function DynamicCartButton({ type = "yellow" }: DynamicCartProps) {
  return (
    <Link to="/checkout">
      {" "}
      <CartContainer cartType={type}>
        <ShoppingCart size="1.375rem" weight="fill" />
      </CartContainer>
    </Link>
  );
}
