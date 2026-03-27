// role: preparing data for login page 
import * as requests from "../barrels/requests";
export default function getLoginData(t) {
  const cartFieldKeys = t("pages.login.form.fields", { returnObjects: true });
  const allFields = t("forms.fields", { returnObjects: true });
  const fields = requests.buildInputData(
    Object.fromEntries(cartFieldKeys.map((key) => [key, allFields[key]])),
  );

  const text = {
    title: t("pages.login.title"),
    subtitle: t("pages.login.subtitle"),
    userCommunication: t("pages.login.userCommunication"),
    error: t("pages.login.form.fieldError"),
    inputs: {
      email: fields.email,
      password: fields.password,
    },

    button: {
      login: t("ui.buttons.login"),
      goToMenu: t("ui.buttons.goToMenu"),
      stayHere: t("ui.buttons.stayHere"),
    },
    forget: t("pages.login.form.links.forgotPassword"),
    LandingPage: {
      greeting: t("pages.landingPage.greeting"),
      message: t("pages.landingPage.login.message"),
      subMessage: t("pages.landingPage.login.subMessage"),
    },
  };

  const inputsList = Object.values(text.inputs);

  return { text, inputsList };
}
