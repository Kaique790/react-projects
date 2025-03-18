import styled, { css } from "styled-components";

export type buttonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: buttonVariant;
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  color: ${(props) => props.theme.white};

  margin: 8px;
  border: none;
  border-radius: 4px;

  background-color: ${(props) => props.theme["green-500"]};
  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `;
  }} */
`;
