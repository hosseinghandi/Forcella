// *role : make ui clickable switch to change the languge*

// material ui elements
import { FormControlLabel, Switch } from "@mui/material";

export default function SwitchLabels({ value, setValue, colorTheme }) {
  return (
    <FormControlLabel
      sx={{
        gap: 0,
        margin: 0,
      }}
      control={
        <Switch
          onClick={() => setValue(prev => prev === "en" ? "it" : "en" )}
          sx={{
            width: 85,
            height: 25,
            padding: 0,
            display: "flex",
            alignItems: "center",

            "& .MuiSwitch-switchBase": {
              padding: 0,
              margin: 0,
              outline: "none",
              transform: "translateX(0px)",

              "&.Mui-checked": {
                transform: "translateX(60px)", // 85 - 17
                "& + .MuiSwitch-track": {
                  backgroundColor: "#B55638",
                  opacity: 1,
                },
              },
            },

            "& .MuiSwitch-thumb": {
              width: 25,
              height: 25,
              outline: "none",
              // border: "none", border should be rmoved
              borderRadius: "50%",
              backgroundColor: colorTheme,
            },

            "& .MuiSwitch-track": {
              borderRadius: 8.5,
              backgroundColor: "#B55638",
              opacity: 1,
              position: "relative",

              "&::before": {
                content: `"${value.toUpperCase()}"`,
                position: "absolute",
                top: "50%",
                transform: value
                  ? "translateY(-50%) translateX(40px)"
                  : "translateY(-50%) translateX(26px)",
                fontSize: 14,
                fontWeight: 600,
                pointerEvents: "none",

                transition: "left 0.35s ease-in-out", // 👈 smooth & slightly slow
              },
            },
          }}
        />
      }
    />
  );
}
