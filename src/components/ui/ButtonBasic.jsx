// *role: on request make button as desgined based on the given props
import * as MUI from "../../barrels/MUI";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../providers/Theme";

export default function ButtonBasic({
  id,
  type,
  title,
  to,
  task,
  disabled,
  shrink,
  isActive,
  ...rest
}) {
  // use navigation to guide the user to specific page
  const navigate = useNavigate();
  const { mode } = useTheme();

  const handleClick = () => {
    // if task is there check if needs id or not
    if (task) {
      id ? task(id) : task();
      return;
    }
    // if to exist means it should be used to navigate to anotehr page/section
    if (to) {
      navigate(to);
    }
  };
  return (
    <MUI.Button
      {...rest}
      type={type ?? "button"}
      onClick={handleClick}
      variant={shrink ? "text" : "contained"}
      disabled={disabled}
      aria-disabled={disabled ? disabled : undefined}
      aria-current={isActive ? true: undefined}
      sx={{
        "&.Mui-disabled": {
          ...(mode
            ? {
                opacity: 0.2,
                backgroundColor: "var(--gray)",
                color: "var(--black-bg)",
              }
            : {
                color: "var(--white-bg)",
              }),
        },
        fontSize: "var(--butonText)",
        textTransform: "capitalize",
        border: "none",
        outline: "none",
        fontWeight: 400,
        width: shrink ? "fit-content" : "100%",
        height: shrink ? "fit-content" : "var(--buttonAndInputSize)",
        borderRadius: "25px",
        backgroundColor: "#B55638",
        color: "var(--white-text)",
        opacity: (isActive ?? true) ? 1 :  "20%",
        ...(shrink && { padding: "1px 10px" }),
      }}
    >
      {title ?? "button"}
    </MUI.Button>
  );
}
