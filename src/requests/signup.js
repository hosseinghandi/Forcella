import * as requests from "../barrels/requests";
import { LandingPage } from "../barrels/UI";

export default function getSignupData(t, formTools) {
  
  
  const fields = requests.buildInputData(
    t("forms.fields", { returnObjects: true }),
    formTools
  );

  const text = {
    title:    t("pages.signup.title"),
    subtitle: t("pages.signup.subtitle"),

    sections: {
      personalInfo: {
        title: t("pages.signup.form.sections.personal.title"),
        inputs: {
          firstName:       fields.firstName,
          lastName:        fields.lastName,
          email:           fields.email,
          phone:           fields.phone,
          password:        fields.password,
          confirmPassword: fields.confirmPassword,
        },
      },
      address: {
        title: t("pages.signup.form.sections.address.title"),
        inputs: {
          address:      fields.address,
          zipcode:      fields.zipcode,
          addressExtra: fields.addressExtra,
        },
      },
    },
    LandingPage: {
      greeting: t("pages.landingPage.greeting"),
      mainMessage: t("pages.landingPage.signup.mainMessage"),
      subMessage: t("pages.landingPage.signup.subMessage")
    },
    button: {
      signup: t("ui.buttons.signup"),
    },
  };

  const personalInputs = Object.values(text.sections.personalInfo.inputs);
  const addressInputs  = Object.values(text.sections.address.inputs);

  return { text, personalInputs, addressInputs };
}