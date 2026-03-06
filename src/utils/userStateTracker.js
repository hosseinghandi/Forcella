import  {setItem, getItem} from "./storage"
import  exampleUser  from "../exampleUser.json"

const useStateKey = "userState"

export const saveUserState = (state) => {
    return setItem(useStateKey, state)
}

export const getUserState = () => {
    const saved = getItem(useStateKey)

    if (saved) return saved

    saveUserState(exampleUser)

    return exampleUser
}

export const updateUserState = (state) =>{

    saveUserState(state)
}