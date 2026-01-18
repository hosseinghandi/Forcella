// react imports
import { Navigate } from "react-router-dom";
import { useContext } from "react";

// shared context
import { SiteContext } from "../App";

export default function Authorization() {
   const { userId } = useContext(SiteContext);
    return userId ?  
    <Navigate to="/applayout/menu" replace /> : 
    <Navigate to="/welcome" replace />
    
}

