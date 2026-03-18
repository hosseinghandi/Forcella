// import * as requests from "../barrels/requests";
import * as Icons from "../barrels/Icons"
// import { useTranslation } from "react-i18next";
import { useMemo } from "react";
// import { useUserData } from "../providers/UserData";

const list = (request) => {
  // const { userdata } = useUserData();
  // const { t } = useTranslation()

  return useMemo(() => {
    // userdata ?? null;
    switch (request) {
      
      case "menu_icon_list":
        return {
          add : Icons.Add,
          fav: Icons.Heart,    
          info: Icons.Info }

      case "nav_path_list":
          return[
              { link: "/menu", Icon: Icons.Pizza, page:"menu" },
              { link: "/menu/wish", Icon: Icons.Heart, page:"wish" },
              { link: "/cart", Icon: Icons.ShoppingBag, page:"cart" },
              { link: "/profile", Icon: Icons.Person_bold , page:"profile"}]
  }
  });
};
export default list;


