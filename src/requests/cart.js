export default function getCartData (t){

return {
  pizzaRawData: Object.values(
    t("data:pizzas.items", { returnObjects: true })
  ),

  cart_text: {
        title: t("pages.cart.title"),
        empty: {
          title: t("pages.cart.emptyCart.title"),
          message : t("pages.cart.emptyCart.message"),
          button: t("ui.buttons.orderNow"),
        },
        pre_message: "pages.cart.pre_message",
        orderSummary: {
              title: t("pages.profile.sections.orderSummary.title"),
              subtotal: t("pages.profile.sections.orderSummary.subtotal"),
              shipping: t("pages.profile.sections.orderSummary.shipping"),
              tax: t("pages.profile.sections.orderSummary.tax"),
              total: t("pages.profile.sections.orderSummary.total"),
            },
          },
          button:{
            order:  t("ui.buttons.order"),
            pay:  t("ui.buttons.pay")
          },
          payment: {
              title : t("pages.cart.payment.title"),
              cardHolder : t("ui.labels.cardHolder"),
              cardNum : t("ui.labels.cardNum"),
              expiry : t("ui.labels.expiry"),
              dateFormat : t("ui.labels.dateFormat"),
              ccv : t("ui.labels.ccv")
          },

  
}
}

