import styled from "styled-components";

export const ButtonContainer = styled.div`
  padding: 0.5rem;
  border-radius: 0.375rem;

  font-family: "Roboto";

  display: flex;
  align-items: center;
  gap: 0.5rem;

  background-color: ${(props) => props.theme["light-gray-600"]};
  color: ${(props) => props.theme["gray-700"]};

  &:not(button) {
    color: ${(props) => props.theme["purple-400"]};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme["purple-700"]};
    }
  }

  img {
    max-height: 0.875rem;
    max-width: 0.875rem;

    margin: 0 !important;
  }

  button {
    border: none;
    background: transparent;

    font-size: 1rem;
  }
`;
