import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { MainContainer } from "../../components/mainContainer";

export function OrderPlaced() {
  return (
    <MainContainer>
      <>
        <section>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>

          <aside>
            <ul>
              <li>
                <span>
                  <MapPin weight="fill" />
                </span>
                Entrega em Rua João Daniel Martinelli, 102 <br />
                Farrapos - Porto Alegre, RS
              </li>
              <li>
                <span>
                  <Timer weight="fill" />
                </span>
                Previsão de entrega <br /> <span>20 min - 30 min</span>
              </li>
              <li>
                <span>
                  <CurrencyDollar weight="fill" />
                </span>
                Pagamento na entrega <br /> Cartão de Crédito
              </li>
            </ul>
          </aside>
        </section>
      </>
    </MainContainer>
  );
}
