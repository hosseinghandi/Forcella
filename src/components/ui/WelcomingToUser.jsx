import * as MUI from "../../barrels/MUI";
import * as UI from "../../barrels/UI";

export default function WelcomingToUser({ greeting, userName, mainMessage, subMessage }) {
  return (
    <>
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
          sx={{
            maxWidth: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <MUI.Typography component={"span"} variant="welcomingToUserName">
            {`${greeting} ${userName ?? ""}`}
            <br />
          </MUI.Typography>

          <MUI.Typography component={"span"} 
          variant="welcomingToUserNormal">
            {mainMessage}
          </MUI.Typography>
          <MUI.Typography 
          component={"span"} 
          variant="welcomingToUserNormal">
            {subMessage}
          </MUI.Typography>
        </MUI.Box>
      </MUI.Box>
    </>
  );
}
