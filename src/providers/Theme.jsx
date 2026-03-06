import {createContext, useContext, useMemo, useState } from "react"
import { useUserData } from "./UserData";
export const ThemeContext = createContext(null);

export default function ThemeProvider({children}) {
    const {userdata} = useUserData()
    const mode = userdata.personalInfo.theme;
    const value = useMemo( () => (
        {
        mode, 
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