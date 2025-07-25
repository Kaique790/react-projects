// app/Providers.tsx
"use client";

import { CartProvider } from "@/contexts/cartContext/CartProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
