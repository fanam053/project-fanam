<!-- =========================================================================================
    File Name: communication.vue
    Description: communication Component in page one
    Component Name: communcation component
    ----------------------------------------------------------------------------------------
    Item Name: Fanam 
      Author: pooria vakili

========================================================================================== -->

<template><div class="item-all">
 <img id="fanam-art" class="fanam-commoncation"  src="/commoncation.jpg"/>
  <section  class="consultation">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 commoncation-line">
          <div class="request-callback sp-two">
            <div id="contact-common" class="d-flex  contact-commoncation">
              <div class="rectangle-commoncation"></div>
              <span class="h6 text-white">ارتباط باما</span>
            </div>
      
            <div class="text lorem-matn text-justify">
              شرکت فناوری اطلاعات کارآفرین خاص، با نام سابق فناوری مالی کارآفرینی امید (فنام) در سال 1376، به عنوان شرکت سهامی خاص و با شناسه ملی 10101738541 ثبت شده است. این شرکت در حوزه It با خدماتی از قبیل مشاوره، طراحی، توسعه و پشتیبانی سامانه‌های نرم افزاری و موبایلی و نیز فروش و پشتیبانی پایانه‌های فروشگاهی در حال فعالیت است.
            </div>
            <div class="lorem-matn-one text-justify">
              شرکت فناوری اطلاعات کارآفرین خاص، با نام سابق فناوری مالی کارآفرینی امید (فنام) در سال 1376، به عنوان شرکت سهامی خاص و با شناسه ملی 10101738541 ثبت شده است. این شرکت در حوزه It با خدماتی از قبیل مشاوره، طراحی، توسعه و پشتیبانی سامانه‌های نرم افزاری و موبایلی و نیز فروش و پشتیبانی پایانه‌های فروشگاهی در حال فعالیت است.
            </div>
            <ul id="list-style-common" class="list-style-five mb-40">
          
               
              <li class="email-all">
               fanamco@gmail.ir
              </li>
              <div class="tel-all">
                <li>
                <span class=" ml-1 ">021-64374068</span>
                
              </li>
              <li class="tel-two"><span class="  ">021-64374094</span></li>
              </div>
             
            </ul>
            <div id="send-form-all"  class="send-form" >
              <button  class=" send-form-button ">
                
                <nuxt-link class="send-form-nuxt" target="_parent" to="/contact">ارسال فرم درخواست</nuxt-link>
                <img class="image-button" src="../../public/Asset 72.png"/>
              </button>
            </div>
          </div>
        </div>
        <contact />
      </div>
    </div>
  </section>
</div>
    
</template>
<script setup>
import contact from "./contact.vue";
const {
  data: commoncation,
  error,
  refresh,
  pending,
} = await useAsyncData("commoncation", () => {
  return $fetch("/api/commoncation", {});
});
</script>

<style>

</style>
