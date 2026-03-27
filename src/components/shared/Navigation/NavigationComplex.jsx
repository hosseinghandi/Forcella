// role: navigation for complex pages
import { useTheme } from "../../../providers/Theme";
import { useNavigate, useLocation } from "react-router-dom";
import * as MUI from "../../../barrels/MUI";
import * as Icon from "../../../barrels/Icons";
import * as UI from "../../../barrels/UI";
import { useUserData } from "../../../providers/UserData";

export default function NavigationComplex({ filter, navBar, headText }) {
  const navigate = useNavigate();
  const { colors } = useTheme();
  const { fetchedUserdata } = useUserData();
  const pizzaLikedNum = fetchedUserdata?.likedPizzasId?.length ?? 0;
  const pizzaInCartNum = fetchedUserdata?.pizzaInCartId?.length ?? 0;
  const location = useLocation();

  return (
    <MUI.Box
      component="nav"
      aria-label="Main navigation"
      sx={{
        mb: { md: "var(--GlobalgapOfGrids)" },
        width: "100%",
        display: "grid",
        rowGap: { xs: filter ? "0" : "10px", md: "0" },
        columnGap: {
          xs: "0",
          special: "calc(var(--GlobalgapOfGrids) / 2 )",
        },
        gridTemplateAreas: {
          xs: `
                        "icon logo"
                        "filter filter"
                        "pageTitle pageTitle"
                      `,

          md: `"icon ${filter ? "logo filter" : "pageTitle logo"}"`,
          special: `"icon ${filter ? "logo filter" : "pageTitle logo"} nav"`,
          lg: `"icon ${filter ? "logo filter" : "pageTitle logo"} nav"`,
          xl: ` "icon ${filter ? "logo filter" : "pageTitle logo"} nav"`,
        },
        gridTemplateColumns: {
          xs: "repeat(2, 1fr)",
          md: `max-content ${filter ? "20vw 1fr" : "1fr max-content"}`,
          special: `max-content ${filter ? "max-content max-content" : "max-content 2fr"} 1.35fr`,
          lg: `max-content  ${filter ? "1fr max-content" : "max-content 2fr"} 30vw`,
          xl: `max-content ${filter ? "1fr max-content" : "max-content 2fr"} 40vw`,
        },
        alignItems: "center",
      }}
    >
      {/* logo wrapper */}
      <MUI.Box
        sx={{
          width: "100%",
          gridArea: "logo",
          display: { xs: "flex", md: "flex", special: "flex", lg: "flex" },
          justifyContent: { xs: "flex-end", md: "center", special: "flex-end" },
        }}
      >
        <UI.Logo />
      </MUI.Box>

      <MUI.Box sx={{ gridArea: "icon", width: "100%" }}>
        <MUI.IconButton
          aria-label="Navigate to previous page"
          sx={{
            "&:hover": {
              backgroundColor: "var(--orange)",
            },
            padding: "0",
            border: `1px solid ${colors.text}`,
          }}
          onClick={() => {
            navigate(-1);
          }}
        >
          <Icon.Arrow
            aria-hidden="true"
            sx={{
              height: "var(--iconsize)",
              width: "var(--iconsize)",
              order: "2",
            }}
            htmlColor={colors.text}
          />
        </MUI.IconButton>
      </MUI.Box>
      <MUI.Box sx={{ gridArea: "nav", width: "100%" }}>
        {navBar && (
          <UI.NavBar
            current={location.pathname}
            pizzaLikedNum={pizzaLikedNum}
            pizzaInCartNum={pizzaInCartNum}
          />
        )}
      </MUI.Box>
      {filter ? (
        <MUI.Box sx={{ gridArea: "filter", width: "100%" }}>
          <UI.Filter colorText={colors.text} />
        </MUI.Box>
      ) : (
        <MUI.Box
          sx={{
            gridArea: "pageTitle",
            width: "100%",
            marginLeft: { md: "var(--GlobalgapOfGrids)" },
          }}
        >
          <MUI.Typography component={"p"} variant="logoText">
            {headText}
          </MUI.Typography>
        </MUI.Box>
      )}
    </MUI.Box>
  );
}
