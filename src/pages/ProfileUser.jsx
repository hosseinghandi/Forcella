import { useContext } from "react"
import { SiteContext } from "../App"

import * as UI from "../utils/UI"

export default function ProfileUser() {

    const {userdata} = useContext(SiteContext)
    return (
    <>
    <UI.SharedNavigation profile={true} />
    <UI.UserInfoHolder 
    userdata={userdata}/>
    </>)
}
