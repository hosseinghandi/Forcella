import {createContext, useContext, useEffect,useState } from "react"
import i18n from "../utils/i18n";

import {getUserState , updateUserState} from "../utils/userStateTracker";

export const LanguageContext = createContext(null);

export default function LanguageProvider({ children }) {
    const user = getUserState()
    const [lang, setLang] = useState(user?.personalInfo?.language ?? "en")
    
    useEffect(() => {
        i18n.changeLanguage(lang)
        updateUserState({personalInfo : {language : lang}})
    }, [lang])

    return(
        <LanguageContext.Provider value={{lang, setLang}}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage= () => useContext(LanguageContext)