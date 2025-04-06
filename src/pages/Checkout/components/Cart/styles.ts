import styled from "styled-components";

export const CartCheckoutContainer = styled.section`
  flex-direction: column;
  background-color: ${(props) => props.theme["light-gray-400"]};

  width: 100%;
  max-width: 40%;

  border-radius: 0.375rem;
  border-top-right-radius: 2.75rem;
  border-bottom-left-radius: 2.75rem;

  padding: 2.5rem;

  ul {
    list-style: none;

    max-height: 15rem;
    overflow-y: auto;

    scrollbar-width: none;

    li:not(:first-child) {
      margin-top: 1.5rem;
    }
  }

  footer {
    margin-top: 2rem;

    button {
      width: 100%;
      padding: 0.75rem;
      border: none;
      border-radius: 0.375rem;

      text-transform: uppercase;

      transition: all 0.3s;

      background-color: ${(props) => props.theme["yellow-500"]};
      color: ${(props) => props.theme.white};

      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme["yellow-700"]};
      }
    }
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export const PrincingsContainer = styled.section`
  width: 100%;
  display: grid;
  row-gap: 0.75rem;

  margin-top: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;

    font-size: 0.875rem !important;
  }

  div:last-child {
    font-size: 1.25rem !important;
    font-weight: bold;
  }
`;
