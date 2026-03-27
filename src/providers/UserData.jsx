// role: to get the user data using useUSer and
// become as sourth of truth which shares teh data to other elements
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import useUser from "../hook/useUser";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const UserDataContext = createContext(null);

export default function UserDataProvider({ children }) {
  
  const [userId, setUserId] = useState(null)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>{
      if (user) {
        setUserId(user.uid)
      }
    })
    return unsubscribe
  }, [])
  
  const { fetchedUserdata, loading, error } = useUser(userId);

  const value = useMemo(
    () => ({
      userId,
      setUserId,
      fetchedUserdata,
      loading,
      error,
    }),
    [fetchedUserdata, loading, error, userId],
  );

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
}
export const useUserData = () => {
  // just be sure that until the data is ready the structure will be kept as meaningful object
  const context = useContext(UserDataContext);
  if (!context) return { fetchedUserdata: null, loading: true, error: null };
  if (!context.fetchedUserdata) return { ...context, loading: true };
  return context;
};
