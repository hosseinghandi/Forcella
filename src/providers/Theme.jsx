import {createContext, useContext, useMemo, useState } from "react"
export const ThemeContext = createContext(null);

export default function ThemeProvider({children}) {
    const [mode, setMode] = useState(true);

    const value = useMemo( () => (
        {
        mode, 
        setMode,
        colors : {
            theme : mode ? "var(--black-bg)" : "var(--white-bg)",
            text :  mode ? "var(--white-text)" : "var(--black-text)" 
        }
    }
), [mode])
    return(
        <ThemeContext.Provider value={value}>
                {children}
        </ThemeContext.Provider>
    )
}

export const useTheme= () => useContext(ThemeContext)