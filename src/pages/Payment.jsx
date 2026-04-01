// role : payment page
import * as UI from "../barrels/UI";
import * as MUI from "../barrels/MUI";
import { useNavigate } from "react-router-dom";
import useRequestText from "../hook/useRequestText";
import { useForm } from "react-hook-form";
import useUserUpdate from "../hook/useUserUpdate";
import { useOrderSummery } from "../hook/useOrderSummery";
import { useState } from "react";

export default function Payment() {
  const navigate = useNavigate();
  const { payment, button } = useRequestText("cart");
  const [isLoading, setIsLoading] = useState(null);
  const fullWidth = Object.entries(payment["fullWidth"]).map(([_, v]) => v);
  const halfWidth = Object.entries(payment["halfWidth"]).map(([_, v]) => v);
  const { pizzaIdlist, pizzaQtyList, totalToPay } = useOrderSummery();
  const formattedDate = new Intl.DateTimeFormat("en-GB").format(new Date());
  const orderKey = Date.now().toString();
  const { handleOrder, setZeroValue} = useUserUpdate();
  // premade order structure
  const orderdata = {
    orderDate: formattedDate,
    orderState: "In the oven",
    pizzaId: pizzaIdlist.join(","),
    quantity: pizzaQtyList.join(","),
    totalPrice: totalToPay,
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: Object.fromEntries(
      [...fullWidth, ...halfWidth].map((inputs) => [inputs.name, ""]),
    ),
  });

  // fake delay
  // null => nothing
  // true => loading
  // false => toast
  const onSubmit = () => {
    handleOrder(orderKey, orderdata);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setZeroValue();
        navigate("/menu");
      }, 2000);
    }, 2000);
  };

  return (
    <>
      <UI.SharedNavigation variant={"cart"} />
      <UI.LayoutHandeler
        style={{
          marginTop: { xs: "5vh", lg: "unset" },
          width: "100%",
          height: { xs: "50vh", lg: "80vh" },
        }}
      >
        <MUI.Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--GlobalgapOfItems)",
          }}
        >
          <MUI.Typography variant="textNormal">{payment.title}</MUI.Typography>
        </MUI.Box>

        <MUI.Box
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--GlobalgapOfItems)",
            width: {
              xs: "100%",
              sm: "clamp(28.13rem, 13.89vi + 22.92rem, 43.75rem)",
            },
          }}
        >
          <MUI.Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "calc(var(--GlobalgapOfItems)/2)",
              marginTop: "20px",
            }}
          >
            <UI.InputControllerGroup
              inputs={fullWidth}
              control={control}
              errors={errors}
            />

            <MUI.Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "var(--GlobalgapOfItems)",
              }}
            >
              <UI.InputControllerGroup
                inputs={halfWidth}
                control={control}
                errors={errors}
              />
            </MUI.Box>
            <UI.ButtonBasic
              title={`${button.pay} $${totalToPay}`}
              aria-label={`pay ${totalToPay} dollars`}
              type={"submit"}
            />
          </MUI.Box>
        </MUI.Box>
      </UI.LayoutHandeler>
      {isLoading !== null && (
        <UI.SuccessfulAction toastMessage={payment.toast} loading={isLoading} />
      )}
    </>
  );
}
