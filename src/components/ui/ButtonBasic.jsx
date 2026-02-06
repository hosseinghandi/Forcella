// *role: on request make button as desgined *

// todo list:
// maybe pding in case of small button can be a little bit changed or even the sie van be handeled better


// required material
import * as MUI from "../../barrels/MUI"
// required imports
import { useNavigate } from "react-router-dom";

// hint
// id: if required to inform any state baed on the id 
// type : the type of the button such as submit, if null => button 
// title : the title by which the button is presented 
// to : this uses mostly to navigate the user specific page 
// task : the funtion passed through props to be called when clicked
// shtink : shrink the size of element to fit content 
// nonctive : make the button transparent to inform the user which button is active 
// disabled: use for cases that form is not completed or inputs still are not valid 

export default function ButtonBasic({
  id,
  type,
  title,
  to,
  task,
  disabled,
  shrink,
  nonActive
}) {
  // use navigation to guide the user to specific page 
  const navigate = useNavigate();

  return (
    <MUI.Button
      type={type ?? "button"}
      onClick={() => task ? id ? task(id) : task() : navigate(to)}
      variant= {shrink ? "text" : "contained"}
      disabled={disabled}
      sx={{
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
