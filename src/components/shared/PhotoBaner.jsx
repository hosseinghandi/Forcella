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
                    left: {xs:"-100vw", lg:"-30vw", xl:"-25vw"}, 
                    top: {xs:"-50vw",lg:"-20vw", xl:"-20vw"},
                    height:{xs:"160vw",md:"150vw", lg:"70vw",xl:"60vw"},
                    zIndex:-1
                  }}
                />
    )
}

