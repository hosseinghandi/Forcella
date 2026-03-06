// react imports
import { useState, useCallback, useMemo } from "react";

import { useOrderSummery } from "../hook/useOrderSummery";
import { useOrderCount } from "../hook/useOrderCount";
import emptyCart from "/emptyCart.png"
import * as MUI from "../barrels/MUI";
import * as UI from "../barrels/UI";
import { useUserData } from "../providers/UserData";
import * as request from "../barrels/requests";
import useRequestData from "../hook/useRequestText";

export default function Cart() {
  // const [paymentIsAsked, setPayment] = useState(false);
  // primary data set
  const [info, setInfo] = useState(null);
  // const { userdata, colorText, colorTheme,pizzaRawData } = useContext(SiteContext);
  const { userdata } = useUserData();
  const { pizzaRawData, cart_text,button, } = useRequestData("cart");
  const pizzaInCart = useMemo(
    () => request.findPizza(pizzaRawData, "cart", userdata["pizzaInCartId"]),
    [userdata],
  );
  // console.log()

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

  const orderdataProvider = useOrderSummery(pizzaInCart, pizzaInProcess);

  return pizzaInCart.length !== 0 ? (
    <>
      <UI.SharedNavigation
        varient={"cart"}
        headText={cart_text.title}
      />

      <UI.LayoutHandeler
        style={{
          width: "100%",
          
        }}
      >
        {/* main grid container */}
        <MUI.Grid
          sx={{
            "& > :last-child": {
              mb: {
                xs: "calc(var(--filterAndNavSize) + 20px)",
                special: "unset",
              },
            },
            width: "95vw",
            height: "fit-content",
            px: {
              xs: "calc(var(--spacing-global-padding-x-mobile) - 3vw)",
              md: "calc(var(--spacing-global-padding-x-tablet) - 2.5vw)",
              special: "calc(var(--spacing-global-padding-x-desktop) - 2.8vw)",
            },
          }}
          container
          rowSpacing="var(--GlobalgapOfGrids)"
          columnSpacing="var(--GlobalgapOfGrids)"
        >
          {/* pizza container */}
          <MUI.Grid
            // half area of the grid
            size={{ xs: 12, lg: 6, xl: 6 }}
            container
            rowSpacing="var(--GlobalgapOfGrids)"
            columnSpacing="var(--GlobalgapOfGrids)"
          >
            {/* Pizza list */}
            {pizzaInCart.map((pizza) => (
              <MUI.Grid
                item
                sx={{ width: "100%" }}
                key={pizza.name}
                // size of each pizza element
                size={{ xs: 12, sm: 6, md: 4, special: 3, lg: 4, xl: "auto" }}
              >
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
            ))}
            {/* finish pizza container */}
          </MUI.Grid>

          {/* recepit grid */}
          <MUI.Grid
            container
            direction="column"
            sx={{}}
            size={{ xs: 12, lg: 6, xl: 6 }}
          >
            <MUI.Grid item size={{ xs: 12, md: 12, special: 12, xl: 12 }}>
              <UI.PreparationTime
                text={cart_text}
                totalTimeRequired={orderdataProvider?.totalTimeRequired}
                totalCount={orderdataProvider?.totalCount}
              />
            </MUI.Grid>

            <MUI.Grid item size={{ xs: 12, md: 12, special: 12, xl: 12 }}>
              <UI.OrderSummery
                text={cart_text}
                subTotalPrice={orderdataProvider?.subTotal}
                shippingPrice={orderdataProvider?.shipping}
                taxPrice={orderdataProvider?.tax}
                totalToPay={orderdataProvider?.totalToPay}
              />
            </MUI.Grid>
            <MUI.Grid item>
              <UI.ButtonBasic
                title={button.order}
                to={"payment"}
                state={`${orderdataProvider?.totalToPay.toFixed(2)} $`}
              />
            </MUI.Grid>
            {/* finish recipet container */}
          </MUI.Grid>
        </MUI.Grid>
      </UI.LayoutHandeler>
    </>
  ) : (
    <>
      <UI.SharedNavigation
        varient={"cart"}
        errorText={pizzaInCart.length > 0 ? false : "cart_text.empty"}
        headText={cart_text.title}
      />
      
          <UI.EmptyList
          image={emptyCart}
          title={cart_text.empty.title}
          message={cart_text.empty.message}
          buttontitle={cart_text.empty.button}
          />

    </>
  );
}
