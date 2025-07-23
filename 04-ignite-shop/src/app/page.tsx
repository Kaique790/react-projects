import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import { stripe } from "@/lib/stripe";
import Carousel from "@/components/Carrousel";
import Stripe from "stripe";
import Link from "next/link";
import { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 7200000; // 2 hours

export const metadata: Metadata = {
  title: "04 - ignite shop",
};

export default async function Home() {
  const productsData = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = productsData.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      ...product,
      imageURL: product.images[0],
      price:
        price.unit_amount &&
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
    };
  });

  return (
    <HomeContainer className="keen-slider">
      <Carousel>
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <Product className="keen-slider__slide">
              <Image src={product.imageURL} alt="" width={520} height={480} />
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          </Link>
        ))}
      </Carousel>
    </HomeContainer>
  );
}
