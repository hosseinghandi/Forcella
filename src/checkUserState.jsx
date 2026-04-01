import { Navigate, Outlet} from "react-router-dom";
import { useUserData } from "./providers/UserData";
export default function CheckUserState(){
    const {fetchedUserdata} = useUserData()
    return (fetchedUserdata?.personalInfo?.islogin ? 
    <Outlet/> : 
    <Navigate to="/welcome" />)

}