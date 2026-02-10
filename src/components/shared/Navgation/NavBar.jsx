// *role: help user to navigate through app*
// router imports
import { Link } from "react-router-dom";
import * as MUI from "../../../barrels/MUI"
import * as requests from "../../../barrels/requests"
import { useTheme } from "../../../providers/Theme"
export default function NavBar({mode,current,pizzaLikedNum, pizzaInCartNum}) {
  
  const pathList = requests.requestList("nav_path_list")
  const {colors} = useTheme()
  const comparisonTo = (path) => (current.split("/").at(-1).includes(path.split("/").at(-1)))
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
                           ...( !comparisonTo(path) && {scale: 1.2})
                          },
                  ...(
                    {color:(comparisonTo(path)) ? 
                    mode ? "var(--black-bg)" : "var(--orange)" : "var(--white-bg)"}
                  ),

                  transform: comparisonTo(path)
                  ? "scale(1.3)" : "scale(1)",
                  transition: "all 0.25s ease-in-out",
                }}

              > 
                      {
                      path.includes("cart") || path.includes("wish") 
                      ? 
                      <MUI.Badge 
                        sx={{
                          "& .MuiBadge-badge": {

                            backgroundColor: comparisonTo(path) 
                            ? mode ? "var(--orange)" : "var(--white-bg)" 
                            : !comparisonTo(path) && mode ? "var(--black-bg)" : "var(--white-bg)",
                            color: mode ? "var(--white-bg)" : "var(--black-bg)",

                            border: comparisonTo(path) && mode ? "1px solid var(--white-bg)" : "none",
                            transform: comparisonTo(path) && "scale(0.7)",
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
                        path.includes("wish") ?  pizzaLikedNum : null
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
