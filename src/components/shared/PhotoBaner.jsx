// role: rendering and controlling the size of background pizza 
import pizzaSlice from "/pizza-image/margherita.png";
import * as MUI from "../../barrels/MUI"
import { useTheme } from "../../providers/Theme";
export default function PhotoBaner() {
    const {mode} = useTheme()
    return (
        <MUI.Box
                  component="img"
                  src={pizzaSlice}
                  aria-hidden="true"
                  sx={{
                    opacity:mode ? 0.1 : 0.2,
                    position:"fixed",
                    left: {xs:"-50vh", lg:"-30vh"}, 
                    top: {xs:"-30vh",lg:"-10vh", xl:"-2vh"},
                    height:"90%",
                    zIndex:-1
                  }}
                />
    )
}

