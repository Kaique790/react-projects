import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme["gray-900"]};
        color: ${(props) => props.theme["gray-300"]};
    
        -webkit-font-smoothing: antialiased;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]};
    }

    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }

    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        background-color: ${(props) => props.theme["gray-700"]};
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 99999px;
        background-color: ${(props) => props.theme["green-500"]};
    }


`;
