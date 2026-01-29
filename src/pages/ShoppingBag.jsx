// react imports
import { useState, useContext, useCallback, useMemo } from "react";

import { useOrderSummery } from "../hook/useOrderSummery";
import { useOrderCount } from "../hook/useOrderCount";

// import app context
// import { SiteContext } from "../App";

import * as MUI from "../barrels/MUI";
import * as UI from "../barrels/UI";
import * as helpers from "../barrels/helpers"
export default function ShoppingBag() {
  // primary data set
  const [info, setInfo] = useState(null);
  // const { userdata, colorText, colorTheme,pizzaRawData } = useContext(SiteContext);

  const pizzaInCart = useMemo(
    () => helpers.pizzaFinder(pizzaRawData, "bag", userdata["pizzaInCartId"]),
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
      <UI.SharedNavigation main={true} />
      <MUI.Typography variant="textHead">Your order list:</MUI.Typography>
      <MUI.Box component={"div"}>
        <MUI.Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "var(--gapOfItems)",
          }}
        >
          {/* Pizza list */}
          {pizzaInCart.length !== 0 ? 
           <>
           {(
            pizzaInCart.map((pizza) => (
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
            ))

          )}
          <UI.PreparationTime 
          totalTimeRequired={orderdataProvider.totalTimeRequired} 
          totalCount={orderdataProvider.totalCount}/>

          <UI.OrderSummery 
            subTotalPrice={orderdataProvider.subTotal}
            shipping={orderdataProvider.shipping}
            tax={orderdataProvider.tax}
            totalToPay={orderdataProvider.totalToPay}
          />

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

        </MUI.Box>
        
      </MUI.Box>
    </>
  );
}
