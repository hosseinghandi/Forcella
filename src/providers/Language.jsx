// role : provide the languge requird to render the UIs
import {createContext, useContext, useMemo} from "react"
import i18n from "../utils/i18n";
const LanguageContext = createContext(null);

export default function LanguageProvider({ children }) {
    // no re-render until language changes
    const value = useMemo(() => ({ lang: i18n.language }) , [i18n.language] )
    return(
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage= () => useContext(LanguageContext)


