import pizzaSlice from "/pizza-image/margherita.png";
import * as MUI from "../../barrels/MUI"
import { useTheme } from "../../providers/Theme";
export default function PhotoBaner() {
    const {mode} = useTheme()
    return (
        <MUI.Box 
        
        sx={{
            height:"100%",
            width:"fit-content"}}>
        <MUI.Box
                  component="img"
                  src={pizzaSlice}
                  alt="A Margherita pizza in left side of header"
                  sx={{
                    opacity:mode ? 0.1 : 0.2,
                    position:"fixed",
                    left: {xs:"-50vh", lg:"-30vh"}, 
                    top: {xs:"-30vh",lg:"-10vh", xl:"-2vh"},
                    height:"90%",
                    zIndex:-1
                  }}
                />
                </MUI.Box>
       
    )
}



    // const positionTop = { 
    //     left: {xs:"-15vh", lg:"-20vh", xl:"-25vh"}, 
    //     top: {xs:"-23vh", sm:"-20vh", md:"-35vh",lg:"-35vw", xl:"-60vh"}, 
    //     position: "absolute" };
    
    // const positionDown = { 
    // left: {xs:"unset", lg:"-40vh", xl:"-25vh"}, 
    // bottom: {xs:"unset", lg:"calc(var(--Size-pizzaBaner-desktop) * -1)", xl:"-60vh"}, 
    // position: "absolute" };

    // const positionDefault = { 
    //     left: {xs:"-18vh", lg:"-20vh", xl:"-20vh"}, 
    //     top: {xs:"0", lg: "75px"}}

    // const {pathname} = useLocation()
    // console.log(pathname)

    // const positionSetup = {
    // "/login" : {
    //   position : positionDefault
    // },
    // "/signup" : {
    //   position : "top"
    // }, 
    // "/welcoming" : {
    //   distance:false,
    //   photobaner:true,
    //   switches : true,
    //   position : "default"
    // }