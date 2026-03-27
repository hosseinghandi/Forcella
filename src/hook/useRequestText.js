// role: on each reuest it provides the data required
// to render based on the request which is the name of page
import * as requests from "../barrels/requests";
import { useTranslation } from "react-i18next";
import { useUserData } from "../providers/UserData";
import { useMemo } from "react";

export default function useRequestText(request, formTools) {
  const { fetchedUserdata } = useUserData();
  const { t } = useTranslation();

  return useMemo(() => {
    switch (request) {
      case "welcoming":
        return requests.getWelcomingData(t);
      case "login":
        return requests.getLoginData(t);
      case "signup":
        return requests.getSignupData(t, formTools);
      case "menu":
        return requests.getMenuData(t);
      case "cart":
        return requests.getCartData(t);
      case "categories":
        return t("pages.menu.categories", { returnObjects: true });
      case "profile":
        if (fetchedUserdata) return requests.getProfileData(fetchedUserdata, t);
        return null;
      default:
        return null;
    }
  }, [request, fetchedUserdata, t, formTools]);
}
