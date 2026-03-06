import {createContext, useContext,useState, useMemo } from "react"
import {getUserState} from "../utils/userStateTracker";

export const UserDataContext = createContext(null);


export default function UserDataProvider({children}) {

    const [userdata, setUser] = useState(() => getUserState())
    const value = useMemo(() => ({
        userdata,
        setUser
    }), [userdata])
    return(
        <UserDataContext.Provider value={value}>
            {children}
        </UserDataContext.Provider>
    )
}
export const useUserData= () => useContext(UserDataContext)

