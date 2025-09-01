import { Button, Text, TextInput } from "@ignite-ui/react";
import { ConfirmFom, FormActions, FormError, FormHeader } from "./styles";
import { CalendarBlank, Clock } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { api } from "@/lib/axios";
import { useRouter } from "next/router";

const confirmFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome precisa ter pelo menos 3 letras" }),
  email: z.email({ message: "Digite um e-mail válido" }),
  observation: z.string().nullable(),
});

interface ConfirmStepProps {
  schedulingDate: Date;
  onSelectDateTime: (date: Date | null) => void;
}

type ConfirmFormData = z.infer<typeof confirmFormSchema>;

export default function ConfirmStep({
  onSelectDateTime,
  schedulingDate,
}: ConfirmStepProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
  });

  const router = useRouter();
  const username = String(router.query.username);

  function handleCancelScheduling() {
    onSelectDateTime(null);
  }

  async function handleConfirmScheduling(data: ConfirmFormData) {
    const { name, email, observation } = data;

    try {
      await api.post(`/users/${username}/scheduling`, {
        name,
        email,
        observation,
        date: schedulingDate,
      });
    } catch (error) {
      console.error(error);
    }

    onSelectDateTime(null);
  }

  const describedDate = dayjs(schedulingDate).format("DD[ de ]MMMM[ de ]YYYY");
  const describedTime = dayjs(schedulingDate).format("HH:mm[h]");

  return (
    <ConfirmFom as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          {describedDate}
        </Text>
        <Text>
          <Clock />
          {describedTime}
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
        <TextInput as="input" {...register("observation")} />
      </label>

      <FormActions>
        <Button
          type="button"
          variant="tertiary"
          onClick={handleCancelScheduling}
        >
          Cancelar
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          Confirmar
        </Button>
      </FormActions>
    </ConfirmFom>
  );
}
