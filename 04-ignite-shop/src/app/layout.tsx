"use client";

import { globalStyles } from "@/styles/global";
globalStyles();

import logoImage from "@/assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";
import { getCssText } from "@/styles";
import Image from "next/image";
import { Providers } from "./Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body>
        <Container>
          <Providers>
            <Header>
              <Image src={logoImage.src} alt="" width={100} height={60} />
            </Header>
            <main>{children}</main>
          </Providers>
        </Container>
      </body>
    </html>
  );
}
