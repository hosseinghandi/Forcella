// react imports
import { Navigate, Outlet } from "react-router-dom"
import {useUserData} from "../providers/UserData"
    export default function ProtectedRoute(){
    const {fetchedUserdata} = useUserData()
    return ( fetchedUserdata ? <Outlet/> : <Navigate to="/login" replace/> )
}