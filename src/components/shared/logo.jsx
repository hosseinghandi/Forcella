// *render the logo and the name of app*
// logo image
import * as Icon from "../../utils/Icons";

// Material UI
import { Box, Typography } from "@mui/material";

import {Link, useLocation }from "react-router-dom";
import { siteContext } from "../../App";
import { useContext } from "react";
export default function Logo() {
  const { colorTheme } = useContext(siteContext);
  const location = useLocation()
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Typography variant="logoText">
        {
        location.pathname.includes("/applayout") ?
        <Link to={"/applayout/menu"}>FORCELLA</Link> :
        <Typography variant="logoText"> FORCELLA </Typography>
        }
        </Typography>
      <Icon.Pizza sx={{ color: colorTheme }} />
    </Box>
  );
}
