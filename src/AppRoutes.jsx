// role: to manage the routes
import * as Pages from "./barrels/Pages";
import * as UI from "./barrels/UI";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

export default function AppRoutes() {
  const { pathname } = useLocation();

  return (
    <Routes>
      {/* navigate to the welcome as default page */}
      <Route path="/" element={<Navigate to="/welcome" replace />} />
      <Route path="/welcome" element={<Pages.Welcome />} />
      <Route path="/login" element={<Pages.Login />} />
      <Route path="/signup" element={<Pages.Signup />} />

      <Route path={"/menu"}>
        <Route index element={<Pages.Menu />} />
        <Route path=":filterkey" element={<Pages.Menu />} />
      </Route>

      <Route path="/profile" element={<Pages.Profile />} />
      <Route path="/cart" element={<Pages.Cart />} />
      <Route path="/cart/payment" element={<Pages.Payment />} />

      <Route path="*" element={<UI.E404 pathname={pathname} />} />
    </Routes>
  );
}
