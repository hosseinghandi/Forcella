// react imports
import { Navigate } from "react-router-dom";
// shared context
import {useUserData} from "../providers/UserData"

export default function Authorization() {
    const {fetchedUserdata, loading} = useUserData()
    return fetchedUserdata ?  
    <Navigate to="/menu" replace /> : 
    <Navigate to="/welcome" replace />
}

