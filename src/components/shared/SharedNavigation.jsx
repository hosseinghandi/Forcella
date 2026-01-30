// *role : help to navigate through app guidedby given input

// required material
import * as UI from "../../barrels/UI"
// required imports
import { useState } from "react";



export default function SharedNavigation({
  varient,
  position, 
  photobaner,
  editeMode, 
  setEditMode}) 
  {

  // handel logout 
  const [exit, setExit] = useState(false)

    const html = (varient) => {
      switch(varient) {
        case "welcoming": 
        return <UI.WelcomingNav />           
        break;
        case "navigation" || "main": 
        return <UI.Navigation varient={varient}/>
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
