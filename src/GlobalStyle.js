import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");

    html {
        box-sizing: border-box;
    }
    h2 {
        font-size: 2rem;
        font-weight: 700;
    }
    *, *::after, *::before {
        margin: 0;
        font-family: 'Lato', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        font-size: 16px;
        color: #ffffff;
        box-sizing: inherit;
    }
`;

export default GlobalStyle;
