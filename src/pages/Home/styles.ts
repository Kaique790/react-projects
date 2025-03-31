import styled from "styled-components";

export const HomeContainer = styled.main`
  margin-block: 3rem;

  & > div {
    margin: 0 auto;
    width: 100%;
    max-width: calc(82rem - 8.75rem);

    padding: 1.25rem;
  }
`;

export const CoffeeListContainer = styled.section`
  margin-top: 4.25rem;

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

    gap: 2rem;
  }
`;
