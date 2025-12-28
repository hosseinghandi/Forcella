// react imports
import { Navigate } from "react-router-dom";
import { useContext } from "react";

// shared context
import { siteContext } from "../App";

export default function Authorization() {
   const { userId } = useContext(siteContext);
    return userId ?  
    <Navigate to="/applayout/menu" replace /> : 
    <Navigate to="/welcome" replace />
    
}

