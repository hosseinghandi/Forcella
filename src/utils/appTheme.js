
  import { createTheme } from "@mui/material";
  
  export const appTheme = createTheme({
        typography: {
          fontFamily: "Inter, sans-serif",
          "titleWelcoming": {
            fontSize : "34px",
            fontWeight : "900"
          },
          "titleBold" : {
            fontSize : "16px",
            fontWeight : "900"
          }, 
          "titleBoldInfo" : {
            fontSize : "18px",
            fontWeight : "900"
          },
          "textNormal" : {
            fontSize : "15px",
            fontWeight : "400"
          }, 
          "textError" : {
            fontSize : "18px",
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
          "logoText" : {
            fontSize : "16px",
            fontWeight : "400"
          },
          "pizzaContentBold" : {
            fontSize : "16px",
            fontWeight : "900"
          }, 
          "star" : {
            fontSize : "15px"
          }
        },
        
        breakpoints: {
          values : {
            xs : 0,
            sm : 500,
          }
        }
      });