import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { MainContainer } from "../../components/mainContainer";
import {
  Border,
  DollarItemOrder,
  MapItemOrder,
  OrderPlacedContainer,
  TimerItemOrder,
} from "./styles";

import illustration from "./Illustration.svg";

export function OrderPlaced() {
  return (
    <MainContainer>
      <OrderPlacedContainer>
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
          <aside>
            <Border></Border>
            <ul>
              <li>
                <MapItemOrder>
                  <MapPin weight="fill" />
                </MapItemOrder>
                Entrega em Rua João Daniel Martinelli, 102 <br /> Farrapos -
                Porto Alegre, RS
              </li>
              <li>
                <TimerItemOrder>
                  <Timer weight="fill" />
                </TimerItemOrder>
                Previsão de entrega <br /> 20 min - 30 min
              </li>
              <li>
                <DollarItemOrder>
                  <CurrencyDollar weight="fill" />
                </DollarItemOrder>
                Pagamento na entrega - Cartão de Crédito
              </li>
            </ul>
          </aside>
        </div>

        <img src={illustration} alt="" />
      </OrderPlacedContainer>
    </MainContainer>
  );
}
