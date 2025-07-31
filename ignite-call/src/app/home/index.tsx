"use client";

import { Heading, Text } from "@ignite-ui/react";
import { Container, Hero, Preview } from "./styles";
import previewImage from "../../assets/app-preview.png";
import Image from "next/image";
import { ClaimUserNameForm } from "./components/ClainUsernameForm";

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre
        </Text>

        <ClaimUserNameForm />
      </Hero>
      <Preview>
        <Image
          src={previewImage}
          quality={100}
          height={400}
          priority
          alt="Calendário simbolizando aplicação em funcionamento"
        />
      </Preview>
    </Container>
  );
}
