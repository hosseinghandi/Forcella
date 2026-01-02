import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import  Button  from "../ui/Button";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import Skeleton from "@mui/material/Skeleton";



export default function SpecialCard ({offered}) {
    const {t} = useTranslation()
    const messages = {
        offer : t("metadata.pizza.offer"),
        description : t("metadata.pizza.description"),
        order : t("metadata.button.order")
    }

    

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
                <Typography sx={{fontWeight:700}}>{messages.offer}</Typography>
                <Typography variant="body2"><strong>{`${offeredPizza.discount}%`}</strong> {messages.description}</Typography>
                <CardActions sx={{padding:"0"}}>
                    <Button 
                    type="submit"
                    title={messages.order}
                    to={"/applayout/shoppingbag"}
                    color={"white"}
                    shrink={true}
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
}


