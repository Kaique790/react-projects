import { Link } from "react-router-dom";
import { CoffeeCardAdded } from "../CoffeeCardAdded";
import { CartCheckoutContainer, PrincingsContainer } from "./styles";

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

      <PrincingsContainer>
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
      </PrincingsContainer>

      <footer>
        <Link to="/order-placed">
          <button>Confirmar Pedido</button>
        </Link>
      </footer>
    </CartCheckoutContainer>
  );
}
