<!-- =========================================================================================
    File Name: header.vue
    Description: header.vue  Component in layout page
    Component Name: header component
    ----------------------------------------------------------------------------------------
    Item Company: Fanam 
      Author: pooria vakili

========================================================================================== -->
<template>
  <header class="main-header">
    <div class="header-top black-bg-4">
      <welcome />
    </div>
    <headerinfo />
      <navbar />
  </header>
</template>
<script setup>
import welcome from "./welcome.vue";
import headerinfo from "./headerInfo.vue";
import navbar from "./navbar.vue";
</script>
