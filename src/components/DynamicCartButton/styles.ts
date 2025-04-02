import styled from "styled-components";

const CART_TYPES = {
  yellow: {
    bg: "yellow-200",
    color: "yellow-700",
  },

  purple: {
    bg: "purple-700",
    color: "white",
  },
} as const;

interface CartTypeInterface {
  cartType: keyof typeof CART_TYPES;
}

export const CartContainer = styled.div<CartTypeInterface>`
  padding: 0.5rem;
  border-radius: 0.375rem;

  color: ${(props) => props.theme["yellow-200"]};

  color: ${(props) => props.theme[CART_TYPES[props.cartType].color]};
  background: ${(props) => props.theme[CART_TYPES[props.cartType].bg]};
`;
