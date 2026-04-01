// *role : on request make teh dialog avaliabel
// to present the info about the item

import * as MUI from "../../barrels/MUI";
import * as Icons from "../../barrels/Icons";
import useRequestData from "../../hook/useRequestText";
import * as requests from "../../barrels/requests";

export default function PizzaInfo({ id, setInfo, dialog }) {
  const { pizzaRawData, spiceLevels_text, labels_text } =
    useRequestData("menu");
  const { getInfoPizza } = requests.findPizza();

  const { name, description, ingredients, spiceLevel, calories, time, image } =
    getInfoPizza(pizzaRawData, id);

  const iconsList = [
    [Icons.AccessTime, time, "min", labels_text.time],
    [
      Icons.Whatshot,
      null,
      spiceLevels_text[spiceLevel],
      labels_text.spiceLevel,
    ],
    [Icons.Fire, calories, "Kcl", labels_text.calories],
  ];

  const ingredientsList = (ing) => {
    return ing.map((el, index) => (
      <MUI.Grid key={el ?? index} size="auto">
        <MUI.Box
          component={"img"}
          loading="lazy"
          sx={{ width: "calc(var(--iconsize) * 2 )" }}
          alt={`${el} ingredient`}
          src={`/pizza-gradient/${el}.png`}
        />
      </MUI.Grid>
    ));
  };

  const icons = (list) =>
    list.map(([Icon, value, label, key]) => {
      return (
        <MUI.Box
          role="listitem"
          key={key}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Icon aria-hidden="true" sx={{ width: "var(--iconsize)" }} />
          <MUI.Typography variant="textNormal" sx={{ textAlign: "justify" }}>
            {`${value ?? ""} ${label}`}
          </MUI.Typography>
        </MUI.Box>
      );
    });

  const infoContent = (
    <>
      {dialog ? (
        <>
          <MUI.Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <MUI.IconButton
              disableRipple
              aria-label="close"
              onClick={() => setInfo(null)}
              sx={{
                "&:hover": {
                  background: "var(--orange)",
                },
                width: "25px",
                height: "25px",
                border: "1px solid var(--black-bg)",
              }}
            >
              <Icons.Close aria-hidden="true" />
            </MUI.IconButton>
          </MUI.Box>
        </>
      ) : (
        <MUI.Divider variant="full" sx={{ mb: "var(--GlobalgapOfGrids)" }} />
      )}

      {/* main wrapper (text + ingredient)*/}
      <MUI.Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: {
            xs: "var(--GlobalgapOfGrids)",
            md: "calc(var(--GlobalgapOfGrids) / 2)",
          },
        }}
      >
        {dialog && (
          <>
            <MUI.Box
              sx={{
                width: "100%",
                height: {
                  xs: "25vh",
                  sm: "30vh",
                  special: "30vh",
                  lg: "25vw",
                  xl: "20vw",
                },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <MUI.Box
                component="img"
                src={image}
                alt={`A picture of ${name} pizza`}
                loading="lazy"
                sx={{
                  objectFit: "contain",
                }}
              />
            </MUI.Box>
            <MUI.Divider variant="full" />
          </>
        )}

        <MUI.Box
          sx={{
            padding: "unset",
            display: "flex",
            flexDirection: "column",
            justifyContent: { lg: "space-between" },
            gap: "var(--GlobalgapOfGrids)",
          }}
        >
          {/* content holder */}
          <MUI.Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--GlobalgapOfGrids)",
            }}
          >
            {/* header holder  */}
            <MUI.Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                justifyContent: "space-between",
              }}
            >
              <MUI.Typography variant="pizzaContentBold" id="pizza-title">
                {name}
              </MUI.Typography>
            </MUI.Box>

            <MUI.Typography
              variant="textNormal"
              sx={{ textAlign: "left", lineHeight: 1.1 }}
            >
              {description}
            </MUI.Typography>

            {/* Stats */}
            <MUI.Box
              role="list"
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {icons(iconsList)}
            </MUI.Box>
          </MUI.Box>
          <MUI.Box sx={{ padding: 0, margin: "0" }}>
            <MUI.Divider
              variant="full"
              sx={{ my: "var(--GlobalgapOfGrids)" }}
            />
            <MUI.Grid
              container
              sx={{ alignItems: "center" }}
              rowSpacing="calc(var(--GlobalgapOfGrids) / 3)"
              columnSpacing="calc(var(--GlobalgapOfGrids) / 3)"
            >
              <MUI.Typography variant="pizzaContentBold">
                {labels_text?.ingredients}
              </MUI.Typography>
              {ingredientsList(ingredients?.icons)}
            </MUI.Grid>
          </MUI.Box>
        </MUI.Box>
      </MUI.Box>

      {/* Ingredients */}
    </>
  );

  return dialog ? (
    <MUI.Dialog
      PaperProps={{
        sx: {
          height: { lg: "fit-content" },
          padding: "var(--cardPaddingY) var(--cardPaddingX)",
          borderRadius: "25px",
          maxWidth: {
            xs: "86vw",
            sm: "65vw",
            md: "80%",
            special: "70%",
            xl: "50%",
          },
          minWidth:{xs:"85vw", sm:"unset"},
        },
      }}
      onClose={() => setInfo(null)}
      open={!!dialog}
      aria-labelledby="pizza-title"
    >
      {infoContent}
    </MUI.Dialog>
  ) : (
    <MUI.Box sx={{ padding: "0" }}>{infoContent}</MUI.Box>
  );
}
