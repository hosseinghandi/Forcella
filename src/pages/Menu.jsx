// role main page
import { useState, useMemo } from "react";
import * as requests from "../barrels/requests";
import emptyWishlist from "/emptyWish.png";
import { useParams } from "react-router-dom";
import * as MUI from "../barrels/MUI";
import * as UI from "../barrels/UI";
import { useUserData } from "../providers/UserData";
import useRequestText from "../hook/useRequestText";

export default function Menu() {
  // preparation of basic data
  const { fetchedUserdata } = useUserData();
  const { pizzaRawData, wishList_text } = useRequestText("menu");
  const filterList = useRequestText("categories");
  const [info, setInfo] = useState(null);

  // handel data preperation bsed on filter key
  const { filterkey } = useParams();
  const { filterPizza, getPizzaList, getOfferedPizza, isPizzaInList } =
    requests.findPizza();
  const pizzaData = useMemo(() => {
    const likedId = fetchedUserdata?.likedPizzasId ?? [];
    const WishList =
      likedId.length > 0 ? getPizzaList(pizzaRawData, likedId) : [];
    const offeredPizza = getOfferedPizza(pizzaRawData);
    const filteredPizza =
      filterkey === "wish"
        ? WishList
        : filterkey === "Offered" || filterkey === "In offerta"
          ? offeredPizza
          : filterPizza(pizzaRawData, filterkey);
    return {
      WishList: WishList,
      offeredPizza: offeredPizza,
      filteredPizza: filteredPizza,
    };
  }, [filterkey, pizzaRawData, fetchedUserdata]);

  // handel info request
  const handelInfoRequest = (id) => {
    setInfo((prev) => (prev !== id ? id : null));
  };

  // check if the path is as predicted
  const isFilterValid = (key) => {
    return !!filterkey
      ? filterList.includes(key) || filterkey === "wish"
      : true;
  };

  return isFilterValid(filterkey) ? (
    <>
      <MUI.Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--GlobalgapOfGrids)",
          mb: "var(--GlobalgapOfGrids)",
        }}
      >
        <UI.SharedNavigation
          variant="menu"
          filter={filterkey !== "wish"}
          headText={wishList_text.title}
        />
        {pizzaData.WishList.length === 0 && filterkey === "wish" && (
          <UI.EmptyList
            image={emptyWishlist}
            title={wishList_text.empty.title}
            message={wishList_text.empty.message}
            buttontitle={wishList_text.empty.button}
          />
        )}
      </MUI.Box>
      <MUI.Grid
        sx={{
          "& > :last-child": {
            mb: {
              xs: "calc(var(--filterAndNavSize) + 20px)",
              special: "unset",
            },
          },
        }}
        container
        rowSpacing="var(--GlobalgapOfGrids)"
        columnSpacing="var(--GlobalgapOfGrids)"
      >
        {!filterkey && (
          <MUI.Grid size={{ xs: 12, md: 12, special: 4, lg: 3, xl: 2 }}>
            <UI.SpecialCard offered={pizzaData.offeredPizza} />
          </MUI.Grid>
        )}
        {pizzaData.filteredPizza?.map((pizza) => (
          <MUI.Grid
            key={pizza.name}
            size={{ xs: 12, sm: 6, md: 6, special: 4, lg: 3, xl: 2 }}
          >
            <UI.PizzaInList
              name={pizza.name}
              price={pizza.price}
              review={pizza.review}
              img={pizza.image}
              discount={pizza.discount}
              time={pizza.time}
              id={pizza.id}
              liked={isPizzaInList(
                fetchedUserdata?.likedPizzasId ?? [],
                pizza.id,
              )}
              added={isPizzaInList(
                fetchedUserdata?.pizzaInCartId ?? [],
                pizza.id,
              )}
              onInfoRequest={handelInfoRequest}
            />
          </MUI.Grid>
        ))}
      </MUI.Grid>
      {info && <UI.PizzaInfo id={info} setInfo={setInfo} dialog={true} />}
    </>
  ) : (
    <>
      <UI.E404 pathname={"/menu"} />
    </>
  );
}
