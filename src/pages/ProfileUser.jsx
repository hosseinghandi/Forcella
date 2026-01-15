import { useContext } from "react"
import { siteContext } from "../App"

import * as UI from "../utils/UI"

export default function ProfileUser() {

    const {userdata} = useContext(siteContext)
    return (
    <>
    <UI.UserInfoHolder 
    userdata={userdata}/>
    </>)
}
