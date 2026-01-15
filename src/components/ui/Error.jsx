// *role : on request render an error*

// material ui icons for error

import * as Icon from "../../utils/Icons"
import * as MUI from "../../utils/MUI"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

// material ui component
import {Box,Typography} from "@mui/material";

export default function Error({ message, colorText}) {
  return (
    message !== "" && (
      <MUI.Box sx={{display: "flex", flexDirection:"row", gap:1}}>
        <Icon.Error sx={{ color: "var(--red)" }} />
        <MUI.Typography variant="textError" sx={{ color: "var(--red)" }}>
          {message}
        </MUI.Typography>
      </MUI.Box>
    )
  );
}
