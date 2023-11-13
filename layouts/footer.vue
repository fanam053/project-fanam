<!-- =========================================================================================
    File Name: footer.vue
    Description: footer Component in page one 
    Component Name: footer component  
    ----------------------------------------------------------------------------------------
    Item Company: Fanam 
      Author: pooria vakili

========================================================================================== -->
<template>
  <footer  class="main-footer">
    <div class="footer-top sp-two black-bg-3">
      <div class="container">
        <div class="row">
          <div class="footer-about footer-column-border col-xl-4 col-lg-6">
            <div class="inner">
              <div class="footer-logo">
                <div class="fanam-webgah ">وبگاه رسمی شرکت فنام</div>
              </div>
              <div  class="text-footer ">
                شرکت فنام در حوزه های مالی فعالیت خود را از سال 1398 آغاز کرد و
                افتخار دارد که تا کنون موفق به اجرای چند پروژه ی موفق در سطح ملی
                شده است.
              </div>
              <div class="link">
                <nuxt-link target="_parent" href="/about" class="thme-btn  btn-style-twelve">{{
                  $t("readMore")
                }}</nuxt-link>
              </div>
            </div>
          </div>
          <usefullinks />
          <div class="footer-newsletter footer-column-border col-xl-4 col-lg-6">
            <h3 class="footer-title ">خبرنامه</h3>
            <div class="inner">
              <div class="text ">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان
              </div>
              <form class="subscribe-form-two">
                <div class="form-group">
                  <input type="email" placeholder="... آدرس ایمیل" />
                  <button type="submit" class="fa fa-paper-plane"></button>
                </div>
              </form>
           
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom text-center black-bg">
      <div class="container">
        <div class="footer-copyright iran-sans">فنام</div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import usefullinks from "./usefullinks.vue";
const {
  data: fonts,
  error,
  refresh,
  pending,
} = await useAsyncData("fonts", () => {
  return $fetch("/api/fonts", {});
});
</script>
<style></style>
