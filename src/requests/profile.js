// role: preparing data for profile page
import * as Icons from "../barrels/Icons";
import * as requests from "../barrels/requests";
export default function getProfileData(fetchedUserdata, t) {
  const allFields = t("forms.fields", { returnObjects: true });

  // build all fields with rules, then override placeholder with user's current value
  const fields = requests.buildInputData(allFields);

  const withUserPlaceholder = (key, userValue) => ({
    ...fields[key],
    placeholder: userValue,
  });

  const text = {
    greeting: t("pages.profile.greeting"),
    toast: t("pages.profile.toast"),
    listItems: [
      [
        fetchedUserdata.personalInfo.firstName,
        Icons.Person_outlined,
        t("forms.fields.firstName.label"),
        "",
      ],
      [
        fetchedUserdata.personalInfo.lastName,
        Icons.Person_outlined,
        t("forms.fields.lastName.label"),
        "",
      ],
      [
        fetchedUserdata.personalInfo.address,
        Icons.Location,
        t("pages.signup.form.sections.address.title"),
        "address",
      ],
      [
        fetchedUserdata.personalInfo.zipcode,
        Icons.Mailbox,
        t("forms.fields.zipcode.label"),
        "address",
      ],
      [
        fetchedUserdata.personalInfo.email,
        Icons.Email,
        t("forms.fields.email.label"),
        "",
      ],
      [
        fetchedUserdata.personalInfo.phone,
        Icons.Phone,
        t("forms.fields.phone.label"),
        "",
      ],
      [
        fetchedUserdata.personalInfo.language === "en"
          ? t("ui.labels.language.en")
          : t("ui.labels.language.it"),
        Icons.Language,
        t("ui.labels.language.title"),
        "",
      ],
      [
        fetchedUserdata.personalInfo.theme
          ? t("ui.labels.theme.dark")
          : t("ui.labels.theme.light"),
        Icons.Theme,
        t("ui.labels.theme.title"),
        "",
      ],
    ],

    inputs: {
      firstName: withUserPlaceholder(
        "firstName",
        fetchedUserdata.personalInfo.firstName,
      ),
      lastName: withUserPlaceholder(
        "lastName",
        fetchedUserdata.personalInfo.lastName,
      ),
      email: withUserPlaceholder("email", fetchedUserdata.personalInfo.email),
      phone: withUserPlaceholder("phone", fetchedUserdata.personalInfo.phone),
      address: withUserPlaceholder(
        "address",
        fetchedUserdata.personalInfo.address,
      ),
      zipcode: withUserPlaceholder(
        "zipcode",
        fetchedUserdata.personalInfo.zipcode,
      ),
      addressExtra: withUserPlaceholder(
        "addressExtra",
        fetchedUserdata.personalInfo.optional,
      ),
    },

    orderSum: {
      title: t("pages.profile.sections.orderSummary.title"),
      total: t("pages.profile.sections.orderSummary.total"),
      orderedIn: t("pages.profile.sections.orderSummary.orderIn"),
      removeItem: t("pages.profile.sections.orderSummary.removeItem"),
      state: {
        delivered: t("pages.profile.sections.orderSummary.state.delivered"),
        inTheOven: t("pages.profile.sections.orderSummary.state.inTheOven"),
        empty: t("pages.profile.sections.orderSummary.state.empty"),
      },
      delet: t("pages.profile.sections.orderSummary.delet"),
      showMore: t("pages.profile.sections.orderSummary.showMore"),
      showLess: t("pages.profile.sections.orderSummary.showLess"),
    },

    orders: {
      ...fetchedUserdata.orders,
    },

    logOut: {
      message: t("pages.profile.sections.logOut.message"),
    },

    button: {
      submit: t("ui.buttons.submit"),
      sure: t("ui.buttons.sure"),
      no: t("ui.buttons.no"),
      edit: t("ui.buttons.edit"),
      seeYouSoon: t("ui.buttons.seeYouSoon"),
      no_stay: t("ui.buttons.no_stay"),
    },
  };

  const inputs = Object.values(text.inputs);
  const pizzaRawData = Object.values(
    t("data:pizzas.items", { returnObjects: true }),
  );
  const isOrder = Object.values(text.orders).length;

  return { text, inputs, pizzaRawData, isOrder };
}
