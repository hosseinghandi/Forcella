// react imports 
import { createContext, useState, useEffect } from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import translator 
import i18n from "./utils/i18n";

// userState and local storage
// import {saveUserState , getUserState , updateUserState} from "../src/utils/userStateTracker"
import{ exampleUser }from "./exampleUser"

// routes
import AppLayout from "./routes/AppLayout";
import StateChecker from "./routes/StateChecker"

// ui components
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import Menu from "./pages/Menu";
import ProfileUser from "./pages/ProfileUser";
import ShoppingBag from "./pages/ShoppingBag";
import FavoritePizza from "./pages/FavoritePizza";
import ProtectedRoute from "./routes/ProtectedRoute";
import SiteWrapper from "./components/shared/SiteWrapper";

// a global context to avoid state drilling  
export const siteContext = createContext()

export default function App() {
  
  const [mode, setMode] = useState(exampleUser.preferences.theme || false)
  const [lan, setLang] = useState(exampleUser.preferences.language || "en")
  const [userdata, setUser] = useState(exampleUser || null)


  const colorTheme = mode ? "#000000" : "#FFFFFF"

  useEffect(() => {
        i18n.changeLanguage(lan)
  } , [lan])
  

  return (
<siteContext.Provider value={{ mode, setMode, lan, setLang, userdata, colorTheme }}>
  <SiteWrapper>
    <BrowserRouter>
      <Routes>

        {/* entry */}
        <Route path="/" element={<StateChecker />} />

        {/* public */}

        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* app layout */}
        <Route path="/applayout" element={<AppLayout />}>

          {/* public inside app */}
          <Route path="menu" element={<Menu />} />

          {/* protected */}
          <Route element={<ProtectedRoute />}>
            <Route path="profile" element={<ProfileUser />} />
            <Route path="shoppingbag" element={<ShoppingBag />} />
            <Route path="favorites" element={<FavoritePizza />} />
          </Route>

        </Route>

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  </SiteWrapper>
</siteContext.Provider>

  )
}
