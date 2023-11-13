/* =========================================================================================
    File Name: primeVue.ts
    Description: primeVue  Component in uicomponent 
    Component Name: primeVue component
    ----------------------------------------------------------------------------------------
    Item Company: Fanam 
      Author: pooria vakili

==========================================================================================
*/
import PrimeVue from "primevue/config";
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import SplitButton from 'primevue/splitbutton';
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.component("Sidebar", Sidebar);
    nuxtApp.vueApp.component("Button", Button);
    nuxtApp.vueApp.component("SplitButton", SplitButton);
 
    //other components that you need
});