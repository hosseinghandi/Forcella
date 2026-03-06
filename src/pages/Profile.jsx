import { useContext, useState} from "react"
import * as UI from "../barrels/UI"
import * as MUI from "../barrels/MUI"

import { useTheme } from "../providers/Theme" 
import { useLanguage } from "../providers/Language"
import { useUserData } from "../providers/UserData"

export default function Profile() {
    const {userdata, setUser} = useUserData()
    const {mode, setMode, colors} = useTheme()
    const {lang, setLang} = useLanguage()
    const [editMode, setEditMode] = useState(false)

    return (
    <>
    <UI.SharedNavigation 
    varient={"profile"} 
    editeMode={editMode} 
    setEditMode={setEditMode}/>
    
    <MUI.Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <MUI.Typography component={"p"} variant="profileWelcoming">
            {`${lang === "it"? "Ciao" : "Hey" } ,`} 
            <MUI.Typography component={"span"} variant="titleWelcoming"> {userdata.personalInfo.firstName}</MUI.Typography>
        </MUI.Typography>
            {
            editMode && 
            <MUI.Box sx={
                {display:"flex", flexDirection:"row",gap:"var(--GlobalgapOfGrids)", alignItems:"center" }}>
                <UI.SwitchLanguage 
                value={lang} 
                setValue={setLang} 
                colorTheme={colors.theme} />
                <UI.ToggleTheme value={mode} 
                setValue={setMode} 
                colorTheme={colors.theme} />
            </MUI.Box>
            }
    </MUI.Box>

    <UI.LayoutHandeler 
    style={ {   
                marginTop:{xs:"5vw", special:"3vw"},
                width:"100%", 
                height:"fit-content",
                }}
    >
        <UI.UserInfoHolder
        userdata={userdata}
        setUser = {setUser}
        setEditMode={setEditMode}
        editMode={editMode}
        />
    </UI.LayoutHandeler>
    </>)
}