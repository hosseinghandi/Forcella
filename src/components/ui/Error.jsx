// *role : on request render an error*

// material ui icons for error
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

// material ui component
import {Box,Typography} from "@mui/material";

export default function Error({ message, colorText}) {
  return (
    message !== "" && (
      <Box sx={{display: "flex", flexDirection:"row", gap:1}}>
        <ErrorOutlineIcon sx={{ color: "var(--red)" }} />
        <Typography variant="textError" sx={{ color: "var(--red)" }}>
          {message}
        </Typography>
      </Box>
    )
  );
}
