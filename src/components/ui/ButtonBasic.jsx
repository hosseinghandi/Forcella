// *role: on request make button as desgined *

// material ui componenet
import * as MUI from "../../utils/MUI"
// react imports
import { useNavigate } from "react-router-dom";

export default function ButtonBasic({
  id,
  type,
  title,
  to,
  color,
  disabled,
  shrink,
  nonActive,
  task
}) {
  const navigate = useNavigate();
  return (
    <MUI.Button
      type={type}
      onClick={() => id ? task(id) : navigate(to)}
      variant="contained"
      disabled={disabled}
      sx={{
        fontSize: "1rem",
        textTransform: "capitalize",
        border: "none",
        outline: "none",
        width: shrink ? "fit-content" : "100%",
        height: shrink ? "fit-content" : "40px",
        borderRadius: "25px",
        backgroundColor: "#B55638",
        color: color,
        ...(shrink && { padding: "1px 10px" }),
        ...(nonActive && {opacity : "20%"})
      }}
    >
      {title}
    </MUI.Button>
  );
}
