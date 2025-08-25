import { Button, Text, TextInput } from "@ignite-ui/react";
import { ConfirmFom, FormActions, FormError, FormHeader } from "./styles";
import { CalendarBlank, Clock } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useForm } from "react-hook-form";

const confirmFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome precisa ter pelo menos 3 letras" }),
  email: z.string().email({ message: "Digite um e-mail válido" }),
  observations: z.string().nullable(),
});

type ConfirmFormData = z.infer<typeof confirmFormSchema>;

export default function ConfirmStep() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
  });

  function handleConfirmScheduling(data: ConfirmFormData) {}

  return (
    <ConfirmFom as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          22 de Setembro de 2022
        </Text>
        <Text>
          <Clock />
          18:00h
        </Text>
      </FormHeader>

      <label>
        <Text size="sm">Nome completo</Text>
        <TextInput as="input" placeholder="Seu nome" {...register("name")} />
        {errors.name && <FormError>{errors.name.message}</FormError>}
      </label>
      <label>
        <Text size="sm">Endereço de e-mail</Text>
        <TextInput
          as="input"
          type="email"
          placeholder="Seu e-mail"
          {...register("email")}
        />
        {errors.email && <FormError>{errors.email.message}</FormError>}
      </label>
      <label>
        <Text size="sm">Observações</Text>
        <TextInput as="input" {...register("observations")} />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          Confirmar
        </Button>
      </FormActions>
    </ConfirmFom>
  );
}
