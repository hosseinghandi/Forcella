import * as MUI from "../../../barrels/MUI"
import * as UI from "../../../barrels/UI"
import { useLanguage } from "../../../providers/Language";
import { useTheme } from "../../../providers/Theme";
export default function WelcomingNav() {
    const {colors, mode, setMode} = useTheme()
    const {lang, setLang} = useLanguage
    return (
                <>      
                      {/* items holder */}
                      <MUI.Box
                      component={"div"}
                      sx={{
                        display: "flex",
                        flexDirection: {
                          xs:"column", 
                          lg:"row-reverse"},
                        gap: "var(--gapClickableSetup)",
                        alignItems: {
                          xs:"flex-end",
                          lg:"center"},
                      }}
                    > 
                        <UI.Logo color={colors.theme} />
                        <UI.SwitchLanguage value={lang} setValue={setLang} colorTheme={colors.theme} />
                        <UI.ToggleTheme value={mode} setValue={setMode} colorTheme={colors.theme} />
                        <MUI.Box > 
                        <UI.ButtonBasic
                          title={"next"}
                          to="/applayout/menu"
                          shrink={true}
                        />
                                </MUI.Box>
                </MUI.Box> 
              </>
    )
}

