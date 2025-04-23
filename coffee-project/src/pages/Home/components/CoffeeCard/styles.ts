import styled from "styled-components";

export const CoffeeCardItem = styled.div`
  max-width: 16rem;

  padding: 1.5rem;
  background: ${(props) => props.theme["light-gray-400"]};

  border-radius: 0.375rem;
  border-top-right-radius: 2.25rem;
  border-bottom-left-radius: 2.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 7.5rem;
    margin-top: -3.5rem;
  }

  h3 {
    margin-top: 0.75rem;

    font-family: "Baloo 2";
    font-weight: bold;
    font-size: 1.25rem;
    text-align: center;

    color: ${(props) => props.theme["gray-600"]};
  }

  p {
    margin-top: 0.5rem;
    color: ${(props) => props.theme["gray-400"]};

    text-align: center;
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 2.25rem;

    div {
      font-size: 1.5rem;
      font-family: "Baloo 2";
      font-weight: bolder;
    }

    div:last-child {
      display: flex;
      align-items: center;

      gap: 0.5rem;
    }

    color: ${(props) => props.theme["gray-500"]};
    span {
      font-family: "Roboto";
      font-size: 0.875rem;
      font-weight: lighter;

      margin-right: 0.2rem;
    }
  }
`;

export const TypesContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  h4 {
    color: ${(props) => props.theme["yellow-700"]};
    background-color: ${(props) => props.theme["yellow-200"]};

    font-size: 0.625rem;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;

    padding: 0.5rem;
    margin-top: 0.5rem;
    border-radius: 16rem;
  }
`;
