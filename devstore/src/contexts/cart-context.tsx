"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface CartItem {
  productId: number;
  quantity: number;
}

interface CartContextProps {
  items: CartItem[];
  addToCart: (productId: number) => void;
}

interface CartContextProps {}
const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addToCart(productId: number) {
    setCartItems((state) => {
      const productInCart = state.some(
        (product) => product.productId === productId,
      );

      if (productInCart) {
        const newState = state.map((item) => {
          return item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });

        return newState;
      }

      return [...state, { productId: productId, quantity: 1 }];
    });
  }

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
