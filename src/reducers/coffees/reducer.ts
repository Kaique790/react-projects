import { CoffeeItemInterface } from "../../contexts/CoffeesContext";
import { actionTypes } from "./actions";

interface CoffeesState {
  coffees: CoffeeItemInterface[];
}

export function CoffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case actionTypes.DECREASE_A_COFFEE_ITEM: {
      const newState = state.coffees.map((coffee) => {
        if (coffee.id === action.payload.coffeeId) {
          return coffee.QuantityAdded <= 0
            ? { ...coffee }
            : { ...coffee, QuantityAdded: coffee.QuantityAdded - 1 };
        }
        return coffee;
      });

      return { ...state, coffees: newState };
    }

    case actionTypes.INCREASE_A_COFFEE_ITEM: {
      const newState = state.coffees.map((coffee) => {
        if (coffee.id === action.payload.coffeeId) {
          return { ...coffee, QuantityAdded: coffee.QuantityAdded + 1 };
        }
        return coffee;
      });

      return { ...state, coffees: newState };
    }

    case actionTypes.REMOVE_COFFEE_ITEM: {
      const newState = state.coffees.map((coffee) => {
        if (coffee.id === action.payload.coffeeId) {
          return { ...coffee, QuantityAdded: 0 };
        }
        return coffee;
      });

      return { ...state, coffees: newState };
    }

    default: {
      return { ...state };
    }
  }
}
