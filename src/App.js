import React from 'react';

import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import AppRoutes from './routes/Routes';
import Wrapper from './components/Wrapper';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#0082ff',
        },
        background: {
            paper: '#303030',
        },
    },
});
// darkTheme = responsiveFontSizes(darkTheme);
function App(){
    return (<>
        <ThemeProvider theme={darkTheme}>
            {/* <Wrapper> */}
                <AppRoutes />
            {/* </Wrapper> */}
        </ThemeProvider>
    </>);
}


export default App;
