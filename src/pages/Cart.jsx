// role: cart page
import { useState } from "react";
import { useOrderSummery } from "../hook/useOrderSummery";
import emptyCart from "/emptyCart.png";
import * as MUI from "../barrels/MUI";
import * as UI from "../barrels/UI";
import useRequestText from "../hook/useRequestText";

export default function Cart() {
  const [info, setInfo] = useState(null);
  const { text, button } = useRequestText("cart");
  const orderdataProvider = useOrderSummery();
  const hasItem = orderdataProvider?.pizzaIdlist?.length !== 0;

  const handelInfoRequest = (id) => {
    setInfo((prev) => (prev !== id ? id : null));
  };

  return hasItem ? (
    <>
      <UI.SharedNavigation variant="cart" headText={text.title} />
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
            role="list"
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
                size={{ xs: 12, sm: 6, md: 4, special: 5, lg: 4, xl: "auto" }}
              >
                <UI.PizzaInOrder
                  pizzaData={pizza}
                  info={pizza.id === info}
                  count={orderdataProvider?.pizzaInProcess[pizza.id]}
                  onInfoRequest={handelInfoRequest}
                />
              </MUI.Grid>
            ))}
          </MUI.Grid>
          {/* summery grid */}
          <MUI.Grid
            role="list"
            container
            direction="column"
            sx={{}}
            size={{ xs: 12, special: 6, xl: 6 }}
          >
            <MUI.Grid size={{ xs: 12, md: 12, special: 12, xl: 12 }}>
              <UI.PreparationTime
                text={text}
                totalTimeRequired={orderdataProvider?.totalTimeRequired}
                totalCount={orderdataProvider?.totalCount}
              />
            </MUI.Grid>
            <MUI.Grid size={{ xs: 12, md: 12, special: 12, xl: 12 }}>
              <UI.OrderSummery
                text={text}
                subTotalPrice={orderdataProvider?.subTotal}
                shippingPrice={orderdataProvider?.shipping}
                taxPrice={orderdataProvider?.tax}
                totalToPay={orderdataProvider?.totalToPay}
              />
            </MUI.Grid>
            <MUI.Grid>
              <UI.ButtonBasic
                aria-label="Go to payment page"
                title={button.order}
                to={"payment"}
              />
            </MUI.Grid>
          </MUI.Grid>
        </MUI.Grid>
      </UI.LayoutHandeler>
    </>
  ) : (
    <>
      <UI.SharedNavigation
        variant="cart"
        errorText={text.empty}
        headText={text.title}
      />
      <UI.EmptyList
        image={emptyCart}
        title={text.empty.title}
        message={text.empty.message}
        buttontitle={button.goToMenu}
      />
    </>
  );
}
