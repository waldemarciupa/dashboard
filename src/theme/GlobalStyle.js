import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   
    *, *::before, *::after {
        box-sizing: border-box;   
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale; 
        margin: 0;
        padding: 0;
    }

    /* happy rems */

    html {
        font-size: 62.5%;  /* 1 rem === 10px */
    }

    body {
        font-size: 1.6rem; /* 16px */
        font-family: "Montserrat", sans-serif;
        background-color: grey;
        padding-left: 20rem;
    }
`;

export default GlobalStyle;
