<template>
  <div  ref="container" class="keen-slider">
    <div v-for="item in data?.slider" :key="item.id" class="keen-slider__slide number-slide1"><img style="width: 1920px;height: 700px;" :src="item.slider"/></div>

   
  </div>
</template>

<script setup>
import { useKeenSlider } from "keen-slider/vue.es"
import "keen-slider/keen-slider.min.css"
const { data } = await useFetch("/api/slider");

const [container] = useKeenSlider({
      loop: true,
  
    },
    [
        (slider) => {
          let timeout
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 2000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ]
    )

</script>

<style>




</style>

