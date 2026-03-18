import * as Routers from "./barrels/Routers"
import * as Pages from "./barrels/Pages"
import * as UI from "./barrels/UI"
 
import {Routes, Route, useLocation} from "react-router-dom"

export default function AppRoutes() {
    const {pathname} = useLocation() 
    return(
        <Routes>
        {/* entry */}
        <Route path="/" element={<Routers.StateChecker />} />

        {/* public */}

        <Route path="/welcome" element={<Pages.Welcome />} />
        <Route path="/login" element={<Pages.Login />} />
        <Route path="/signup" element={<Pages.Signup />} />

        {/* app layout */}
          {/* public inside app */}
          <Route path={"/menu"} >
            <Route index element={<Pages.Menu />}/>  
            <Route path=":filterkey" element={<Pages.Menu />}/>
          </Route>

          {/* protected */}
          <Route element={<Routers.ProtectedRoute />}>
            <Route path="/profile" element={<Pages.Profile />} />
            <Route path="/cart" element={<Pages.Cart/>} />
            <Route path="/cart/payment" element={<Pages.Payment/>} />
          </Route>

        <Route path="*" element={
          <UI.E404 pathname={pathname} />
          } />
      </Routes>
    )
  }
  {/* <Route path="/wish" element={<Pages.WishList />} /> */}