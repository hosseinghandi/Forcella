import * as MUI from "../../barrels/MUI"
import * as UI from "../../barrels/UI"
export default function E404({pathname}) {
    
    const checkpath = (p) => {
        const checkPath = 
        ["/welcome","/login","/signup","/menu","/profile","/cart"]
        const path = checkPath?.filter(page => p.includes(page))[0]
        return (
            <UI.ButtonBasic
                        type="submit"
                        title={path? `go to ${path?.split("/")[1]}` : "Refresh the page"}
                        to={!!path ? path : "/" }
                        shrink={true}
                        color={"white"}
                      />
        )
        
    }
    
    return (
        <>
        <MUI.Box sx={{ 
            position: "fixed",
                inset: 0,
                display: "flex",
                justifyContent: "center",
                zIndex: -1}}>
            <MUI.Box sx={{
                maxWidth:"50%",
                display: "flex",
                gap:"var(--GlobalgapOfGrids)",
                flexDirection:"column",
                justifyContent: "center",
                alignItems: "center"}}>
                <MUI.Typography variant="Error404">404</MUI.Typography>
                <MUI.Typography variant="textNormalTitles">Oops! It looks like you're lost.</MUI.Typography>
                <MUI.Typography variant="textNormal">It might have been moved or deleted</MUI.Typography>
                {checkpath(pathname)}
            </MUI.Box>
        </MUI.Box>
        </>
    )
}