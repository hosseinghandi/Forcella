// react imports
import { Navigate, Outlet } from "react-router-dom"
import { useContext } from "react";

// shared context
import { SiteContext } from "../App";

export default function ProtectedRoute(){
    const { userdata } = useContext(SiteContext);
    return ( 
        userdata ?  <Outlet/> : <Navigate to="/login" replace/>
    )
}