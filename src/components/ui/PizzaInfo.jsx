// to do: change thename of ingerdents beacuse tehy are not corrisponded

// *role : on request render information dialog paper*
// material ui component
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  IconButton,
  Dialog,
} from "@mui/material";

// ui component
import Button from "../ui/Button";

// material ui icons for info paper
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WhatshotSharpIcon from "@mui/icons-material/WhatshotSharp";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

export default function pizzaInfo({ requestedpizzaInfo, setInfo }) {
  const {
    name,
    description,
    ingredients,
    spiceLevel,
    category,
    calories,
    time,
    image,
  } = requestedpizzaInfo;

  const ingredientsList = (ing) => {
    return ing.map((el, index) => (
      <img
        key={el ?? index}
        className="w-[30px]"
        src={`/pizza-gradient/${el}.png`}
      />
    ));
  };

  const icons = (icon, value, label, index) => {
    return (
      <Box
        key={index}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
        }}
      >
        {icon}
        <Typography sx={{ fontSize: 15, textAlign: "justify" }}>
          {`${value} ${label ?? ""}`}
        </Typography>
      </Box>
    );
  };
  return (
    <Dialog
      PaperProps={{
        sx: {
          borderRadius: "25px",
        },
      }}
      open={Boolean(requestedpizzaInfo)}
      onClose={() => setInfo(null)}
      fullWidth
      maxWidth="sm"
    >
      <Card
        sx={{
          p: 2,
          borderRadius: "var(--radius)",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Close button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={() => setInfo(null)} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Image */}
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{
            width: "70%",
            mx: "auto",
          }}
        />

        {/* Info */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box
            sx={{
              backgroundColor: "var(--gray)",
              borderRadius: "var(--radius)",
            }}
          >
            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                <Typography variant="titleBoldInfo">{name}</Typography>
                {category.map((el, index) => (
                  <Button
                    key={index}
                    shrink={true}
                    title={el}
                    to={`/applayout/menu/${el}`}
                    color={"white"}
                    disabled={false}
                  />
                ))}
              </Box>

              <Typography variant="textNormal" textAlign="justify">
                {description}
              </Typography>

              {/* Stats */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {icons(
                  <AccessTimeIcon sx={{ width: "25px" }} />,
                  time,
                  "min",
                  "time"
                )}
                {icons(
                  <WhatshotSharpIcon sx={{ width: "25px" }} />,
                  spiceLevel,
                  null,
                  "spicy"
                )}
                {icons(
                  <LocalFireDepartmentIcon sx={{ width: "25px" }} />,
                  calories,
                  "Kcl",
                  "calories"
                )}
              </Box>
            </CardContent>
          </Box>

          {/* Ingredients */}
          <Box
            sx={{
              backgroundColor: "var(--gray)",
              borderRadius: "var(--radius)",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Typography variant="titleBold">Ingredients:</Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    overflowX: "auto",
                  }}
                >
                  {ingredientsList(ingredients)}
                </Box>
              </Box>
            </CardContent>
          </Box>
        </Box>
      </Card>
    </Dialog>
  );
}
