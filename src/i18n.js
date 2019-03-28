import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
//import { reactI18nextModule } from 'react-i18next'
//import { initReactI18next } from 'react-i18next'

import translationEN from '../locale/en/translations.json'
import translationCZ from '../locale/cz/translations.json'

const resources = {
    en: {
        translations: translationEN
    },
    cz: {
        translations: translationCZ
      }
  };


i18n
  .use(LanguageDetector)
  //.use(initReactI18next)
  //.use(reactI18nextModule) // if not using I18nextProvider
  .init({
    resources,
    react: {
        wait: false,
        withRef: false,
        bindI18n: 'languageChanged loaded',
        bindStore: 'added removed',
        nsMode: 'default'
    },
    fallbackLng: 'en',
    ns: ['translations'],
    defaultNS: 'translations',
    debug: true,
    react: {
      wait: true,
    },
  });

export default i18n; 
