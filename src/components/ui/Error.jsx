// *role : on request render an error*

// material ui icons for error

import * as Icon from "../../barrels/Icons"
import * as MUI from "../../barrels/MUI"

export default function Error({ message, colorText}) {
  return (
    message !== "" && (
      <MUI.Box sx={{display: "flex", flexDirection:"row",justifyContent:"start-flex",alignItems:"center",width:"100%", gap:1, mt:"20px"}}>
        <Icon.Error sx={{ color: "var(--red)" }} />
        <MUI.Typography variant="textError" >
          {message}
        </MUI.Typography>
      </MUI.Box>
    )
  );
}
