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
        font-size: 1rem;
        max-width: 100%;
        height: 100dvh;
        
        overflow-x: hidden;
    }
`;
