import { ref, update } from "firebase/database";
import { db } from "../firebase";
import { useUserData } from "../providers/UserData";
import i18n from "../utils/i18n";

export default function useUpdateUser() {
  const { fetchedUserdata, userId } = useUserData();
  // helprs to handel teh functions
  const getUserRef = (path = "") => {
    return ref(db, `ForcellaUserDataBase/${userId}${path}`);
  };
  const toggleValueInList = (list = [], value) => {
    if (list.includes(value)) {
      return list.filter((i) => i !== value);
    }
    return [...list, value];
  };
  const buildPizzaProcess = (cartIds = []) => {
    const current = fetchedUserdata?.pizzaInProcess ?? {};
    return Object.fromEntries(cartIds.map((id) => [id, current[id] ?? 1]));
  };

  // write data to the firebase
  const writeUser = (data) => {
    if (!userId) return;
    return update(getUserRef(), data);
  };

  const updateProfile = (data) => {
    writeUser({
      personalInfo: {
        ...(fetchedUserdata?.personalInfo ?? {}),
        ...data,
      },
    });
  };
  // the return functions
  const toggleLike = (pizzaId) => {
    const current = fetchedUserdata?.likedPizzasId ?? [];
    const updated = toggleValueInList(current, pizzaId);
    writeUser({
      likedPizzasId: updated.join(","),
    });
    return updated;
  };

  const toggleCart = (pizzaId) => {
    const current = fetchedUserdata?.pizzaInCartId ?? [];
    const updatedCart = toggleValueInList(current, pizzaId);
    const updatedProcess = buildPizzaProcess(updatedCart);
    writeUser({
      pizzaInCartId: updatedCart.join(","),
      pizzaInProcess: updatedProcess,
    });
  };

  const changeQuantity = (id, change) => {
    const process = fetchedUserdata?.pizzaInProcess ?? {};
    const updated = Object.fromEntries(
      Object.entries(process).map(([key, value]) => [
        key,
        Number(key) === id ? value + change : value,
      ]),
    );
    writeUser({
      pizzaInProcess: updated,
    });
  };

  const removeItem = (id) => {
    const process = fetchedUserdata?.pizzaInProcess ?? {};
    const cart = fetchedUserdata?.pizzaInCartId ?? [];

    const updatedProcess = Object.fromEntries(
      Object.entries(process).filter(([key]) => Number(key) !== id),
    );
    const updatedCart = cart.filter((i) => Number(i) !== id);
    writeUser({
      pizzaInCartId: updatedCart.join(","),
      pizzaInProcess: updatedProcess,
    });
  };
  const handleOrder = (id, data) => {
    if (fetchedUserdata?.orders?.[id]) {
      writeUser({
        [`orders/${id}`]: null,
      });
      return;
    }

    if (!data?.orderDate || !data?.totalPrice) return;
    writeUser({
      [`orders/${id}`]: data,
    });
  };

  const toggleTheme = () => {
    const current = fetchedUserdata?.personalInfo.theme ?? true;
    writeUser({
      "personalInfo/theme": !current,
    });
  };

  const changeLanguage = () => {
    const current = fetchedUserdata?.personalInfo.language;
    const newLang = current === "en" ? "it" : "en";

    i18n.changeLanguage(newLang);
    writeUser({
      "personalInfo/language": newLang,
    });
  };

  const setZeroValue = () => {
    writeUser({
      pizzaInCartId: "",
      pizzaInProcess: {},
    });
  };

  return {
    setZeroValue,
    updateProfile,
    toggleLike,
    toggleCart,
    changeQuantity,
    removeItem,
    handleOrder,
    toggleTheme,
    changeLanguage,
  };
}
