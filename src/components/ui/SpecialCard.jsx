// *role : on request render props as special offer*
import * as MUI from "../../barrels/MUI";
import * as UI from "../../barrels/UI";
import { memo, useState } from "react";
import { useTheme } from "../../providers/Theme";
import useRequestText from "../../hook/useRequestText";
import useUpdateUser from "../../hook/useUserUpdate";
import { useUserData } from "../../providers/UserData";

export default memo(function SpecialCard({ offered }) {
  const { colors } = useTheme();
  const { toggleCart } = useUpdateUser();
  const text = useRequestText("menu");
  const { fetchedUserdata } = useUserData();
  const [alreadyExist, setAlreadyExist] = useState(false);

  //   exist early if offered pizza item is not provided properly
  if (!offered?.length) return null;

  const offeredPizza = {
    name: offered[0].name,
    img: offered[0].image,
    discount: offered[0].discount,
    id: offered[0].id,
  };

  const isInCart = fetchedUserdata.pizzaInCartId.includes(offeredPizza.id);

  return (
    <MUI.Card
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: { xs: "var(--cardSizeMain)", sm: "100%" },
      }}
    >
      {/* main wrapper */}
      <MUI.Box
        sx={{
          width: { xs: "100%", lg: "fit-content" },
          height: { xs: "100%" },
          display: "flex",
          justifyContent: { xs: "space-between", special: "flex-end" },
          alignItems: "center",
          flexDirection: { xs: "row", special: "column" },
        }}
      >
        <MUI.CardContent
          sx={{
            width: { xs: "60%", special: "100%" },
            height: { xs: "100%", special: "fit-content" },
            padding: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: { xs: "var(--specialGap)" },
            order: { special: 2 },
          }}
        >
          <MUI.Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--specialGap)",
            }}
          >
            <MUI.Typography variant="pizzaContentBold">
              {text.offer.title}
            </MUI.Typography>
            <MUI.Typography 
            sx={{maxWidth: {xs:"20ch",sm:"30ch", md:"unset"}}}
            variant="textNormal">
              <strong>{`${offeredPizza.discount}%`}</strong> {text.offer.note}
            </MUI.Typography>
          </MUI.Box>
          <MUI.CardActions sx={{ padding: "0" }}>
            <UI.ButtonBasic
              title={text.offer.button.addToBag}
              aria-label={`Add ${offeredPizza.name} to cart`}
              task={() => {
                // if it is in cart, do nothing otherwise toggle
                isInCart ? setAlreadyExist(true) : toggleCart(offeredPizza.id);
              }}
              color={colors.text}
              shrink={true}
              disabled={false}
            ></UI.ButtonBasic>
          </MUI.CardActions>
        </MUI.CardContent>
        <MUI.CardMedia
          component="img"
          loading="lazy"
          alt={`A photo of ${offeredPizza.name} pizza`}
          image={offeredPizza.img}
          sx={{
            position: "absolute",
            padding: "0",
            width: { xs: "100%", special: "40vw", lg: "30vw", xl: "20vw" },
            height: { xs: "50vw", special: "40vw", lg: "30vw", xl: "20vw" },
            bottom: { xs: 0, special: "40%", lg: "42%", xl: "43%" },
            right: { xs: "-30vw", special: "-10vw", lg: "-8vw", xl: "-5vw" },
            objectFit: "contain",
            transformOrigin: "center center",
            animation: "spinIn 50s linear infinite",
            "@keyframes spinIn": {
              from: {
                transform: "rotate(0deg)",
              },
              to: {
                transform: "rotate(350deg)",
              },
            },
          }}
         />                
        {/* inform the user that the item is already exist in the cart */}
        <UI.ConfirmationDialog
          onClose={() => setAlreadyExist(false)}
          open={alreadyExist}
          actOnPositive={() => setAlreadyExist(false)}
          message={text.offer.alreadyAdded}
          positiveBtnName={text.offer.button.gotIt}
        />
      </MUI.Box>
    </MUI.Card>
  );
});
