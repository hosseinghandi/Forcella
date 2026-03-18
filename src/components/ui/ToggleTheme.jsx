// role: on request inform the app context to change the theme mode

import * as MUI from "../../barrels/MUI"
import * as Icon from "../../barrels/Icons"
import { useTheme } from "../../providers/Theme"
import useUpdateUser from "../../hook/useUserUpdate"


export default function ToggelTheme() {
  const {colors, mode} = useTheme()
  const {toggleTheme} = useUpdateUser()
  return (
    <MUI.Button
      aria-pressed={mode}
      aria-label={`Toggle theme (${mode ? "Dark" : "Light"})`}
      onClick={() => {toggleTheme()}}
      
      variant="contained"
      sx={{
        border: "none",
        outline: "none",
        minWidth: 0,
        width: "var(--toggleDimension)",
        height: "var(--toggleDimension)",
        padding: 0,
        borderRadius: "50%",
        backgroundColor: "#B55638",
        color: colors.text,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {mode ? 
      <Icon.BrightnessHigh
          sx={{width: "calc(var(--toggleDimension) / 1.65)",}}
        />
        :
        <Icon.Bedtime
          sx={{width: "calc(var(--toggleDimension) / 1.65)",}}
        /> 
      }
    </MUI.Button>
  );
}
