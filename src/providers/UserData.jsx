import {createContext, useContext,useState } from "react"
import {getUserState} from "../utils/userStateTracker";

export const UserDataContext = createContext(null);


export default function UserDataProvider({children}) {
    const [userdata, setUser] = useState(getUserState())
    return(
        <UserDataContext.Provider value={{userdata, setUser}}>
            {children}
        </UserDataContext.Provider>
    )
}
export const useUserData= () => useContext(UserDataContext)

