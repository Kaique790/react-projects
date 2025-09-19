"use client";

import { useCart } from "@/contexts/cart-context";

export function CartWidget() {
  const { items } = useCart();

  return <span className="text-sm">carrinho ({items.length})</span>;
}
