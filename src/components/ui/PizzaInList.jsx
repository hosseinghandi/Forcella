// *role : on request render pizza item for menu*
import * as MUI from "../../barrels/MUI"
import * as Icon from "../../barrels/Icons"

// react import 
import { memo } from "react";

export default memo(function PizzaInList({
  price,
  name,
  img,
  discount,
  id,
  review,
  onToggelCart,
  onTogglePizza,
  onInfoRequest,
  liked,
  added
}) {
  const isLoading = false;
  
  const finalPrice = discount
    ? (price * (1 - discount/ 100)).toFixed(2)
    : price.toFixed(2);

  const iconList = [
    [<Icon.Add sx={{color : added ? "red" : "black"}}/>, onToggelCart, "add"],
    [<Icon.Heart sx={{color : liked ? "red" : "black"}}/> , onTogglePizza, "fav"],
    [<Icon.Info />, onInfoRequest, "info"],
  ];

  const icons = (list) => {
    return list.map(([el, task, key]) => (
      <MUI.IconButton
        key={key}
        onClick={() => task(id)}
        sx={{ padding: "0", color: "var(--dark)" }}
        size="small"
      >
        {el}
      </MUI.IconButton>
    ));
  };

  const reviewStars = (review) => {
    return Array.from({ length: review }).map((_, index) => (
      <Icon.Star sx={{ fontSize: 14, fill: "var(--gold)" }} key={index} />
    ));
  };

  return (
    <MUI.Card
      key={id}
      sx={{
        height: { xs: "140px"},
        flexDirection: "row",
      }}
    >
      {/* inner items holder  */}
      <MUI.Box
        sx={{
          height: "100%",
          width: "90%",
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        {/* image holder  */}
        <MUI.Box sx={{ height: "100%", width: "80%", position: "relative" }}>
        {discount ? (
            <MUI.Badge
              badgeContent={
                <MUI.Typography variant="body5">
                  {discount}%<br />OFF
                </MUI.Typography>
              }
              anchorOrigin={{ vertical: "right", horizontal: "left" }}
              sx={{
                "& .MuiBadge-badge": {
                  width: "40px",
                  height: "40px",
                  backgroundColor: "var(--dark)",
                  color: "var(--gold)",
                },
              }}
            >
              <MUI.CardMedia
                component="img"
                alt={`A photo of ${name} pizza`}
                image={img}
                sx={{ height: "100%", width: "fit-content" }}
              />
            </MUI.Badge>
          ) : (
            <MUI.CardMedia
              component="img"
              alt={`A photo of ${name} pizza`}
              image={img}
              sx={{ height: "100%", width: "fit-content" }}
            />
          )}
        </MUI.Box>
        <MUI.CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "0",
            height: "100%",
            width: "100%",
          }}
        >
          <MUI.Typography variant="pizzaContentBold" component="p">
            {name}
          </MUI.Typography>
          <MUI.Box
            sx={{
              marginTop: "40px",
            }}
          >
            <MUI.Box
              sx={{
                fontSize: "14px",
                display: "flex",
                gap: "3px",
                flexDirection: "row",
              }}
            >
              <MUI.Typography variant="star">{reviewStars(review)}</MUI.Typography>
            </MUI.Box>
            <MUI.Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <MUI.Typography
                variant="pizzaContentBold"
                sx={{
                  ...(discount && {
                    textDecoration: "line-through",
                    textDecorationColor: "var(--red)",
                    textDecorationThickness: 2,
                  }),
                }}
              >
                {`${price}€`}
              </MUI.Typography>
              {discount && (
                <MUI.Typography variant="pizzaContentBold">{`${finalPrice}€`}</MUI.Typography>
              )}
            </MUI.Box>
          </MUI.Box>
        </MUI.CardContent>
      </MUI.Box>
      <MUI.CardActions
        sx={{
          padding: "0",
          height: "100%",
          width: "10%",
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          justifyContent: "space-between",
        }}
      >
        {icons(iconList)}
      </MUI.CardActions>
    </MUI.Card>
  );
})
