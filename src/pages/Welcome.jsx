import useRequestText from "../hook/useRequestText";
import * as MUI from "../barrels/MUI"
import * as UI from "../barrels/UI"

export default function Welcome() {
  
  const text = useRequestText("welcoming")
  
  return (
    <>
      <UI.SharedNavigation varient={"welcoming"}/>
       <UI.LayoutHandeler
       style={
        {
                marginTop:{xs:"10vh", lg:"unset"},
                // margin:"auto",
                width:"100%", 
                height:{xs:"50vh" ,lg:"85vh"},
                }
       }>
        <MUI.Box
          sx={{
            maxWidth:"1100px",
            textAlign: "left",
            width: "100%",
          }}
        >
          <MUI.Typography
            variant="titleWelcoming"
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
              special:"row"
            },
            marginTop : "var(--GlobalgapOfItems)",
            gap: "var(--GlobalgapOfInputs)",
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
    </UI.LayoutHandeler>
    </>
  );
}
