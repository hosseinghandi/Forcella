// role : provide the theme requird to render the UIs
import { createContext, useContext, useMemo } from "react";
import { useUserData } from "./UserData";

const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const { fetchedUserdata } = useUserData();
  const mode = fetchedUserdata?.personalInfo.theme ?? true;
  const value = useMemo(
    () => ({
      mode,
      colors: {
        theme: mode ? "var(--black-bg)" : "var(--white-bg)",
        text: mode ? "var(--white-text)" : "var(--black-text)",
        modeName : mode ? "dark" : "light"
      },
    }),
    [mode],
  );
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
