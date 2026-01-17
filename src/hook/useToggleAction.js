import { useCallback, useContext } from "react";
import { siteContext } from "../App";
import { updateUserState } from "../utils/userStateTracker";


// export function useToggleAction (key) {
//     // key is the section by which the hook 
//     // shgould search to access the prev value

//     // get the setUser to change the prev value by the state coming from app
//     const {setUser} = useContext(siteContext)
    
//     // toggel is the result of state and local storage changes
//     const toggle = useCallback( 
//         // the id is getting by component that calls the function
//         (id) => {
//         setUser( prev => {
//             // check teh current state of teh arr
//             const current = prev[key] || [];
//             //  delet from arr if id exists otherwise add it to
//             const updated = current.includes(id) ? 
//             current.filter( el => el !== id) : 
//             [...current, id]
//             // quiclky inform localstorage
//             updateUserState({ [key] : updated }) 
//             key === "pizzaInCartId" ? 
//             updateUserState({ "pizzaInProcess" : [updated.map((el) => {return [el,1]})] })  : null
//         // and change the userdata value
//         return {...prev, [key] : updated}
//         })
//     // do it once if nothing changes
//     }, [key, setUser])
//     // return the main action result
//     return toggle
// }

export function useToggleAction(key) {
  const { setUser } = useContext(siteContext);

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
