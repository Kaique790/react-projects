import { api } from "@/data/api";
import { Product } from "@/types/product";
import { formatPrice } from "@/utils/format-price";
import { Metadata } from "next";
import Image from "next/image";

interface ProductDetailsProsp {
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

export async function generateMetadata({
  params,
}: ProductDetailsProsp): Promise<Metadata> {
  const product = await getProduct(params.slug);
  return {
    title: product.title,
  };
}

export async function generateStaticParams() {
  const featuredProducts = await api<Product[]>("/products/featured");
  const staticParams = featuredProducts.map((product) => {
    {
      product.slug;
    }
  });

  return staticParams;
}

export default async function ProductDetails({ params }: ProductDetailsProsp) {
  const product = await getProduct(params.slug);

  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          alt=""
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl leading-tight font-bold">{product.title}</h1>

        <p className="m-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {formatPrice(product.price, false)}
          </span>
          <span className="text-sm text-zinc-400">
            Em 12x s/ juros de {formatPrice(product.price / 12, true)}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              P
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              G
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              GG
            </button>
          </div>
        </div>

        <button
          type="button"
          className="mt-8 flex h-12 cursor-pointer items-center justify-center rounded-full bg-emerald-600 font-semibold text-white duration-200 hover:bg-emerald-600/80"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
