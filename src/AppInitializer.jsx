// role: This component keep other elements 
// wait until the data is recieved to be renderd

import { useUserData } from "./providers/UserData"
import * as UI from "./barrels/UI"
import i18n from "./utils/i18n"
import { useEffect, useState } from "react"
export default function AppInitializer({children}){
    const {fetchedUserdata,loading, error} = useUserData()
    const [ready, setReady] = useState(false)

    useEffect( () => {
        if(loading) return;
        if (error) return;
        
        const lang = fetchedUserdata?.personalInfo?.language || "en"
        // just be sure that the language is changed properly by i18n
        const checkLanguage = async () => {
            if (i18n.language !== lang){
                await i18n.changeLanguage(lang)
            }
            document.documentElement.lang = lang
            setReady(true)
        }
        checkLanguage()
    }, [fetchedUserdata,loading, error])

    if (loading || error || !ready) {
    return <UI.LandingPage loading={loading} error={error} />
    }
    return children
    
} 