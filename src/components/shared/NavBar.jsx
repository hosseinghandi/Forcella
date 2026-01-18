// *role: help user to navigate through app*
// router imports
import { Link } from "react-router-dom";

import * as Icon from "../../utils/Icons"
import * as MUI from "../../utils/MUI"

export default function NavBar({mode,current,pizzaLikedNum, pizzaInCartNum }) {

  const pathList = [
    { path: "menu", icon: Icon.Pizza },
    { path: "favorites", icon: Icon.Heart },
    { path: "shoppingbag", icon: Icon.ShoppingBag },
    { path: "profile", icon: Icon.Person_bold },
  ];

  return (
    <MUI.Box
      component="nav"
      sx={{
        position: "fixed",
        left: 0,
        bottom: "20px",
        width: "100%",
        px: "calc(var(--spacing-global-padding-x-mobile))",
        zIndex: 999,
      }}
    >
      <MUI.Box
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
              <MUI.Box
                sx={{
                  ...({color:( current.includes(path)) ? mode ? "black" : "var(--orange)" : "white"}),
                  transform: ( current.includes(path)) ? "scale(1.3)" : "scale(1)",
                  transition: "all 0.25s ease-in-out",
                }}
              > 
                      <MUI.Badge 
                        sx={{
                          "& .MuiBadge-badge": {
                            backgroundColor: current.includes(path) ? "white" : "var(--orange)",
                            color: current.includes(path) ? "black" : "white",
                            transform: ( current.includes(path)) && "scale(.7)"
                          }
                        }
                        }
                        showZero={false}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        
                        badgeContent={
                        path.includes("shoppingbag") ? pizzaInCartNum : 
                        path.includes("favorites") ? pizzaLikedNum : 0
                        }>
                          <Icon/>
                      </MUI.Badge>
              </MUI.Box>
          </Link>
        ))}
      </MUI.Box>
    </MUI.Box>
  );
}
