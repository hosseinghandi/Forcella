
import useRequestText from "../hook/useRequestText";
import * as MUI from "../barrels/MUI"
import * as UI from "../barrels/UI"

export default function Welcome() {
  const text = useRequestText("welcoming")
  return (
    <>
      <UI.SharedNavigation varient={"welcoming"} photobaner={true}/>
       <UI.LayoutType1>
        <MUI.Box
          sx={{
            textAlign: "left",
            width: "100%",

          }}
        >
          <MUI.Typography
            variant="titleWelcoming"
            sx={{fontSize:{xl:"5.5rem"}}}
          >
            {text.title}
          </MUI.Typography>

          <UI.BubbleToggel 
          dataList={text.highlights} />
        </MUI.Box>

        {/* Buttons */}
        <MUI.Box
          sx={{
            display: "flex",
            flexDirection: 
            { xs: "column",
              sm: "column",
              md:"row"
            },
            marginTop : "var(--GlobalgapOfItems)",
            gap: "10px",
            width: "100%",
          }}
        >
          <UI.ButtonBasic
            title={text.button.login}
            to="/login"
            color="white"
            disabled={false}
          />
          <UI.ButtonBasic
            title={text.button.signup}
            to="/signup"
            color="white"
            disabled={false}
          />
        </MUI.Box>
    </UI.LayoutType1>
    </>
  );
}
