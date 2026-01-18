import { useMemo } from "react"

export function useOrderSummery (pizzaInCart, pizzaInProcess) {
    return useMemo( () => {
        
        if (!pizzaInCart.length) {
            return {
                timeList: [], 
                pizzaQtyList: [], 
                priceList: [], 
                totalCount: 0, 
                totalTimeRequired: 0
            }
        }

              
        const pizzaQtyList = pizzaInCart.map(
        pizza => pizzaInProcess[pizza.id] ?? 1
        );

        const timeList = pizzaInCart.map(pizza => pizza.time);

        const priceList = pizzaInCart.map(
        (pizza, index) => pizza.price * pizzaQtyList[index]
        );

        const totalCount = pizzaQtyList.reduce(
        (sum, qty) => sum + qty,0);

         const subTotal = priceList.reduce(
        (sum, qty) => sum + qty,0);

        const totalTimeRequired = Math.floor(
        Math.max(...timeList) + Math.log2(totalCount || 1) * 5
        );

        const shipping = totalCount > 5 ? totalCount * 0.5 : 3 

        const tax = totalCount > 5 ? totalCount * 0.3 : 2 

        const totalToPay = subTotal + shipping + tax

        return {
                timeList, 
                pizzaQtyList, 
                priceList, 
                totalCount, 
                totalTimeRequired,
                subTotal,
                shipping, 
                tax,
                totalToPay
        }
    }
    ,[pizzaInCart, pizzaInProcess] )

}