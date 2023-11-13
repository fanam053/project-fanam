/* =========================================================================================
    File Name: i18n.ts
    Description: i18n  Component in i18nPage 
    Component Name: i18n component
    ----------------------------------------------------------------------------------------
    Item Company: Fanam 
      Author: pooria vakili

==========================================================================================
*/
import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import fa from "../locales/fa.json";
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,

    locale: "fa",

    messages: {
      en,
      fa,
    },
  });

  vueApp.use(i18n);
});
