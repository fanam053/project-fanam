<!-- =========================================================================================
    File Name: usefulllinks.vue
    Description: usefulllinks  Component in layout page
    Component Name:usefulllinks component
    ----------------------------------------------------------------------------------------
    Item Company: Fanam 
      Author: pooria vakili

========================================================================================== -->
<template>
  <div class="footer-link footer-column-border col-xl-4 col-lg-6">
    <h3 class="footer-title ">پیوندهای مفید</h3>
    <div class="inner">
      <div class="row">
        <div  class="col-lg-6">
          <ul>
            <li  v-for="item in data.usefullinksOne" :key="item.id">
              <nuxt-link  target="_parent" :to="item.link">{{
                item.content
              }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-6">
          <useFullLinksone />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useFullLinksone from "./useFullLinksone.vue";
const { data } = await useFetch("/api/usefullinksOne");

</script>

<style></style>
