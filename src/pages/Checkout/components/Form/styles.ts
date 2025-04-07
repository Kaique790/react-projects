import styled from "styled-components";

export const FormHeaderBase = styled.header`
  display: grid;
  grid-template-columns: 2rem 1fr;
  align-items: start;

  margin-bottom: 2rem;

  color: ${(props) => props.theme["gray-600"]};

  svg {
    color: ${(props) => props.theme["yellow-700"]};
    grid-column: 1;
  }
`;

export const FormPaymentHeader = styled(FormHeaderBase)`
  svg {
    color: ${(props) => props.theme["purple-400"]};
  }
`;

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  max-width: 62%;
  min-width: 62%;

  @media (max-width: 1087px) {
    max-width: 100%;
    flex-direction: row;
  }

  @media (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    flex-direction: column;
  }

  & > div,
  & > form {
    background-color: ${(props) => props.theme["light-gray-400"]};

    padding: 2.5rem;
    border-radius: 0.375rem;
  }

  p {
    color: ${(props) => props.theme["gray-500"]};
    font-size: 0.875rem;
  }

  p,
  h3 {
    grid-column: 2;
  }
`;

export const AdressForm = styled.form`
  div {
    display: grid;
    column-gap: 0.75rem;
    row-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }

    input,
    select {
      border: none;
      padding: 0.75rem;
      border-radius: 0.25rem;

      outline: none;
      background-color: ${(props) => props.theme["light-gray-500"]};

      border: 1px solid ${(props) => props.theme["light-gray-600"]};
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      text-indent: 1px;
      text-overflow: "";
    }

    input#road {
      grid-row: 2;
      grid-column: span 4;
    }
    input#adress-number,
    input#adress-complement {
      grid-row: 3;
    }

    input#adress-complement {
      grid-column: span 3;
    }

    input#neighborhood,
    input#city,
    #adress-uf {
      grid-row: 4;
    }

    input#city {
      grid-column: span 2;
    }

    #adress-uf {
      width: 3.75rem;
      text-align: center;
    }
  }
`;

export const FormPaymentContainer = styled.form`
  & > div {
    overflow: hidden;
    width: 100%;

    display: flex;
    justify-content: space-between;
    gap: 0.75rem;

    @media (max-width: 1087px) {
      flex-direction: column;
    }

    div label {
      min-width: 13.125rem;

      display: flex;
      align-items: center;
      gap: 0.75rem;

      text-transform: uppercase;

      border: none;
      padding: 1rem;
      border-radius: 0.25rem;

      outline: none;
      background-color: ${(props) => props.theme["light-gray-500"]};
      color: ${(props) => props.theme["gray-500"]};

      border: 1px solid ${(props) => props.theme["light-gray-600"]};

      svg {
        font-size: 1.375rem;
        color: ${(props) => props.theme["purple-400"]};
      }

      @media (min-width: 1087px) and (max-width: 1300px) {
        padding: 0.5rem;
      }
    }
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + label {
    border: 1px solid ${(props) => props.theme["purple-700"]};
    background-color: ${(props) => props.theme["purple-200"]};
  }

  @media (max-width: 1087px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;
