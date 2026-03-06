import * as MUI from "../../barrels/MUI";
import * as UI from "../../barrels/UI";
export default function EmptyList({image,title,message, buttontitle}) {
    return (
        <UI.LayoutHandeler
          style={{
            width: "100%",
            height:"70vh",            
          }}
        >
        <MUI.Box sx={{
            display:"flex",
            flexDirection:"column", 
            gap:"var(--GlobalgapOfGrids)",
            justifyContent:"center", 
            alignItems:"center"}}>
            
            <MUI.Box
            component="img"
            sx={{width:"30vh", height:"30vh"}}
            src={image}
            />
            <MUI.Typography variant="emptyCart">{title}</MUI.Typography>
            <MUI.Typography variant="textNormal">{message}</MUI.Typography>
            <UI.ButtonBasic
                type="button"
                title={buttontitle}
                to={"/menu"}
                shrink={true}
            />
          </MUI.Box>
        </UI.LayoutHandeler>
    )
}
