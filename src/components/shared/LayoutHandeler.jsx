import * as MUI from "../../barrels/MUI"

export default function LayoutHandeler({children, style}) {

 return (
<MUI.Box sx={{...style}}
          >
      <MUI.Box
        sx={{
          width:"100%",
          height:"100%",
          // px : {
          //   xs: "var(--welcome-content-padding-tablet)",
          // },
          display: "flex",
          flexDirection: {xs:"column" , md:"row"},
          gap:"var(--GlobalgapOfInputs)",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        <MUI.Box>
        {children}
        </MUI.Box>
      </MUI.Box>
      </MUI.Box>
 )
}