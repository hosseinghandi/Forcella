import { useContext, useState} from "react"
import { SiteContext } from "../App"
import * as UI from "../utils/UI"
import * as MUI from "../utils/MUI"

export default function ProfileUser() {
    const {userdata,setUser, pizzaRawData,mode, setMode, lan, setLang, colorTheme} = useContext(SiteContext)
    const [editeMode, setEditMode] = useState(false)

    return (
    <>
    <UI.SharedNavigation profile={true} editeMode={editeMode} setEditMode={setEditMode}/>
    <MUI.Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <MUI.Typography component={"p"} variant="profileWelcoming">Hello, 
            <MUI.Typography component={"span"} variant="titleWelcoming"> {userdata.personalInfo.firstName}</MUI.Typography>
        </MUI.Typography>
            {editeMode && <MUI.Box sx={
                {display:"flex", flexDirection:"row",gap:1, alignItems:"center" }}>
                <UI.SwitchLabels value={lan} setValue={setLang} colorTheme={colorTheme} />
                <UI.ToggleTheme value={mode} setValue={setMode} colorTheme={colorTheme} />
            </MUI.Box>}
    </MUI.Box>
    {
    editeMode ?
     <UI.UserInfoHolderEditMode 
     userdata={userdata}
     setUser={setUser}
     setEditMode={setEditMode}
     /> :
    <UI.UserInfoHolderStatic 
    userdata={userdata}
    pizzaRawData={pizzaRawData}
    /> 
    }
    </>)
}