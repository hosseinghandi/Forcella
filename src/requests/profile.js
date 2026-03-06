import * as Icons from "../barrels/Icons";

export default function getProfileData(userdata, t) {
    return (
        {
            pizzaRawData: Object.values(t("data:pizzas.items", { returnObjects: true })), 
            listItems : [
            [
              userdata.personalInfo.firstName,
              Icons.Person_outlined,
              t("ui.labels.firstName"),
              "",
            ],
            [userdata.personalInfo.lastName, Icons.Person_outlined, 
              t("ui.labels.lastName"), ""],
            [
              userdata.personalInfo.address.street,
              Icons.Location,
              t("pages.signup.form.sections.address.title"),
              "address",
            ],
            [
              userdata.personalInfo.address.zipcode,
              Icons.Mailbox,
              t("ui.labels.zipcode"),
              "address",
            ],
            [userdata.personalInfo.email, Icons.Email, t("ui.labels.email"), ""],
            [userdata.personalInfo.phone, Icons.Phone,  t("ui.labels.phone"), ""],
            [userdata.personalInfo.language === "en" ? 
              t("ui.labels.language.en") : t("ui.labels.language.it"), 
              Icons.Language, t("ui.labels.language.title"),""],
            
              [userdata.personalInfo.theme ? 
                t("ui.labels.theme.dark") : t("ui.labels.theme.light"), 
                Icons.Theme, t("ui.labels.theme.title"),""],
          ],
          orderSum: {
              title: t("pages.profile.sections.orderSummary.title"),
              orderDate: t("pages.profile.sections.orderSummary.orderDate"),
              subtotal: t("pages.profile.sections.orderSummary.subtotal"),
              shipping: t("pages.profile.sections.orderSummary.shipping"),
              tax: t("pages.profile.sections.orderSummary.tax"),
              total: t("pages.profile.sections.orderSummary.total"),
              state: {
                delivered: t("pages.profile.sections.orderSummary.state.delivered"),
                inTheOven: t("pages.profile.sections.orderSummary.state.inTheOven"),
                empty: t("pages.profile.sections.orderSummary.state.empty")
              },
              delet : t("pages.profile.sections.orderSummary.delet"),
              showMore : t("pages.profile.sections.orderSummary.showMore"),
              showLess : t("pages.profile.sections.orderSummary.showLess")
            },
          logOut:{
              message : t("pages.profile.sections.logOut.message"),
              yes : t("pages.profile.sections.logOut.yes"),
              no : t("pages.profile.sections.logOut.no")
            },
          button:{
              submit:t("ui.buttons.submit")
            }


        }


        
        )
}