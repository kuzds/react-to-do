import { useCallback, useMemo, useState } from "react";

import { ThemeModeContext } from "../contexts/ThemeModeContext";

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { 
    Box
} from '@mui/material';

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
                  // main: '#0082ff',
                  main: '#1976d2',
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
