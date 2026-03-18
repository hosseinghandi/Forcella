// react imports
import { useState, useCallback, useMemo } from "react";
import * as requests from "../barrels/requests";
import emptyWishlist from "/emptyWish.png"
// impoprt react router
import { useParams } from "react-router-dom";
// impoprt helper
// import app context
import * as MUI from "../barrels/MUI"
import * as UI from "../barrels/UI"
import { useUserData } from "../providers/UserData";
import useRequestText from "../hook/useRequestText";
export default function Menu() {

  const{fetchedUserdata} = useUserData()
  // primary data base
  const [info, setInfo] = useState(null); 
  const { filterkey } = useParams();
  const data = useRequestText("menu")
  const filterList = useRequestText("categories")
  const {pizzaRawData,wishList_text} = data
  // data preparation based on the userdata and rawData
  const filterPizza = useMemo(() => (requests.findPizza(pizzaRawData, "filter", filterkey )), [filterkey])
  const WishList = useMemo( () => requests.findPizza(pizzaRawData,"wish",fetchedUserdata["likedPizzasId"]) , [fetchedUserdata])
  const offeredPizza = useMemo(() => (requests.findPizza(pizzaRawData, "offered")), [])
  const pizzaData = 
  filterkey === "Offered" || filterkey === "In offerta" ? 
  offeredPizza : filterkey === "wish" ? WishList :  filterPizza;
  

  const handelInfoRequest = useCallback((id) => {setInfo(id);}, [info]);
  

  const isFilterValid = (k) => { 
    return !!filterkey ? 
    filterList.includes(k) || filterkey ==="wish" : 
    true
  }


  return isFilterValid(filterkey) ? (
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
              liked={requests.findPizza(fetchedUserdata["likedPizzasId"],"boolean", pizza.id)}
              added={requests.findPizza(fetchedUserdata["pizzaInCartId"],"boolean", pizza.id)}
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
  ) 
  : (
    <>
      <UI.E404 pathname={"/menu"}/>
    </>
  )
}
