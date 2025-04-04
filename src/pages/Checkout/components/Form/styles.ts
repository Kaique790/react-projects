import styled from "styled-components";

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & > div,
  & > form {
    background-color: ${(props) => props.theme["light-gray-400"]};

    padding: 2.5rem;
    border-radius: 0.375rem;
  }

  & > div:first-child > div {
    display: grid;
    grid-template-columns: 2rem 1fr;
    align-items: start;

    margin-bottom: 2rem;

    color: ${(props) => props.theme["gray-600"]};

    svg {
      color: ${(props) => props.theme["yellow-700"]};
      grid-column: 1;
    }

    p {
      color: ${(props) => props.theme["gray-500"]};
      font-size: 0.875rem;
    }

    p,
    h3 {
      grid-column: 2;
    }
  }
`;

export const AdressForm = styled.form`
  display: grid;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;

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
`;
