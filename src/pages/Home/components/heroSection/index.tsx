import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import coffeeImage from "./coffee.svg";
import {
  HeroContainer,
  ItemsContainer,
  CartItem,
  PackageItem,
  TimerItem,
  CoffeeItem,
} from "./styles";

export function HeroSection() {
  return (
    <HeroContainer>
      <div>
        <div>
          <h1>
            Encontre o café perfeito <br /> para qualquer hora do dia
          </h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a<br />{" "}
            qualquer hora
          </p>

          <ItemsContainer>
            <li>
              <CartItem>
                <ShoppingCart weight="fill" />
              </CartItem>
              <span>Compra simples e segura</span>
            </li>

            <li>
              <PackageItem>
                <Package weight="fill" />
              </PackageItem>
              <span>Embalagem mantém o café intacto</span>
            </li>

            <li>
              <TimerItem>
                <Timer weight="fill" />
              </TimerItem>
              <span>Entrega rápida e rastreada</span>
            </li>

            <li>
              <CoffeeItem>
                <Coffee weight="fill" />
              </CoffeeItem>
              <span>O café chega fresquinho até você</span>
            </li>
          </ItemsContainer>
        </div>

        <aside>
          <img src={coffeeImage} alt="" />
        </aside>
      </div>
    </HeroContainer>
  );
}
