import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { format } from "date-fns";
import { localeMapping } from "./utils/localeImportMapping";

const loadLocale = async (language) => {
  const localeImportFunction = localeMapping[language] || localeMapping['en']; 
  try {
    const locale = await localeImportFunction();
    return locale.default;
  } catch (error) {
    const locale = await localeMapping.en();
    return locale.default;
  }
};

const formatDate = async (date, language, formatStr = 'PPPP') => {
  const locale = await loadLocale(language);
  return format(new Date(date), formatStr, { locale });
};

i18n.formatDate = formatDate;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json'
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
