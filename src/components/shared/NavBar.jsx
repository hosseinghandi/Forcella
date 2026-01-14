// *role: help user to navigate through app*
// react imports
import { Link } from "react-router-dom";

// matrial ui icons for navbar
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// material ui components
import { Box, IconButton, Typography } from "@mui/material";

export default function NavBar({mode,current,pizzaLikedNum, pizzaInCartNum }) {

  const pathList = [
    { path: "menu", icon: LocalPizzaIcon },
    { path: "favorites", icon: FavoriteOutlinedIcon },
    { path: "shoppingbag", icon: ShoppingBagOutlinedIcon },
    { path: "profile", icon: PersonOutlinedIcon },
  ];

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        left: 0,
        bottom: "20px",
        width: "100%",
        px: "calc(var(--spacing-global-padding-x-mobile) * 2)",
        zIndex: 999,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          height: "50px",
          borderRadius: "25px",
          ...({ backgroundColor: mode ? "var(--orange)": "var(--dark)"})
          
        }}
      >
        {pathList.map(({ path, icon: Icon }) => (
          <Link to={path} key={path}>
            
            <IconButton>
              <Box
                sx={{
                  ...({color:( current.includes(path)) ? mode ? "black" : "var(--orange)" : "white"}),
                  transform: ( current.includes(path)) ? "scale(1.3)" : "scale(1)",
                  transition: "all 0.25s ease",
                }}
              > 
                <Box component={"div"} sx={{position:"relative"}}>
                  <Typography 
                  sx={{color:"white", 
                  position:"absolute", 
                  fontSize:"10px"}}> 
                    {path.includes("favorites") ? 
                    pizzaLikedNum !== 0 && pizzaLikedNum: path.includes("shoppingbag") && 
                    pizzaInCartNum !== 0 && pizzaInCartNum}
                  </Typography>
                  <Icon />
                </Box>
              </Box>
            </IconButton>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
