// react imports
import { useState, useCallback, useMemo } from "react";

import { useOrderSummery } from "../hook/useOrderSummery";
import emptyCart from "/emptyCart.png"
import * as MUI from "../barrels/MUI";
import * as UI from "../barrels/UI";

import useRequestText from "../hook/useRequestText";
// import useUser from "../hook/useUser";

export default function Cart() {
  // primary data set
  const [info, setInfo] = useState(null);
  const {cart_text,button } = useRequestText("cart");

  const handelInfoRequest = useCallback(
    (id) => {
      setInfo((prev) => (prev !== id ? id : null));
    },
    [info],
  );
  const orderdataProvider = useOrderSummery();

  return orderdataProvider.pizzaIdlist.length !== 0 ? (
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
            size={{ xs: 12, special: 6, xl: 6 }}
            container
            rowSpacing="var(--GlobalgapOfGrids)"
            columnSpacing="var(--GlobalgapOfGrids)"
          >
            {/* Pizza list */}
            {orderdataProvider?.pizzaInCart?.map((pizza) => (
              <MUI.Grid
                sx={{ width: "100%" }}
                key={pizza.name}
                // size of each pizza element
                size={{ xs: 12, sm: 6, md: 4, special: 5, lg: 4, xl: "auto" }}
              >
                <UI.PizzaInOrder
                  key={pizza.name}
                  pizzaData={pizza}
                  info={pizza.id === info}
                  count={orderdataProvider?.pizzaInProcess[pizza.id]}
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
            size={{ xs: 12, special: 6, xl: 6 }}
          >
            {orderdataProvider?.pizzaInCart && 
            <>
            <MUI.Grid  size={{ xs: 12, md: 12, special: 12, xl: 12 }}>
              <UI.PreparationTime
                text={cart_text}
                totalTimeRequired={orderdataProvider?.totalTimeRequired}
                totalCount={orderdataProvider?.totalCount}
              />
            </MUI.Grid>

            <MUI.Grid  size={{ xs: 12, md: 12, special: 12, xl: 12 }}>
              <UI.OrderSummery
                text={cart_text}
                subTotalPrice={orderdataProvider?.subTotal}
                shippingPrice={orderdataProvider?.shipping}
                taxPrice={orderdataProvider?.tax}
                totalToPay={orderdataProvider?.totalToPay}
              />
            </MUI.Grid>
            </>
            }
            <MUI.Grid >
              <UI.ButtonBasic
                title={button.order}
                to={"payment"}
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
        errorText={"cart_text.empty"}
        headText={cart_text.title}
      />
          <UI.EmptyList
          image={emptyCart}
          title={cart_text.empty.title}
          message={cart_text.empty.message}
          buttontitle={button.goToMenu}
          />

    </>
  );
}
