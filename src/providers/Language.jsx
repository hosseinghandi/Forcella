import {createContext, useContext, useEffect,useState } from "react"
import i18n from "../utils/i18n";
import { useUserData } from "./UserData";
export const LanguageContext = createContext(null);

export default function LanguageProvider({ children }) {
    const {userdata} = useUserData()
    const lang= userdata?.personalInfo?.language ?? "en"
    
    useEffect(() => {
        i18n.changeLanguage(lang)
        document.documentElement.lang = lang;
    }, [lang])

    return(
        <LanguageContext.Provider value={{lang}}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage= () => useContext(LanguageContext)