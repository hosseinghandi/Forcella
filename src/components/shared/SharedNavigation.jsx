// *role : help to navigate through app guidedby given input

// required material
import * as UI from "../../barrels/UI"
// required imports
import { useState } from "react";

export default function SharedNavigation({
  varient,
  filter,
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
        case "navigation": 
        case "main":
        return <UI.Navigation varient={varient} filter={filter}/>
                
        case  "profile" :    
        return  <UI.NavProfile 
                  exit={exit} 
                  setExit={setExit} 
                  editeMode={editeMode} 
                  setEditMode={setEditMode}/>
        default: 
              <UI.Navigation varient={"navigation"}/>
      }
    }

  return (
       <UI.NavigationWrapper position={position} photobaner={photobaner}>
        {html(varient)}
        </UI.NavigationWrapper>
  );
}
