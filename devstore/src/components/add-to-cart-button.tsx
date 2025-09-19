"use client";

import { useCart } from "@/contexts/cart-context";

export function AddToCartButton({ productId }: { productId: number }) {
  const { addToCart } = useCart();

  function handleAddToCart(productId: number) {
    addToCart(productId);
  }

  return (
    <button
      type="button"
      onClick={() => handleAddToCart(productId)}
      className="mt-8 flex h-12 cursor-pointer items-center justify-center rounded-full bg-emerald-600 font-semibold text-white duration-200 hover:bg-emerald-600/80"
    >
      Adicionar ao carrinho
    </button>
  );
}
