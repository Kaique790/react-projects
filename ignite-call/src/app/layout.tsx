import type { Metadata } from "next";
import { ClientWrapper } from "@/components/client-wrapper";
import { Roboto } from "next/font/google";
import { getCssText } from "@ignite-ui/react";
import { Providers } from "./Providers";

export const metadata: Metadata = {
  title: "Ignite Call",
  description: "Projeto rocketseat full-stack",
};

const roboto = Roboto({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Providers>
          <ClientWrapper>{children}</ClientWrapper>
        </Providers>
      </body>
    </html>
  );
}
