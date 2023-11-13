<!-- =========================================================================================
    File Name: app.vue
    Description: app  Component in layout page
    Component Name: app component
    ----------------------------------------------------------------------------------------
    Item Company: Fanam 
      Author: pooria vakili

========================================================================================== -->
<template>
  <div>
    <div
      v-if="loading === false"
      class="d-flex align-items-center justify-content-center"
    >
      <img
        style="margin-top: 160px"
        src="./public/icons/preloader.gif"
        alt=""
      />
    </div>
    <NuxtLayout v-else>
      <NuxtPage />
   
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
<script setup>
import { onMounted } from "vue";
const loading = ref(false);
onMounted(() => {
  setTimeout(() => {
    loading.value = true;
  }, 500);
});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>
