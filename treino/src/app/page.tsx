import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - tela inicial",
  description: "NextJS, trabalhando com SEO",
};

export const revalidate = 20;

export default function Home() {
  const randomNumber = (Math.random() * 10).toFixed(2);
  return (
    <div>
      <h1>Home</h1>
      {randomNumber}
    </div>
  );
}
