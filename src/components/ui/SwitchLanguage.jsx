// *role : Make a switch to change the languge state*

import * as MUI from "../../barrels/MUI"
import { useTheme } from "../../providers/Theme";
import { useTranslation } from "react-i18next";
import useUpdateUser from "../../hook/useUserUpdate"

export default function SwitchLanguage() {
  const {colors} = useTheme()

  const { i18n } = useTranslation()
  const lang = i18n.language
  const shownLang = lang === "it" ? "en" : "it" 
  console.log(lang)
  const {changeLanguage} = useUpdateUser()

  return (
        <MUI.Switch
          checked={lang === "it"}
          aria-label={`Language: ${lang === "it" ? "Italian" : "English"}`}
          onChange={() => changeLanguage()}
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
                content: `"${shownLang.toUpperCase()}"`,
                color: colors.text,
                position: "absolute",
                top: "50%",
                ...(shownLang === "it" ?{left :"30%"} : { right:"90%"}),
                transform: "translateY(-50%) translateX(calc(var(--switchDimension)))",
                fontSize: "var(--butonText)",
                fontWeight: 400,
                pointerEvents: "none",
              },
            },
          }}
        />
  );
}
