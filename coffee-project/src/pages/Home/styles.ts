import styled from "styled-components";

export const CoffeeListContainer = styled.section`
  margin-top: 4.25rem;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-family: "Baloo 2";
    font-size: 2rem;
  }

  ul {
    width: 100%;
    margin-top: 4rem;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 1024px) {
      align-items: center;
      justify-content: center;
    }

    gap: 2rem;

    li {
      margin-top: 2rem;
    }
  }
`;
