import { api } from "@/data/api";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

import { formatPrice } from "@/utils/format-price";

async function getFeaturedProducts() {
  const products = api<Product[]>("/products/featured", {
    next: {
      revalidate: 60 * 60 * 4, // 4 hours
    },
  });

  return products;
}

export default async function Home() {
  const [highLightedProduct, ...othersProduct] = await getFeaturedProducts();

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highLightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src={highLightedProduct.image}
          alt=""
          width={840}
          height={840}
          quality={100}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute right-28 bottom-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">{highLightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold text-nowrap">
            {formatPrice(highLightedProduct.price, false)}
          </span>
        </div>
      </Link>
      {othersProduct.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
        >
          <Image
            src={product.image}
            alt=""
            width={400}
            height={400}
            quality={100}
            className="transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute right-10 bottom-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="truncate text-sm">{product.title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold text-nowrap">
              {formatPrice(product.price, false)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
