import { api } from "@/data/api";
import { Product } from "@/types/product";
import { formatPrice } from "@/utils/format-price";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface SearchProps {
  searchParams: {
    q: string;
  };
}

async function getSearchProducts(query: string) {
  const products = api<Product[]>(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });

  return products;
}

export default async function props({ searchParams }: SearchProps) {
  const { q: query } = searchParams;
  if (!query) return redirect("/");

  const products = await getSearchProducts(query);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/product/${p.slug}`}
            className="group relative flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
          >
            <Image
              src={p.image}
              alt=""
              width={400}
              height={400}
              quality={100}
              className="transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute right-28 bottom-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="truncate text-sm">{p.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold text-nowrap">
                {formatPrice(p.price, false)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
