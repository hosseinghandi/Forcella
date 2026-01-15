// react imports
import { useState, useContext, useCallback, useMemo } from "react";

// import translation
import { useTranslation } from "react-i18next";
// impoprt helper
import { useToggleAction } from "../hook/useToggleAction";
import {pizzaFinder} from "../utils/pizzaFinder"

// import app context
import { siteContext } from "../App";


import * as MUI from "../utils/MUI"
import * as UI from "../utils/UI"


import SiteWrapper from "../components/shared/SiteWrapper";
// ui components
import SharedNavigation from "../components/shared/SharedNavigation";
import SpecialCard from "../components/ui/SpecialCard";
import PizzaInOrder from "../components/ui/PizzaInOrder";
import PizzaInfo from "../components/ui/PizzaInfo";
import Error from "../components/ui/Error";

// import material ui
import { Box,Typography} from "@mui/material";

export default function ShoppingBag () {
// primary data set
    const [info, setInfo] = useState(null);
    const { userdata, colorText, colorTheme} = useContext(siteContext);
    const { t } = useTranslation();
    const pizzaRawData = t("pizzaItems", { returnObjects: true });

    // data preparation
    const pizzaInCart = useMemo( () => pizzaFinder(pizzaRawData,"bag",userdata["pizzaInCartId"]) , [userdata])
    const offeredPizza = useMemo(() => (pizzaFinder(pizzaRawData, "offered")), [])
    const requestedpizzaInfo = useMemo(() => (pizzaFinder(pizzaRawData, "info", info)), [info])

    
    //   handel any changes requested  by user
    const handelToggleCart = useToggleAction("pizzaInCartId");
    
    const handelInfoRequest = useCallback((id) => {
        setInfo(id);
    });

    return (
        <UI.SiteWrapper>
            <UI.SharedNavigation menu={true}/> 
            <MUI.Typography variant="textHead">Your order list:</MUI.Typography>

            <MUI.Box component={"div"}>
            {/* Special Offer */}
            {(
                <MUI.Box sx={{margin: " 20px 0"}}>
                <UI.SpecialCard offered={offeredPizza} />
                </MUI.Box>
            )}
                        <MUI.Box
                            sx={{ width: "100%" , 
                            display:"flex", 
                            flexDirection:"column", gap:"20px"}} 
                        >
                        {/* Pizza list */}
                        { pizzaInCart.length !== 0 ? pizzaInCart.map((pizza) => (
                            <UI.PizzaInOrder
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
                                OnchangeQuantity={handelToggleCart}
                                onInfoRequest={handelInfoRequest}
                            />
                        )) : <UI.Error 
                            message={
                            "Your cart  is empty please check out our menu"} />
                            }
                        </MUI.Box>
            <MUI.Box
                sx={{ width: "100%" , 
                display:"flex", 
                flexDirection:"column", gap:"20px"}} 
            >
            {/* Pizza list */}

            </MUI.Box>
    
            {/* Pizza info modal / section */}
            </MUI.Box>
            {requestedpizzaInfo && (
            <UI.PizzaInfo requestedpizzaInfo={requestedpizzaInfo} setInfo={setInfo} />
            )}
        </UI.SiteWrapper>
    );
}