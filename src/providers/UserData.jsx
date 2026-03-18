import { createContext, useContext, useMemo, useState } from "react";
import useUser from "../hook/useUser";
export const UserDataContext = createContext(null);

export default function UserDataProvider({ children }) {

  const [userId, setUserId] = useState(
    () => JSON.parse(localStorage.getItem("userId"))
  );
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
  const context = useContext(UserDataContext);
  if (!context) return { fetchedUserdata: null, loading: true, error: null };
  if (!context.fetchedUserdata) return { ...context, loading: true };
  return context;
};
