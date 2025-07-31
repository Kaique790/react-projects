import { Button, Text, TextInput } from "@ignite-ui/react";
import * as S from "./styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Digite um nome de no mínimo 3 letras" })
    .regex(/^([a-z\\-]+)$/i, {
      message: "Digite um nome somente com letras e hifens",
    })
    .transform((username) => username.toLocaleLowerCase()),
});

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>;

export function ClaimUserNameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  });

  const router = useRouter();

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    const { username } = data;

    await router.push(`/register?username=${username}`);
  }

  return (
    <>
      <S.Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="Seu-usuario"
          {...register("username")}
        />
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Reservar
          <ArrowRight />
        </Button>
      </S.Form>
      <S.FormAnnotation>
        <Text>
          {errors.username
            ? errors.username.message
            : "Digite o nome do usuário desejado"}
        </Text>
      </S.FormAnnotation>
    </>
  );
}
