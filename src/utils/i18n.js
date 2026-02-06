import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en_lang from "../data/i18n/languge/en.json"
import it_lang from "../data/i18n/languge/it.json";
import en_data from "../data/i18n/data/en.json"
import it_data from "../data/i18n/data/it.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { 
        lang: en_lang, 
        data  :en_data
       },
      it: {  
        lang: it_lang, 
        data  :it_data 
      }
    },
    lng: "en",
    fallbackLng: "en",
    ns:["lang","data"],
    defaultNS: "lang",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
