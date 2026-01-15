// to do: change the name of ingerdents beacuse tehy are not corrisponded
// *role : on request render information dialog paper*


import * as MUI from "../../utils/MUI"
import * as UI from "../../utils/UI"
import * as Icon from "../../utils/Icons"

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
      <MUI.Box
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
        <MUI.Typography sx={{ fontSize: 15, textAlign: "justify" }}>
          {`${value} ${label ?? ""}`}
        </MUI.Typography>
      </MUI.Box>
    );
  };
  return (
    <MUI.Dialog
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
      <MUI.Card
        sx={{
          p: 2,
          borderRadius: "var(--radius)",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Close button */}
        <MUI.Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <MUI.IconButton onClick={() => setInfo(null)} size="small">
            <Icon.Close />
          </MUI.IconButton>
        </MUI.Box>

        {/* Image */}
        <MUI.CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{
            width: "70%",
            mx: "auto",
          }}
        />

        {/* Info */}
        <MUI.Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <MUI.Box
            sx={{
              backgroundColor: "var(--gray)",
              borderRadius: "var(--radius)",
            }}
          >
            <MUI.CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <MUI.Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                <MUI.Typography variant="titleBoldInfo">{name}</MUI.Typography>
                {category.map((el, index) => (
                  <UI.ButtonBasic
                    key={index}
                    shrink={true}
                    title={el}
                    to={`/applayout/menu/${el}`}
                    color={"white"}
                    disabled={false}
                  />
                ))}
              </MUI.Box>

              <MUI.Typography variant="textNormal" textAlign="justify">
                {description}
              </MUI.Typography>

              {/* Stats */}
              <MUI.Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {icons(
                  <Icon.AccessTime sx={{ width: "25px" }} />,
                  time,
                  "min",
                  "time"
                )}
                {icons(
                  <Icon.Whatshot sx={{ width: "25px" }} />,
                  spiceLevel,
                  null,
                  "spicy"
                )}
                {icons(
                  <Icon.Fire sx={{ width: "25px" }} />,
                  calories,
                  "Kcl",
                  "calories"
                )}
              </MUI.Box>
            </MUI.CardContent>
          </MUI.Box>

          {/* Ingredients */}
          <MUI.Box
            sx={{
              backgroundColor: "var(--gray)",
              borderRadius: "var(--radius)",
            }}
          >
            <MUI.CardContent>
              <MUI.Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <MUI.Typography variant="titleBold">Ingredients:</MUI.Typography>

                <MUI.Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    overflowX: "auto",
                  }}
                >
                  {ingredientsList(ingredients)}
                </MUI.Box>
              </MUI.Box>
            </MUI.CardContent>
          </MUI.Box>
        </MUI.Box>
      </MUI.Card>
    </MUI.Dialog>
  );
}
