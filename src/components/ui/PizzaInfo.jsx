// to do: change the name of ingerdents beacuse tehy are not corrisponded
// *role : on request render information dialog paper*


import * as MUI from "../../utils/MUI"
import * as UI from "../../utils/UI"
import * as Icon from "../../utils/Icons"

export default function pizzaInfo({ requestedpizzaInfo, setInfo, dialog }) {
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

  const iconsList = [
    [<Icon.AccessTime sx={{ width: "25px" }} />, time,"min","time"],
    [<Icon.Whatshot sx={{ width: "25px" }} />, spiceLevel,null,"spicy"],
    [<Icon.Fire sx={{ width: "25px" }} />, calories,"Kcl","calories"]]

  const icons = (list) => list.map(([icon, value, label, key]) => {
    return (
      <MUI.Box
        key={key}
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
  });
  

  const infoContent = 
    <>
        {dialog &&
          (<>
            <MUI.Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <MUI.IconButton onClick={() => setInfo(null)} size="small">
                <Icon.Close />
              </MUI.IconButton>
            </MUI.Box>
            <MUI.CardMedia
              component="img"
              image={image}
              alt={name}
              sx={{
                width: "70%",
                mx: "auto",
              }}
            />
          </>)}
        {/* main wrapper */}
        <MUI.Box sx={{ display: "flex", flexDirection: "column", ...( dialog ?? { gap: 2 })}}>
          {/* upper content */}
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
                    color={"white"}
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
                {icons(iconsList)}
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
            <MUI.CardContent >
              <MUI.Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <MUI.Typography variant="titleBold">Ingredients:</MUI.Typography>

                <MUI.Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    overflowX: "auto",
                  }}>
                  {ingredientsList(ingredients)}
                </MUI.Box>
              </MUI.Box>
            </MUI.CardContent>
          </MUI.Box>
        </MUI.Box>
    </>             



  
  return dialog ? (
    <MUI.Dialog
      PaperProps={{
        sx: {
          borderRadius: "25px",
        },
      }}
      onClose={() => setInfo(null)}
      open={dialog}
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

    {infoContent}
      </MUI.Card>
    </MUI.Dialog>
  ) : 
      <MUI.Box>  
        {infoContent}
      </MUI.Box>
}
