import * as MUI from "../../barrels/MUI"
export default function LayoutType1({children}) {
 return (
<MUI.Box sx={{
    // border:"1px solid red",
        width:"100%", 
        height:{lg:"70vh"},
        display:"flex", 
        justifyContent:{
          xs: "center",
          lg: "flex-end"
          }}}>
      <MUI.Box
        sx={{
          px : {
            sm: "var(--welcome-content-padding-tablet)",
          },
          width:{
            lg: "65%",
          },
          display: "flex",
          flexDirection: "column",
          gap:"var(--GlobalgapOfInputs)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </MUI.Box>
      </MUI.Box>
 )
}


