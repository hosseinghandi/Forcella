// *role: help user to navigate through app*
// router imports
import { Link } from "react-router-dom";
import * as MUI from "../../../barrels/MUI"
import * as requests from "../../../barrels/requests"
import { color } from "motion";
export default function NavBar({mode,current,pizzaLikedNum, pizzaInCartNum}) {
  
  const pathList = requests.requestList("nav_path_list")

  console.log()
  return (
    <MUI.Box
      sx={{
        height: "var(--filterAndNavSize)",
        position: {xs:"fixed", special:"unset" , lg:"unset"},
        left: {xs:"0"},
        bottom: {xs:"20px"},
        width: "100%",
        px: {xs:"var(--spacing-global-padding-x-mobile)", md:"var(--spacing-global-padding-x-tablet)", special:"unset"},
        zIndex: 999,
      }}
    >
      <MUI.Box
      component="nav"
      role="navigation"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          height: "100%",
          borderRadius: "25px",
          ...({ backgroundColor: mode ? "var(--orange)": "var(--black-bg)"})
          
        }}
      >
        {pathList.map(({ path, Icon }) => (
          <Link to={path} key={path} replace>
              <MUI.Box
                sx={{
                  "&:hover" : {
                           ...( !current.includes(path) && {scale: 1.2})
                          },
                  ...({color:( current.split("/").at(-1).includes(path)) ? mode ? "black" : "var(--orange)" : "var(--white-bg)"}),
                  transform: ( current.includes(path)) ? "scale(1.3)" : "scale(1)",
                  transition: "all 0.25s ease-in-out",
                }}
              > 
                      {
                      path.includes("cart") || path.includes("favorites") 
                      ? 
                      <MUI.Badge 
                        sx={{
                          "& .MuiBadge-badge": {
                            backgroundColor: mode ? "var(--black-bg)" : "var(--orange)",
                            color: current.includes(path) ? "black" : "white",
                            transform: ( current.includes(path)) && "scale(0.7)",
                          }
                        }
                        }
                        showZero={false}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        badgeContent={
                        path.includes("cart") ? pizzaInCartNum :   
                        path.includes("favorites") ?  pizzaLikedNum : null
                        }>
                          <Icon 
                          sx={{width:"var(--iconsize)", 
                          height:"var(--iconsize)", 
                          "&:hover" : {
                            color : mode ? "var(--black-bg)" : "var(--orange)",
                            scale: 1.3
                          }
                          }}/>
                      </MUI.Badge> : 
                      <Icon 
                      sx={{
                          
                          width:"var(--iconsize)", 
                          height:"var(--iconsize)", 
                          "&:hover" : {
                            color : mode ? "var(--black-bg)" : "var(--orange)",
                          }
                          }}/>
                      }
              </MUI.Box>
          </Link>
        ))}
      </MUI.Box>
    </MUI.Box>
  );
}
