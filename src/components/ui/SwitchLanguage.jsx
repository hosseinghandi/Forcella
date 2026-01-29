// *role : Make a switch to change the languge state*

import * as MUI from "../../barrels/MUI"

import { useTheme } from "../../providers/Theme";
import { useLanguage } from "../../providers/Language";

export default function SwitchLanguage({ value, setValue}) {
  const {colors} = useTheme()
  const {lang, setLang} = useLanguage()
  return (
        <MUI.Switch
          checked={value === "it"}
          aria-label={`Language: ${lang === "it" ? "Italian" : "English"}`}
          onChange={() => 
            setLang(prev => prev === "en" ? "it" : "en" )
          }
          sx={{
            width: "calc(var(--switchDimension) * 3)",
            height: "var(--switchDimension)",
            padding: 0,
            display: "flex",
            alignItems: "center",

            "& .MuiSwitch-switchBase": {
              padding: 0,
              margin: 0,
              outline: "none",
              transform: "translateX(0px)",

              "&.Mui-checked": {
                transform: "translateX(calc(calc(var(--switchDimension) * 3) - var(--switchDimension)))",
                "& + .MuiSwitch-track": {
                  backgroundColor: "#B55638",
                  opacity: 1,
                },
              },
            },

            "& .MuiSwitch-thumb": {
              width: "var(--switchDimension)",
              height: "var(--switchDimension)",
              outline: "none",
              borderRadius: "50%",
              backgroundColor: colors.text,
            },

            "& .MuiSwitch-track": {
              borderRadius: 8.5,
              backgroundColor: "#B55638",
              opacity: 1,
              position: "relative",

              "&::before": {
                content: `"${lang.toUpperCase()}"`,
                color: colors.text,
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%) translateX(calc(var(--switchDimension) + 2.5px))",
                fontSize: "var(--butonText)",
                fontWeight: 400,
                pointerEvents: "none",
              },
            },
          }}
        />
  );
}
