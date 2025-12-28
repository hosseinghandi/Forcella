// react imports
import { Navigate, Outlet } from "react-router-dom"
import { useContext } from "react";

// shared context
import { siteContext } from "../App";

export default function ProtectedRoute(){
    const { userId } = useContext(siteContext);
    return ( 
        userId ?  <Outlet/> : <Navigate to="/login" replace/>
    )
}