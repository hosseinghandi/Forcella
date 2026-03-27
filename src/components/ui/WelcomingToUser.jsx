// role:Welcome the user when they signup, login
import * as MUI from "../../barrels/MUI";
import * as UI from "../../barrels/UI";
export default function WelcomingToUser({
  greeting,
  userName,
  mainMessage,
  subMessage,
}) {
  return (
    <MUI.Box
      sx={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <MUI.Box
        role="status"
        aria-live="polite"
        sx={{
          maxWidth: { xs: "80vw", md: "80vw", lg: "60vw" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        <MUI.Typography component={"h1"} variant="welcomingToUserName">
          {`${greeting}${userName ? ` ${userName}` : ""}`}
          <br />
        </MUI.Typography>

        <MUI.Typography component={"p"} variant="welcomingToUserNormal">
          {mainMessage}
        </MUI.Typography>
        <MUI.Box
          sx={{
            display: "flex",

            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: "5vh", lg: "var(--GlobalgapOfItems)" },
            alignItems: { xs: "center" },
          }}
        >
          <MUI.Box
            sx={{ width: { xs: "100%", lg: "fit-content" }, textAlign: "left" }}
          >
            <MUI.Typography component={"p"} variant="welcomingToUserNormal">
              {subMessage}
            </MUI.Typography>
          </MUI.Box>

          <MUI.Typography
            sx={{
              width: "fit-content",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              height: "100%",
              marginBottom: "20px",
            }}
            component={"span"}
            variant="welcomingToUserNormal"
          >
            <UI.BouncingLoader />
          </MUI.Typography>
        </MUI.Box>
      </MUI.Box>
    </MUI.Box>
  );
}
