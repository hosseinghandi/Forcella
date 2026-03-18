import * as requests from "../barrels/requests";

export default function getCartData(t) {
  const cartFieldKeys = t("pages.cart.payment.form.fields", {
    returnObjects: true,
  });
  const allFields = t("forms.fields", { returnObjects: true });
  const fields = requests.buildInputData(
    Object.fromEntries(cartFieldKeys.map((key) => [key, allFields[key]])),
  );

  return {
    pizzaRawData: Object.values(
      t("data:pizzas.items", { returnObjects: true }),
    ),

    cart_text: {
      title: t("pages.cart.title"),
      remove: t("pages.cart.removeItem"),
      pre_message: t("pages.cart.pre_message"),
      empty: {
        title: t("pages.cart.emptyCart.title"),
        message: t("pages.cart.emptyCart.message"),
      },
      orderSummary: {
        title: t("pages.cart.orderSummery.title"),
        subtotal: t("pages.cart.orderSummery.subtotal"),
        shipping: t("pages.cart.orderSummery.shipping"),
        tax: t("pages.cart.orderSummery.tax"),
        total: t("pages.cart.orderSummery.total"),
      },
    },

    button: {
      order: t("ui.buttons.order"),
      pay: t("ui.buttons.pay"),
      goToMenu: t("ui.buttons.goToMenu"),
      sure: t("ui.buttons.sure"),
      no: t("ui.buttons.no"),
    },

    payment: {
      title: t("pages.cart.payment.title"),
      fullWidth: {
        cardHolder: fields.cardHolder,
        cardNumber: fields.cardNumber,
      },
      halfWidth: {
        expiryDate: fields.expiryDate,
        cvv: fields.cvv,
      },
    },
  };
}
