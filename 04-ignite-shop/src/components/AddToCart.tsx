"use client";

import { CartContext } from "@/contexts/cartContext";
import { useContext } from "react";

interface addToCartProps {
  defaultPriceId: string;
}

export function AddToCart({ defaultPriceId }: addToCartProps) {
  const { addItem } = useContext(CartContext);

  return <button onClick={() => addItem(defaultPriceId)}>Add to cart</button>;
}
