import { ButtonContainer } from "./styles";
import { Minus, Plus } from "@phosphor-icons/react";

export function QuantityButton() {
  return (
    <ButtonContainer>
      <Minus size={14} weight="bold" />
      <button>1</button>
      <Plus size={14} weight="bold" />
    </ButtonContainer>
  );
}
