import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";

import {
  AdressForm,
  FormContainer,
  FormHeaderBase,
  FormPaymentContainer,
  FormPaymentHeader,
} from "./styles";

export function Form() {
  return (
    <FormContainer>
      <div>
        <AdressForm>
          <FormHeaderBase>
            <MapPinLine size={22} />
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </FormHeaderBase>

          <div>
            <input type="text" placeholder="CEP" id="CEP" maxLength={9} />
            <input type="text" placeholder="Rua" id="road" />
            <input type="number" placeholder="Número" id="adress-number" />
            <input
              type="text"
              placeholder="Complemento"
              id="adress-complement"
            />
            <input type="text" placeholder="Bairro" id="neighborhood" />
            <input type="text" placeholder="Cidade" id="city" />
            <select id="adress-uf" name="adress-uf">
              <option value="" disabled selected>
                UF
              </option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </select>
          </div>
        </AdressForm>
      </div>

      <FormPaymentContainer>
        <FormPaymentHeader>
          <CurrencyDollar size={22} />
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar.
          </p>
        </FormPaymentHeader>
        <div>
          <div>
            <input type="radio" value="credit" name="pay-type" id="credit" />
            <label htmlFor="credit">
              <CreditCard />
              Cartão de Crédito
            </label>
          </div>

          <div>
            <input type="radio" value="debit" name="pay-type" id="debit" />
            <label htmlFor="debit">
              <Bank />
              Cartão de Débito
            </label>
          </div>

          <div>
            <input type="radio" value="ticket" name="pay-type" id="ticket" />
            <label htmlFor="ticket">
              <Money />
              Dinheiro
            </label>
          </div>
        </div>
      </FormPaymentContainer>
    </FormContainer>
  );
}
