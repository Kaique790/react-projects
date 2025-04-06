import { Trash } from "@phosphor-icons/react";
import { QuantityButton } from "../../../../components/QuantityButton";
import img from "./Image (1).png";
import { CartButtonsCardContainer, CoffeeCardAddedContainer } from "./styles";

export function CoffeeCardAdded() {
  return (
    <CoffeeCardAddedContainer>
      <img src={img} alt="" />
      <CartButtonsCardContainer>
        <div>
          <div>
            <h4>Expresso Tradicional</h4>
          </div>
          <div>
            <QuantityButton />
            <button>
              <Trash size={16} /> Remover
            </button>
          </div>
        </div>
        <span>R$ 9,90</span>
      </CartButtonsCardContainer>
    </CoffeeCardAddedContainer>
  );
}
