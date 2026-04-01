// role: creating varient for MUI typograghy and setting repetitive styling
import { createTheme } from "@mui/material";
export const appTheme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",

    // general text size for all design
    textNormal: {
      fontSize: "var(--textNormal)",
      fontWeight: 400,
    },
    textNormalTitles: {
      fontSize: "var(--textNormalTitles)",
      fontWeight: 400,
    },
    textLabel: {
      fontSize: "var(--textLabel)",
      fontWeight: 300,
    },
    logoText: {
      fontSize: "var(--logoText) ",
      fontWeight: 500,
    },
    // font for "Welcomeing page"
    titleWelcoming: {
      fontSize: "var(--titleWelcoming) ",
      fontWeight: 900,
      textAlign: "left",
    },
    textWelcomingInfo: {
      fontSize: "var(--textWelcomingInfo)",
      fontWeight: 400,
      letterSpacing: 1.2,
      lineHeight: 1.5,
      textAlign: "left",
    },
    pizzaContentBold: {
      fontSize: "var(--pizzaContentBold) ",
      fontWeight: "900",
    },
    textError: {
      color: "var(--red)",
      fontSize: "var(--textNormal)",
      fontWeight: 400,
    },
    emptyCart: {
      color: "var(--orange)",
      fontSize: "var(--emptylists)",
      fontWeight: 900,
    },
    Error404: {
      fontSize: "var(--E404)",
      color: "var(--orange)",
      lineHeight: 1,
      fontWeight: 900,
      textAlign: "left",
    },
    welcomingToUserName: {
      fontSize: "var(--welcomingToUserName)",
      fontWeight: 900,
    },
    welcomingToUserNormal: {
      fontSize: "calc(var(--welcomingToUserName) /1.5)",
      fontWeight: 400,
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "5px 0",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid var(--black-bg)",
          borderRadius: "var(--radius)",
          width: "100%",
          backgroundColor: "var(--gray)",
          boxShadow: "none",
          padding: "var(--cardPaddingY) var(--cardPaddingX)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 765,
      // critical breaking point
      special: 1024, 
      lg: 1200,
      xl: 1536,
    },
  },
});
