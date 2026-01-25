// react imports
import { useState, useContext, useCallback, useMemo } from "react";

// impoprt react router
import { useParams } from "react-router-dom";
// impoprt helper
import { useToggleAction } from "../hook/useToggleAction";
import * as helpers from "../utils/helpers"
// import app context
import { SiteContext } from "../App";

import * as MUI from "../utils/MUI"
import * as UI from "../utils/UI"

export default function Menu() {
  
// primary data base
  const [info, setInfo] = useState(null); 
  const { userdata, colorTheme, colorText, pizzaRawData} = useContext(SiteContext);
  const { filterkey } = useParams();
  
  // data preparation based on the userdata and rawData
  const filterPizza = useMemo(() => (helpers.pizzaFinder(pizzaRawData, "filter", filterkey )), [filterkey])
  const offeredPizza = useMemo(() => (helpers.pizzaFinder(pizzaRawData, "offered")), [])
  const requestedpizzaInfo = useMemo(() => (helpers.pizzaFinder(pizzaRawData, "info", info)), [info])
  const pizzaData = filterkey === "offered" || filterkey === "offerta" ? offeredPizza : filterPizza;

  //handel any changes requested  by user
  const handelToggleCart = useToggleAction("pizzaInCartId");
  const handelTogglePizza = useToggleAction("likedPizzasId");

  const handelInfoRequest = useCallback((id) => {setInfo(id);}, [info]);

  return (
    <>
        <UI.SharedNavigation menu={true}/>      
        <UI.Filter colorText={colorText}/>
        <MUI.Box component={"div"}>
        {/* Special Offer */}
        {!filterkey && (
          <MUI.Box >
            <UI.SpecialCard offered={offeredPizza} colorText={colorText}/>
          </MUI.Box>
        )}

        <MUI.Box
          sx={{ width: "100%" , 
            display:"flex", 
            flexDirection:"column"}} 
        >
        {/* Pizza list */}
        {pizzaData.map((pizza) => (
            <UI.PizzaInList
              key={pizza.name}
              name={pizza.name}
              price={pizza.price}
              review={pizza.review}
              img={pizza.image}
              discount={pizza.offered.active && pizza.offered.percentage}
              time={pizza.time}
              id={pizza.id}
              liked={helpers.pizzaFinder(userdata["likedPizzasId"],"boolean", pizza.id)}
              added={helpers.pizzaFinder(userdata["pizzaInCartId"],"boolean", pizza.id)}
              onToggelCart={handelToggleCart}
              onTogglePizza={handelTogglePizza}
              onInfoRequest={handelInfoRequest}
            />
        ))}
        </MUI.Box>

        {/* Pizza info modal / section */}
      </MUI.Box>
      {requestedpizzaInfo && (
        <UI.PizzaInfo requestedpizzaInfo={requestedpizzaInfo} setInfo={setInfo} dialog={true} />
      )}
    </>
  );
}
