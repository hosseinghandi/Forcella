// *role : help to navigate through app act as header*


// material ui icons for sharednavbar
import * as Icon from "../../utils/Icons"
import * as MUI from "../../utils/MUI"
import * as UI from "../../utils/UI"
 
// router imports
import { useNavigate } from "react-router-dom";

// import react 
import { useContext } from "react";
import { SiteContext } from "../../App";




export default function SharedNavigation({position, navigation, splash, menu, profile }) {
  
  const navigate = useNavigate();
  const {lan, mode,setLang, setMode, colorTheme, colorText} = useContext(SiteContext)

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
                      <MUI.Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "7px",
                              alignItems: "flex-end",
                            }}
                          >
                              <MUI.Typography> it works</MUI.Typography>
                      </MUI.Box> : null
                


                

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
