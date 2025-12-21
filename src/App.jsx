import React, { createContext } from "react"
import {BrowserRouter, Routes, Route, Link, Router} from "react-router-dom"
import { useState } from "react"

// data
import en from "./data/i18n/en.json";
import it from "./data/i18n/it.json";
import user from "./data/user.json"
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
function App() {
  const [mode, setMode] = useState(true)
  const [lan, setLang] = useState(false)
  const [userId, setUser] = useState(false)
  const data = lan ? it.metadata_it : en.metadata_en
  const colorTheme = mode ? "#000000" : "#FFFFFF"
  return (
<siteContext.Provider value={{ mode, setMode, lan, setLang, data, userId, colorTheme }}>
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

export default App 




// <BrowserRouter>
//   <Routes>

//     {/* PUBLIC / AUTH */}
//     <Route element={<stateChecker />}>
//       <Route path="/welcome" element={<Welcome />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<SignUp />} />
//     </Route>

//     {/* PROTECTED APP */}
//      <Route element={<AppLayout />}>
//         <Route path="/" element={<Menu />} />
//      <Route element={<ProtectedRoute />}>
//         <Route path="/profile" element={<ProfileUser />} />
//         <Route path="/shopping-bag" element={<ShoppingBag />} />
//         <Route path="/favorite-pizza" element={<FavoritePizza />} />
//      </Route>
//     </Route>

//     {/* FALLBACK */}
//     

//   </Routes>
// </BrowserRouter>


{/* 
            <Route  path="/" element={<Layout />} >
              <Route index path="/menu" element={<Menu/>} />
              <Route path="/ProfileUser" element={<ProfileUser/>} />
              <Route path="/ShoppingBag" element={<ShoppingBag/>} />
              <Route path="/FavoritePizza" element={<FavoritePizza/>} />
            </Route> */}
              {/* protected */}