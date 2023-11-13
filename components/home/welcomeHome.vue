<!-- =========================================================================================
    File Name: welcomeHome.vue
    Description: welcomeHome Component in page one 
    Component Name: welcomeHome component 
    ----------------------------------------------------------------------------------------
    Item Name: Fanam 
      Author: pooria vakili

========================================================================================== -->
<template>
  <section class="welcome-section sp-two">
    <div class="container">
      <div class="d-flex">
        <div  class="col-lg-4">
          <div class="service-block-five">
            <div class="inner-box border-change-icon">
              <div class="image-box">
                <img src="https://s30.picofile.com/file/8468693492/Artboard_45_100.jpg" />
                <div class="caption d-flex flex-column">
                  <div class="change-icon">
                    <div
                      class="d-flex mt-2 justify-content-between image-box-icon"
                    >
                      <span style="font-size: 14px" class="  ">
                        خدمات شرکت به صندوق کارافرینی امید
                      </span>
                      <img
                        style="width: 25px; height: 25px"
                        src="https://s31.picofile.com/d/8469026842/c3b02a71-f8bb-43e9-8467-672cd1898a23/Artboard_19.svg"
                      />
                    </div>

                    <div class="caption-desc mt-4">
                      <div class="mt-2">
                        <nuxt-link
                          class="text-white"
                          target="_parent"
                          to="/softwareServices"
                          ></nuxt-link
                        >
                      </div>
                      <div class="lorem-change mt-2">
                        <p class="text-center text-justify h6">
                         <i style="color: #fff;" class="fa fa-circle"></i>
                         طراحی و توسعه سامانه وصول و مطالبات (سامن)  
                        </p>
                        <p class="text-center  text-justify h6">
                          <i style="color: #fff;" class="fa fa-circle"></i>

                          طراحی و توسعه سامانه گزارش تسهیلات (آگاه)
                        </p>
                        <p class="text-center text-justify h6">
                          <i style="color: #fff;" class="fa fa-circle"></i>

                          طراحی و توسعه وب اپلیکیشن خدمات الکترونیک خاص
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div  class="col-lg-4">
          <div class="service-block-five">
            <div class="inner-box border-change-icon">
              <div class="image-box">
                <img src="https://s30.picofile.com/file/8468693334/Artboard_32_copy_2_100.jpg" />
                <div class="caption d-flex flex-column">
                  <div class="change-icon">
                    <div
                      class="d-flex mt-2 justify-content-between image-box-icon"
                    >
                      <span style="font-size: 14px" class="  ">

                        پایانه فروش وپشتیبانی                      </span>
                      <img
                        style="width: 25px; height: 25px"
                        src="https://s30.picofile.com/d/8469026826/598362cf-a647-43d7-945d-0c496244c759/Artboard_9.svg"
                      />
                    </div>

                    <div class="caption-desc mt-4">
                      <div class="mt-2">
                        <nuxt-link
                          class="text-white"
                          target="_parent"
                          to="/Customization"
                          ></nuxt-link
                        >
                      </div>
                      <div class="lorem-change mt-2">
                        <p class="text-center text-justify h6">
                         <i style="color: #fff;" class="fa fa-circle"></i>
                         طراحی و توسعه سامانه بازار کار کشور
                        </p>
                        <p class="text-center  text-justify h6">
                          <i style="color: #fff;" class="fa fa-circle"></i>

                          طراحی و توسعه سامانه جستجوی شغل
                        </p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div  class="col-lg-4">
          <div class="service-block-five">
            <div class="inner-box border-change-icon">
              <div class="image-box">
                <img src="https://s30.picofile.com/file/8468693618/Artboard_65_copy_100.jpg" />
                <div class="caption d-flex flex-column">
                  <div class="change-icon">
                    <div
                      class="d-flex mt-2 justify-content-between image-box-icon"
                    >
                      <span style="font-size: 14px" class="  ">
                        پایانه فروش وپشتیبانی
                      </span>
                      <img
                        style="width: 25px; height: 25px"
                        src="https://s31.picofile.com/d/8469026834/6bf4910b-b0a2-4fb6-8627-356d3e78045e/Artboard_11.svg"
                      />
                    </div>

                    <div class="caption-desc mt-4">
                      <div class="mt-2">
                        <nuxt-link
                          class="text-white"
                          target="_parent"
                          to="/pos"
                          ></nuxt-link
                        >
                      </div>
                      <div class="lorem-change mt-2">
                        <p class="text-center text-justify h6">
                         <i style="color: #fff;" class="fa fa-circle"></i>
                         پایانه فروش وپشتیبانی
                        </p>
                      
                    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
// const { data } = await useFetch("/api/welcomeHome");
</script>
<style>
.content-one::before{
  content: ".";
 font-size: 40px;
  
}
</style>