// *role : help to navigate through app act as header*

// ui components
import Logo from "./Logo";
import Filter from "./Filter";

// material ui icons for sharednavbar
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// material ui componenets
import { Box, IconButton } from "@mui/material";
// react imports
import { useNavigate } from "react-router-dom";

export default function SharedNavigation({ mode, backTo, distance, filter }) {
  const navigate = useNavigate();

  const colorTheme = mode ? "#000000" : "#FFFFFF" ;
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: distance ? "100%" : "45%",
        }}
      >
        <IconButton onClick={() => navigate(backTo)}>
          <ArrowBackIcon sx={{ color: colorTheme }} />
        </IconButton>

        <Logo color={colorTheme} />
      </Box>

      {filter && (
        <Box sx={{ mt: 1 }}>
          <Filter/>
        </Box>
      )}
    </Box>
  );
}
