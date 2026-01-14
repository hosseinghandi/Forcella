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

// import material ui
import { Box } from "@mui/material";

export default function Menu() {
// primary data base
  const [info, setInfo] = useState(null); 
  const { userdata, colorTheme, colorText} = useContext(siteContext);
  const { t } = useTranslation();
  const pizzaRawData = t("pizzaItems", { returnObjects: true });
  const { filterkey } = useParams();
  
  // data preparation based on the userdata and rawData
  const filterPizza = useMemo(() => (pizzaFinder(pizzaRawData, "filter", filterkey )), [filterkey])
  const offeredPizza = useMemo(() => (pizzaFinder(pizzaRawData, "offered")), [])
  const requestedpizzaInfo = useMemo(() => (pizzaFinder(pizzaRawData, "info", info)), [info])
  const pizzaData = filterkey === "offered" ? offeredPizza : filterPizza;

  //handel any changes requested  by user
  const handelToggleCart = useToggleAction("pizzaInCartId");
  const handelTogglePizza = useToggleAction("likedPizzasId");

  const handelInfoRequest = useCallback((id) => {setInfo(id);});

  return (
    <>
      <SharedNavigation distance={true} filter={true} colorTheme={colorTheme} colorText={colorText}/>
      <Box component={"div"}>
        {/* Special Offer */}
        {!filterkey && (
          <Box sx={{marginTop: "20px"}} >
            <SpecialCard offered={offeredPizza} colorText={colorText}/>
          </Box>
        )}

        <Box
          sx={{ width: "100%" , 
            display:"flex", 
            flexDirection:"column"}} 
        >
        {/* Pizza list */}
        {pizzaData.map((pizza) => (
            <PizzaHolder
              key={pizza.name}
              name={pizza.name}
              price={pizza.price}
              review={pizza.review}
              img={pizza.image}
              discount={pizza.offered.active && pizza.offered.percentage}
              time={pizza.time}
              id={pizza.id}
              liked={pizzaFinder(userdata["likedPizzasId"],"boolean", pizza.id)}
              added={pizzaFinder(userdata["pizzaInCartId"],"boolean", pizza.id)}
              onToggelCart={handelToggleCart}
              onTogglePizza={handelTogglePizza}
              onInfoRequest={handelInfoRequest}
            />
        ))}
        </Box>

        {/* Pizza info modal / section */}
      </Box>
      {requestedpizzaInfo && (
        <PizzaInfo requestedpizzaInfo={requestedpizzaInfo} setInfo={setInfo} />
      )}
    </>
  );
}
