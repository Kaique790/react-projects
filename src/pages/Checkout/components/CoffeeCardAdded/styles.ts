import styled from "styled-components";

export const CoffeeCardAddedContainer = styled.div`
  width: 100%;

  display: flex;
  gap: 1rem;
  align-items: center;

  h4 {
    font-weight: normal;
  }

  span {
    font-weight: bold;
  }
  padding-bottom: 2rem;
  border-bottom: 0.12rem solid ${(props) => props.theme["light-gray-600"]};
`;

export const CartButtonsCardContainer = styled.div`
  display: grid;
  grid-template-columns: 2 1fr 1fr;
  grid-template-rows: 2 1rem;
  gap: 0.5rem;

  h4 {
    grid-column: 1;
    margin-bottom: 0.75rem;
  }

  & > div > div {
    display: flex;
    gap: 0.5rem;
  }

  span {
    grid-column: 2;
  }

  button:last-child {
    border: none;
    border-radius: 0.375rem;
    padding: 0.5rem;
    background: ${(props) => props.theme["light-gray-600"]};

    text-transform: uppercase;

    display: flex;
    align-items: center;
    gap: 0.25rem;

    cursor: pointer;

    svg {
      color: ${(props) => props.theme["purple-400"]};
    }

    &:hover {
      background-color: ${(props) => props.theme["gray-300"]};
    }
  }
`;
