import { CoffeeCardAdded } from "../CoffeeCardAdded";
import { CartCheckoutContainer } from "./styles";

export function Cart() {
  return (
    <CartCheckoutContainer>
      <ul>
        <li>
          <CoffeeCardAdded />
        </li>
        <li>
          <CoffeeCardAdded />
        </li>
        <li>
          <CoffeeCardAdded />
        </li>
        <li>
          <CoffeeCardAdded />
        </li>
      </ul>

      <div>
        <div>
          Total de itens
          <span>R$ 29,70</span>
        </div>
        <div>
          Entrega
          <span>R$ 3,50</span>
        </div>
        <div>
          Total
          <span>R$ 33,20</span>
        </div>
      </div>

      <footer>
        <button>Confirmar Pedido</button>
      </footer>
    </CartCheckoutContainer>
  );
}
