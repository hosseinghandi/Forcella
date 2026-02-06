

// react imports
import { useState, useCallback, useMemo } from "react";

import * as MUI from "../barrels/MUI"
import * as UI from "../barrels/UI"
import * as requests from "../barrels/requests"
import { useUserData } from "../providers/UserData";
import {usePizzaData} from "../providers/PizzaData"
// impoprt helper
import { useToggleAction } from "../hook/useToggleAction";
// import app context
import useRequestData from "../hook/useRequestText";

export default function WishList() {
    // primary data set
    const {userdata} = useUserData()
      const pizzaRawData = useRequestData("menu")
    const [info, setInfo] = useState(null);
    // const { userdata, colorText, colorTheme,pizzaRawData} = ;

    // data preparation
    const favoritePizza = useMemo( () => requests.findPizza(pizzaRawData,"wish",userdata["likedPizzasId"]) , [userdata])
    const offeredPizza = useMemo(() => (requests.findPizza(pizzaRawData, "offered")), [])
    const requestedpizzaInfo = useMemo(() => (requests.findPizza(pizzaRawData, "info", info)), [info])

    
    //   handel any changes requested  by user
    const handelToggleCart = useToggleAction("pizzaInCartId");
    const handelTogglePizza = useToggleAction("likedPizzasId");
    
    const handelInfoRequest = useCallback((id) => {
        setInfo(id);
    }, [info]);

    return (<>
                <UI.SharedNavigation main={true}/>  
                
                <MUI.Typography variant="textHead">Your favorite pizza list:</MUI.Typography>
                <MUI.Box component={"div"}>
                {/* Special Offer */}
                {/* {(
                    <MUI.Box >
                        <UI.SpecialCard offered={offeredPizza} colorText={colorText} />
                    </MUI.Box>
                )} */}
        
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
                        liked={requests.findPizza(userdata["likedPizzasId"],"boolean", pizza.id)}
                        added={requests.findPizza(userdata["pizzaInCartId"],"boolean", pizza.id)}
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
                <UI.PizzaInfo dialog={true} requestedpizzaInfo={requestedpizzaInfo} setInfo={setInfo} />
                )}
            </>
    );
}