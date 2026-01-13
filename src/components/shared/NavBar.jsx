// *role: help user to navigate through app*
// react imports
import { Link } from "react-router-dom";

// matrial ui icons for navbar
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// material ui components
import { Box, IconButton } from "@mui/material";

export default function NavBar({ mode, current }) {
  const pathList = [
    { path: "/applayout/menu", icon: LocalPizzaIcon },
    { path: "/applayout/favorites", icon: FavoriteOutlinedIcon },
    { path: "/applayout/shoppingbag", icon: ShoppingBagOutlinedIcon },
    { path: "/applayout/profile", icon: PersonOutlinedIcon },
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
          backgroundColor: "var(--dark)",
          borderRadius: "25px",
        }}
      >
        {pathList.map(({ path, icon: Icon }) => (
          <Link to={path} key={path}>
            <IconButton>
              <Box
                sx={{
                  color: current === path ? "var(--orange)" : "#fff",
                  transform: current === path ? "scale(1.2)" : "scale(1)",
                  transition: "all 0.25s ease",
                }}
              >
                <Icon />
              </Box>
            </IconButton>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
