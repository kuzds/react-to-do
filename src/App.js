import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppRoutes from './routes/Routes';
import Wrapper from './components/Wrapper';


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
        <ThemeProvider theme={darkTheme}>
            <Wrapper>
                <AppRoutes />
            </Wrapper>
        </ThemeProvider>
    </>);
}


export default App;
