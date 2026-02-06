// react imports
import { useState, useCallback, useMemo } from "react";

import { useOrderSummery } from "../hook/useOrderSummery";
import { useOrderCount } from "../hook/useOrderCount";

import * as MUI from "../barrels/MUI";
import * as UI from "../barrels/UI";
import { useUserData } from "../providers/UserData";
import * as request from "../barrels/requests"
import useRequestData from "../hook/useRequestText";
  
export default function Cart() {
  // primary data set
  const [info, setInfo] = useState(null);
  // const { userdata, colorText, colorTheme,pizzaRawData } = useContext(SiteContext);
  const {userdata} = useUserData()
  const pizzaRawData = useRequestData("menu")
  const pizzaInCart = useMemo(
    () => request.findPizza(pizzaRawData, "cart", userdata["pizzaInCartId"]),
    [userdata],
  );


  const handelInfoRequest = useCallback(
    (id) => {
      setInfo((prev) => (prev !== id ? id : null));
    },
    [info],
  );
  const pizzaInProcess = userdata.pizzaInProcess;
  const handelAdd = useOrderCount("add");
  const handelMinus = useOrderCount("minus");
  const handelRemove = useOrderCount("remove");

const orderdataProvider = useOrderSummery(pizzaInCart, pizzaInProcess)

  return (
    <>
          <MUI.Box sx={{display:"flex", flexDirection:"column", 
                  gap:"var(--GlobalgapOfGrids)", 
                  mb:"var(--GlobalgapOfGrids)"}}>
                  <UI.SharedNavigation varient={"main"} filter={false}/>  
                  {<MUI.Typography variant="textNormal">Your order list:</MUI.Typography>}
          </MUI.Box>

          <MUI.Grid 
                  sx={{"& > :last-child": {
                    mb: {xs:"calc(var(--filterAndNavSize) + 20px)", special:"unset"},
                  },}}
                  container 
                  rowSpacing="var(--GlobalgapOfGrids)" 
                  columnSpacing="var(--GlobalgapOfGrids)"
          
                  >
                    
          {/* Pizza list */}
          {pizzaInCart.length !== 0 ? 
           <>
           {(
            pizzaInCart.map((pizza) => (
              <MUI.Grid 
                    key={pizza.name}
                    size={{xs:12, md:6, special:4, xl:3}}>
              <UI.PizzaInOrder
                key={pizza.name}
                pizzaData={pizza}
                info={pizza.id === info}
                count={pizzaInProcess[pizza.id]}
                handelAdd={handelAdd}
                handelMinus={handelMinus}
                handelRemove={handelRemove}
                onInfoRequest={handelInfoRequest}
              />
              </MUI.Grid>
            ))

          )}
          <MUI.Grid 
                
                size={{xs:12, md:6, special:4, xl:3}}>

          <UI.PreparationTime 
          totalTimeRequired={orderdataProvider.totalTimeRequired} 
          totalCount={orderdataProvider.totalCount}/>

          </MUI.Grid>
          <MUI.Grid 
                
                size={{xs:12, md:6, special:4, xl:3}}>

          <UI.OrderSummery 
            subTotalPrice={orderdataProvider.subTotal}
            shipping={orderdataProvider.shipping}
            tax={orderdataProvider.tax}
            totalToPay={orderdataProvider.totalToPay}
          />
          </MUI.Grid>
          <UI.ButtonBasic
          title={"Order"}
          to={"/applayout/payment"}
          />
           </>
          : (
            <UI.Error
              message={"Your cart  is empty please check out our menu"}
            />
          )}
    </MUI.Grid>
    </>
  );
}

