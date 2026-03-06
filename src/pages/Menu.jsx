// react imports
import { useState, useCallback, useMemo } from "react";
import * as requests from "../barrels/requests";
import emptyWishlist from "/emptyWish.png"
// impoprt react router
import { useParams } from "react-router-dom";
// impoprt helper
import { useToggleAction } from "../hook/useToggleAction";
// import app context
import * as MUI from "../barrels/MUI"
import * as UI from "../barrels/UI"
import { useTheme } from "../providers/Theme";
import { useUserData } from "../providers/UserData";
import useRequestData from "../hook/useRequestText";

export default function Menu() {
  const {colors} = useTheme()
  const{userdata} = useUserData()
// primary data base
  const [info, setInfo] = useState(null); 
  // const { userdata, colorTheme, colorText, pizzaRawData} = useContext(SiteContext);
  const { filterkey } = useParams();

  const data = useRequestData("menu")
  const {pizzaRawData,wishList_text} = data
  // data preparation based on the userdata and rawData
  const filterPizza = useMemo(() => (requests.findPizza(pizzaRawData, "filter", filterkey )), [filterkey])
  const WishList = useMemo( () => requests.findPizza(pizzaRawData,"wish",userdata["likedPizzasId"]) , [userdata])
  const offeredPizza = useMemo(() => (requests.findPizza(pizzaRawData, "offered")), [])
  const pizzaData = 
  filterkey === "Offered" || filterkey === "offerta" ? 
  offeredPizza : filterkey === "wish" ? WishList :  filterPizza;



  //handel any changes requested  by user
  const handelToggleCart = useToggleAction("pizzaInCartId");
  const handelTogglePizza = useToggleAction("likedPizzasId");
  const handelInfoRequest = useCallback((id) => {setInfo(id);}, [info]);

  return (
    <>
        {/* Special Offer */}
        <MUI.Box sx={{display:"flex", flexDirection:"column", 
        gap:"var(--GlobalgapOfGrids)", 
        mb:"var(--GlobalgapOfGrids)"}}>
        <UI.SharedNavigation 
        varient={"menu"} 
        filter={ filterkey !== "wish"} 
        headText={wishList_text.title}
        />  
        
        {
        WishList.length === 0  && filterkey === "wish" && 
        <UI.EmptyList
          image={emptyWishlist}
          title={wishList_text.empty.title}
          message={wishList_text.empty.message}
          buttontitle={wishList_text.empty.button}
        /> 
        }

        </MUI.Box>
        <MUI.Grid 
        sx={{"& > :last-child": {
          mb: {xs:"calc(var(--filterAndNavSize) + 20px)", special:"unset"},
        },}}
        container 
        rowSpacing="var(--GlobalgapOfGrids)" 
        columnSpacing="var(--GlobalgapOfGrids)"

        >
          
          {!filterkey && (
            <MUI.Grid
              size={{xs:12,md:12, special:4,lg:3, xl:2}}

              >
              <UI.SpecialCard offered={offeredPizza}/>
              </MUI.Grid> 
          )}
          {pizzaData.map((pizza) => (
            
            <MUI.Grid 
            key={pizza.name}
            size={{xs:12,sm:6 ,md:6, special:4,lg:3, xl:2}}>
            <UI.PizzaInList
              name={pizza.name}
              price={pizza.price}
              review={pizza.review}
              img={pizza.image}
              discount={pizza.discount}
              time={pizza.time}
              id={pizza.id}
              liked={requests.findPizza(userdata["likedPizzasId"],"boolean", pizza.id)}
              added={requests.findPizza(userdata["pizzaInCartId"],"boolean", pizza.id)}
              onToggelCart={handelToggleCart}
              onTogglePizza={handelTogglePizza}
              onInfoRequest={handelInfoRequest}
            />
            </MUI.Grid>
        ))}
      </MUI.Grid>
        {/* Pizza info modal / section */}
      {info && (
        <UI.PizzaInfo id={info} setInfo={setInfo} dialog={true} />
      )}
    </>
  );
}
