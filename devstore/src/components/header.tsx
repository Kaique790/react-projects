import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { CartWidget } from "./cart-widget";

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="text-zinc-500" />

          <input
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-4 w-4" />
          <CartWidget />
        </div>

        <div className="h-4 w-px bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Conta</span>
          <Image
            width={24}
            height={24}
            alt="user avatar"
            src="https://github.com/kaique790.png"
            className="h-6 w-6 rounded-full"
          />
        </Link>
      </div>
    </div>
  );
}
