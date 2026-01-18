// *role: embrace the site context, implement global paddong*
// and take care of theme mode as well

// material ui components
import * as MUI from "../../utils/MUI"
// react imports
import { useContext } from "react";
import { SiteContext } from "../../App";

export default function SiteWrapper({ children }) {
  const { colorText, colorTheme } = useContext(SiteContext);
  return (
    <MUI.Container maxWidth={false} disableGutters>
      <MUI.Box
        component="main"
        sx={{
          py: "var(--spacing-global-padding-y-mobile)",
          px: "var(--spacing-global-padding-x-mobile)",
          fontFamily: "Inter, sans-serif",
          backgroundColor: colorText ,
          color: colorTheme,
          minHeight: "100vh",
        }}
      >
        {children}
      </MUI.Box>
    </MUI.Container>
  );
}

// why paddings are like this?
