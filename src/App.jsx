// react imports 
import { createContext, useState, useEffect } from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import translator 
import i18n from "./utils/i18n";
import { useTranslation } from "react-i18next";
import {saveUserState , getUserState , updateUserState} from "../src/utils/userStateTracker";
import * as Routers from "./utils/Routers"
import * as Pages from "./utils/Pages"
import * as UI from "./utils/UI"

// a global context to avoid state drilling  
export const SiteContext = createContext()

export default function App() {
  const {t} = useTranslation()
  const pizzaRawData = t("pizzaItems", { returnObjects: true });
  localStorage.clear()
  const user = getUserState()
  // local storag elater shpuld be handel
  const [mode, setMode] = useState(false)
  const [lan, setLang] = useState(user.preferences.language || "en")
  const [userdata, setUser] = useState(() => user)

    // color text is contrary to color them becasue they should be 
  const colorText =  mode ? "#000000" : "#FFFFFF"  
  const colorTheme = mode ? "#FFFFFF" : "#000000" 
  
  useEffect(() => {
        i18n.changeLanguage(lan)
        updateUserState({preferences : {language : lan}})
  } , [lan])

  return (
<SiteContext.Provider value={{ mode, setMode, lan, setLang, userdata,pizzaRawData,setUser, colorTheme, colorText }}>
    <BrowserRouter>
    <UI.SiteWrapper>
      <Routes>
        {/* entry */}
        <Route path="/" element={<Routers.StateChecker />} />

        {/* public */}

        <Route path="/welcome" element={<Pages.Welcome />} />
        <Route path="/login" element={<Pages.Login />} />
        <Route path="/signup" element={<Pages.Signup />} />

        {/* app layout */}
        <Route path="/applayout" element={<Routers.AppLayout />}>

          {/* public inside app */}
          <Route path={"menu"} >
            <Route index element={<Pages.Menu />}/>  
            <Route path=":filterkey" element={<Pages.Menu />}/>
          </Route>

          {/* protected */}
          <Route element={<Routers.ProtectedRoute />}>
            <Route path="profile" element={<Pages.ProfileUser />} />
            <Route path="shoppingbag" element={<Pages.ShoppingBag />} />
            <Route path="favorites" element={<Pages.FavoritePizza />} />
            <Route path="payment" element={<Pages.Payment/>} />
          </Route>

        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      </UI.SiteWrapper>
    </BrowserRouter>
</SiteContext.Provider>

  )
}
