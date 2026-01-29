// react imports
import { Navigate, Outlet } from "react-router-dom"

import {useUserData} from "../providers/UserData"
    export default function ProtectedRoute(){
    const {userdata} = useUserData()

    return ( 
        userdata ?  <Outlet/> : <Navigate to="/login" replace/>
    )
}