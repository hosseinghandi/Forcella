import { useContext, useState} from "react"
import { SiteContext } from "../App"
import * as UI from "../utils/UI"
import * as MUI from "../utils/MUI"

export default function ProfileUser() {
    const {userdata, pizzaRawData} = useContext(SiteContext)

    const [editeMode, setEditMode] = useState(false)
    return (
    <>
    <UI.SharedNavigation profile={true} editeMode={editeMode} setEditMode={setEditMode}/>
    <MUI.Typography component={"p"} variant="profileWelcoming">Hello,
        <MUI.Typography component={"span"} variant="titleWelcoming">{userdata.personalInfo.firstName}</MUI.Typography>
    </MUI.Typography>
    {
    editeMode ?
    <h1>this is another mode</h1> :
    <UI.UserInfoHolderStatic 
    userdata={userdata}
    pizzaRawData={pizzaRawData}
    /> 
    
    }
    </>)
}