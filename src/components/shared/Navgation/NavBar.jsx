// *role: help user to navigate through app*
// router imports
import { Link } from "react-router-dom";
import * as MUI from "../../../barrels/MUI"
import * as requests from "../../../barrels/requests"
import { useTheme } from "../../../providers/Theme"
export default function NavBar({mode,current,pizzaLikedNum, pizzaInCartNum}) {
  
  const pathList = requests.requestList("nav_path_list")
  const {colors} = useTheme()
  const comparisonTo = (page) => (current.split("/").at(-1) === page)
  return (
    <MUI.Box
      sx={{
        height: "var(--filterAndNavSize)",
        position: {xs:"fixed", special:"unset" , lg:"unset"},
        left: {xs:"0"},
        bottom: {xs:"20px"},
        width: "100%",
        px: {xs:"var(--spacing-global-padding-x-mobile)",
           md:"var(--spacing-global-padding-x-tablet)", 
           special:"unset"},
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
        {pathList.map(({ link, page, Icon }) => (
          <Link to={link} key={page} replace>
              <MUI.Box

                sx={
                  {
                  "&:hover" : {
                           ...( !comparisonTo(page) && {scale: 1.3})
                          },
                  ...(
                    {color:
                      (comparisonTo(page)) ? 
                      mode ? "var(--black-bg)" : "var(--orange)" : 
                      !current.includes("wish") && current.includes(page) ? "var(--black-bg)" : "var(--white-bg)",                   
                  }
                  ),

                  transform: comparisonTo(page)
                  ? "scale(1.25)" : 
                  !current.includes("wish") && current.includes(page) ? "scale(1.3)" : "scale(1)",
                  transition: "all 0.25s ease-in-out",
                }
              }

              > 
                      {
                      page.includes("cart") && pizzaInCartNum !== 0 
                      || page.includes("wish") && pizzaLikedNum !== 0  ? 
                        <MUI.Badge 
                          sx={{
                            "& .MuiBadge-badge": {
  
                              backgroundColor: comparisonTo(page) 
                              ? mode ? "var(--orange)" : "var(--white-bg)" 
                              : !comparisonTo(page) && mode ? "var(--black-bg)" : "var(--white-bg)",
                              color: mode ? "var(--white-bg)" : "var(--black-bg)",
  
                              border: comparisonTo(page) && mode ? "1px solid var(--white-bg)" : "none",
                              transform: comparisonTo(page) && "scale(0.7)",
                            }
                          }
                          }
                          showZero={false}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                          }}
                          badgeContent={
                          page.includes("cart") ? pizzaInCartNum :   
                          page.includes("wish") ?  pizzaLikedNum : null
                          }>
                            <Icon 
                            sx={{width:"var(--iconsize)", 
                            height:"var(--iconsize)", 
                            "&:hover" : {                            
                              color : mode ? "var(--black-bg)" : "var(--orange)",
                              scale: 1.3
                            }
                            }}/>
                        </MUI.Badge>  :
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
