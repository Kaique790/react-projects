import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import { stripe } from "@/lib/stripe";
import Carousel from "@/components/Carrousel";
import Stripe from "stripe";

export const dynamic = "force-static";
export const revalidate = 7200000; // 2 hours

export default async function Home() {
  const productsData = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = productsData.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageURL: product.images[0],
      price: price.unit_amount,
    };
  });

  return (
    <HomeContainer className="keen-slider">
      <Carousel>
        {products.map((product) => (
          <Product key={product.id} className="keen-slider__slide">
            <Image src={product.imageURL} alt="" width={520} height={480} />
            <footer>
              <strong>{product.name}</strong>
              <span>{product.price && (product.price / 100).toFixed(2)}</span>
            </footer>
          </Product>
        ))}
      </Carousel>
    </HomeContainer>
  );
}
