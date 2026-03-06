// to do: change the name of ingerdents beacuse tehy are not corrisponded
// *role : on request render information dialog paper*

import * as MUI from "../../barrels/MUI";
import * as UI from "../../barrels/UI";
import * as Icon from "../../barrels/Icons";
import useRequestData from "../../hook/useRequestText";
import * as requests from "../../barrels/requests";
import { useMemo } from "react";

export default function pizzaInfo({ id, setInfo, dialog }) {

  const {pizzaRawData,spiceLevels_text,labels_text} = useRequestData("menu")

  const requestedpizzaInfo = requests.findPizza(pizzaRawData, "info", id)
  const {
    name,
    description,
    ingredients,
    spiceLevel,
    calories,
    time,
    image,
  } = requestedpizzaInfo;



  const ingredientsList = (ing) => {
    return ing.map((el, index) => (
      <MUI.Grid 
      key={el ?? index}
      size="auto"
      >
      <MUI.Box
        component={"img"}
        sx={{width:"calc(var(--iconsize) * 2 )"}}
        alt={`An icon of ${el}`}
        src={`/pizza-gradient/${el}.png`}
      />
      </MUI.Grid>
    ));
  };

  const iconsList = [
    [Icon.AccessTime, time, "min", labels_text.time],
    [Icon.Whatshot , null, spiceLevels_text[spiceLevel], labels_text.spiceLevel],
    [Icon.Fire, calories, "Kcl", labels_text.calories],
  ];

  const icons = (list) =>
    list.map(([Icon, value, label, key]) => {
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
          <Icon sx={{ width : "var(--iconsize)"}}/>
          <MUI.Typography variant="textNormal" sx={{ textAlign: "justify" }}>
            {`${value ?? ""} ${label}`}
          </MUI.Typography>
        </MUI.Box>
      );
    });

  const infoContent = (
    <>
    {/* if dialog i asked there is a need of close tab */}
      {dialog ? (
        <>
          <MUI.Box sx={{ display: "flex", justifyContent: "flex-end"}}>
            <MUI.IconButton
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
              <Icon.Close aria-hidden="true"/>
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
          justifyContent:"space-between",
          flexDirection: {xs:"column", md:"row"},
          gap:{xs:"var(--GlobalgapOfGrids)", md:"calc(var(--GlobalgapOfGrids) / 2)"},
          // ...(dialog ?? { gap: 2 }),
        }}
      >
         {dialog && 
          <>
          <MUI.Box sx={{

            width:"100%", 
            height:{xs:"25vh", special :"35vw" ,lg:"25vw", xl:"20vw"}, 
            display:"flex", justifyContent:"center",
            }}>
            <MUI.Box
              component="img"
              src={image}
              alt={`A picture of ${name} pizza`}
              sx={{
                objectFit:"contain"
              }}
            />
              </MUI.Box>
            <MUI.Divider
                variant="full"
              />
          </>
          }

          <MUI.Box
            sx={{
              padding: "unset",
              display: "flex",
              flexDirection: "column",
              justifyContent : {lg:"space-between"},
              gap:"var(--GlobalgapOfGrids)"
            }}
          >
          
         
          {/* content holder */}
          <MUI.Box sx={{
              display:"flex",
              flexDirection:"column",
              gap:"var(--GlobalgapOfGrids)"}}>
            
            {/* header holder  */}
            <MUI.Box
              sx={{               
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                
                justifyContent:"space-between"
              }}
            >
              <MUI.Typography variant="pizzaContentBold" >{name}</MUI.Typography>

            </MUI.Box>

            <MUI.Typography variant="textNormal" sx={{textAlign:"let", lineHeight:1.1}} >
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
            </MUI.Box>
            <MUI.Box sx={{ padding: 0, margin: "0" }}>
            <MUI.Divider
              variant="full"
              sx={{ my: "var(--GlobalgapOfGrids)" }}
            />
            <MUI.Grid
              container 
              sx={{alignItems:"center"}}
              rowSpacing="calc(var(--GlobalgapOfGrids) / 3)" 
              columnSpacing="calc(var(--GlobalgapOfGrids) / 3)">
              <MUI.Typography variant="pizzaContentBold">{labels_text.ingredients} </MUI.Typography>
                {ingredientsList(ingredients.icons)}
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
          height:{lg:"fit-content"},
          padding: "var(--cardPaddingY) var(--cardPaddingX)",
          borderRadius: "25px",
        },
      }}
      onClose={dialog}
      open={dialog}
      maxWidth="special"
     
    >
      {infoContent}
    </MUI.Dialog>
  ) : (
    <MUI.Box sx={{ padding: "0" }}>{infoContent}</MUI.Box>
  );
}
