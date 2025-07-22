import "@/styles/globals.css";
import { Header } from "../components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextJS",
  description: "NextJS, trabalhando com SEO",
  openGraph: {
    title: "SEO Com nextJS",
    images: [
      "https://yt3.ggpht.com/yti/ANjgQV-jiYe2itsp4Xzibo6yxpDU7lFGlBJhkMnHxKylcijY-i4=s88-c-k-c0x00ffffff-no-rj",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
