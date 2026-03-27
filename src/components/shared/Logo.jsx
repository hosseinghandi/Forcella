// *Role: wrap the logo and teh name together

import * as Icons from "../../barrels/Icons";
import * as MUI from "../../barrels/MUI";
import { useTheme } from "../../providers/Theme";


export default function Logo() {
  const { colors } = useTheme();

  return (
    <MUI.Box 
    aria-label="Forcella logo"
    sx={{ display: "flex", flexDirection: "row", alignItems:"flex-end"}}>
        <MUI.Typography 
        component={"span"}
        variant="logoText" 
        sx={{lineHeight:{sm:0.85}}} > FORCELLA </MUI.Typography>
      <Icons.Pizza aria-hidden={true} focusable={false} sx={{ color: colors.text}} />
    </MUI.Box>
  );
}
