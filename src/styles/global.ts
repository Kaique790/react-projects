import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }
    
    body {
        background-color:${(props) => props.theme.white};
        max-width: 100%;
        height: calc(100dvh + 20rem);
        overflow-x: hidden;

        font-size: 1rem;
        line-height: 1.3;

        @media (max-width: 1024px) {
            font-size: 87.5%;
        }
    }


`;
