// *render the logo and the name of app*
// logo image
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";

// Material UI
import { Box, Typography } from "@mui/material";

import { siteContext } from "../../App";
import { useContext } from "react";
export default function Logo() {
  const { colorTheme } = useContext(siteContext);
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Typography variant="logoText">FORCELLA</Typography>
      <LocalPizzaIcon sx={{ color: colorTheme }} />
    </Box>
  );
}
