import { useContext, useState} from "react"
import * as UI from "../barrels/UI"
import * as MUI from "../barrels/MUI"

import { useTheme } from "../providers/Theme" 
import { useLanguage } from "../providers/Language"
import { useUserData } from "../providers/UserData"
import useRequestText from "../hook/useRequestText"

export default function Profile() {
    const {fetchedUserdata, loading} = useUserData()
    const {mode, colors} = useTheme()
    const [editMode, setEditMode] = useState(false)
    const {text} = useRequestText("profile")
    
    const capitlize = (name) => name.charAt(0).toUpperCase() + name.slice(1)
    if (loading) {return <UI.LandingPage loading={loading} error={error}/>}
    else return (
    <>
    <UI.SharedNavigation 
    varient={"profile"} 
    editeMode={editMode} 
    setEditMode={setEditMode}/>
    
    <MUI.Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <MUI.Typography component={"p"} variant="profileWelcoming">
            {`${text.greeting}, `} 
            <MUI.Typography component={"span"} variant="titleWelcoming">
                 {capitlize(fetchedUserdata.personalInfo.firstName)}</MUI.Typography>
        </MUI.Typography>
            {
            editMode && 
            <MUI.Box sx={
                {display:"flex", flexDirection:"row",gap:"var(--GlobalgapOfGrids)", alignItems:"center" }}>
                <UI.SwitchLanguage 
                colorTheme={colors.theme} />
                <UI.ToggleTheme value={mode} 
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
        userdata={fetchedUserdata}
        // setUser = {setUser}
        setEditMode={setEditMode}
        editMode={editMode}
        />
    </UI.LayoutHandeler>
    </>)
}