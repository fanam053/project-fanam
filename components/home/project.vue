<!--  =========================================================================================
    File Name: project.vue
    Description: project Component in page one
    Component Name: project component 
    ----------------------------------------------------------------------------------------
    Item Name: Fanam 
      Author: pooria vakili

========================================================================================== -->
<template>
  <section class="project-section sp-two">
    <div class="container">
      <div class="   sec-title d-flex">
        <div class="rectangle-asly" ></div>
        <div class=" ml-2 recent-project" >
          {{ $t("recentProjects") }}
        </div>
      </div>
      <div class="swipper-change-navigation ">
        <swiper
          class="swiper"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :space-between="30"
          :slides-per-view="3"
          :modules="modules"
        >
          <swiper-slide
            v-for="item in project"
            :key="item.id"
            class="slide"
          >
            <div class="projects-block-one">
              <div class="inner-box">
                <img  :src="item.img" alt="" />
                <div class="box-content box-content-padding">
                  <ul class="title-matn" style="">
                    <li class="title-one">
                      {{ item.titleOne }}
                    </li>
                    <div style="font-size:16px" class="title-two">
                      {{ item.titleTwo }}
                    </div>
                    <li class="title-three-bank">
                      <nuxt-link
                        class="text-warning "
                        target="_parent"
                        :to="item.link"
                      >
                        {{ item.title }}
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide
            v-for="item in project"
            :key="item.id"
            class="slide"
          >
            <div class="projects-block-one">
              <div class="inner-box">
                <img class="project-img" :src="item.img" alt="" />
                <div class="box-content box-content-padding">
                  <ul class="title-matn" style="">
                    <li class="title-one">
                      {{ item.titleOne }}
                    </li>
                    <div  class="title-two">
                      {{ item.titleTwo }}
                    </div>
                    <li class="title-three-bank">
                      <nuxt-link
                        class="text-warning"
                        target="_parent"
                        :to="item.link"
                      >
                        {{ item.title }}
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide
            v-for="item in project"
            :key="item.id"
            class="slide"
          >
            <div class="projects-block-one">
              <div class="inner-box">
                <img class="project-img" :src="item.img" alt="" />
                <div class="box-content box-content-padding">
                  <ul class="title-matn" style="">
                    <li class="title-one">
                      {{ item.titleOne }}
                    </li>
                    <div  class="title-two">
                      {{ item.titleTwo }}
                    </div>
                    <li class="title-three-bank">
                      <nuxt-link
                        class="text-warning"
                        target="_parent"
                        :to="item.link"
                      >
                        {{ item.title }}
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide
            v-for="item in project"
            :key="item.id"
            class="slide"
          >
            <div class="projects-block-one">
              <div class="inner-box">
                <img class="project-img" :src="item.img" alt="" />
                <div class="box-content box-content-padding">
                  <ul class="title-matn" style="">
                    <li class="title-one">
                      {{ item.titleOne }}
                    </li>
                    <div  class="title-two">
                      {{ item.titleTwo }}
                    </div>
                    <li class="title-three-bank">
                      <nuxt-link
                        class="text-warning"
                        target="_parent"
                        :to="item.link"
                      >
                        {{ item.title }}
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <carousel-two/>
     
    </div>
  </section>
</template>


<script >
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import CarouselTwo from "./carouselTwo.vue";
export default defineNuxtComponent({
  data(){
    return{
      project:[
      {
      id: 1,
      link: "http://my.karafariniomid.ir/sign-in",
      title: "مشاهده همه",
      img: "https://s30.picofile.com/file/8469334234/Artboard_1.png",
      titleOne: "سامانه بانکداری الکترونیک  ",
      titleTwo: "پروژه های مبتنی بر محاسبه داده ها و استخراج اطلاعات با اهدافی همچون تهیه گزارشات مدیریتی و"
    },
    {
      id: 2,
      link: "http://smart.karafariniomid.ir/",
      title: "مشاهده همه",
      img: "https://s31.picofile.com/file/8467761792/Artboard_3.png",
      titleOne: "سامانه اسمارت",
      titleTwo: "این محصول معرف سامانه اسمارت است که یک ابزار داخلی برای مدیریت سیستم اداری داخلی و"
    },
    {
      id: 3,
      link: "https://samen.karafariniomid.ir/",
      title: "مشاهده همه",
      img: "https://s31.picofile.com/file/8467761842/Artboard_7.png",
      titleOne: "سامانه سامن",
      titleTwo: "سامانه الکترونیکی وصول مطالبات و نظارت بر طرح های تسهیلاتی. این سامانه با دارا بودن یک نسخه"
    },
    {
      id: 4,
      link: "http://legalpilot.karafariniomid.ir/",
      title: "مشاهده همه",
      img: "https://s30.picofile.com/file/8467761826/Artboard_6.png",
      titleOne: "سامانه حقوقی",
      titleTwo: "سامانه مدیریت صندوق های خرد محلی با عنوان تارا (با تمرکز بر توانمندسازی در بخش روستایی)"
    },
    {
      id: 5,
      link: "https://tara.karafariniomid.ir/",
      title: "مشاهده همه",
      img: "https://s30.picofile.com/file/8467761818/Artboard_5.png",
      titleOne: "سامانه تارا",
      titleTwo: "سامانه مدیریت صندوق های خرد محلی با عنوان تارا( با تمرکز بر توانمندسازی در بخش روستایی)."
    },
    {
      id: 6,
      link: "https://shoghl.mcls.gov.ir/",
      title: "مشاهده همه",
      img: "https://s31.picofile.com/file/8467761868/Artboard_12.png",
      titleOne: "سامانه جست و جوی شغل ",
      titleTwo: "این محصول معرف سامانه اسمارت است که یک ابزار داخلی برای مدیریت سیستم اداری داخلی و"
    },
    {
      id: 7,
      link: "/services",
      title: "مشاهده همه",
      img: "https://s31.picofile.com/file/8467761876/Artboard_13.png",
      titleOne: "سامانه اطلاعات بازار کار  ",
      titleTwo: "این محصول معرف سامانه اسمارت است که یک ابزار داخلی برای مدیریت سیستم اداری داخلی و"
    }
  ],
      
    }
  },
  name: "swiper-example-navigation",
  title: "Navigation",
  url: import.meta.url,
 
  components: {
    Swiper,
    SwiperSlide,
    CarouselTwo,
  },
  setup() {
    
    return {
      modules: [Autoplay],
    };
  },
});
</script>

<style>

</style>