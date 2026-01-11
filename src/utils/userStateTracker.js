import  {setItem, getItem} from "./storage"
import {user} from "../exampleUser"
const useStateKey = "userState"

export const saveUserState = (state) => {
    return setItem(useStateKey, state)
}

export const getUserState = (state) => {
    return getItem(useStateKey, null)
}

export const updateUserState = (partState) =>{
    const currentState = getUserState() ?? {};
    const updatedState = {...currentState , ... partState};
    saveUserState(updatedState)
}