import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import GlobalStyles from './GlobalStyle';
import { Global } from "@emotion/react";
import AppRoutes from './routes/Routes';

import Wrapper from './components/Wrapper';

// const theme = {
//     firstColor: "hsl(248, 100%, 73%)",
//     firstColorLight: "hsl(248, 100%, 68%)",
//     bgColor: "#121212",
// };

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#0082ff',
        }
      },
});


function App(props){
    return (<>
        <Global styles={GlobalStyles}/>
        <ThemeProvider theme={darkTheme}>
            <Wrapper>
                <AppRoutes />
            </Wrapper>
        </ThemeProvider>
    </>);
}


export default App;
