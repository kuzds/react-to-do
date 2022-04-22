import { useCallback, useMemo, useState, useEffect } from "react";

import ThemeModeContext from "../contexts/ThemeModeContext";

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { 
  CssBaseline,
  Box
} from '@mui/material';

function ThemeModeProvider(props) {
  const [mode, setMode] = useState(localStorage.getItem('themeMode') || 'light')
  const primaryOrSecondary = mode === 'dark' ? '#ffe34f' : '#0AC27A'

  useEffect(() => {
    localStorage.setItem('themeMode', mode)
  }, [mode])

  const toggleColorMode = useCallback(() => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }, [])

  const theme = useMemo(() =>
      createTheme({
          custom: {
            primaryOrSecondary
          },
          palette: {
              mode,
              primary: {
                main: mode === 'dark' ? '#0a8a57' : '#0AC27A',
                contrastText: '#fff',
              },
              secondary: {
                main: mode === 'dark' ? '#ffe34f' : '#ffe34f',
                contrastText: 'rgba(0,0,0,0.87)',
              },
              background: {
                  paper: mode === 'dark' ? '#424242' : '#fff',
                  default: mode === 'dark' ? '#303030' : '#fafafa',
              },
          },
          components: {
            MuiCssBaseline: {
              styleOverrides: {
                'body, div': {
                  scrollbarWidth: 'thin',
                  scrollbarColor: `${primaryOrSecondary} none`,
                  '&::-webkit-scrollbar': {
                    width: '6px',
                  },
                  '&::-webkit-scrollbar-track': {
                    width: '6px',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: primaryOrSecondary,
                    borderRadius: '20px',
                    border: '3px solid none',
                  } 
                },
              },
            },
          },
      }),
      [mode, primaryOrSecondary],
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
          <CssBaseline enableColorScheme />
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

