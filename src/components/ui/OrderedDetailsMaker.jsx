// role: handel rendering order details
// and handeling the order changes
import useUpdateUser from "../../hook/useUserUpdate";
import * as Icons from "../../barrels/Icons";
import * as MUI from "../../barrels/MUI";
import * as UI from "../../barrels/UI";
import useRequestText from "../../hook/useRequestText";

export default function OrderedDetailsMaker({
  editMode,
  setDelet,
  showMore,
  setShowMore,
  delet,
}) {
  const { text, pizzaRawData, isOrder } = useRequestText("profile");
  const { handleOrder } = useUpdateUser();

  const orders = text.orders ?? {};
  const orderKeys = Object.keys(orders);
  const orderValues = Object.values(orders);
  const visibleKeys = showMore ? orderKeys : [orderKeys[0]];
  const visibleOrders = showMore ? orderValues : [orderValues[0]];

  return (
    <MUI.Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <MUI.Card
        sx={{
          width: "100%",
          height: "100%",
          maxHeight: "50vh",
          overflow: "scroll",
          padding: "20px 10px",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          ...(!editMode
            ? { marginBottom: "70px" }
            : {
                marginBottom: "10px",
                backgroundColor: "var(--white-bg)",
                border: "1px solid black",
                marginTop: "var(--GlobalgapOfGrids)",
              }),
        }}
      >
        <Icons.ShoppingBag_outlined aria-hidden="true"/>

        {text.orders && (
          <MUI.Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "var(--GlobalgapOfGrids)",
              overflowY: "scroll",
            }}
          >
            {/* Header */}
            <MUI.Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginTop: "5px",
                marginLeft: "5px",
              }}
            >
              <MUI.Typography variant="textProfileBold">
                {text.orderSum.title.toUpperCase()}
              </MUI.Typography>
              {/* Show more/less only if more than 1 order */}
              {isOrder > 1 && (
                <MUI.IconButton
                  aria-label={showMore ? 
                    "show fewer orders" : "show more orders"}
                  aria-expanded={showMore}
                  disableRipple
                  sx={{ padding: "0", color: "var(--black-bg)" }}
                  onClick={() => setShowMore((prev) => !prev)}
                >
                  <MUI.Typography variant="textNormal">
                    {showMore ? text.orderSum.showLess : text.orderSum.showMore}
                  </MUI.Typography>
                </MUI.IconButton>
              )}
            </MUI.Box>

            <UI.CreateHint orderSum={text.orderSum} />

            {/* Orders or empty state */}
            {isOrder ? (
              visibleOrders.map((order, index) => (
                <UI.OrderRow
                  key={visibleKeys[index]}
                  {...order}
                  editMode={editMode}
                  delet={delet}
                  setDelet={setDelet}
                  onClick={() => {
                    handleOrder(visibleKeys[index]);
                    setDelet(false);
                  }}
                  text={text}
                  pizzaRawData={pizzaRawData}
                />
              ))
            ) : (
              <MUI.Typography variant="textNormal">
                {text.orderSum.state.empty}
              </MUI.Typography>
            )}
          </MUI.Box>
        )}
      </MUI.Card>

      {/* Submit button in edit mode */}
      {editMode && (
        <MUI.Box sx={{ marginBottom: { xs: "70px", special: "0" } }}>
          <UI.ButtonBasic
            type="submit"
            title={text.button.submit}
          />
        </MUI.Box>
      )}
    </MUI.Box>
  );
}
