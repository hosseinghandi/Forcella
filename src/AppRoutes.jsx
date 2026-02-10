import * as Routers from "./barrels/Routers"
import * as Pages from "./barrels/Pages"
import {Routes, Route} from "react-router-dom"


export default function AppRoutes() {
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
            <Route path="/profile" element={<Pages.ProfileUser />} />
            <Route path="/cart" element={<Pages.Cart/>} />
            <Route path="/cart/payment" element={<Pages.Payment/>} />
          </Route>

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    )
  }
  {/* <Route path="/wish" element={<Pages.WishList />} /> */}