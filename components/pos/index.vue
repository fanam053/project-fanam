<!-- =========================================================================================
    File Name: pos.vue
    Description:pos.vue  Component in layout page
    Component Name: pos
    ----------------------------------------------------------------------------------------
    Item Company: Fanam 
      Author: pooria vakili

========================================================================================== -->
<template>
  <div class="page-wrapper">
    <!-- Preloader -->

    <!--Page Title-->
    <section
      class="page-title"
      style="background-image: url('/background/3.jpg'); margin-top: 10px"
    >
      <div class="container">
        <h1>در دست ساخت</h1>
      </div>
    </section>
    <!--End Page Title-->

    <!--Page Info-->
    <section class="page-info">
      <div class="container">
        <div class="flex-box-five">
          <ul class="bread-crumb">
            <li><a href="index.html">خانه</a></li>
            <li>در دست ساخت</li>
          </ul>
          <div class="share-link">
            <a href="#"><i class="fa fa-share-alt"></i>اشتراک گذاری</a>
          </div>
        </div>
      </div>
    </section>
    <!-- End Page Info -->

    <section class="countdown-timer sp-one">
      <div class="auto-container">
        <h3>
          در دست ساخت <br />
          به زودی با امکانات جدید برمیگردیم
        </h3>
   <div class="mt-4">
    <span style="font-size: 100px;color:#0083a1 ;" class=" ml-2">
              {{ currentTime.toLocaleTimeString('fa-IR') }}
            </span>
           
   </div>

        <form action="#">
          <input type="text" placeholder="ایمیل خود را وارد کنید" dir="ltr" />
          <button type="submit">باخبرم کن</button>
        </form>
      </div>
    </section>
  </div>
</template>
  
  <script setup>
import { useCurrentTime } from "../composables/useCurrentTime";
import moment from "jalali-moment";
import fa from "moment/src/locale/fa";

const { currentTime } = useCurrentTime();
    console.log(currentTime.value);
   ;

moment.locale("fa", fa);
let todayJalali = moment().locale("fa").format("YYYY/M/D");
const show1 = ref(false);

</script>
  
  <style></style>
  