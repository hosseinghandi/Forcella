export default function getMenuData (t){
    return Object.values(t("data:pizzas.items", { returnObjects: true }))
}