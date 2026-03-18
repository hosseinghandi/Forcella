import { useEffect, useState } from "react";
import { ref, onValue, set } from "firebase/database";
import { db } from "../firebase";

export default function useUser(userId) {
  
  const [fetchedUserdata, setFetchedUserdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  function getValue(userRef) {
    const unsubscribe = onValue(
      userRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const raw = snapshot.val();
          // Convert comma-separated strings back to arrays
          const parsedUser = {
            ...raw,
            pizzaInCartId: raw.pizzaInCartId
            ? raw.pizzaInCartId.split(",").map(Number)
            : [],
            likedPizzasId: raw.likedPizzasId
            ? raw.likedPizzasId.split(",").map(Number)
            : [],
          };
          setFetchedUserdata(parsedUser);
        } else {
          // User node doesn't exist in DB
          setFetchedUserdata(null);
          setError("User not found");
        }
        setLoading(false);
      },
      (err) => {
        // Firebase permission or connection error
        setError(err.message);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }

  useEffect(() => {
    // Don't run if no userId provided
    if (!userId) {
      setLoading(false);
      return;
    }
    const userRef = ref(db, `ForcellaUserDataBase/${userId}`);

    setFetchedUserdata(null)
    setLoading(true);
    setError(null);
    
    return getValue(userRef) 

  }, [userId]
  );

  return {fetchedUserdata, loading, error};
}
