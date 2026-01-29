// *role: help user to navigate through app*
// router imports
import { Link } from "react-router-dom";
import * as MUI from "../../barrels/MUI"
import * as Icon from "../../barrels/Icons"
// import * as helpers from "../../barrels/helpers"
// import {useRequestData} from"../../hook/useRequestData"
export default function NavBar({mode,current,pizzaLikedNum, pizzaInCartNum }) {

  // const pathList = helpers.useRequestData("pathList")
  const pathList = [
              { path: "menu", Icon: Icon.Pizza },
              { path: "favorites", Icon: Icon.Heart },
              { path: "shoppingbag", Icon: Icon.ShoppingBag },
              { path: "profile", Icon: Icon.Person_bold },
        ]
  return (
    <MUI.Box
      component="nav"
      sx={{
        position: "fixed",
        left: "0",
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
        {pathList.map(({ path, Icon }) => (
          <Link to={path} key={path}>
              <MUI.Box
                sx={{
                  ...({color:( current.includes(path)) ? mode ? "black" : "var(--orange)" : "white"}),
                  transform: ( current.includes(path)) ? "scale(1.3)" : "scale(1)",
                  transition: "all 0.25s ease-in-out",
                }}
              > 
                      {
                      path.includes("shoppingbag") || path.includes("favorites") 
                      ? 
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
                        path.includes("favorites") ?  pizzaLikedNum : null
                        }>
                          <Icon/>
                      </MUI.Badge> : 
                      <Icon/>
                      }
              </MUI.Box>
          </Link>
        ))}
      </MUI.Box>
    </MUI.Box>
  );
}
