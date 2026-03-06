import { useNavigate} from "react-router-dom";
import * as MUI from "../../../barrels/MUI"
import * as Icons from "../../../barrels/Icons"
import * as UI from "../../../barrels/UI"
import { useLanguage } from "../../../providers/Language";
import { useTheme } from "../../../providers/Theme";
import useHandelUserPerference from "../../../hook/useHandelUserPereference";
export default function NavigationBasic ({distance, switches}) {

    const {colors, mode, setMode} = useTheme()
    const {lang, setLang} = useLanguage

    const navigate = useNavigate();
    return (     
       <MUI.Box
                     sx={{
                        display: "flex",
                        width:"100%",
                        ...( distance ?
                        { 
                        justifyContent:  
                        {xs: "space-between"}, 

                        flexDirection: {xs:"row-reverse"},

                        gap : "var(--gapOfLogoAndArrow)", 
                        alignItems : "flex-end" }
                        : 
                       {  
                        gap : "var(--gapOfLogoAndArrow)", 
                        justifyContent:{xs:"center", sm:"flex-start"},
                        alignItems:{xs:"flex-end", sm:"center"},
                        flexDirection:{xs:"column", sm:"row-reverse"}
                      }
                      ),
                      ...(switches &&
                         {flexDirection: {
                          xs:"column", 
                          lg:"row-reverse"},
                        gap: "var(--gapClickableSetup)",
                        alignItems: {
                          xs:"flex-end",
                          lg:"center"},}
                      )

                     }}


                   >  
                    {/* logo holder */}
                      <UI.Logo 
                      color={colors.theme}/>
                      { switches ? 
                        <>
                        <UI.SwitchLanguage 
                        setValue={setLang} 
                        colorTheme={colors.theme} />
                        
                        <UI.ToggleTheme 
                        value={mode} 
                        setValue={setMode} 
                        colorTheme={colors.theme} />
                        <MUI.Box > 
                        <UI.ButtonBasic
                          title={"next"}
                          to="/menu"
                          shrink={true}
                        />
                          </MUI.Box> 
                        </> 
                        :
                      <MUI.IconButton 
                      sx={{
                        "&:hover": {
                          backgroundColor: "var(--orange)",
                        },
                        padding:"0", border:`1px solid ${colors.text}`}} 
                        onClick={() => navigate(-1)}>
                              <Icons.Arrow 
                              role={"navigation"}
                              sx={{height:"var(--iconsize)",width:"var(--iconsize)", order:"2"}}
                              aria-label="Navigate to previous page"
                              htmlColor= {colors.text} /> 
                      </MUI.IconButton>
                      }
      </MUI.Box>
  
                    
                  
    )
}



