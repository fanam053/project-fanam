<!-- =========================================================================================
    File Name: softwareSystem.vue
    Description: softwareSystem Component in page one 
    Component Name: softwareSystem component 
    ----------------------------------------------------------------------------------------
    Item Name: Fanam 
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
        <h1>توسعه سامانه های نرم افزاری</h1>
      </div>
    </section>
    <!--End Page Title-->

    <!--Page Info-->
    <section class="page-info">
      <div class="container">
        <div class="flex-box-five">
          <ul class="bread-crumb">
            <li><a href="/">خانه</a></li>
            <li>درباره ما</li>
          </ul>
          <div class="share-link">
            <a href="#"><i class="fa fa-share-alt"></i>اشتراک گذاری</a>
          </div>
        </div>
        <div class="p-3">
          <div>
            تولیدات شرکت فنام تاکنون براساس سفارشات صندوق کارآفرینی امید :
          </div>
          <div>1- سامانه تفاهم نامه ها</div>
          <div>۲- سامانه تسهیلات غیر حضوری</div>
          <div>۳- سامانه خدمات الکترونیک صندوق (خاص)</div>
          <div>4-وصول مطالبات و نظارت (سامن)</div>
          <div>5-سامانه وصول مطالبات ونظارت (سامن)</div>
          <div>2)سامانه وصول مطالبات</div>
          <div>1)سامانه نظارت</div>

          <div>5)سامانه حقوقی</div>
          <div>٦- سامانه گزارشات آمار و اعداد</div>
          <div>.سامانه گزارش تسهیلات</div>
          <div>
            7-سامانه جستجوی شغل به سفارش وزارت تعاون، کار و رفاه اجتماعی
          </div>
        </div>
      </div>
<welcomeHome/>
<welcomeHomeOne/>
    </section>
  </div>
</template>

<script setup>
import welcomeHome from "./welcomeHome.vue"
import welcomeHomeOne from "./welcomeHomeOne.vue"
</script>

<style></style>
