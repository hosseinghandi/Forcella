import { useCallback, useContext } from "react";

import { updateUserState } from "../utils/userStateTracker";
import { useUserData } from "../providers/UserData";
export function useToggleAction(key) {
  const { setUser } = useUserData();

  const toggle = useCallback((id) => {

    setUser(prev => {
        //  look for the key and update it
      const current = prev[key] || [];
      const updated = current.includes(id)
        ? current.filter(el => el !== id)
        : [...current, id];

        // save it here to variable and update the requested key
      let nextState = { ...prev, [key]: updated };
        
        // if requst for putting pizza in bag => add id and quanity to 1 if does not xist 
      // ✅ keep pizzaInProcess in sync
      if (key === "pizzaInCartId") {
        // {id: quantity}
        const updatedProcess = {};
        // loop over the list to create quantity
        updated.forEach(pid => {
          updatedProcess[pid] = prev.pizzaInProcess?.[pid] ?? 1;
        });
        // update state again 
        nextState.pizzaInProcess = updatedProcess;
      }

      // update local storage
      updateUserState(nextState);
      
      return nextState;
    });
  }, [key, setUser]);

  return toggle;
}
