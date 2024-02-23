import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import backend from 'i18next-http-backend';
import { LANGUAGES } from '../shared/config/common';

i18n
  .use(backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}.json'
    },
    fallbackLng: 'en',
    supportedLngs: LANGUAGES
  });

export default i18n;
