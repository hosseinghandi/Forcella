// *role : render the image used for initial pages and adopted the image based on the requst* //

// cover image
import pizzaSlice from "/pizza-image/margherita.png";
import * as MUI from "../../utils/MUI";


export default function Header({ children, position }) {
  const positionValue = !position
    ? { left: "-110px", top: "-25px", position: "absolute" }
    : { left: "-110px", top: "-220px", position: "absolute" };

  return (
    <MUI.Box
      component="header"
      sx={{ width: "100%", height: position ? "15vh" : "42vh" }}
    >
      {/* Pizza image */}
      <MUI.Box
        component="img"
        src={pizzaSlice}
        alt="Margherita pizza"
        sx={{
          position: "absolute",
          left: "-110px",
          height: {
            xs: "42vh",
            md: "50vh",
          },
          transform: position ? "translateY(-20px)" : "translateY(-25px)",
          transition: "transform 0.7s ease-in-out",
          ...positionValue, // if this is an sx-compatible object
        }}
      />
        {children}
    </MUI.Box>
  );
}
