<!-- =========================================================================================
    File Name: default.vue
    Description: default.vue  Component in layout page
    Component Name: fanam
    ----------------------------------------------------------------------------------------
    Item Company: Fanam 
      Author: pooria vakili

========================================================================================== -->
<template>

    <div class="page-wrapper">
        <Header />
      <NuxtPage />
      <nuxt-link
        @click="scrollToTop"
        style="width: 50px; height: 40px"
        class="d-flex btn btn-warning position-fixed align-items-center justify-content-center bottom-right rounded-circle"
      >
        <span class="fa fa-angle-up"></span>
      </nuxt-link>
    </div>
    <Footer />

</template>
<script setup >
import Header from "./header.vue";
import Footer from "./footer.vue";
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>
<style>

</style>
