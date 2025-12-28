import { createContext, useState, useEffect } from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import i18n from "./utils/i18n";

 

// import user from "./data/user.json"
// routes
import AppLayout from "./routes/AppLayout";
import StateChecker from "./routes/StateChecker"
import ThemeMode from "./components/ui/ThemeMode"
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import Menu from "./pages/Menu";
import ProfileUser from "./pages/ProfileUser";
import ShoppingBag from "./pages/ShoppingBag";
import FavoritePizza from "./pages/FavoritePizza";
import ProtectedRoute from "./routes/ProtectedRoute";

export const siteContext = createContext()

export default function App() {
  const [mode, setMode] = useState(true)
  const [lan, setLang] = useState(false)
  const [userId, setUser] = useState(true)
  const colorTheme = mode ? "#000000" : "#FFFFFF"

  useEffect(() => {
        i18n.changeLanguage(lan ? "it" : "en")
  } , [lan])
  
  return (
<siteContext.Provider value={{ mode, setMode, lan, setLang, userId, colorTheme }}>
  <ThemeMode mode={mode}>
    <BrowserRouter>
      <Routes>

        {/* entry */}
        <Route path="/" element={<StateChecker />} />

        {/* public */}

        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

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
  </ThemeMode>
</siteContext.Provider>

  )
}
