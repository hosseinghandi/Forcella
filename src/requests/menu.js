// role: preparing data for main page
export default function getMenuData(t) {
  const text = {
    title: t("pages.menu.title"),

    pizzaRawData: Object.values(
      t("data:pizzas.items", { returnObjects: true }),
    ),

    spiceLevels_text: {
      none: t("data:pizzas.spiceLevels.none"),
      mild: t("data:pizzas.spiceLevels.mild"),
      medium: t("data:pizzas.spiceLevels.medium"),
      hot: t("data:pizzas.spiceLevels.hot"),
    },

    labels_text: {
      ingredients: t("data:pizzas.labels.ingredients"),
      calories: t("data:pizzas.labels.calories"),
      time: t("data:pizzas.labels.time"),
      preparationTime: t("data:pizzas.labels.preparationTime"),
      spiceLevel: t("data:pizzas.labels.spiceLevel"),
    },
    offer: {
      title: t("pages.menu.offer.title"),
      note: t("pages.menu.offer.note"),
      alreadyAdded: t("pages.menu.offer.alreadyAdded"),
      button: {
        gotIt: t("ui.buttons.gotIt"),
        addToBag: t("ui.buttons.addToBag"),
      },
    },

    wishList_text: {
      title: t("pages.wishlist.title"),
      empty: {
        title: t("pages.wishlist.emptyCart.title"),
        message: t("pages.wishlist.emptyCart.message"),
        button: t("ui.buttons.add"),
      },
    },
  };
  return { ...text };
}
