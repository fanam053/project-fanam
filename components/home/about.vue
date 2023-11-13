<!-- =========================================================================================
    File Name: about.vue
    Description: about Component 
    Component Name: about component in page one
    ----------------------------------------------------------------------------------------
    Item Company: Fanam 
      Author: pooria vakili

========================================================================================== -->

<template>
 <div  class="about-us about-padding">
       <img class="faranam-img" src="../../public/Artboard 41-100.jpg" /> 

      <div class="container faranam-change">
        <div class="row">
          <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
            <div class="about-column">
              <div class="d-flex sec-title  about-fanam">
                <div class="rectangle"></div>

                <div  class="ml-2  h6 font-size-change ">
درباره فناوری اطلاعات کارافرینی خاص (فنام)
                </div>
              </div>
              
              <div  class="text text-justify change-mohtava-about">
                شرکت فناوری اطلاعات کارآفرین خاص، با نام سابق فناوری مالی کارآفرینی امید (فنام) در سال 1376، به عنوان شرکت سهامی خاص و با شناسه ملی 10101738541 ثبت شده است. این شرکت در حوزه It با خدماتی از قبیل مشاوره، طراحی، توسعه و پشتیبانی سامانه‌های نرم افزاری و موبایلی و نیز فروش و پشتیبانی پایانه‌های فروشگاهی در حال فعالیت است.
              </div>
              <div class="link button-more">
                <nuxt-link
                  href="/about"
                  target="_parent"
                  class="theme-btn btn-style-one iran-sans"
                  >بیشتر بدانید...</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 

</template>
<script setup>

</script>
<style >

</style>
