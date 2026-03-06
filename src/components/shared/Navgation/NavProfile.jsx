import { useNavigate, useLocation } from "react-router-dom";
import * as MUI from "../../../barrels/MUI";
import * as UI from "../../../barrels/UI";
import * as Icons from "../../../barrels/Icons";
import { useTheme } from "../../../providers/Theme";
import { useUserData } from "../../../providers/UserData";
import { useLanguage } from "../../../providers/Language";
import useRequestText from "../../../hook/useRequestText";

export default function NavProfile({
  exit,
  setExit,
  editMode,
  setEditMode,
  navBar,
}) {
  const { mode, colors } = useTheme();
  const { userdata } = useUserData();
  const {lang} = useLanguage()
  const pizzaLikedNum = userdata["likedPizzasId"].length;
  const pizzaInCartNum = userdata["pizzaInCartId"].length;
  const navigate = useNavigate();
  const location = useLocation();
  const {logOut} = useRequestText("profile");

  return (
    <>
      <MUI.Dialog
        PaperProps={{
          sx: {
            borderRadius: "25px",
            padding: "28px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--gapClickableSetup)",
            height: "fit-content",
          },
        }}
        onClose={exit}
        open={exit}
        fullWidth
        maxWidth="md"
      >
        <MUI.Typography>
          {logOut.message}
        </MUI.Typography>
        <MUI.Box sx={{ display: "flex", flexDirection: "row", gap: 8 }}>
          <UI.ButtonBasic
            type="submit"
            title={logOut.yes}
            to={"/welcome"}
            //  task={setExit}
            shrink={true}
          />
          <UI.ButtonBasic
            type="submit"
            title={logOut.no}
            task={setExit}
            shrink={true}
          />
        </MUI.Box>
      </MUI.Dialog>

      {/* navigation main holder */}
      <MUI.Box
        sx={{
          mb:"var(--GlobalgapOfGrids)",
          display: "grid",
          width: "100%",
          gridTemplateAreas: {
              xs: `
                "iconLogo editMode"
                "nav nav"
              `,

            md:`"iconLogo editMode nav"`,
            special:`"iconLogo editMode nav"`,

          },
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            md: `"max-content 1fr 1fr"`,
            special:"max-content 1fr 1.45fr",
            lg:"max-content 1fr 1.3fr",
            xl:"max-content 1fr 40vw",
            

          },
        }}
      >
        {/* navBar holder */}
        {navBar && (
          <MUI.Box
            sx={{ gridArea: "nav", width: "100%"}}
          >
            <UI.NavBar
              mode={mode}
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
            alignItems:"center",
            width: "100%",
          }}
        >
          <MUI.IconButton
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
              role={"navigation"}
              sx={{
                height: "var(--iconsize)",
                width: "var(--iconsize)",
                order: "2",
              }}
              aria-label="Navigate to previous page"
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
            padding:`0 ${ lang === "it" ? "60px": "40px"}`,
            justifyContent: "flex-end",
            alignItems: "center",
            gap: `${ lang === "it" ? "60px": "40px"}`,
          }}
        >
            <MUI.IconButton
              disableFocusRipple={true}
              disableRipple={true}
              sx={{
                padding: "0",
                color: editMode ? " var(--orange)" : colors.text,
              }}
            >
              <Icons.LogOut sx={{
                height: "calc(var(--iconsize)* 1.3)",
                width: "calc(var(--iconsize)* 1.3)",}} 
                onClick={() => setExit((prev) => !prev)} />
            </MUI.IconButton>
          
          {/* edit */}
            <MUI.IconButton
              disableFocusRipple={true}
              disableRipple={true}
              onClick={() => setEditMode((prev) => !prev)}
              sx={{
                padding: "0",
                height: "var(--iconsize)",
                width: "var(--iconsize)",
                color: editMode ? " var(--orange)" : colors.text,
              }}
            >
              <Icons.EditPen 
                sx={{
                height: "calc(var(--iconsize)* 1.3)",
                width: "calc(var(--iconsize)* 1.3)",}}  />
              <MUI.Typography 
              variant="textNormal" 
              sx={{ marginLeft: "calc(var(--GlobalgapOfGrids) /2 )" }}>
                {`${lang === "it" ? "Modifica" : "Edit" }`}
              </MUI.Typography>
            </MUI.IconButton>
        </MUI.Box>
      </MUI.Box>
    </>
  );
}
