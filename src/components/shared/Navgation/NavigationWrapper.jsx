// *role : render the image used for initial pages and adopted the image based on the functionality of the page* //


// to do list 
// i need to handel aniomation here


// cover image
import pizzaSlice from "/pizza-image/margherita.png";
// required imports
import * as MUI from "../../../barrels/MUI";
export default function NavigationWrapper({ children, position, photobaner }) {

  const positionTop = { left: {xs:"-15vh", lg:"-20vh", xl:"-25vh"}, top: {xs:"-23vh", sm:"-20vh", md:"-35vh",lg:"-35vw", xl:"-60vh"}, position: "absolute" };
  const positionDown = { left: {xs:"-15vh", lg:"-20vh", xl:"-25vh"}, top: {xs:"-23vh", sm:"-20vh", md:"-35vh",lg:"-35vw", xl:"-60vh"}, position: "absolute" };
  const positionValue = !position
    ? { left: {xs:"-15vh", lg:"-20vh", xl:"-15vw"}, top: "-25px", position: "absolute" }
    : position === "top" ?  positionTop : positionDown

  return photobaner ?( 
    <MUI.Box
    component="header"
    sx={{
      width: "100%", height: {
        xs :position ? "16vh" : "37vh",
        sm : position ? "20vh" : "48vh",
        md : position ? "15vh" : "48vh",
        lg : position ? "17vh" : "fit-content",
        xl : position ? "30vh" : "fit-content",
      }}}>
      {/* Pizza image */}
        <MUI.Box
          component="img"
          src={pizzaSlice}
          alt="A Margherita pizza in left side of header"
          sx={{
            position: "absolute",
            height: {
              xs: "var(--Size-pizzaBaner-mobile)",
              md: "var(--Size-pizzaBaner-tablet)",
              lg: "var(--Size-pizzaBaner-desktop)",
              xl: "var(--Size-pizzaBaner-bigDesktop)",
            },
            transform: position ? "translateY(-20px)" : "translateY(-25px)",
            transition: "transform 0.7s ease-in-out",
            ...positionValue, // if this is an sx-compatible object
          }}
        />
        {children}
    </MUI.Box> ):
            <MUI.Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: {xs:"column",lg:"row"},
                    justifyContent: "flex-end",
                  }}
                  >
                    {children}
                </MUI.Box>
    }

