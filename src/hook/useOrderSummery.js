import { useMemo } from "react"

export function useOrderSummery (pizzaInCart, pizzaInProcess) {
    return useMemo( () => {
        
        return pizzaInCart.length  ? ( () => {
              
        const pizzaQtyList = pizzaInCart.map(
        pizza => pizzaInProcess[pizza.id] ?? 1
        );

        const timeList = pizzaInCart.map(pizza => pizza.time);

        const priceList = pizzaInCart.map(
        (pizza, index) => pizza.price * pizzaQtyList[index]
        );

        const totalCount = pizzaQtyList.reduce(
        (sum, qty) => sum + qty,
        0
        );

        const totalTimeRequired = Math.floor(
        Math.max(...timeList) + Math.log2(totalCount || 1) * 5
        );
       
        return {
                timeList, 
                pizzaQtyList, 
                priceList, 
                totalCount, 
                totalTimeRequired
        }

        }) : {
                timeList: [], 
                pizzaQtyList: [], 
                priceList: [], 
                totalCount: 0, 
                totalTimeRequired: 0
            }
    }
    ,[pizzaInCart, pizzaInProcess] )

}