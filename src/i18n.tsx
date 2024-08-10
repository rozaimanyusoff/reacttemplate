import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import themeConfig from './theme.config';
import { en } from '@fullcalendar/core/internal-common';
i18n
    // load translation using http -> see /public/locales
    // learn more: https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        lng: 'en',
        fallbackLng: themeConfig.locale || 'en',
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
        resources: {
            en: {
                translation: {},
            }
        },
        debug: false,
        load: 'languageOnly',
    });

    // Fetch translations from the public directory
fetch("/locales/en/translation.json")
  .then((response) => response.json())
  .then((data) => {
    i18n.addResourceBundle("en", "translation", data);
  })
  .catch((error) => {
    console.error("Error loading translations:", error);
  });
export default i18n;
