// react imports
import { useState, useContext, useCallback, useMemo } from "react";

// impoprt react router
import { useParams } from "react-router-dom";

// import translation
import { useTranslation } from "react-i18next";
// impoprt helper
import { useToggleAction } from "../hook/useToggleAction";
// import app context
import { siteContext } from "../App";

// ui components
import SharedNavigation from "../components/shared/SharedNavigation";
import SpecialCard from "../components/ui/SpecialCard";
import PizzaHolder from "../components/ui/PizzaHolder";
import PizzaInfo from "../components/ui/PizzaInfo";

// import material ui
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

export default function Menu() {
  // set text for rendering
  const { t } = useTranslation();
  const pizzaRawData = t("pizzaItems", { returnObjects: true });

  //check if teh user asked any filter  
  const { filterkey } = useParams();
//   filter the pizzas helper   
    const pizzaFilter = (data) =>
    filterkey ? data.filter((el) => el.category.includes(filterkey)) : data;
//   take the offered one from the pizzadata and pass it to special offered cart 
  const offeredPizza = useMemo(() => {
    return pizzaRawData.filter((el) => el.offered.active);
  }, [pizzaRawData]);

//   orgnized pizza data 
  const pizzaData =
    filterkey === "offered" ? offeredPizza : pizzaFilter(pizzaRawData);

  // getting userdata from app context
  const { userdata} = useContext(siteContext);
//   take out pizza in cart id and liked pizza id 
  const { pizzaInCartId, likedPizzasId } = userdata;
  // set a stete to track info request
  const [info, setInfo] = useState(null);

//   handel any changes requested  by user
  const handelToggleCart = useToggleAction("pizzaInCartId");
  const handelTogglePizza = useToggleAction("likedPizzasId");
  const handelInfoRequest = useCallback((id) => {
    setInfo(id);
  });

  const requestedpizzaInfo = info
    ? pizzaData.filter((el) => el.id === info)[0]: null;
  // // pizza info is included of all text that hsould be translate

  return (
    <>
      <SharedNavigation distance={true} backTo={"/welcome"} filter={true} />
      <Box component={"div"}>
        {/* Special Offer */}
        {!filterkey && (
          <Box sx={{margin: " 20px 0"}}>
            <SpecialCard offered={offeredPizza} />
          </Box>
        )}

        <Box
          sx={{ width: "100%" , 
            display:"flex", 
            flexDirection:"column", gap:"20px"}} 
        >
        {/* Pizza list */}
        {pizzaData.map((pizza) => (
            <PizzaHolder
              key={pizza.name}
              name={pizza.name}
              price={pizza.price}
              img={pizza.image}
              discount={[pizza.offered.active, pizza.offered.percentage]}
              time={pizza.time}
              id={pizza.id}
              liked={likedPizzasId.includes(pizza.id)}
              added={pizzaInCartId.includes(pizza.id)}
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
