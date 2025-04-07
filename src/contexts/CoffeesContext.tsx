import { createContext, ReactNode, useReducer } from "react";
import { CoffeesReducer } from "../reducers/coffees/reducer";

export interface CoffeeItemInterface {
  id: number;
  coffeeName: string;
  pathImage: string;
  coffeeTypes: string[];
  description: string;
  princing: number;
  QuantityAdded: number;
}
import coffeesJSON from "../data.json";
import {
  decreaseACoffeeItemAction,
  increaseACoffeeItemAction,
  removeCoffeeItemAction,
} from "../reducers/coffees/actions";

interface CoffeesContextInterface {
  coffees: CoffeeItemInterface[];

  increaseACoffeeItem: (coffeeId: number) => void;
  decreaseACoffeeItem: (coffeeId: number) => void;
  removeCoffeeItem: (coffeeId: number) => void;
}

export const CoffeesContext = createContext({} as CoffeesContextInterface);

const initialState = { coffees: coffeesJSON };

export function CoffeesContextProvider({ children }: { children: ReactNode }) {
  const [coffeesState, dispatch] = useReducer(CoffeesReducer, initialState);

  const { coffees } = coffeesState;

  function increaseACoffeeItem(coffeeId: number) {
    dispatch(increaseACoffeeItemAction(coffeeId));
  }

  function decreaseACoffeeItem(coffeeId: number) {
    dispatch(decreaseACoffeeItemAction(coffeeId));
  }

  function removeCoffeeItem(coffeeId: number) {
    dispatch(removeCoffeeItemAction(coffeeId));
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        increaseACoffeeItem,
        decreaseACoffeeItem,
        removeCoffeeItem,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
