export default function getMenuData (t){
    return {
       pizzaRawData: Object.values(t("data:pizzas.items", { returnObjects: true })), 
       
       spiceLevels_text: {
        none : t("data:pizzas.spiceLevels.none"),
        mild : t("data:pizzas.spiceLevels.mild"),
        medium : t("data:pizzas.spiceLevels.medium"),
        hot : t("data:pizzas.spiceLevels.hot"),
       },

       labels_text : {
        ingredients: t("data:pizzas.labels.ingredients"),
        calories: t("data:pizzas.labels.calories"),
        time: t("data:pizzas.labels.time"),
        preparationTime: t("data:pizzas.labels.preparationTime"),
        spiceLevel: t("data:pizzas.labels.spiceLevel")
        },

       wishList_text: {
        title: t("pages.wish.title"),
        state : t("pages.wish.states.empty")
       }
    }
}
