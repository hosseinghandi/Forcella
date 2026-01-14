// *role : help to navigate through app act as header*

// ui components
import Logo from "./Logo";
import Filter from "./Filter";

// material ui icons for sharednavbar
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// material ui componenets
import { Box, IconButton } from "@mui/material";
// router imports
import { useNavigate } from "react-router-dom";
// import react 
import { useContext } from "react";
// import context 
import { siteContext } from "../../App";

export default function SharedNavigation({distance, filter, colorTheme, colorText }) {
  const navigate = useNavigate();
  // const {colorTheme, colorText} = useContext(siteContext)

  return (
    <Box
      sx={{
        padding: "10px 0",
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
        <IconButton sx={{padding:"0"}} onClick={() => navigate(-1)}>
          <ArrowBackIcon htmlColor= {colorTheme} /> 
        </IconButton>
        <Logo color={colorTheme} />
      </Box>

      {filter && (
        <Box sx={{ mt: 1 }}>
          <Filter colorText={colorText}/>
        </Box>
      )}
    </Box>
  );
}
