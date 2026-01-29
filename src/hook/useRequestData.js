import * as Icon from "../barrels/Icons";
import { useTranslation } from "react-i18next";
import {useContext, useMemo } from "react";
import { useUserData } from "../providers/UserData";
const useRequestData = (request) => {

      const {userdata} = useUserData()
      const {t} = useTranslation()

      return useMemo(() => {
        userdata ?? null;
        switch (request) {
          case "profile" :
          return [
            [
              userdata.personalInfo.firstName,
              Icon.Person_outlined,
              "firstName",
              null,
            ],
            [userdata.personalInfo.lastName, Icon.Person_outlined, "lastName", null],
            [
              userdata.personalInfo.address.street,
              Icon.Location,
              "street",
              "address",
            ],
            [userdata.personalInfo.address.city, Icon.Location, "city", "address"],
            [
              userdata.personalInfo.address.zipcode,
              Icon.Mailbox,
              "zipcode",
              "address",
            ],
            [userdata.personalInfo.email, Icon.Email, "email", null],
            [userdata.personalInfo.phone, Icon.Phone, "phone", null],
            [userdata.personalInfo.language === "en" ? "English" : "Italian", Icon.Language, "language",null],
            [userdata.personalInfo.theme ? "dark" : "light", Icon.Theme, "theme",null],
          ]
        }

      } )

    }



//       if (request === "profile") {
        
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
//         return [
//               { path: "menu", Icon: Icon.Pizza },
//               { path: "favorites", Icon: Icon.Heart },
//               { path: "shoppingbag", Icon: Icon.ShoppingBag },
//               { path: "profile", Icon: Icon.Person_bold },
//         ]
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

export default useRequestData


