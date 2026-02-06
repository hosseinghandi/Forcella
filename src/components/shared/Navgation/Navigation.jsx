import { useTheme } from "../../../providers/Theme";
import { useNavigate,useLocation } from "react-router-dom";
import * as MUI from "../../../barrels/MUI"
import * as Icon from "../../../barrels/Icons"
import * as UI from "../../../barrels/UI"
import {useUserData} from "../../../providers/UserData"

export default function Navigation ({varient, filter}) {
    const navigate = useNavigate();
    const {mode, colors} = useTheme()
    const {userdata} = useUserData()
    const pizzaLikedNum = userdata["likedPizzasId"].length
    const pizzaInCartNum = userdata["pizzaInCartId"].length
    const location = useLocation()
    return (     
              <MUI.Box 
               sx={{

                    width:"100%",
                    display: "grid",
                    columnGap:{special:"calc(var(--GlobalgapOfGrids) / 2 )", 
                      lg:"calc(var(--GlobalgapOfGrids) / 2 )"},
                      gridTemplateAreas: {
                      xs: `
                        "icon logo"
                        "filter filter"
                      `,
                      md:`"icon filter"`,
                      special:`"icon filter nav"`,
                      lg: `"icon filter nav"`,
                      xl:`"icon logo filter nav"`
                    },
                    gridTemplateColumns: {
                      xs: "repeat(2, 1fr)",  
                      md: "1fr auto", 
                      special:"max-content max-content 1fr",
                      lg:"max-content max-content 1fr ",
                      xl:"max-content max-content 1fr 1fr  "

                    },
                    alignItems:"center",
                    justifyContent: {
                      xs:"space-between",
                      lg: "space-between",
                      xl:"center",
                    },
                  }}>
                    {/* logo wrapper */}
                    <MUI.Box sx={
                      {
                      
                      width:"100%", gridArea:"logo", 
                      display:{xs:"flex",md:"none", xl:"flex"}, 
                      justifyContent:"flex-end"}}>
                      <UI.Logo color={colors.text}/>
                    </MUI.Box>
                    <MUI.Box sx={{gridArea:"icon", width:"100%"}}>
                      <MUI.IconButton 
                      sx={{
                        "&:hover": {
                          backgroundColor: "var(--orange)",
                        },
                        padding:"0", border:`1px solid ${colors.text}`}} 
                        onClick={() => navigate(-1)}>
                              <Icon.Arrow 
                              role={"navigation"}
                              sx={{height:"var(--iconsize)",width:"var(--iconsize)", order:"2"}}
                              aria-label="Navigate to previous page"
                              htmlColor= {colors.text} /> 
                      </MUI.IconButton>
                    </MUI.Box>
                    <MUI.Box sx={{gridArea:"nav",width:"100%"}}>
                      <UI.NavBar            mode={mode} 
                                            current={location.pathname} 
                                            pizzaLikedNum={pizzaLikedNum}
                                            pizzaInCartNum={pizzaInCartNum}
                                            />
                    </MUI.Box>
                     {
                        filter &&   
                        <MUI.Box sx={{gridArea:"filter", width:"100%"}}>
                          <UI.Filter colorText={colors.text}/>
                        </MUI.Box>
                        }
                        
              </MUI.Box>   
                    
                  
    )
}



//  <MUI.Box
//                      sx={{
//                         display: "flex",
//                         // if navigation for small device stack the children to make space
//                        ...(varient === "navigation" ?
//                         { 
//                         justifyContent:  
//                         {xs:"flex-end", md:"flex-start" }, 
//                         gap : "var(--gapOfLogoAndArrow)", 
//                         alignItems : "flex-end",
//                         flexDirection: {
//                         xs: "column", 
//                         md: "row-reverse"}}
//                         :
//                         // if main strech them as justify between to take all space
//                         {
//                         justifyContent:"space-between" , 
//                         gap : 0, 
//                         alignItems: {
//                         xs:"flex-end", 
//                         md: "center"},
//                         width: "100%",
//                         flexDirection: "row-reverse"} ),
//                      }}
//                    >  
//                      
//                       
//                         
//                        
//                      </MUI.Box>