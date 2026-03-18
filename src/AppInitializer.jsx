import { useUserData } from "./providers/UserData"
import * as UI from "./barrels/UI"
import i18n from "./utils/i18n"
import { useEffect, useState } from "react"
import { set } from "react-hook-form"

export default function AppInitializer({children}){
    const {fetchedUserdata,loading, error} = useUserData()
    const [ready, setready] = useState(false)

    useEffect( () => {
        if(loading) return;
        if (error) return;

        const lang = fetchedUserdata?.personalInfo?.language || "en"
        
        const checkLanguage = async () => {
            if (i18n.language !== lang){
                await i18n.changeLanguage(lang)
            }
            document.documentElement.lang = lang
            setready(true)
        }

        checkLanguage()
    }, [fetchedUserdata,loading, error])






    if (loading || error || !ready) {
    return <UI.LandingPage loading={loading} error={error} />
    }

    return children
    
} 