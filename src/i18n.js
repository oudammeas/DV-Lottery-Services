import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common from "./locale/common.json";

i18n.use(initReactI18next).init({
  debug: false,
  initImmediate: false,
  lng: "en-US",
  interpolation: { escapeValue: false },
  resources: {
    "en-US": {
      translation: {
        common: common,
      },
    },
  },
  react: {
    wait: false,
    bindI18n: "languageChanged loaded",
    bindStore: "added removed",
    nsMode: "default",
  },
});
export default i18n;
