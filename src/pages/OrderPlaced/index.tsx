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
import { UserInformationContext } from "../../contexts/UserInformationContext";
import { useContext } from "react";

export function OrderPlaced() {
  const { address, paymentType } = useContext(UserInformationContext);
  const paymentInPtBr = () => {
    switch (paymentType) {
      case "credit":
        return "Crédito";
      case "debit":
        return "Débito";
      case "ticket":
        return "Dinheiro";
    }
  };

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
                Entrega em {address.road}, {address.addressNumber} <br />
                {address.neighborhood} - {address.city}, {address.addressUF}
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
                Pagamento na entrega - {paymentInPtBr()}
              </li>
            </ul>
          </aside>
        </div>

        <img src={illustration} alt="" />
      </OrderPlacedContainer>
    </MainContainer>
  );
}
