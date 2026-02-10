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
              { path: "/menu", Icon: Icons.Pizza },
              { path: "/menu/wish", Icon: Icons.Heart },
              { path: "/cart", Icon: Icons.ShoppingBag },
              { path: "/profile", Icon: Icons.Person_bold }]    
  }
  });
};
export default list;


