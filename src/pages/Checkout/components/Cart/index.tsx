import { Link } from "react-router-dom";
import { CoffeeCardAdded } from "../CoffeeCardAdded";
import { CartCheckoutContainer, PrincingsContainer } from "./styles";
import { useContext } from "react";
import { CoffeesContext } from "../../../../contexts/CoffeesContext";

export function Cart() {
  const { coffees } = useContext(CoffeesContext);
  const coffeesInCart = coffees.filter((coffee) => {
    return coffee.QuantityAdded > 0;
  });

  const totalItensArr = coffeesInCart.map((coffee) => {
    return coffee.princing * coffee.QuantityAdded;
  });

  const totalItens = coffeesInCart.reduce((acc, coffee) => {
    return acc + coffee.princing * coffee.QuantityAdded;
  }, 0);

  const totalPrince = totalItensArr.reduce((acc, curr) => acc + curr, 3.5);

  return (
    <CartCheckoutContainer>
      <ul>
        {coffeesInCart &&
          coffeesInCart.map((coffee) => {
            return (
              <li>
                <CoffeeCardAdded
                  coffeeId={coffee.id}
                  coffeeName={coffee.coffeeName}
                  pathImage={coffee.pathImage}
                  princing={coffee.princing}
                  quantityAdded={coffee.QuantityAdded}
                  key={coffee.id}
                />
              </li>
            );
          })}
      </ul>

      <PrincingsContainer>
        <div>
          Total de itens
          <span>R$ {totalItens.toFixed(2)}</span>
        </div>
        <div>
          Entrega
          <span>R$ 3,50</span>
        </div>
        <div>
          Total
          <span>R$ {totalPrince.toFixed(2)}</span>
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
