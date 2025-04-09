import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";

import {
  AddressSection,
  FormContainer,
  FormHeaderBase,
  PaymentSection,
  FormPaymentHeader,
} from "./styles";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const regexCep = /^\d{8}$|^\d{5}-\d{3}$/;

const checkoutSchema = z.object({
  cep: z.string().regex(regexCep, "CEP inválido"),
  road: z.string().min(1),
  addressNumber: z.number(),
  addressComplement: z.string().optional(),
  neighborhood: z.string().min(1),
  city: z.string().min(1),
  payType: z.enum(["debit", "credit", "ticket"]),
  adressUF: z.string().min(2),
});

type CheckouFormType = z.infer<typeof checkoutSchema>;

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckouFormType>({
    resolver: zodResolver(checkoutSchema),
  });

  const navigate = useNavigate();

  return (
    <FormContainer
      id="checkout-form"
      onSubmit={handleSubmit(() => navigate("/order-placed"))}
    >
      <AddressSection>
        <FormHeaderBase>
          <MapPinLine size={22} />
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </FormHeaderBase>

        <div>
          <input
            type="text"
            placeholder="CEP"
            id="CEP"
            {...register("cep")}
            className={errors.cep && "input-error"}
          />
          <input
            type="text"
            placeholder="Rua"
            id="road"
            {...register("road")}
            className={errors.road && "input-error"}
          />
          <input
            type="number"
            placeholder="Número"
            id="address-number"
            {...register("addressNumber", { valueAsNumber: true })}
            className={errors.addressNumber && "input-error"}
          />
          <input
            type="text"
            placeholder="Complemento"
            id="address-complement"
            {...register("addressComplement")}
            className={errors.addressComplement && "input-error"}
          />
          <input
            type="text"
            placeholder="Bairro"
            id="neighborhood"
            {...register("neighborhood")}
            className={errors.neighborhood && "input-error"}
          />
          <input
            type="text"
            placeholder="Cidade"
            id="city"
            {...register("city")}
            className={errors.city && "input-error"}
          />
          <select
            id="address-uf"
            {...register("adressUF")}
            className={errors.adressUF && "input-error"}
          >
            <option value="">UF</option>
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
      </AddressSection>

      <PaymentSection>
        <FormPaymentHeader>
          <CurrencyDollar size={22} />
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar.
          </p>
        </FormPaymentHeader>
        <div>
          <div>
            <input
              type="radio"
              value="credit"
              {...register("payType")}
              id="credit"
            />
            <label htmlFor="credit" className={errors.payType && "input-error"}>
              <CreditCard />
              Cartão de Crédito
            </label>
          </div>

          <div>
            <input
              type="radio"
              value="debit"
              {...register("payType")}
              id="debit"
            />
            <label htmlFor="debit" className={errors.payType && "input-error"}>
              <Bank />
              Cartão de Débito
            </label>
          </div>

          <div>
            <input
              type="radio"
              value="ticket"
              {...register("payType")}
              id="ticket"
            />
            <label htmlFor="ticket" className={errors.payType && "input-error"}>
              <Money />
              Dinheiro
            </label>
          </div>
        </div>
      </PaymentSection>
    </FormContainer>
  );
}
