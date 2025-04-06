import styled from "styled-components";

export const OrderPlacedContainer = styled.section`
  padding-block: 2rem;
  height: 100%;

  font-size: 120%;

  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 2rem;
    font-weight: bolder;
    font-family: "Baloo 2";

    margin-bottom: 0.5rem;

    color: ${(props) => props.theme["yellow-700"]};
  }

  aside {
    overflow: hidden;

    border-radius: 0.375rem;
    border-top-right-radius: 2.25rem;
    border-bottom-left-radius: 2.25rem;

    margin-top: 1.5rem;
    position: relative;
    --border-width: 2px;

    padding: var(--border-width);
  }

  p {
    font-size: 1.25rem;
  }

  ul {
    border-radius: 0.375rem;
    border-top-right-radius: 2.25rem;
    border-bottom-left-radius: 2.25rem;
    padding: 2.5rem;
    background-color: white;
    position: relative;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  img {
    height: 21.5rem;
  }
`;

export const Border = styled.div`
  position: absolute;
  inset: 0;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 200%;
    min-height: 200%;
    background: linear-gradient(
      90deg,
      ${(prosp) => prosp.theme["yellow-500"]},
      ${(prosp) => prosp.theme["purple-400"]}
    );

    transform: translate(-50%, -50%);
  }
`;

export const ItemIconOrder = styled.div`
  color: ${(props) => props.theme.white};
  display: flex;

  padding: 0.5rem;
  border-radius: 99999px;
`;

export const TimerItemOrder = styled(ItemIconOrder)`
  background-color: ${(props) => props.theme["yellow-500"]};
`;

export const MapItemOrder = styled(ItemIconOrder)`
  background-color: ${(props) => props.theme["purple-400"]};
`;

export const DollarItemOrder = styled(ItemIconOrder)`
  background-color: ${(props) => props.theme["yellow-700"]};
`;
