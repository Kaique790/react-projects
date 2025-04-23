import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  gap: 2rem;

  flex-wrap: nowrap;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 1087px) {
    flex-wrap: wrap;
  }
`;
