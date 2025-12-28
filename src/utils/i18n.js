import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../data/i18n/en.json"
import it from "../data/i18n/it.json";


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      it: { translation: it }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
