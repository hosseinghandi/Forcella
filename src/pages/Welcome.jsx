// role: render welcome page using its components
import useRequestText from "../hook/useRequestText";
import * as MUI from "../barrels/MUI";
import * as UI from "../barrels/UI";
export default function Welcome() {
  const text = useRequestText("welcoming");
  return (
    <>
      <UI.SharedNavigation variant={"welcoming"} />
      <UI.LayoutHandeler
        style={{
          marginTop: { xs: "10vh", lg: "unset" },
          width: "100%",
          height: { xs: "50vh", lg: "85vh" },
        }}
      >
        <MUI.Box
          sx={{
            maxWidth: "1100px",
            textAlign: "left",
            width: "100%",
          }}
        >
          <MUI.Typography component={"h1"} variant="titleWelcoming">
            {text.title}
          </MUI.Typography>
          <UI.BubbleToggel dataList={text.highlights} />
        </MUI.Box>

        {/* Buttons wrapper*/}
        <MUI.Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            marginTop: "var(--GlobalgapOfItems)",
            gap: "var(--GlobalgapOfInputs)",
            width: "100%",
          }}
        >
          <UI.ButtonBasic
            aria-label="Go to login page"
            title={text.button.login}
            to="/login"
          />
          <UI.ButtonBasic
            aria-label="Go to sign up page"
            title={text.button.signup}
            to="/signup"
          />
        </MUI.Box>
      </UI.LayoutHandeler>
    </>
  );
}
