// *role : on request render passed pizza as special offer*

import * as MUI from "../../barrels/MUI"
import * as UI from "../../barrels/UI"

import { memo } from "react"
// ui component

import { useTheme } from "../../providers/Theme";
import useRequestText from "../../hook/useRequestText";
export default memo(function SpecialCard({ offered, colorText}) {
const{colors} = useTheme() 
const text = useRequestText("offer")

    const offeredPizza = {
        name : offered[0].name,
        img : offered[0].image,
        discount : offered[0].offered.percentage
    }

return (<MUI.Card
            sx={{
                position:{xs:"relative", special:"unset"},
                overflow:"hidden",
                width:"100%",
                height:{xs:"var(--cardSizeMain)", sm:"100%"},
            }}
            >
            {/* main wrapper */}
            <MUI.Box 
            sx={{width:{xs:"100%", lg:"fit-content"}, height : {xs:"100%", special:"fit-content"}, display: "flex", justifyContent: {xs:"space-between", special:"normal"}, 
            alignItems:"center",flexDirection: {xs:"row", special:"column"}}}>
                
            <MUI.CardContent 
            sx={{width:{xs:"60%", special:"100%"},height:{xs:"100%", special:"fit-content"}, padding: "0" , display:"flex",
            flexDirection:"column" ,justifyContent:"space-between", 
            gap:{xs:"var(--specialGap)"},order:{special:2}
            }}>
                <MUI.Box sx={{display:"flex", flexDirection:"column", gap:"var(--specialGap)"}}>
                    <MUI.Typography variant="pizzaContentBold">{text.title}</MUI.Typography>
                    <MUI.Typography variant="textNormal"><strong>{`${offeredPizza.discount}%`}</strong> {text.description}</MUI.Typography>
                </MUI.Box>
                <MUI.CardActions sx={{padding:"0"}}>
                    <UI.ButtonBasic 
                    type="submit"
                    title={text.button}
                    to={"/applayout/shoppingbag"}
                    color={colors.text}
                    shrink={true}
                    nonActive ={false}
                    disabled={false}
                    ></UI.ButtonBasic>
                </MUI.CardActions>
            </MUI.CardContent>

            <MUI.CardMedia
                component="img"
                alt={`A photo of ${offeredPizza.name} pizza`}
                image={offeredPizza.img}
                sx={{ 
                    padding:"0", 
                    width:{xs:"100%", special:"var(--pizzaImageSizelg)"},
                    height: {xs:"50vw", special:"var(--pizzaImageSizelg)"}, 
                    position:{xs:"absolute", special:"unset"},
                    bottom:0,
                    right:"-30vw",
                    objectFit:"contain",
                    transformOrigin: "center center",
                    animation: {xs:"spinIn 50s linear infinite", special:"scalePulse 2s linear infinite"},

                    "@keyframes spinIn": {
                    from: {
                        transform: "rotate(0deg)",
                    },
                    to: {
                        transform: "rotate(350deg)",
                    }
                },
                    "@keyframes scalePulse": {
                        "0%, 100%": {
                            transform: "scale(0.9)",
                        },
                        "50%": {
                            transform: "scale(1)",
                        },
                    }
            }
            }
                />
            </MUI.Box>
            </MUI.Card>
    )
})


