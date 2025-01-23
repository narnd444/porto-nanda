import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      greeting: "Hello, welcome!",
      language: "Language",
    },
  },
  id: {
    translation: {
      greeting: "Halo, selamat datang!",
      language: "Bahasa",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Bahasa default
    fallbackLng: "en", // Bahasa fallback jika tidak ada terjemahan
    interpolation: {
      escapeValue: false, // React sudah melakukan escape untuk XSS
    },
  });

export default i18n;
