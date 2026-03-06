// *role : on request render an error*

// material ui icons for error

import * as Icon from "../../barrels/Icons"
import * as MUI from "../../barrels/MUI"

export default function Error({ message, colorText}) {

  return (
    message !== "" && (
      <MUI.Box 
      sx={{
        display: "flex", flexDirection:"row",
        justifyContent:"start-flex",
        alignItems:"center",width:"fit-content", gap:2}}>

        <Icon.Error sx={{ color: "var(--red)", fontSize:"var(--iconsize)"}} />
        
        <MUI.Typography variant="textError" >
          {message}
        </MUI.Typography>
      </MUI.Box>
    )
  );
}
