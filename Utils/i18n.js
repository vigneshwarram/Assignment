import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { NativeModules, I18nManager } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Restart} from 'fiction-expo-restart';
export const AppLanguage = {
    ENGLISH : "ENG"
  }
export const LANGUAGE = {
    DEFAULT_LANGUAGE: "ENG",
    LANGUAE_OPTIONS: Object.values(AppLanguage),
    CONFIRM_LANGUAGE_CHANGE_TITLE: "ConfirmLanguageChangeTitle",
    CONFIRM_LANGUAGE_CHANGE_MESSAGE: "ConfirmLanguageMessage",
  };
  export const languageRestart = async () => {
	//changing language based on what was chosen
	const language = await AsyncStorage.getItem("setLanguage");
	       if (language === 'en') {
                    await I18nManager.forceRTL(false);
               }
	 else {
	       if (!I18nManager.isRTL) {
        	     await I18nManager.forceRTL(true);
               }
	}
 Restart();
};
export const platformLanguage =
  NativeModules?.I18nManager?.localeIdentifier?.replace(/_/, "-");
/**
 * @description The default internationalization (i18n) util for the complete application. We are currently using
 * i18next as our internationalization solution. It exposes two primary functions that we are using:
 * 1. t: Used for translating any given key - https://www.i18next.com/overview/api#t
 * 2. changeLanguage: Used to change the language preference in the i18n instance
 * - https://www.i18next.com/overview/api#changelanguage
 *
 * Advanced translation function operations beyond regular key lookup and fallbacks:
 * Interpolation {{placeholders}}: https://www.i18next.com/translation-function/interpolation
 * Plurals: https://www.i18next.com/translation-function/plurals
 * Nesting: https://www.i18next.com/translation-function/nesting
 */
i18n
  // detect user language
  // learn more: https://github.com/DylanVann/i18next-react-native-language-detector
  // .use(i18nextReactNative)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    compatibilityJSON: 'v3',
    lng: platformLanguage,
    fallbackLng: LANGUAGE.DEFAULT_LANGUAGE,
    debug: true,
    resources: {
      [AppLanguage.ENGLISH]: {
        translation: 'en',
      },
   
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    /**
     * allow keys to be phrases having `:`, `.`
     * https://github.com/i18next/react-i18next/issues/387
     */
    nsSeparator: false,
    keySeparator: false,
  })
  .catch((error) => {
    // TODO: add metrics
  });

/**
 * @description Return the language preference for the user, which is decided in the following order:
 * 1. Fetch stored language from Async storage (currently it is at device level and not customerId specific).
 * 2. Get the current OS level language preference of the customer and check if it is part of our supported language.
 * 3. If current OS language is not supported, fallback to default language (en-IN for now).
 */
export const getUserLanguagePreference = async () => {
  const storedLanguage = await AsyncStorage.getItem("myAppLanguagePreference");

  return storedLanguage ? storedLanguage : appOSLang;
};



export default i18n;
