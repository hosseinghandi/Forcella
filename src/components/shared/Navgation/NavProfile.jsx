// role: navigation for profile pages which includes log out and edit
import { useNavigate, useLocation } from "react-router-dom";
import * as MUI from "../../../barrels/MUI";
import * as UI from "../../../barrels/UI";
import * as Icons from "../../../barrels/Icons";
import { useTheme } from "../../../providers/Theme";
import { useUserData } from "../../../providers/UserData";
import useRequestText from "../../../hook/useRequestText";

export default function NavProfile({
  exit,
  setExit,
  editMode,
  setEditMode,
  navBar,
}) {
  const { colors } = useTheme();
  const { fetchedUserdata } = useUserData();
  const pizzaLikedNum = fetchedUserdata?.likedPizzasId?.length ?? 0;
  const pizzaInCartNum = fetchedUserdata?.pizzaInCartId?.length ?? 0;
  const navigate = useNavigate();
  const location = useLocation();
  const { text } = useRequestText("profile");

  return (
    <>
      {/* navigation main holder */}
      <MUI.Box
        component="nav"
        aria-label="Main navigation"
        sx={{
          mb: "var(--GlobalgapOfGrids)",
          display: "grid",
          width: "100%",
          gridTemplateAreas: {
            xs: `
                "iconLogo editMode"
                "nav nav"
              `,
            md: `"iconLogo editMode nav"`,
            special: `"iconLogo editMode nav"`,
          },
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            md: "max-content 1fr 1fr",
            special: "max-content 1fr 1.45fr",
            lg: "max-content 1fr 1.3fr",
            xl: "max-content 1fr 40vw",
          },
        }}
      >
        {/* navBar holder */}
        {navBar && (
          <MUI.Box sx={{ gridArea: "nav", width: "100%" }}>
            <UI.NavBar
              current={location.pathname}
              pizzaLikedNum={pizzaLikedNum}
              pizzaInCartNum={pizzaInCartNum}
            />
          </MUI.Box>
        )}
        {/* icon and logo */}
        <MUI.Box
          sx={{
            gridArea: "iconLogo",
            display: "flex",
            flexDirection: "row",
            gap: "var(--gapOfLogoAndArrow)",
            alignItems: "center",
            width: "100%",
          }}
        >
          <MUI.IconButton
            aria-label="Navigate to previous page"
            sx={{
              "&:hover": {
                backgroundColor: "var(--orange)",
              },
              padding: "0",
              border: `1px solid ${colors.text}`,
            }}
            onClick={() => navigate(-1)}
          >
            <Icons.Arrow
              aria-hidden="true"
              sx={{
                height: "var(--iconsize)",
                width: "var(--iconsize)",
                order: "2",
              }}
              htmlColor={colors.text}
            />
          </MUI.IconButton>
          <UI.Logo color={colors.text} />
        </MUI.Box>
        {/* log out icon */}
        <MUI.Box
          sx={{
            gridArea: "editMode",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            padding: "0 60px",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <MUI.IconButton
            disableFocusRipple={true}
            disableRipple={true}
            onClick={() => setExit(true)}
            aria-label="Log out"
            sx={{
              padding: "0",
              color: editMode ? " var(--orange)" : colors.text,
            }}
          >
            <Icons.LogOut
              aria-hidden="true"
              sx={{
                height: "calc(var(--iconsize)* 1.3)",
                width: "calc(var(--iconsize)* 1.3)",
              }}
            />
          </MUI.IconButton>
          {/* edit */}
          <MUI.IconButton
            disableFocusRipple={true}
            disableRipple={true}
            onClick={() => setEditMode((prev) => !prev)}
            aria-label={editMode ? "Cancel edit" : "Edit profile"}
            sx={{
              padding: "0",
              height: "var(--iconsize)",
              width: "var(--iconsize)",
              color: editMode ? " var(--orange)" : colors.text,
            }}
          >
            <Icons.EditPen
              aria-hidden="true"
              sx={{
                height: "calc(var(--iconsize)* 1.3)",
                width: "calc(var(--iconsize)* 1.3)",
              }}
            />
            <MUI.Typography
              variant="textNormal"
              sx={{ marginLeft: "calc(var(--GlobalgapOfGrids) /2 )" }}
            >
              {`${text.button.edit}`}
            </MUI.Typography>
          </MUI.IconButton>
        </MUI.Box>
      </MUI.Box>
      <UI.ConfirmationDialog
        onClose={() => setExit(false)}
        open={exit}
        message={text.logOut.message}
        actOnPositive={() => navigate("/welcome")}
        positiveBtnName={text.button.seeYouSoon}
        actOnNegative={() => setExit(false)}
        negativeBtnName={text.button.no_stay}
      />
    </>
  );
}
