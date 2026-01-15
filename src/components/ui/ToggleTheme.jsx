// role: on request inform the app context to change the theme mode

import * as MUI from "../../utils/MUI"
import * as Icon from "../../utils/Icons"

export default function ToggelTheme({ value, setValue, colorTheme }) {
  return (
    <MUI.Button
      onClick={() => setValue(!value)}
      variant="outlined"
      sx={{
        border: "none",
        outline: "none",
        minWidth: 0,
        width: 30,
        height: 30,
        padding: 0,
        borderRadius: "50%",
        backgroundColor: "#B55638",
        color: colorTheme,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {value ? 
      <Icon.BrightnessHigh
          sx={{
            width: "18px",
          }}
        />
        :
        <Icon.Bedtime
          sx={{
            width: "18px",
          }}
        /> 
      }
    </MUI.Button>
  );
}
