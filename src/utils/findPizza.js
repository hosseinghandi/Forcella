//  role: do some small task for finding target pizza data
export default function findPizza() {
  const filterPizza = (data, compareTo) => {
    return compareTo
      ? data?.filter((el) => el["category"]?.includes(compareTo))
      : data;
  };
  // works for pizza id in wishlist and pizza id in cart
  const isPizzaInList = (data, compareTo) => {
    return !!compareTo && data?.includes(compareTo);
  };

  const getPizzaList = (data, compareTo) => {
    return !!compareTo?.length
      ? data?.filter((el) => compareTo?.includes(el.id))
      : [];
  };
  const getOfferedPizza = (data) => {
    return data?.filter((el) => el.discount) ?? null;
  };
  const getInfoPizza = (data, compareTo) => {
    return data?.find((el) => el.id === compareTo) ?? null;
  };
  return {
    filterPizza,
    isPizzaInList,
    getPizzaList,
    getOfferedPizza,
    getInfoPizza,
  };
}
