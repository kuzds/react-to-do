import { useCallback, useEffect, useMemo, useState } from "react";

import { ThemeModeContext } from "../contexts/ThemeModeContext";

import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

import { 
    Box
} from '@mui/material';

// darkTheme = responsiveFontSizes(darkTheme);

function ThemeModeProvider(props) {
    const [mode, setMode] = useState('dark');

    const toggleColorMode = useCallback(() => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    }, []);

    const theme = useMemo(() =>
        createTheme({
            palette: {
                mode,
                primary: {
                  main: '#0082ff',
                },
                background: {
                    paper: '#424242',
                    default: mode === 'dark' ? '#303030' : '#fff',
                },
            },
        }),
        [mode],
    );

    const contextValue = useMemo(
        () => ({
            mode,
            toggleColorMode,
        }),
        [mode, toggleColorMode]
    );

    return (
        <ThemeModeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>
                <Box 
                    sx={{
                        bgcolor: 'background.default',
                        color: 'text.primary',
                        height: '100%'
                    }}
                >
                    {props.children}
                </Box>
            </ThemeProvider>
        </ThemeModeContext.Provider>
    );
}

export default ThemeModeProvider;
