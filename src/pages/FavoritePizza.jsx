

// react imports
import { useState, useContext, useCallback, useMemo } from "react";

import * as MUI from "../utils/MUI"
import * as UI from "../utils/UI"

// import translation
import { useTranslation } from "react-i18next";
// impoprt helper
import { useToggleAction } from "../hook/useToggleAction";
import {pizzaFinder} from "../utils/pizzaFinder"
// import app context
import { siteContext } from "../App";

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
        <UI.SiteWrapper>
            <UI.SharedNavigation menu={true}/>  
            
            <MUI.Typography variant="textHead">Your favorite pizza list:</MUI.Typography>
            <MUI.Box component={"div"}>
            {/* Special Offer */}
            {(
                <MUI.Box sx={{margin: " 20px 0"}}>
                    <UI.SpecialCard offered={offeredPizza} colorText={colorText} />
                </MUI.Box>
            )}
    
            <MUI.Box
                sx={{ width: "100%" , 
                display:"flex", 
                flexDirection:"column", gap:"20px"}} 
            >
            {/* Pizza list */}
            { favoritePizza.length !== 0 ? favoritePizza.map((pizza) => (
                <UI.PizzaInList
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
            )) : <UI.Error 
                message={
                "Your favorite list is empty please check out our menu"} />
                }
            </MUI.Box>
    
            {/* Pizza info modal / section */}
            </MUI.Box>
            {requestedpizzaInfo && (
            <UI.PizzaInfo requestedpizzaInfo={requestedpizzaInfo} setInfo={setInfo} />
            )}
        </UI.SiteWrapper>
    );
}