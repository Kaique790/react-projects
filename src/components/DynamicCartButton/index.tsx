import { ShoppingCart } from "@phosphor-icons/react";
import { CartContainer } from "./styles";

interface DynamicCartProps {
  type: "yellow" | "purple";
}

export function DynamicCartButton({ type = "yellow" }: DynamicCartProps) {
  return (
    <CartContainer cartType={type}>
      <ShoppingCart size="1.375rem" weight="fill" />
    </CartContainer>
  );
}
