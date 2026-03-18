import { ref, set } from "firebase/database";
import { db } from "../firebase";
import { useUserData } from "../providers/UserData";

function useAddUser() {
    const{setUserId} = useUserData()
    async function addUser(formData) {
        const {confirmPassword, ...rest} = formData
        const username = formData?.email.split("@")[0];
        const UserDataPreparation = {
            likedPizzasId: "",
            orders: {},
            personalInfo: {
            ...rest,
            language: "it",
            theme: false
            },
            pizzaInCartId: "",
            pizzaInProcess: {}
        }
        

        const userRef = ref(db, `/ForcellaUserDataBase/user_${username}`)
        await set(userRef, UserDataPreparation)
        setUserId(`user_${username}`)
        // save in the local storage the userId to log in with 
        localStorage.setItem("userId", JSON.stringify(`user_${username}`));
    }
return addUser
}

export default useAddUser