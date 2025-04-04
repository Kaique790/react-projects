import styled from "styled-components";

export const Container = styled.main`
  margin-block: 3rem;
  min-width: 100%;

  & > div {
    margin: 0 auto;
    width: 100%;
    max-width: calc(82rem - 8.75rem);

    padding: 1.25rem;
  }
`;
