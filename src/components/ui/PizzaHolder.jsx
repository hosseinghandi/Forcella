// *role : on request render pizza item for menu*

// material ui components
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
  Skeleton,
} from "@mui/material";

// react import 
import { memo } from "react";
// import material ui icons for pizza holder
import StarIcon from "@mui/icons-material/Star";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";

export default memo(function PizzaHolder({
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
  const finalPrice = discount[0]
    ? (price * (1 - discount[1] / 100)).toFixed(2)
    : price;

  const iconList = [
    [<AddCircleIcon sx={{color : added ? "red" : "black"}}/>, onToggelCart, "add"],
    [<FavoriteIcon sx={{color : liked ? "red" : "black"}}/> , onTogglePizza, "fav"],
    [<InfoIcon />, onInfoRequest, "info"],
  ];

  const icons = (list) => {
    return list.map(([el, task, key]) => (
      <IconButton
        key={key}
        onClick={() => task(id)}
        sx={{ padding: "0", color: "var(--dark)" }}
        size="small"
      >
        {el}
      </IconButton>
    ));
  };

  const reviewStars = (review) => {
    return Array.from({ length: review }).map((_, index) => (
      <StarIcon sx={{ fontSize: 14, fill: "var(--gold)" }} key={index} />
    ));
  };

  return isLoading ? (
    <>
      <Skeleton
        sx={{ bgcolor: "var(--gray)" }}
        variant="rectangle"
        width="100%"
        height={"120px"}
      />
    </>
  ) : (
    <Card
      key={id}
      sx={{
        height: { xs: "140px", sm: "200px" },
        borderRadius: "var(--radius)",
        width: "100%",
        backgroundColor: "var(--gray)",
        boxShadow: "none",
        padding: "12px 18px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* inner items holder  */}
      <Box
        sx={{
          height: "100%",
          width: "90%",
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        {/* image holder  */}
        <Box sx={{ height: "100%", width: "80%", position: "relative" }}>
          <CardMedia
            component="img"
            alt={`A photo of ${name} pizza`}
            image={img}
            sx={{ height: "100%", width: "fit-content" }}
          />
          {/* creating discount badge */}
          {discount[0] && (
            <Box
              sx={{
                position: "absolute",
                top: 70,
                bgcolor: "black",
                color: "orange",
                borderRadius: "999px",
                px: 2,
                py: 1,
                fontSize: 13,
                fontWeight: "bold",
                lineHeight: 1,
                textAlign: "center",
              }}
            >
              {`${discount[1]}%`} <br />
              OFF
            </Box>
          )}
        </Box>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "0",
            height: "100%",
            width: "100%",
          }}
        >
          <Typography variant="pizzaContentBold" component="p">
            {name}
          </Typography>
          <Box
            sx={{
              marginTop: "40px",
            }}
          >
            <Box
              sx={{
                fontSize: "14px",
                display: "flex",
                gap: "3px",
                flexDirection: "row",
              }}
            >
              <Typography variant="star">{reviewStars(review)}</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <Typography
                variant="pizzaContentBold"
                sx={{
                  ...(discount[0] && {
                    textDecoration: "line-through",
                    textDecorationColor: "var(--red)",
                    textDecorationThickness: 2,
                  }),
                }}
              >
                {`${price}€`}
              </Typography>
              {discount[0] && (
                <Typography variant="pizzaContentBold">{`${finalPrice}€`}</Typography>
              )}
            </Box>
          </Box>
        </CardContent>
      </Box>
      <CardActions
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
      </CardActions>
    </Card>
  );
})
