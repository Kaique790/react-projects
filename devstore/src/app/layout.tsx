import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Devstore",
    default: "Devstore",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="pt-BR">
        <body
          className={`${inter.className} bg-zinc-950 text-zinc-50 antialiased`}
        >
          {children}
        </body>
      </html>
    </Providers>
  );
}
