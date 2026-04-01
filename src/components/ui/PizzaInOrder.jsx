// *role : on request render pizza item for menu*
import * as MUI from "../../barrels/MUI";
import * as UI from "../../barrels/UI";
import * as Icons from "../../barrels/Icons";
import useUpdateUser from "../../hook/useUserUpdate";
import useRequestText from "../../hook/useRequestText";
export default function PizzaInOrder({
  pizzaData,
  info,
  onInfoRequest,
  count,
}) {
  const { text, button } = useRequestText("cart");
  const price = pizzaData.price;
  const name = pizzaData.name;
  const img = pizzaData.image;
  const discount = pizzaData.discount;
  const id = pizzaData.id;

  const finalPrice = discount
    ? (price * (1 - discount / 100)).toFixed(2)
    : price.toFixed(2);

  const { changeQuantity, removeItem } = useUpdateUser();

  const iconList = [
    [Icons.Add, "add", "Add quantity"],
    [Icons.Remove, "minus", "Subtract quantity"],
    [Icons.Info, "info", "View details"],
  ];

  const icons = (list) => {
    return list.map(([Icon, key, aria]) => (
      <MUI.IconButton
        disableRipple
        aria-label={aria}
        key={key}
        onClick={() => {
          switch (key) {
            case "add":
              return changeQuantity(id, +1);
            case "minus":
              return changeQuantity(id, -1);
            case "info":
              return onInfoRequest(id);
            default:
              return;
          }
        }}
        sx={{
          "&:active": {
            transform: "scale(0.8)",
            color: "var(--orange)"
          },
          padding: "0",
          color: "var(--dark)",
        }}
        size="small"
      >
        <Icon 
        aria-hidden="true"
          sx={{
            // only on devices with pointing capabilities
            "@media (hover: hover)": {
              "&:hover": {
                color: "var(--orange)",
              },
            },
            color: "var(--black-bg)",
            width: "var(--iconsize)",
            height: "var(--iconsize)",
          }}/>
      </MUI.IconButton>
    ));
  };

  return (
    <MUI.Card
      sx={{
        // keep the scaling only on devices with pointing capabilities
        "@media (hover: hover)": {
          "&:hover": {
            boxShadow: "0 12px 32px rgba(181, 86, 56, 0.6)",
            scale: 1.03,
          }
        },
        flexDirection: "column",
        justifyContent: "space-between",
        height: { xs: "fit-content", md: "fit-content" },
        width: "100%",
        maxWidth: { xs: "93vw", md: "unset" },
      }}
    >
      <MUI.Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: { xs: "row", sm: "column" },
          alignItems: "center",
          gap: {
            xs: "var(--GlobalgapOfGrids)",
            md: "var(--GlobalgapOfGrids)",
          },
        }}
      >
        {/* image holder  */}
        <MUI.Box
          sx={{
            height: "100%",
          }}
        >
          <MUI.CardMedia
            component="img"
            image={img}
            loading="lazy"
            alt={`A photo of ${name} pizza`}
            sx={{
              width: {
                xs: "30vw",
                sm: "25vw",
                md: "15vw",
                special: "13vw",
                xl: "10vw",
              },
              height: "100%",
              objectFit: "contain",
            }}
          />
        </MUI.Box>

        {/* text wrapper*/}
        <MUI.CardContent
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column" },
            justifyContent: "space-between",
            padding: { xs: "0 10px", md: "unset" },
            height: "100%",
            width: "100%",
          }}
        >
          <MUI.Box
            sx={{
              display: "flex",
              height: "100%",
              flexDirection: {
                xs: "column",
                sm: "row",
                md: "column",
              },
              minHeight: { xs: "100px", sm: "50px" },
              justifyContent: "space-between",
            }}
          >
            {/* name and count */}
            <MUI.Box
              sx={{
                whiteSpace: "nowrap",
                display: "flex",
                flexDirection: { xs: "column", sm: "column", md: "row" },
                gap: 1,
                alignItems: "flex-start",
              }}
            >
              <MUI.Typography variant="pizzaContentBold" component="p">
                {name}
              </MUI.Typography>
              <MUI.Typography variant="textNormal" component="p">
                {`x ${count === 0 ? 1 : count}`}
              </MUI.Typography>
            </MUI.Box>
            {/* price and discount */}
            <MUI.Box
              sx={{
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: { xs: "flex-start", sm: "flex-end" },
                flexDirection: { xs: "column", sm: "column", md: "row" },
                gap: 2,
              }}
            >
              <MUI.Typography
                variant="pizzaContentBold"
                sx={{
                  ...(!!discount && {
                    textDecoration: "line-through",
                    textDecorationColor: "var(--orange)",
                    textDecorationThickness: 2,
                  }),
                }}
              >
                {`${price}€`}
              </MUI.Typography>
              {!!discount && (
                <MUI.Typography variant="pizzaContentBold">
                  {`${finalPrice}€`}
                </MUI.Typography>
              )}
            </MUI.Box>
          </MUI.Box>
        </MUI.CardContent>

        <MUI.CardActions
          sx={{
            minHeight: { xs: "100px", sm: "100%" },
            padding: "0",
            height: "100%",
            width: { sm: "100%" },
            flex: 1,
            gap: { xs: 2 },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          {icons(iconList)}
        </MUI.CardActions>
        <UI.ConfirmationDialog
          onClose={count === 0}
          open={count === 0}
          message={text.remove}
          actOnPositive={() => removeItem(id)}
          positiveBtnName={button.sure}
          actOnNegative={() => changeQuantity(id, +1)}
          negativeBtnName={button.no}
        />
      </MUI.Box>

      {info && (
        <>
          <UI.PizzaInfo id={id} setInfo={onInfoRequest} dialog={true} />
        </>
      )}
    </MUI.Card>
  );
}
