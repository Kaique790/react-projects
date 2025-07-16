import { stripe } from "@/lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import Image from "next/image";
import Stripe from "stripe";

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const productId = resolvedParams.id;

  const productData = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = productData.default_price as Stripe.Price;

  const product = {
    ...productData,
    imageUrl: productData.images[0],
    price:
      price.unit_amount &&
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount / 100),
  };

  return (
    <ProductContainer>
      <ImageContainer>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={520}
          height={480}
          priority
        />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}

export async function generateStaticParams() {
  const products = await stripe.products.list({ limit: 1 });

  return products.data.map((product) => ({
    id: product.id,
  }));
}

export const revalidate = 7200; // 2 hours
