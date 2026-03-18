import {createContext, useContext} from "react"
import i18n from "../utils/i18n";
export const LanguageContext = createContext(null);

export default function LanguageProvider({ children }) {

    return(
        <LanguageContext.Provider value={{ lang: i18n.language }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage= () => useContext(LanguageContext)


