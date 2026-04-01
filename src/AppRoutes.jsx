// role: to manage the routes
// A) redirect user at the first to proper page
// B) check  URl copmplience with user state

import * as Pages from "./barrels/Pages";
import * as UI from "./barrels/UI";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useUserData } from "./providers/UserData";
import CheckUserState from "./checkUserState";
export default function AppRoutes() {
  const { pathname } = useLocation();
  const { fetchedUserdata } = useUserData();
  const isLoggedIn = fetchedUserdata?.personalInfo?.islogin;
  return (
    <Routes>
      {/* navigate the user to proper page at the first render*/}
      <Route
        path="/"
        element={<Navigate to={isLoggedIn ? "/menu" : "/welcome"} replace />}
      />
      <Route path="/welcome" element={<Pages.Welcome />} />
      <Route path="/login" element={<Pages.Login />} />
      <Route path="/signup" element={<Pages.Signup />} />

      {/* check if the URl is complied with user state */}
      <Route element={<CheckUserState/>}>
        <Route path={"/menu"}>
          <Route index element={<Pages.Menu />} />
          <Route path=":filterkey" element={<Pages.Menu />} />
        </Route>
        <Route path="/profile" element={<Pages.Profile />} />
        <Route path="/cart" element={<Pages.Cart />} />
        <Route path="/cart/payment" element={<Pages.Payment />} />
      </Route>
      <Route path="*" element={<UI.E404 pathname={pathname} />} />
    </Routes>
  );
}
