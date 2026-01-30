import { useTheme } from "../../../providers/Theme";
import { useNavigate } from "react-router-dom";
import * as MUI from "../../../barrels/MUI"
import * as Icon from "../../../barrels/Icons"
import * as UI from "../../../barrels/UI"
export default function Navigation ({varient}) {
    const navigate = useNavigate();
    const {colors} = useTheme()
    return (
                   <MUI.Box
                     sx={{
                       display: "flex",
                       flexDirection: {
                        xs: "column", 
                        md: "row-reverse"},
                       ...(varient === "navigation" ?
                        {justifyContent:  {xs:"flex-end", md:"flex-start" }, gap : "var(--gapOfLogoAndArrow)"} 
                        :{justifyContent:"space-between" , gap : 0} ),
                       alignItems: {
                        xs:"flex-end", 
                        md: "center"},
                       width: "100%",
                     }}
                   >
                     <UI.Logo color={colors.text} />
                     <MUI.IconButton 
                     sx={{
                       "&:hover": {
                        backgroundColor: "var(--orange)",
                      },
                      padding:"0", border:`1px solid ${colors.text}`}} 
                     onClick={() => navigate(-1)}>
                             <Icon.Arrow 
                             role={"navigation"}
                             sx={{height:"var(--arrowDimension)",width:"var(--arrowDimension)", order:"2"}}
                             aria-label="Navigate to previous page"
                             htmlColor= {colors.text} /> 
                     </MUI.IconButton>
                      </MUI.Box>
    )
}