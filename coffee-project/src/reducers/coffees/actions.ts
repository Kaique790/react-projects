export enum actionTypes {
  DECREASE_A_COFFEE_ITEM,
  INCREASE_A_COFFEE_ITEM,
  REMOVE_COFFEE_ITEM,
}

export function increaseACoffeeItemAction(coffeeId: number) {
  return {
    type: actionTypes.INCREASE_A_COFFEE_ITEM,
    payload: { coffeeId },
  };
}

export function decreaseACoffeeItemAction(coffeeId: number) {
  return {
    type: actionTypes.DECREASE_A_COFFEE_ITEM,
    payload: { coffeeId },
  };
}

export function removeCoffeeItemAction(coffeeId: number) {
  return {
    type: actionTypes.REMOVE_COFFEE_ITEM,
    payload: { coffeeId },
  };
}
