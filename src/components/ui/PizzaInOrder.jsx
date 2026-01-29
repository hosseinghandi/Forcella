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
  
  const price = pizzaData.price 
  const name = pizzaData.name 
  const img = pizzaData.image
  const discount = pizzaData.discount
  const id = pizzaData.id
  const time = pizzaData.time

  const finalPrice = discount
    ? (price * (1 - discount / 100)).toFixed(2)
    : price;

  const iconList = [
    [<Icon.Add />, handelAdd, "add"],
    [<Icon.Remove />, handelMinus, "minus"], 
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

  return (
    // item holder (main wrapper)
    <MUI.Card
      key={id}
      sx={{
        height: "fit-content",
        flexDirection: "column",
      }}
    >
      {/* check if the user reches to order number zero and ask him if 
      sure to remove that item from main list */}
      {count !== 0 ? (
        <>
        {/* item inner wrapper to not exceed minimum size*/}
          <MUI.Box
            sx={{
              height: "100px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            {/* image holder  */}
            <MUI.Box
              sx={{
                height: "100%",
                width: "50%",
                position: "relative",
              }}
            >
              <MUI.CardMedia
                component="img"
                alt={`A photo of ${name} pizza`}
                image={img}
                sx={{ height: "100%", width: "15vw" }}
              ></MUI.CardMedia>
            </MUI.Box>


            {/* content holder  name , quantity, price, and see more text*/}
            <MUI.CardContent
              sx={{
                display: "grid",
                padding: "0",
                gap: "10px",
                height: "100%",
                width: "100%",
              }}
            >

              {/* name and quantity wrapper as (name x 3) */}
              <MUI.Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <MUI.Typography variant="pizzaContentBold" component="p">
                  {name}
                </MUI.Typography>
                <MUI.Typography variant="textNormal" component="p">
                  {`x ${count}`}
                </MUI.Typography>
              </MUI.Box>

              {/* price holder  contains also discount percentage implemeneted 
              number(cross if discount) + real number*/}
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
                  {`${price * count}€`}
                </MUI.Typography>
                {discount && (
                  <MUI.Typography
                    sx={{ padding: 0 }}
                    variant="pizzaContentBold"
                  >{`${finalPrice * count}€`}</MUI.Typography>
                )}
              </MUI.Box>

              {/* see more refers to more info requested  */}
              <MUI.Typography onClick={() => onInfoRequest(id)}>
                {info ? `Close details` : `See details`}
              </MUI.Typography>
            </MUI.CardContent>
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
          </MUI.Box>

          { info &&
            <MUI.Box sx={{width:"100%", mt:"10px"}}>
              <MUI.Divider variant="full"/>
              <UI.PizzaInfo requestedpizzaInfo={pizzaData} setInfo={null} dialog={false}/>
              <MUI.Typography sx={{width:"100%"}}> </MUI.Typography>
            </MUI.Box> }
          
        </>
      ) : (
        <>
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
        </>
      )}
    </MUI.Card>
  );
});

{
  /* {discount ? (
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
                sx={{ height: "100%", width: "15vh" }}
              />
            </MUI.Badge>
            />} */
}
