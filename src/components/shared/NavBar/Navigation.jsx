import { useTheme } from "../../../providers/Theme";
import { useNavigate } from "react-router-dom";
export default function Navigation () {
    const navigate = useNavigate();
    const {colors} = useTheme()
    return (
                   <MUI.Box
                     sx={{
                       
                       display: "flex",
                       flexDirection: "row",
                       ...({justifyContent: varient === "navigation" ? "flex-end" : "space-between"}),
                       alignItems: "center",
                       gap:"0px",
                       width: "100%",
                     }}
                   >
                     <MUI.IconButton 
                     sx={{padding:"0px"}} onClick={() => navigate(-1)}>
                             <Icon.Arrow 
                             aria-label="going back"
                             htmlColor= {colors.text} /> 
                     </MUI.IconButton>
                     <UI.Logo color={colors.text} />
                   </MUI.Box> 
    )
}



// import { useContext, useState } from "react";
// import { SiteContext } from "../../App";
//   const navigate = useNavigate();
//   //  use main context of the site to render what is required
//   const {lan, mode,setLang, setMode, colorTheme, colorText} = useContext(SiteContext)
// <MUI.Box
//                 sx={{
                  
//                   display: "flex",
//                   flexDirection: "row",
//                   ...({justifyContent: navigation ? "flex-end" : "space-between"}),
//                   alignItems: "center",
//                   gap:"0px",
//                   width: "100%",
//                 }}
//               >
//                 <MUI.IconButton 
//                 sx={{padding:"0px"}} onClick={() => navigate(-1)}>
//                         <Icon.Arrow 
//                         aria-label="going back"
//                         htmlColor= {colorText} /> 
//                 </MUI.IconButton>
//                 <UI.Logo color={colorTheme} />
//               </MUI.Box>