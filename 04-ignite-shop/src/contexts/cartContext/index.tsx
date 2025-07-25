import { createContext } from "react";

export interface CartItemType {
  defaultPriceId: string;
  quantity: number;
}

export interface CartContextType {
  lineItems: CartItemType[];

  addItem: (defaultPriceId: string) => void;
  removeItem: (defaultPriceId: string) => void;
}

export const CartContext = createContext({} as CartContextType);
