// react imports
import { Navigate, Outlet } from "react-router-dom"
import { useContext } from "react";

// shared context
import { siteContext } from "../App";

export default function ProtectedRoute(){
    const { userdata } = useContext(siteContext);
    return ( 
        userdata ?  <Outlet/> : <Navigate to="/login" replace/>
    )
}