import { useContext } from "react";
import ThemeModeContext from "../contexts/ThemeModeContext";

function useThemeMode() {
  return useContext(ThemeModeContext);
}

export default useThemeMode;
