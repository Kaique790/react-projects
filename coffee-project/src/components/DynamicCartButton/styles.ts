import styled from "styled-components";

const CART_TYPES = {
  yellow: {
    bg: "yellow-200",
    color: "yellow-700",

    hoverBg: "yellow-700",
    hoverColor: "yellow-200",
  },

  purple: {
    bg: "purple-700",
    color: "white",

    hoverBg: "purple-400",
    hoverColor: "white",
  },
} as const;

interface CartTypeInterface {
  cartType: keyof typeof CART_TYPES;
}

export const CartContainer = styled.button<CartTypeInterface>`
  padding: 0.5rem;
  border-radius: 0.375rem;

  display: flex;

  border: none;

  transition: all 0.3s;
  cursor: pointer;

  color: ${(props) => props.theme[CART_TYPES[props.cartType].color]};
  background: ${(props) => props.theme[CART_TYPES[props.cartType].bg]};

  &:hover {
    color: ${(props) => props.theme[CART_TYPES[props.cartType].hoverColor]};
    background: ${(props) => props.theme[CART_TYPES[props.cartType].hoverBg]};
  }
`;
