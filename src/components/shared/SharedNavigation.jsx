// *role : help to navigate through app guidedby given input



// required material
import * as Icon from "../../barrels/Icons"
import * as MUI from "../../barrels/MUI"
import * as UI from "../../barrels/UI"
 
// required imports
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useLanguage } from "../../providers/Language";
import { useTheme } from "../../providers/Theme";


// hints: 
// photobander : if true,  the photo baner will be render,   
// position : if true and photobaner is true, the photo baner is shifting up to adopt it to the page,
// navigation: if asked it will render just the logo and arrow to go back one step back
// main : if true, offeres a simple layout of navigation with distance adopted to most pages
// splash : if true, bubbletoggle and theme switcher will be rendered as well for welcoming page 
// profile : if true, the ui adoptd o profile will be render includes of edit mode icon, 
// this option needs also editMode and setEditeMode values


export default function SharedNavigation({
  varient,
  position, 
  photobaner,
  editeMode, 
  setEditMode}) 
  {

  //  use main context of the site to render what is required
  const {colors, mode, setMode} = useTheme()
  const {lang, setLang} = useLanguage

  // handel logout 
  const [exit, setExit] = useState(false)

    const html = (varient) => {
      switch(varient) {
        case "welcoming": 
        return <UI.WelcomingNav />           
        break;
        case "navigation" || "main": 
        return <UI.Navigation />
        break;
        case  "profile" :    
        return  <UI.NavProfile 
                  exit={exit} 
                  setExit={setExit} 
                  editeMode={editeMode} 
                  setEditMode={setEditMode}/>
        break;
      }
    }




  return (
       <UI.NavigationWrapper position={position} photobaner={photobaner}>
        {html(varient)}
        </UI.NavigationWrapper>
  );
}
