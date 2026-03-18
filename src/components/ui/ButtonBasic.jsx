// *role: on request make button as desgined *

// todo list:
// maybe pding in case of small button can be a little bit changed or even the sie van be handeled better


// required material
import * as MUI from "../../barrels/MUI"
// required imports
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../providers/Theme";

export default function ButtonBasic({
  id,
  type,
  title,
  to,
  state,
  task,
  disabled,
  shrink,
  nonActive
}) {
  // use navigation to guide the user to specific page 
  const navigate = useNavigate();
  const {mode} = useTheme()
  console.log(task)
  return (
    <MUI.Button
      
      type={type ?? "button"}
      onClick={() => task ? id ? task(id) : task() : 
        to && navigate(to)}
      variant= {shrink ? "text" : "contained"}
      disabled={disabled}
      sx={{
        "&.Mui-disabled": {
          
          ...( mode ? 
            {opacity:0.2,
            backgroundColor:"var(--gray)",
            color: "var(--black-bg)"} :
            {
            color: "var(--white-bg)"}
          ),


        },
        fontSize: "var(--butonText)",
        textTransform: "capitalize",
        border: "none",
        outline: "none",
        fontWeight:400,
        width: shrink ? "fit-content" : "100%",
        height: shrink ? "fit-content" : "var(--buttonAndInputSize)",
        borderRadius: "25px",
        backgroundColor: "#B55638",
        color: "var(--white-text)",
        ...(nonActive && {opacity : "20%"}),
        ...(shrink && { padding: "1px 10px"}),
      }}
    >
      {title}
    </MUI.Button>
  );
}
