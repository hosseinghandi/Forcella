// *role : help to navigate through app guidedby given input

// required material
import * as UI from "../../barrels/UI"
// required imports
import { useState } from "react";

export default function SharedNavigation({
  varient,
  filter,
  editeMode, 
  setEditMode,
  headText
}) 
{
    // handel logout 
    const [exit, setExit] = useState(false)

  const NavSetup = {
    "login" : {
      distance : true,
      photobaner : true,
      switches : false,
      position : "default"
    },
    "signup" : {
      distance:true,
      photobaner:true,
      switches : false,
      position : "top"
    }, 
    "welcoming" : {
      distance:false,
      photobaner:true,
      switches : true,
      position : "default"
    },
    "menu" : {
      filter:filter,
      navBar:true,
      headText: headText
    },
    "cart" : {
      filter:false,
      navBar:true,
      headText: headText
    },
    "profile" : {
      exit: exit ,
      setExit: setExit,
      editMode:editeMode ,
      setEditMode : setEditMode, 
      navBar:true

    }

  }


    const html = (varient) => {
      switch(varient) {

        case "welcoming":
        return <UI.NavigationBasic 
                {...NavSetup[varient]}
                /> 
       
        case "login":
        return <UI.NavigationBasic 
                {...NavSetup[varient]}
                />

        case "signup":
          return <UI.NavigationBasic 
                {...NavSetup[varient]}
                />

        case "menu": 
        return <UI.NavigationComplex {...NavSetup[varient]}/>

        case "cart": 
        return <UI.NavigationComplex {...NavSetup[varient]}/>
   
        case  "profile" :    
        return  <UI.NavProfile {...NavSetup[varient]}/>
        default: 
              <UI.Navigation varient={"navigation"}/>
      }
    }

  return (
        html(varient)
  );
}
