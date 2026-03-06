
import { updateUserState, getUserState } from "../utils/userStateTracker";
import { useUserData } from "../providers/UserData";
export function useOrderCount (key) {

    const {setUser} = useUserData()
    
    if (key === "add") {
        const increaseQty = (id) => {
            setUser( prev => {
                const nextState = {
                    ...prev, 
                    pizzaInProcess : {
                        ...prev.pizzaInProcess, 
                        [id]: prev?.pizzaInProcess[id] + 1
                    }  
                };
                // update the state fro local storage
                updateUserState(nextState)
                // return the result for state
                return nextState
            });
        };
        return increaseQty
}
 if (key === "minus") {
    const decreaseQty = (id) => {
        setUser(prev => {
            const nextState = {
                ...prev, 
                pizzaInProcess : {
                    ...prev.pizzaInProcess,
                    [id]: prev.pizzaInProcess[id] -1 
                }
            };
            updateUserState(nextState)
            return nextState
        });
    };
    return decreaseQty
}
if (key === "remove") {
    const removeQty = (id) => {
        setUser(prev => {   
            
            let nextState = {
                ...prev, 
                pizzaInProcess : Object.fromEntries(
                Object.entries(prev.pizzaInProcess).filter(([k]) => +k !== id)
                )
            };
            nextState.pizzaInCartId =  prev.pizzaInCartId.filter( (idnum) => idnum !== id)

            updateUserState(nextState)
            return nextState
        });
    };
    return removeQty
}

if (key === "delet") {
    const deletItem = (id) => {
        setUser(prev => {   
            let nextState = {
                ...prev, 
                orders : Object.fromEntries(
                Object.entries(prev.orders).filter(([k]) => k !== id)
                )
            };    
            updateUserState(nextState)
            return nextState
        });
    };
    return deletItem
}
};
