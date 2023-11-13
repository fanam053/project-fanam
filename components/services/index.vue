<template>
  <div class="page-wrapper">
    <!-- Preloader -->

    <!--Page Title-->
    <div style="height: 600px; background-image: url('/background/3.jpg');margin-top: 10px;">
      <div class="container">
        <h1 style="color: white; position: relative; top: 200px; right: 500px">
          خدمات ما
        </h1>
      </div>
    </div>

    <section class="page-info">
      <div class="container">
        <div class="flex-box-five">
          <ul class="bread-crumb">
            <li>
              <a href="/">{{ $t("home") }}</a>
            </li>
            <li>{{ $t("services") }}</li>
          </ul>
          <div class="share-link">
            <a href="#"><i class="fa fa-share-alt"></i>اشتراک گذاری</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "خدمات",
});
</script>

<style></style>
