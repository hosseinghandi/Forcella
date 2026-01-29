// react imports
import { Navigate } from "react-router-dom";
import { useContext } from "react";

// shared context
import {useUserData} from "../providers/UserData"

export default function Authorization() {
    const {userdata} = useUserData()
    return userdata ?  
    <Navigate to="/applayout/menu" replace /> : 
    <Navigate to="/welcome" replace />
    
}

