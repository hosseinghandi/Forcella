// *role : render the image used for initial pages and adopted the image based on the functionality of the page* //


// to do list 
// i need to handel aniomation here


// cover image
import pizzaSlice from "/pizza-image/margherita.png";
// required imports
import * as MUI from "../../../barrels/MUI";

export default function NavigationWrapper({ children, position, photobaner }) {
  // the position takes a boolean value to figure out if the page is sign up, since there 
  // we need more space to render inputs respect to login and welcoming page
  
  const positionValue = !position
    ? { left: {xs:"-15vh", lg:"-20vh", xl:"-15vw"}, top: "-25px", position: "absolute" }
    : { left: {xs:"-15vh", lg:"-20vh", xl:"-25vh"}, top: "-220px", position: "absolute" };

  return photobaner ?( 
       <MUI.Box
      component="header"
      sx={{
        width: "100%", height: {
        xs :position ? "15vh" : "37vh",
        md : position ? "5vh" : "48vh",
        lg : "fit-content",
        xl : "fit-content",
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
                    padding: "10px 0",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    
                  }}
                  >
                    {children}
                          
                </MUI.Box>


    }

