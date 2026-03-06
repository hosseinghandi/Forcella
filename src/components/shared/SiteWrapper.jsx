// *role: embrace the site context, implement global paddong*
// and take care of theme mode as well

// material ui components
import * as MUI from "../../barrels/MUI"
import * as UI from "../../barrels/UI"
// react imports
import {useTheme} from  "../../providers/Theme"

export default function SiteWrapper({ children }) {
  const {colors} = useTheme()
    const positionDefault = { 
    left: {xs:"-18vh", lg:"-20vh", xl:"-30vh"}, 
    position: "absolute" }
  return (
      <MUI.Box
        component="main"
        sx={{
          py: {
            xs : "var(--spacing-global-padding-y-mobile)",
            md: "var(--spacing-global-padding-y-tablet)",
            special: "var(--spacing-global-padding-y-desktop)",
          },
          px: {
            xs:"var(--spacing-global-padding-x-mobile)",
            md:"var(--spacing-global-padding-x-tablet)",
            special: "var(--spacing-global-padding-x-desktop)",
          },

          fontFamily: "Inter, sans-serif",
          backgroundColor: colors.theme ,
          color: colors.text,
          minHeight: "100vh",
          position:"relative",
          zIndex:0
        }}
      >
        <UI.PhotoBaner 
        position={"deafult"} 
        positionValue={positionDefault}/>
        <MUI.Box sx={{zIndex:999}}>
        {children}
        </MUI.Box>
      </MUI.Box>
  );
}
