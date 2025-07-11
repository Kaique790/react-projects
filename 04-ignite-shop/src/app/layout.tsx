"use client";

import { globalStyles } from "@/styles/global";
globalStyles();

import logoImage from "@/assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";
import { getCssText } from "@/styles";

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
          <Header>
            <img src={logoImage.src} alt="" />
          </Header>
          {children}
        </Container>
      </body>
    </html>
  );
}
