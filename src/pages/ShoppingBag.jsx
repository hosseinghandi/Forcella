// react imports
import { useState, useContext, useCallback, useMemo } from "react";

// impoprt helper
import { useToggleAction } from "../hook/useToggleAction";
import { useOrderSummery } from "../hook/useOrderSummery";
import { useOrderCount } from "../hook/useOrderCount";

import { pizzaFinder } from "../utils/pizzaFinder";

// import app context
import { SiteContext } from "../App";

import * as MUI from "../utils/MUI";
import * as UI from "../utils/UI";

// import material ui
import { updateUserState } from "../utils/userStateTracker";

export default function ShoppingBag() {
  // primary data set
  const [info, setInfo] = useState(null);
  const { userdata, colorText, colorTheme,pizzaRawData } = useContext(SiteContext);

  const pizzaInCart = useMemo(
    () => pizzaFinder(pizzaRawData, "bag", userdata["pizzaInCartId"]),
    [userdata],
  );

  // data preparation
//   const offeredPizza = useMemo(() => pizzaFinder(pizzaRawData, "offered"), []);

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
// console.log(orderdataProvider)

  return (
    <>
      <UI.SharedNavigation menu={true} />
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
