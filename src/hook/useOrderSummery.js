// role: gets teh pizzaIn process and make a meaningful use of data to create
// requird data to render the summery of the order for page cart
import { useMemo } from "react";
import * as request from "../barrels/requests";
import { useUserData } from "../providers/UserData";
import useRequestText from "./useRequestText";
export function useOrderSummery() {
  const { fetchedUserdata } = useUserData();
  const { pizzaRawData } = useRequestText("cart");

  return useMemo(() => {
    const {getPizzaList} = request.findPizza()
    const pizzaInCart = getPizzaList(pizzaRawData, fetchedUserdata?.pizzaInCartId ?? [])
    const pizzaInProcess = fetchedUserdata?.pizzaInProcess ?? {};

    // check if there is nothing , keep the structure and give deafult value
    if (!pizzaInCart || !pizzaInProcess) {
      return {
        pizzaIdlist: [],
        pizzaQtyList: [],
        totalCount: 0,
        totalTimeRequired: 0,
        subTotal: 0,
        shipping: 0,
        tax: 0,
        totalToPay: 0,
      };
    }

    let pizzaIdlist = [];
    let pizzaQtyList = [];
    let totalCount = 0;
    let subTotal = 0;
    let maxTime = 0;

    for (const pizza of pizzaInCart) {
      const qty = pizzaInProcess[pizza.id] ?? 1;

      pizzaIdlist.push(pizza.id);
      pizzaQtyList.push(qty);

      totalCount += qty;
      subTotal += pizza.price * qty;

      if (pizza.time > maxTime) {
        maxTime = pizza.time;
      }
    }

    const totalTimeRequired = Math.floor(
      maxTime + Math.log2(totalCount || 1) * 5,
    );

    const shipping = totalCount > 5 ? totalCount * 0.5 : 3;
    const tax = totalCount > 5 ? totalCount * 0.3 : 2;
    const totalToPay = parseFloat(Number(subTotal + shipping + tax).toFixed(2));

    return {
      pizzaInCart,
      pizzaInProcess,
      pizzaIdlist,
      pizzaQtyList,
      totalCount,
      totalTimeRequired,
      subTotal,
      shipping,
      tax,
      totalToPay,
    };
  }, [fetchedUserdata, pizzaRawData]);
}
