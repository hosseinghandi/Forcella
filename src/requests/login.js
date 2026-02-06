import * as Icons from "../barrels/Icons"
export default function getLoginData(t) {
    const text = {
            subtitle: t("pages.login.subtitle"),
            inputs: {
              email: {
                label: t("ui.labels.email"),
                placeholder: t("pages.login.form.fields.email.placeholder"),
                error: t("pages.login.form.fields.email.error"),
                icon:  Icons.Email,
              },
              password: {
                label: t("ui.labels.password"),
                placeholder: t("pages.login.form.fields.password.placeholder"),
                error: t("pages.login.form.fields.password.error"),
                icon:  Icons.Key
              },
            },
            button: {
              login: t("ui.buttons.login"),
            },
            forget: t("pages.login.form.links.forgotPassword")
          };

    const inputsList = Object.values(text.inputs)

    return {text, inputsList}
}