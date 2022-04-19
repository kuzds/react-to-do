import { createContext } from "react";

const ThemeModeContext = createContext({
    mode : null,
    toggleColorMode: () => {}
});

export default ThemeModeContext;