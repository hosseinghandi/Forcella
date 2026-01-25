// *role : help to navigate through app act as header*


// material ui icons for sharednavbar
import * as Icon from "../../utils/Icons"
import * as MUI from "../../utils/MUI"
import * as UI from "../../utils/UI"
 
// router imports
import { useNavigate } from "react-router-dom";

// import react 
import { useContext, useState } from "react";
import { SiteContext } from "../../App";




export default function SharedNavigation({position, navigation, splash, menu, profile, editeMode, setEditMode}) {
  const navigate = useNavigate();
  const {lan, mode,setLang, setMode, colorTheme, colorText} = useContext(SiteContext)
  const [exit, setExit] = useState(false)
  const requestedHtml = 
              navigation || menu ?
              <>
              <MUI.Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  ...({justifyContent: navigation ? "flex-end" : "space-between"}),
                  alignItems: "center",
                  gap:"10px",
                  width: "100%",
                }}
              >
              <MUI.IconButton sx={{padding:"0px"}} onClick={() => navigate(-1)}>
                      <Icon.Arrow htmlColor= {colorTheme} /> 
              </MUI.IconButton>
              <UI.Logo color={colorTheme} />
              </MUI.Box>
              </> : splash ? 
                      <MUI.Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "7px",
                        alignItems: "flex-end",
                      }}
                    >
                        <UI.Logo color={colorTheme} />
                        <UI.SwitchLabels value={lan} setValue={setLang} colorTheme={colorTheme} />
                        <UI.ToggleTheme value={mode} setValue={setMode} colorTheme={colorTheme} />
                </MUI.Box> 
                : profile ?
                <>
                      <MUI.Dialog
                            PaperProps={{
                          sx: {
                            borderRadius: "25px",
                            padding:"12px 18px", display:"flex", 
                            flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"var(--gapOfItems)"
                          },
                        }}
                        onClose={exit }
                        open={exit}
                        fullWidth
                        maxWidth="sm"
                            >
                         <MUI.Typography>Wait—leaving already? The pizza will miss you!</MUI.Typography>
                          <MUI.Box sx={{ display: "flex", flexDirection: "row", gap: 8 }}>
                                       <UI.ButtonBasic
                                         type="submit"
                                         title={"Yes"}
                                         task={setExit}
                                         shrink={true}
                                       />
                                       <UI.ButtonBasic
                                         type="submit"
                                         title={"No"}
                                         task={setExit}
                                         shrink={true}
                                       />
                                     </MUI.Box>
                        </MUI.Dialog>
                      <MUI.Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "7px",
                              justifyContent:"space-between",
                              alignItems: "flex-end",
                            }}
                          >
                      <MUI.IconButton sx={{padding:"0px"}} onClick={() => navigate(-1)}>
                      < Icon.Arrow htmlColor= {colorTheme} /> 
                      </MUI.IconButton>
                            <MUI.Box sx={{display:"flex", flexDirection:"row", 
                              justifyContent:"center", alignItems:"flex-start"}}
                              >
                              <MUI.IconButton 
                              disableFocusRipple={true} 
                              disableRipple={true}
                              onClick={()=> setEditMode(prev => !prev)}
                              sx={{
                                padding:"0", 
                                color: editeMode ? " var(--orange)" : "black"}}>
                                <Icon.EditPen/>
                                <MUI.Typography sx={{marginRight:"30px", marginLeft:"5px"}}>Edit</MUI.Typography>
                              </MUI.IconButton>
                                <Icon.LogOut onClick={() => setExit( prev => !prev)}/>
                            </MUI.Box>
                      </MUI.Box> 
                </> : null
                

  return (
    <MUI.Box
      sx={{
        padding: "10px 0",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        
      }}
      >
        
       { (!menu && !profile) ? 
       <UI.Header position={position}>
        {requestedHtml}
        </UI.Header> :
        <>
          {requestedHtml}
        </> 
        }
      
      
    </MUI.Box>
  );
}
