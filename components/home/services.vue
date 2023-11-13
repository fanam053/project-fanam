<!-- =========================================================================================
    File Name: services.vue
    Description: services Component in page one 
    Component Name: services component 
    ----------------------------------------------------------------------------------------
    Item Name: Fanam 
      Author: pooria vakili

========================================================================================== -->
<template>
  <section class="our-services sp-two height-services">
    <div class="container">
      <div class="d-flex project-fanam  services-you-all">
        <div class="rectangle-all">
          <p class="services-you">خدمات ما</p>
        </div>
      </div>

      <div id="rectangle-services-all" class="row rectangle-services">
        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
          <nuxt-link target="_parent" href="/softwareArchitecture">
            <div class="card card-eight">
              <div class="card-body">
                <div class="d-flex">
                  <div class="card-title software-change mt-2 ml-3">
                 توسعه و راه اندازی سامانه های نرم افزاری
                  </div>
                </div>
                <div class="d-flex justify-content-center img-rectangle-top">
                  <img
                    width="200"
                    height="200"
                    src="../../public/Asset 66.png"
                  />
                </div>

                <p class="card-text display-change text-justify">
                  تخصص ما تحلیل، طراحی، توسعه و پشتیبانی سامانه‌های نرم افزاری با توجه به نیاز و درخواست شما است
                </p>
                <p class="card-text display-change-one text-justify">
                  تخصص ما تحلیل، طراحی، توسعه و پشتیبانی سامانه‌های نرم افزاری با توجه به نیاز و درخواست شما است

                </p>
                <div class="d-flex justify-content-end readmore-change">
                  <nuxt-link
                    href="/services"
                    target="_parent"
                    class="btn  software-change-one"
                    >بیشتربدانید...</nuxt-link
                  >
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="card-four col-lg-8 col-md-8 col-sm-12">
          <nuxt-link to="/saveTime" target="_parent">
            <div id="card-ten" class="card card-five">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <div class="card-title time-box ml-3 mt-2">
                    توسعه و راه اندازی انبار داده و هوش تجاری
                  </div>
                  <div>
                    <img
                    class="position-relative top-asset-21"
                    height="100"
                    src="../../public/services/2.png"
                  />
                  </div>
               
                </div>
                

                <p class="card-text font-change-finish text-justify">
                  انبار داده، هسته اصلی پروژه‌های هوش تجاری و لازمه ایجاد تحولات دیجیتال است. بدون انبار داده، جریان اطلاعات در سیستم‌های عملیاتی متوقف می‌شود.
                </p>
                <div class="d-flex justify-content-end readmore-change-finish">
                  <nuxt-link
                    href="/services"
                    target="_parent"
                    class="btn  readmore-change-font"
                    >بیشتربدانید...</nuxt-link
                  >
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-md-4 card-two col-lg-4 col-sm-12 col-xs-12">
          <nuxt-link to="/backendfrontend" target="_parent">
            <div class="card card-seven">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <div class="card-title change-stack ml-3 mt-2">
                    <div>توسعه وراه اندازی اپلیکیشن های موبایل</div>
                   
                  </div>
                  <div class="">
                      <img width="60" src="../../public/services/3.png" />
                    </div>
                </div>

                <p class="card-text change-stack-front mt-2 text-justify">
                  اپلیکیشن‌های موبایل، با توجه به تنوع نیازها، در تار و پود زندگی مدرن و امروزی انسان عصر دیجیتال نفوذ کرده اند .
                </p>
                <div class="d-flex justify-content-end button-more-frontend">
                  <nuxt-link
                    href="/services"
                    target="_parent"
                    class="btn  software-change-two"
                    >بیشتربدانید...</nuxt-link
                  >
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-md-4 card-three col-lg-4 col-sm-12 col-xs-12">
          <nuxt-link to="/specializedTools" target="_parent">
            <div id="card-six-all" class="card card-six">
              <div class="card-body ">
                <div class="d-flex justify-content-between">
                  <div class="card-title change-settings ml-3">
                   خدمات مشاوره وپشتیبانی
                  </div>
                  <div>
                    <img width="60" src="../../public/services/4.png" />
                  </div>
                </div>

                <p class="card-text text-justify change-content-software">
                  ارائه خدمات موثر و کاربردی به مشتریان از مهم‌ترین عوامل رشد یک حوزه‌ پیشرفته است. 
                </p>
                <div class="d-flex justify-content-end mt-2 font-change-three">
                  <nuxt-link
                    href="/services"
                    target="_parent"
                    class="btn  software-change-three"
                    >بیشتربدانید...</nuxt-link
                  >
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>

</script>

<style>
</style>