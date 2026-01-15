// *role : on request render passed pizza as special offer*

import * as MUI from "../../utils/MUI"
import * as UI from "../../utils/UI"

import { memo } from "react"
// ui component
import { useTranslation } from "react-i18next";

export default memo(function SpecialCard({ offered, colorText}) {

  const { t } = useTranslation();

  const messages = {
    offer: t("metadata.pizza.offer"),
    description: t("metadata.pizza.description"),
    order: t("metadata.button.order"),
  };

    const offeredPizza = {
        name : offered[0].name,
        img : offered[0].image,
        discount : offered[0].offered.percentage
    }

return (<MUI.Card
            key={1}
            sx={{
                height: { xs: "160px" },
                borderRadius: "25px",
                width: "100%",
                backgroundColor: "var(--gray)",
                boxShadow: "none",
                padding: "10px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
            >
            <MUI.Box sx={{width:"100%", height : "100%", display: "flex", justifyContent: "space-between", alignItems:"center"}}>
            <MUI.CardContent sx={{width:"60%", padding: "0" ,display:"flex", flexDirection:"column",justifyContent:"space-between", gap:1}}>
                <MUI.Typography variant="titleBold">{messages.offer}</MUI.Typography>
                <MUI.Typography variant="textNormal"><strong>{`${offeredPizza.discount}%`}</strong> {messages.description}</MUI.Typography>
                <MUI.CardActions sx={{padding:"0"}}>
                    <UI.ButtonBasic 
                    type="submit"
                    title={messages.order}
                    to={"/applayout/shoppingbag"}
                    color={colorText}
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
                sx={{ padding:"0", height: "100%", width: "fit-content"}}
                />
            </MUI.Box>
            </MUI.Card>
    )
})


