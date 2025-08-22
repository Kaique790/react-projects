import {
  Avatar,
  Button,
  Heading,
  MultiStep,
  Text,
  TextArea,
} from "@ignite-ui/react";
import { Container, Form, Header } from "../styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { NextSeo } from "next-seo";
import { FormAnnotation } from "./styles";
import { useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "@/pages/api/auth/[...nextauth].api";
import { api } from "@/lib/axios";
import { useRouter } from "next/router";

const updateProfileFormSchema = z.object({
  bio: z.string(),
});

type UpdateProfileData = z.infer<typeof updateProfileFormSchema>;

export default function UpdateProfile() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateProfileData>({
    resolver: zodResolver(updateProfileFormSchema),
  });

  const session = useSession();
  const router = useRouter();

  async function handleUpdateProfile(data: UpdateProfileData) {
    await api.put("/users/update-profile", {
      bio: data.bio,
    });

    await router.push(`/schedule/${session.data?.user.username}`);
  }

  return (
    <>
      <NextSeo title="Crie uma conta | Ignite Call" />

      <Container>
        <Header>
          <Heading as="strong">Bem-vindo(a) ao Ignite Call!</Heading>
          <Text>
            Precisamos de algumas informações para criar seu perfil! Ah, você
            pode editar essas informações depois.
          </Text>

          <MultiStep currentStep={4} size={4} />
        </Header>

        <Form as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
          <label>
            <Text size="sm">Foto de perfil</Text>
            <Avatar
              src={session.data!.user.avatar_url}
              alt={session.data?.user.name}
            />
          </label>

          <label>
            <Text size="sm">Sobre você</Text>
            <TextArea as="input" placeholder="Seu nome" {...register("bio")} />
            <FormAnnotation size="sm">
              Fale um pouco sobre você. Isso será exibido em sua página pessoal.
            </FormAnnotation>
          </label>

          <Button type="submit" disabled={isSubmitting}>
            Finalizar <ArrowRight />
          </Button>
        </Form>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res)
  );
  return {
    props: {
      session,
    },
  };
};
