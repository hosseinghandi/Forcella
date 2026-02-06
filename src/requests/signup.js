import * as Icons from "../barrels/Icons"
export default function getSignupData(t) {
    const text = {
        title: t("pages.signup.title"),
        subtitle: t("pages.signup.subtitle"),
        sections: {
          personalInfo: {
            title: t("pages.signup.form.sections.personal.title"),
            inputs: {
              firstName: {
                 label: t("ui.labels.firstName"),
                placeholder: t("pages.signup.form.sections.personal.fields.firstName.placeholder"),
                error: t("pages.signup.form.sections.personal.fields.firstName.error"),
                icon: Icons.Person_outlined
              },
              lastName: {
                 label: t("ui.labels.lastName"),
                placeholder: t("pages.signup.form.sections.personal.fields.lastName.placeholder"),
                error: t("pages.signup.form.sections.personal.fields.lastName.error"),
                icon: Icons.Person_outlined
              },
              email: {
                 label: t("ui.labels.email"),
                placeholder: t("pages.signup.form.sections.personal.fields.email.placeholder"),
                error: t("pages.signup.form.sections.personal.fields.email.error"),
                icon: Icons.Email
              },
              phone: {
                 label: t("ui.labels.phone"),
                placeholder: t("pages.signup.form.sections.personal.fields.phone.placeholder"),
                error: t("pages.signup.form.sections.personal.fields.phone.error"),
                icon: Icons.Phone
              },
              password: {
                label: t("ui.labels.password"),
                placeholder: t("pages.signup.form.sections.personal.fields.password.placeholder"),
                error: t("pages.signup.form.sections.personal.fields.password.error"),
                icon: Icons.Key
              },
              confirmPassword: {
                label: t("ui.labels.confirmPassword"),
                placeholder: t("pages.signup.form.sections.personal.fields.confirmPassword.placeholder"),
                error: t("pages.signup.form.sections.personal.fields.confirmPassword.error"),
                icon: Icons.Key
              },
            },
          },
    
          address: {
            title: t("pages.signup.form.sections.address.title"),
            inputs: {
              street: {
                label: t("ui.labels.street"),
                placeholder: t("pages.signup.form.sections.address.fields.street.placeholder"),
                error: t("pages.signup.form.sections.address.fields.street.error"),
                icon : Icons.Location
              },
              zipcode: {
                label: t("ui.labels.zipcode"),
                placeholder: t("pages.signup.form.sections.address.fields.zipcode.placeholder"),
                error: t("pages.signup.form.sections.address.fields.zipcode.error"),
                icon : Icons.Mailbox
              },
              optional: {
                label: t("ui.labels.optional"),
                placeholder: t("pages.signup.form.sections.address.fields.optional.placeholder"),
                icon : Icons.Location
              },
            },
          },
        },
        button:{
          signup:t("ui.buttons.signup")
        }
      };
      const personalInputs = Object.values(text.sections.personalInfo.inputs)
      const addressInputs = Object.values(text.sections.address.inputs)
    return {text, personalInputs,addressInputs}
}