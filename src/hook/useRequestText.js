import * as requests from "../barrels/requests";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { useUserData } from "../providers/UserData";

const useRequestText = (request) => {
  const { userdata } = useUserData();
  const { t } = useTranslation()

  return useMemo(() => {
    // userdata ?? null;
    switch (request) {
      case "welcoming":
        return requests.getWelcomingData(t);
        case "login":
        return requests.getLoginData(t);
        case "signup":
          return requests.getSignupData(t);
        case "menu" :
          return requests.getMenuData(t)
        case "categories":
          return t("pages.menu.categories", {returnObjects: true})
        case "offer" :
          return {
          title: t("pages.menu.offer.title"),
          description: t("pages.menu.offer.note"),
          button: t("ui.buttons.orderNow")}
          }
    }
  );
};






















//       if (request === "profile") {
// return [
//   [
//     userdata.personalInfo.firstName,
//     Icon.Person_outlined,
//     "firstName",
//     null,
//   ],
//   [userdata.personalInfo.lastName, Icon.Person_outlined, "lastName", null],
//   [
//     userdata.personalInfo.address.street,
//     Icon.Location,
//     "street",
//     "address",
//   ],
//   [userdata.personalInfo.address.city, Icon.Location, "city", "address"],
//   [
//     userdata.personalInfo.address.zipcode,
//     Icon.Mailbox,
//     "zipcode",
//     "address",
//   ],
//   [userdata.personalInfo.email, Icon.Email, "email", null],
//   [userdata.personalInfo.phone, Icon.Phone, "phone", null],
//   [userdata.personalInfo.language === "en" ? "English" : "Italian", Icon.Language, "language",null],
//   [userdata.personalInfo.theme ? "dark" : "light", Icon.Theme, "theme",null],
// ]

//       }
//       if (request === "hints") {
//         return [
//               ["Delivered", "green"],
//               ["In the oven", "var(--orange)"],
//             ]
//       }
//       if (request === "order") {
//         return [
//           [userdata.orders, Icon.ShoppingBag, "orders", "order"]
//         ]
//       }
//       if (request === "pathList") {
//         
//       }

//       if (request === "welcome_messages") {
//                 const messages = {
//                   welcome: t("metadata.welcoming.static"),
//                   info: t("metadata.welcoming.info", { returnObjects: true }),
//                 };

//                 const button = {
//                   login: t("metadata.button.login"),
//                   signup: t("metadata.button.signup"),
//                   continue: t("metadata.button.continue"),
//                 }
//             }
// }

export default useRequestText;
