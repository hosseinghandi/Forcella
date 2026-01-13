import  {setItem, getItem} from "./storage"
import  exampleUser  from "../exampleUser.json"

const useStateKey = "userState"

export const saveUserState = (state) => {
    return setItem(useStateKey, state)
}

export const getUserState = () => {
    return getItem(useStateKey, exampleUser)
}

export const updateUserState = (partState) =>{
    const currentState = getUserState() ?? {};
    const updatedState = {...currentState , ... partState};
    saveUserState(updatedState)
}