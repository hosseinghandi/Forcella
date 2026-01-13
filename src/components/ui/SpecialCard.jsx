// *role : on request render passed pizza as special offer*

// material ui component
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { memo } from "react"
// ui component
import Button from "../ui/Button";

// import translator
import { useTranslation } from "react-i18next";

export default memo(function SpecialCard({ offered }) {

  const { t } = useTranslation();

  const messages = {
    offer: t("metadata.pizza.offer"),
    description: t("metadata.pizza.description"),
    order: t("metadata.button.order"),
  };

    // take a random pizza each time is rendered the page from offered product
    const RandomPizza = offered[Math.floor(Math.random()*offered.length)]
    // structure the data to share
    const offeredPizza = {
        name : RandomPizza.name,
        img : RandomPizza.image,
        discount : RandomPizza.offered.percentage
    }

return (<Card
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
            <Box sx={{width:"100%", height : "100%", display: "flex", justifyContent: "space-between", alignItems:"center"}}>
            <CardContent sx={{width:"60%", padding: "0" ,display:"flex", flexDirection:"column",justifyContent:"space-between", gap:1}}>
                <Typography variant="titleBold">{messages.offer}</Typography>
                <Typography variant="textNormal"><strong>{`${offeredPizza.discount}%`}</strong> {messages.description}</Typography>
                <CardActions sx={{padding:"0"}}>
                    <Button 
                    type="submit"
                    title={messages.order}
                    to={"/applayout/shoppingbag"}
                    color={"white"}
                    shrink={true}
                    nonActive ={false}
                    disabled={false}
              ></Button>
                </CardActions>
            </CardContent>
            <CardMedia
                component="img"
                alt={`A photo of ${offeredPizza.name} pizza`}
                image={offeredPizza.img}
                sx={{ padding:"0", height: "100%", width: "fit-content"}}
                />
            </Box>
            </Card>
    )
})


