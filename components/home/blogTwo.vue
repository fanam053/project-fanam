<template>
    <div  class="blog-two">
      <swiper
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
        class="swiper"
        :modules="modules"
    
      >
        <swiper-slide v-for="item in blog" :key="item.id" class="slide">
            <div
               
                  class="news-block-one"
                >
                  <figure class="image">
                    <img :src="item.img" alt="News" />
                    <figcaption class="overlay">
                      <div class="box">
                        <nuxt-link target="_parent" :to="item.to" class="content">
                      
                        </nuxt-link>
                      </div>
                    </figcaption>
                    <div class="date">
                      {{ item.dateOne }} <br />{{ item.dateTwo }}
                    </div>
                  </figure>
                  <div class="lower-content">
                    <div class="pl-30 pr-30">
                      <h4>
                        <a href="#">{{ item.textOne }}</a>
                      </h4>
                      <div class="text">
                        <p>{{ item.textTwo }}</p>
                      </div>
                    </div>

                    <div class="post-meta">
                      <ul>
                        <li>
                          <i class="fa fa-user" aria-hidden="true"></i
                          >{{ item.textThree }}
                        </li>
                        <li>
                          <i class="fa fa-heart-o" aria-hidden="true"></i
                          >{{ item.textFour }}
                        </li>
                        <li>
                          <i class="fa fa-comments-o" aria-hidden="true"></i
                          >{{ item.textFive }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
        </swiper-slide>
      </swiper>
    </div>
  </template>
    
    <script>
  import { Autoplay } from "swiper/modules";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  import "swiper/css/navigation";
  export  default{
    components:{Autoplay,Swiper,SwiperSlide},
   data(){
    return{
      blog:[
      {
      id: 1,
      icon: "fa fa-link",
      dateOne: 21,
      dateTwo: "آبان",
      link:"/contact",
      textOne: "لورم ایپسوم متن ",
      textTwo: "لورم ایپسوم",
      textThree: "مدیر",
      textFour: 350,
      textFive: 30,
      iconOne: "fa fa-user",
      iconTwo: "fa fa-heart-o",
      iconThree: "fa fa-comments-o",
      to: "/contact",
      img: "https://s30.picofile.com/file/8467638076/news_1.jpg"
    },
    {
      id: 2,
      icon: "fa fa-link",
      dateOne: 21,
      dateTwo: "آبان",
      textOne: "لورم ایپسوم متن ",
      textTwo: "لورم ایپسوم",
      textThree: "مدیر",
      textFour: 350,
      textFive: 30,
      iconOne: "fa fa-user",
      iconTwo: "fa fa-heart-o",
      iconThree: "fa fa-comments-o",
      to: "/contact",
      img: "https://s30.picofile.com/file/8467638084/news_2.jpg"
    },
    {
      id: 3,
      icon: "fa fa-link",
      dateOne: 21,
      dateTwo: "آبان",
      textOne: "لورم ایپسوم متن ",
      textTwo: "لورم ایپسوم",
      textThree: "مدیر",
      textFour: 350,
      textFive: 30,
      iconOne: "fa fa-user",
      iconTwo: "fa fa-heart-o",
      iconThree: "fa fa-comments-o",
      to: "/contact",
      img: "https://s30.picofile.com/file/8467638268/news_3.jpg"
    }
      ]
    }
   },
   setup() {
    return {
      modules: [ Autoplay],
    };
  },
  }

  </script>
    
    <style lang="scss" >
 .news-blank-one .overlay{
  width: 20% !important;
 }
  </style>