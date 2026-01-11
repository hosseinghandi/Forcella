// role: on request inform the app context to change the theme mode

// matrial ui elements
import Button from "@mui/material/Button";
// matrial icon for theme switcher
import BedtimeIcon from "@mui/icons-material/Bedtime";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";

export default function ToggelTheme({ value, setValue, colorTheme }) {
  return (
    <Button
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
      {value ? (
        <BedtimeIcon
          sx={{
            width: "18px",
          }}
        />
      ) : (
        <BrightnessHighIcon
          sx={{
            width: "18px",
          }}
        />
      )}
    </Button>
  );
}
