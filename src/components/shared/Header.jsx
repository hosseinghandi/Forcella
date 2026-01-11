// *role : render the image used for initial pages and adopted the image based on the requst* //

// cover image 
import pizzaSlice from "/pizza-image/margherita.png";
// Material UI
import Box from "@mui/material/Box";

export default function Header({children, position}) {
    
    const positionValue = !position ? 
    {left: "-110px", top: "-25px", position : "absolute"} : 
    {left: "-110px", top: "-220px", position : "absolute"}  
    
    return(
    <Box 
    component="header"
    sx={{width : "100%" , 
        height : position ? "15vh" : "42vh"}}>
                {/* Pizza image */}
                <Box
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
                transform: position
                    ? "translateY(-20px)"
                    : "translateY(-25px)",
                transition: "transform 0.7s ease-in-out",
                ...positionValue, // if this is an sx-compatible object
                }}
                />
                {/* Logo + language */}
                <Box 
                sx={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: "8px",
                        }}>
                {children}
                </Box>
            </Box>
    )
}


