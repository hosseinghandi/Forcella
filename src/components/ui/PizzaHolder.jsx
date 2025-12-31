import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";


import AddCircleIcon from "@mui/icons-material/AddCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";


export default function PizzaCard({
  price, 
  name, 
  img, 
  discount, 
  time, 
  id, 
}) 
{
  const isLoading = false;
  const finalPrice = discount[0] ? ( price * (1 - (discount[1]/100))).toFixed(2) : price;
  const iconList = [<AddCircleIcon />, <FavoriteIcon />, <InfoIcon />];
  
  const icons = (list) => {
    return list.map((el) => (
      <IconButton 
      id={id}
      sx={{ padding: "0", color: "var(--dark)" }} size="small">
        {el}
      </IconButton>
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
        height: { xs: "140px" },
        borderRadius: "25px",
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
        <Box sx={{ height: "100%", width: "75%", position: "relative" }}>
          <CardMedia
            component="img"
            alt={name}
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
          <Typography
            variant="theme"
            sx={{ fontSize: 18, fontWeight: 700 }}
            component="p"
          >
            {" "}
            {name}
          </Typography>
          <Box
            sx={{
              marginTop: "16px",
              "@media (min-width:400px)": {
                marginTop: "40px",
              },
            }}
          >
            <Box
              sx={{
                fontSize: "14px",
                display: "flex",
                gap: "3px",
                lineHeight: "20px",
                flexDirection: "row",
                "@media (max-width:400px)": { flexDirection: "column" },
              }}
            >
              <Typography sx={{ fontSize: 15 }}>Preparing time:</Typography>
              <Typography sx={{ fontSize: 15 }}>{`${time} min`}</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <Typography
                sx={{
                  fontSize: 17,
                  fontWeight: 900,
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
                <Typography
                  sx={{ fontWeight: 900 }}
                >{`${finalPrice}€`}</Typography>
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
}
