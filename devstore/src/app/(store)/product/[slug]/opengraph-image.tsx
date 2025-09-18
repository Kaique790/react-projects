import { api } from "@/data/api";
import { env } from "@/env";
import { Product } from "@/types/product";
import { ImageResponse } from "next/og";

interface OgImageProps {
  params: {
    slug: string;
  };
}

async function getProduct(slug: string) {
  const product = api<Product>(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60 * 4, // 4 hours
    },
  });

  return product;
}

export const alt = "Imagem do produto";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OgImage({ params }: OgImageProps) {
  const product = await getProduct(params.slug);
  const productImageURL = new URL(product.image, env.APP_URL).toString();

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img style={{ width: "100%" }} src={productImageURL} alt="" />
      </div>
    ),
    {
      ...size,
    },
  );
}
