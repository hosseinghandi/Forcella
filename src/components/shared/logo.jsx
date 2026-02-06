// *Role: Render the logo and the name of app

// logo image
import * as Icon from "../../barrels/Icons";
import * as MUI from "../../barrels/MUI";
import { useTheme } from "../../providers/Theme";
import {Link, useLocation }from "react-router-dom";


export default function Logo() {
  const { colors } = useTheme();
  // check if this is render in applayout page if yes, change text to link to nvigate to menu when is cliked
  const location = useLocation()
  return (
    <MUI.Box 
    component={"div"}
    sx={{ display: "flex", flexDirection: "row", alignItems:"flex-end"}}>
        {
        location.pathname.includes("/applayout") ?
        <Link 
        to={"/applayout/menu"} 
        aria-label="Navigate to menu"
        >FORCELLA</Link> :
        <MUI.Typography 
        component={"span"}
        variant="logoText" 
        sx={{lineHeight:{sm:0.85}}} > FORCELLA </MUI.Typography>
        }
      <Icon.Pizza aria-hidden={true} focusable={true} sx={{ color: colors.text}} />
    </MUI.Box>
  );
}
