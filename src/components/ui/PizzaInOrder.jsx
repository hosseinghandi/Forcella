// *role : on request render pizza item for menu*
import * as MUI from "../../barrels/MUI";
import * as UI from "../../barrels/UI";
import * as Icon from "../../barrels/Icons";

// react import
import { memo, useMemo } from "react";
// import material ui icons for pizza holder

export default memo(function PizzaInOrder({
  pizzaData,
  info,
  handelAdd,
  handelMinus,
  handelRemove,
  onInfoRequest,
  count,
}) {
  const price = pizzaData.price;
  const name = pizzaData.name;
  const img = pizzaData.image;
  const discount = pizzaData.discount;
  const id = pizzaData.id;

  const finalPrice = discount
    ? (price * (1 - discount / 100)).toFixed(2)
    : price;

  const iconList = [
    [Icon.Add, handelAdd, "add"],
    [Icon.Info, onInfoRequest, "info"],
    [Icon.Remove, handelMinus, "minus"]
  ];

  const icons = (list) => {
    return list.map(([Icon, task, key]) => (
      <MUI.IconButton
        key={key}
        onClick={() => task(id)}
        sx={{ "&:hover": {
          color:"var(--orange)",
          },
          padding: "0", color: "var(--dark)" }}
        size="small"
      >
        <Icon />
      </MUI.IconButton>
    ));
  };

  return (
    // item holder (main wrapper) when the value is not arrived 0 
      <MUI.Card
      key={id}
      sx={{
        "&:hover": {
          boxShadow: "0 12px 32px rgba(181, 86, 56, 0.6)",
          scale: 1.05,
        },
        flexDirection:"column",
        justifyContent:"space-between",
        height: {xs:'100%', md:"fit-content"},
        width:"100%"
      }}
    >
      <MUI.Box
        sx={{
          height:"100%",
          width: "100%",
          display: "flex",
          flexDirection: { xs: "row", sm: "column" },
          alignItems: "center",
          gap: {
            xs: "var(--GlobalgapOfGrids)",
            md: "calc(var(--GlobalgapOfGrids) / 2)",
          },
        }}
       >
            {/* image holder  */}
        <MUI.Box
          sx={{
            width: { xs: "30vh", sm:"20vh" , md:"25vh", special: "var(--pizzaImageSizelg)",},
            height: "100%",
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
        </MUI.Box>
        
        {/* text wrapper*/}
        <MUI.CardContent
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column" },
            justifyContent: "space-between" ,
            padding: {xs:"0 10px", md:"unset"},
            height: "100%",
            width: "100%",
            gap: {md:"calc(var(--GlobalgapOfGrids) / 2)"}
          }}
        >
          <MUI.Box sx={{
            display:"flex",
            flexDirection: {xs: "column", sm: "row"},
            gap:1,
            justifyContent:"space-between"}}>
            {/* name and count */}
              <MUI.Box
                sx={{
                  display: "flex",
                  flexDirection: {xs: "column", sm: "column",md: "row"},
                  gap: 1,
                  alignItems: "felx-start",
                }}
              >
                <MUI.Typography variant="pizzaContentBold" component="p">
                  {name}
                </MUI.Typography>
                <MUI.Typography variant="textNormal" component="p">
                  {`x ${count}`}
                </MUI.Typography>
              </MUI.Box>
              {/* price and discount */}
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
                  {`${price * (count === 0 ? 1 : count)}€`}
                </MUI.Typography>
                {discount && (
                  <MUI.Typography
                    sx={{ padding: 0 }}
                    variant="pizzaContentBold"
                  >{`${(finalPrice) * (count === 0 ? 1 : count)}€`}</MUI.Typography>
                )}
              </MUI.Box>
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

      {
        count === 0 && 
        <MUI.Dialog
        PaperProps={{
          sx: {
            padding: "var(--cardPaddingY) var(--cardPaddingX)",
            borderRadius: "25px",
          },
        }}
        onClose={handelRemove}
        open={handelRemove}
        fullWidth
        maxWidth="sm"
      >

        <MUI.CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MUI.Typography> Do you want to remove this order?</MUI.Typography>
          <MUI.Box sx={{ display: "flex", flexDirection: "row", gap: 8 }}>
            <UI.ButtonBasic
              type="submit"
              title={"Yes"}
              id={id}
              task={handelRemove}
              shrink={true}
            />
            <UI.ButtonBasic
              type="submit"
              title={"No"}
              id={id}
              task={handelAdd}
              shrink={true}
            />
          </MUI.Box>
        </MUI.CardActions>
      </MUI.Dialog>
      }

      </MUI.Box>

            { info &&
            <>
              <UI.PizzaInfo id={id} setInfo={onInfoRequest} dialog={true}/>
            </>
          }
      </MUI.Card> 
    )
      }
  )
