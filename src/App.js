import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import AppRoutes from './routes/Routes';

import Wrapper from './components/Wrapper';

const theme = {
    firstColor: "hsl(248, 100%, 73%)",
    firstColorLight: "hsl(248, 100%, 68%)",
    bgColor: "#121212",
};


function App(props){
    return (<>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
            <Wrapper>
                <AppRoutes />
            </Wrapper>
        </ThemeProvider>
    </>);
}


export default App;
