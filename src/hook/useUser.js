// role:
// A) listen to firebase
// B) create user if does not exists
// C) convert the data in usable format
import { useEffect, useState } from "react";
import { set, ref, onValue } from "firebase/database";
import { db } from "../firebase";
import  userTemplate  from "../userTemplate.json";

export default function useUser(userId) {
  const { default_User } = userTemplate;
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
          setLoading(false);
        } else {
          // if there is no user, create default user automatically
          set(userRef, default_User);
        }
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      },
    );
    return () => unsubscribe();
  }

  useEffect(() => {
    // Don't run if no userId provided
    if (!userId) return;

    // Create reference to this user's data in Firebase
    const userRef = ref(db, `ForcellaUserDataBase/${userId}`);

    setFetchedUserdata(null);
    setLoading(true);
    setError(null);

    // listen to firebase
    return getValue(userRef);

    // do it each time that the userId changes
  }, [userId]);

  // make it usable in the app
  return { fetchedUserdata, loading, error };
}
