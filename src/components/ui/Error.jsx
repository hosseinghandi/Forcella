// *role : on request render an error 

import * as Icons from "../../barrels/Icons"
import * as MUI from "../../barrels/MUI"

export default function Error({ message, id="error-message"}) {
  if (!message) return null
  return (
      <MUI.Box 
      role="alert"
      sx={{
        display: "flex", flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",width:"fit-content", gap:2}}>
        <MUI.Typography 
          id={id}
          variant="textError" >
          {message}
        </MUI.Typography>
      </MUI.Box>
  );
}
