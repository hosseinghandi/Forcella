// react imports
import { useState, useContext, useCallback, useMemo } from "react";

// impoprt react router
import { useParams } from "react-router-dom";

// import translation
import { useTranslation } from "react-i18next";
// impoprt helper
import { useToggleAction } from "../hook/useToggleAction";
import {pizzaFinder} from "../utils/pizzaFinder"

// import app context
import { siteContext } from "../App";

// ui components
import SharedNavigation from "../components/shared/SharedNavigation";
import SpecialCard from "../components/ui/SpecialCard";
import PizzaHolder from "../components/ui/PizzaHolder";
import PizzaInfo from "../components/ui/PizzaInfo";
import Error from "../components/ui/Error";

// import material ui
import { Box, Typography} from "@mui/material";

export default function FavoritePizza() {
    // primary data set
    const [info, setInfo] = useState(null);
    const { userdata, colorText, colorTheme} = useContext(siteContext);
    const { t } = useTranslation();
    const pizzaRawData = t("pizzaItems", { returnObjects: true });

    // data preparation
    const favoritePizza = useMemo( () => pizzaFinder(pizzaRawData,"fav",userdata["likedPizzasId"]) , [userdata])
    const offeredPizza = useMemo(() => (pizzaFinder(pizzaRawData, "offered")), [])
    const requestedpizzaInfo = useMemo(() => (pizzaFinder(pizzaRawData, "info", info)), [info])

    
    //   handel any changes requested  by user
    const handelToggleCart = useToggleAction("pizzaInCartId");
    const handelTogglePizza = useToggleAction("likedPizzasId");
    
    const handelInfoRequest = useCallback((id) => {
        setInfo(id);
    });

    return (
        <>
            <SharedNavigation distance={true} filter={false} />
            
            <Typography variant="textHead">Your favorite pizza list:</Typography>
            <Box component={"div"}>
            {/* Special Offer */}
            {(
                <Box sx={{margin: " 20px 0"}}>
                    <SpecialCard offered={offeredPizza} colorText={colorText} />
                </Box>
            )}
    
            <Box
                sx={{ width: "100%" , 
                display:"flex", 
                flexDirection:"column", gap:"20px"}} 
            >
            {/* Pizza list */}
            { favoritePizza.length !== 0 ? favoritePizza.map((pizza) => (
                <PizzaHolder
                    key={pizza.name}
                    name={pizza.name}
                    price={pizza.price}
                    img={pizza.image}
                    review={pizza.review}
                    discount={pizza.offered.active && pizza.offered.percentage}
                    time={pizza.time}
                    id={pizza.id}
                    liked={pizzaFinder(userdata["likedPizzasId"],"boolean", pizza.id)}
                    added={pizzaFinder(userdata["pizzaInCartId"],"boolean", pizza.id)}
                    onToggelCart={handelToggleCart}
                    onTogglePizza={handelTogglePizza}
                    onInfoRequest={handelInfoRequest}
                />
            )) : <Error 
                message={
                "Your favorite list is empty please check out our menu"} />
                }
            </Box>
    
            {/* Pizza info modal / section */}
            </Box>
            {requestedpizzaInfo && (
            <PizzaInfo requestedpizzaInfo={requestedpizzaInfo} setInfo={setInfo} />
            )}
        </>
    );
}