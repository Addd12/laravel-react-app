// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next) // Passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: require('./translations/en.json'),
            },
            fr: {
                translation: require('./translations/fr.json'),
            },
        },
        lng: 'en', // Default language
        fallbackLng: 'en', // Fallback language if the detected language is not available
        interpolation: {
            escapeValue: false, // React already safely escapes, so avoid double escaping
        },
    });

export default i18n;
