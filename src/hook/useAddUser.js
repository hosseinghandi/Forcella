// role: using in sign up should
// A)   get userid from auth
// B)   create the user object
// C)   save the form data to the uniqe UID on firebase

import { ref, set } from "firebase/database";
import { db, auth } from "../firebase";

function useAddUser() {
  async function addUser(formData) {
    try {
      const { confirmPassword, password, ...rest } = formData;
      // check if the user id is made otherwise return
      const uid = auth.currentUser?.uid;
      const userDataPreparation = {
        likedPizzasId: "",
        orders: {},
        personalInfo: {
          ...rest,
          language: "it",
          theme: false,
        },
        pizzaInCartId: "",
        pizzaInProcess: {},
      };
      if (!uid) return;
      // reset all teh default values
      const userRef = ref(db, `ForcellaUserDataBase/${uid}`);
      await set(userRef, userDataPreparation);
    } catch (err) {
      console.log(err);
    }
  }
  return addUser;
}

export default useAddUser;
