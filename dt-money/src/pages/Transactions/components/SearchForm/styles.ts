import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: none;
    padding: 1rem;
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;

    gap: 0.75rem;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme["green-300"]};

    color: ${(props) => props.theme["green-300"]};
    font-weight: bold;
    border-radius: 6px;

    transition: all 0.2s;
    cursor: pointer;

    &:not(:disabled):hover {
      background: ${(props) => props.theme["green-500"]};
      border-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;
