<!-- =========================================================================================
    File Name: index.vue
    Description: index.vue  Component in layout page
    Component Name: index
    ----------------------------------------------------------------------------------------
    Item Company: Fanam 
      Author: pooria vakili

========================================================================================== -->
<template>
  <slider />
  <welcomeHome />

  <services />
  <project />
  <!-- <counter /> -->
  <about />
  <communication />

  <!-- <blog /> -->
</template>
<script setup>
import welcomeHome from "~/components/home/welcomeHome.vue";
import services from "~/components/home/services.vue";
import about from "~/components/home/about.vue";
import counter from "~/components/home/counter.vue";
import communication from "~/components/home/communication.vue";
import project from "~/components/home/project.vue";
import blog from "~/components/home/blog.vue";
import slider from "~/components/home/slider.vue";
import { useSeoMeta } from "@unhead/vue";
useSeoMeta({
  title: "فنام",
});
</script>
<style>
.item-all {
  height: 700px;
}
</style>
