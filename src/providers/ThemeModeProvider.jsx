import { useCallback, useMemo, useState, useEffect } from "react";

import ThemeModeContext from "../contexts/ThemeModeContext";

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { 
    Box
} from '@mui/material';

function ThemeModeProvider(props) {
    const [mode, setMode] = useState(localStorage.getItem('themeMode') || 'light')

    useEffect(() => {
      localStorage.setItem('themeMode', mode)
    }, [mode])

    const toggleColorMode = useCallback(() => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    }, [])

    const theme = useMemo(() =>
        createTheme({
            palette: {
                mode,
                primary: {
                  // main: '#0082ff',
                  // main: '#1976d2',
                  main: mode === 'dark' ? '#0AC27A' : '#0a8a57',
                },
                background: {
                    paper: mode === 'dark' ? '#424242' : '#fff',
                    default: mode === 'dark' ? '#303030' : '#fafafa',
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
