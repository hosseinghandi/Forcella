import { useCallback } from "react";
import { updateUserState } from "../utils/userStateTracker";
import { useUserData } from "../providers/UserData";

export default function useHandelUserPerference() {
    const { setUser } = useUserData();
    const updatedPereference = useCallback((key, value) => {
        setUser( 
            prev => {
                const nextState = 
                {...prev, 
                personalInfo : {
                    ...prev.personalInfo,
                    [key] : value
                }} 
                updateUserState(nextState)
                return nextState
            }
        )
    } 
    , [setUser])
    return updatedPereference
}