import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: calc(82rem - 8.75rem);
  margin: 0 auto;
  position: relative;

  nav {
    width: 100%;
    padding: 1.25rem;
    padding-block: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      height: 2.5rem;
    }

    div:last-child {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      span {
        background-color: ${(props) => props.theme["purple-200"]};
        color: ${(props) => props.theme["purple-700"]};

        font-size: 0.875rem;
        padding: 0.5rem;
        border-radius: 0.375rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
      }
    }
  }
`;
