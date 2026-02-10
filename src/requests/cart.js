import { Button } from "@mui/material";

export default function getCartData (t){

return {
  pizzaRawData: Object.values(
    t("data:pizzas.items", { returnObjects: true })
  ),

  
  cart_text: {
        title: t("pages.cart.title"),
        state: t("pages.cart.states.empty"),
        pre_message: "pages.cart.pre_message",
    
        orderSummary: {
            title: t("pages.orderSummary.title"),
            subtotal: t("pages.orderSummary.subtotal"),
            shipping: t("pages.orderSummary.shipping"),
            tax: t("pages.orderSummary.tax"),
            total: t("pages.orderSummary.total"),
        },
        button:  t("ui.buttons.order")
  },

  
}
}

