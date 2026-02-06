
import { createTheme } from "@mui/material";
  
  export const appTheme = createTheme({
        typography: {
          fontFamily: "Inter, sans-serif",

          // general text size for all design
          "textNormal" : {
            fontSize: "var(--textNormal)",
            fontWeight : 400, 
          }, 
          "textLabel" : {
            fontSize: "var(--textLabel)",
            fontWeight : 300, 
          },
          "logoText" : {
            fontSize : "var(--logoText) ",
            fontWeight : 500,
          },
          // font for "Welcomeing page"
          "titleWelcoming": {
            fontSize : "var(--titleWelcoming) ",
            fontWeight : 900, 
            textAlign:"left"
          },
          "textWelcomingInfo" : {
            fontSize: "var(--textWelcomingInfo)",
            fontWeight : 400, 
            letterSpacing : 1.5,
            textAlign:"left"
          }, 
          "pizzaContentBold" : {
            fontSize : "var(--pizzaContentBold) ",
            fontWeight : "900"
          }, 





          
          
          "profileWelcoming": {
            fontSize : "34px",
            fontWeight : "400"
          },
          "titleBold" : {
            fontSize : "16px",
            fontWeight : "900"
          }, 
          "titleBoldInfo" : {
            fontSize : "18px",
            fontWeight : "900"
          },
          "textSmall" : {
            fontSize : "14px",
            fontWeight : "200", 
          },
          "textError" : {
            color:"var(--red)",
            fontSize : "clamp(1rem, var(--initial-16px-at375px), 1.2rem)",
            fontWeight : "400"
          },
          "textHead" : {
            fontSize : "17px",
            fontWeight : "400"
          },
          "textNotification" : {
            fontSize : "12px",
            fontWeight : "400"
          },
          

          "textProfileBold" : {
            fontSize:"15px",
            fontWeight:600,
            
          }
        },
        components: {
            MuiTypography: {
              styleOverrides:{
                root:{
                  lineHeight: 1
                }
              }
            },
            MuiTableCell: {
              styleOverrides: {
                root: {
                  padding: "5px 0",
                },
              },
            },
             MuiCard:{
              styleOverrides: {
                root: {         
                  borderRadius: "var(--radius)", 
                  width: "100%",
                  backgroundColor: "var(--gray)",
                  boxShadow: "none",
                  padding: "var(--cardPaddingY) var(--cardPaddingX)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
            }
          }
                }
          },
        breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 765,
          special: 1024,
          lg: 1200,
          xl: 1536,
        },
        }
      });