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

