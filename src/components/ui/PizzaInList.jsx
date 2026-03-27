// *role : on request render pizza item for menu*
import * as MUI from "../../barrels/MUI";
import * as Icons from "../../barrels/Icons";
import useUpdateUser from "../../hook/useUserUpdate";
import { memo } from "react";
// do re-render if any props changes not on each render
export default memo(function PizzaInList({
  price,
  name,
  img,
  discount,
  id,
  review,
  onInfoRequest,
  liked,
  added,
}) {
  const finalPrice = discount
    ? (price * (1 - discount / 100)).toFixed(2)
    : price.toFixed(2);

  const iconList = [
    [Icons.Add, added ? "var(--orange)" : "var(--black)", "add", "Add to cart"],
    [
      Icons.Heart,
      liked ? "var(--orange)" : "var(--black)",
      "like",
      "Toggle favorite item",
    ],
    [Icons.Info, "var(--black)", "info", "View details"],
  ];

  const { toggleLike, toggleCart } = useUpdateUser();

  const icons = (list) => {
    return list.map(([Icon, color, key, aria]) => (
      <MUI.IconButton
        aria-pressed={
          key === "like" ? liked : key === "add" ? added : undefined
        }
        aria-label={aria}
        key={key}
        onClick={() => {
          switch (key) {
            case "add":
              return toggleCart(id);
            case "like":
              return toggleLike(id);
            case "info":
              return onInfoRequest(id);
            default:
              return;
          }
        }}
        sx={{
          padding: "0",
          color: "var(--black)",
        }}
        size="small"
      >
        <Icon
          aria-hidden="true"
          sx={{
            color: color,
            width: "var(--iconsize)",
            height: "var(--iconsize)",
            "&:hover": {
              color: "var(--orange)",
            },
          }}
        />
      </MUI.IconButton>
    ));
  };

  const reviewStars = (review) => {
    return Array.from({ length: review }).map((_, index) => (
      <Icons.Star
        sx={{ width: "var(--starDimension)", fill: "var(--gold)" }}
        key={index}
      />
    ));
  };

  return (
    // main holder
    <MUI.Card
      sx={{
        "&:hover": {
          boxShadow: "0 12px 32px rgba(181, 86, 56, 0.6)",
          scale: 1.05,
        },
        height: { xs: "var(--cardSizeMainVertical)", sm: "fit-content" },
      }}
    >
      {/* inner items holder  */}
      <MUI.Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: { xs: "row", sm: "column" },
          alignItems: "center",
          gap: {
            xs: "calc(var(--GlobalgapOfGrids) / 4)",
            sm: "calc(var(--GlobalgapOfGrids) / 2)",
          },
        }}
      >
        {/* image holder  */}
        <MUI.Box
          sx={{
            width: {
              xs: "100%",
              sm: "28vw",
              special: "18vw",
              lg: "15vw",
              xl: "13vw",
            },
            height: "100%",
          }}
        >
          {discount ? (
            <MUI.Badge
              badgeContent={
                <MUI.Box>
                  <MUI.Typography component={"span"} variant="titleBold">
                    {discount}%
                  </MUI.Typography>
                  <br />
                  OFF
                </MUI.Box>
              }
              anchorOrigin={{ vertical: "right", horizontal: "left" }}
              sx={{
                width: "100%",
                height: "100%",
                "& .MuiBadge-badge": {
                  padding: "4px",
                  width: "fit-content",
                  height: "fit-content",
                  backgroundColor: "var(--black-bg)",
                  color: "var(--gold)",
                },
              }}
            >
              <MUI.CardMedia
                component="img"
                image={img}
                alt={`A photo of ${name} pizza`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </MUI.Badge>
          ) : (
            <MUI.CardMedia
              component="img"
              image={img}
              alt={`A photo of ${name} pizza`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          )}
        </MUI.Box>

        {/* text wrapper*/}
        <MUI.CardContent
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            padding: "0",
            height: "100%",
            width: "100%",
          }}
        >
          <MUI.Box>
            <MUI.Typography variant="pizzaContentBold" component="p">
              {name}
            </MUI.Typography>
            <MUI.Typography
              aria-label={`${review} out of 5 stars`}
              variant="star"
            >
              {reviewStars(review)}
            </MUI.Typography>
          </MUI.Box>
          <MUI.Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "var(--GlobalgapOfGrids)",
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
              <MUI.Typography variant="pizzaContentBold">{`${finalPrice}€`}</MUI.Typography>
            )}
          </MUI.Box>
        </MUI.CardContent>
        <MUI.CardActions
          sx={{
            padding: "0",
            height: "100%",
            width: { sm: "100%" },
            flex: 1,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          {icons(iconList)}
        </MUI.CardActions>
      </MUI.Box>
    </MUI.Card>
  );
});
