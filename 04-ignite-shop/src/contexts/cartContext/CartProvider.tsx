import { ReactNode, useEffect, useState } from "react";
import { CartContext, type CartItemType } from ".";

const LOCALSTORAGEKEY = "@ignite-shop:line-items-cart-1.0.0";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lineItems, setLineItems] = useState<CartItemType[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedLineItems = localStorage.getItem(LOCALSTORAGEKEY);
    if (storedLineItems) {
      setLineItems(JSON.parse(storedLineItems));
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(lineItems));
  }, [isInitialized, lineItems]);

  function addItem(defaultPriceId: string) {
    setLineItems((prev) => {
      const existingItem = prev.find(
        (item) => item.defaultPriceId === defaultPriceId
      );

      if (existingItem) {
        return prev.map((item) =>
          item.defaultPriceId === defaultPriceId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { defaultPriceId, quantity: 1 }];
    });
  }

  function removeItem(defaultPriceId: string) {
    setLineItems((prev) =>
      prev
        .map((item) =>
          item.defaultPriceId === defaultPriceId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <CartContext.Provider value={{ lineItems, removeItem, addItem }}>
      {children}
    </CartContext.Provider>
  );
}
