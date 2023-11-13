<!-- =========================================================================================
    File Name: counter.vue
    Description: counter Component in page one 
    Component Name: counter component 
    ----------------------------------------------------------------------------------------
    Item Name: Fanam 
      Author: pooria vakili

========================================================================================== -->
<template>
  <div class="asly">
    <div class="fact-counter height-responsive background-project">
      <BRow class="watch-fanam">
        <BCol cols="3">
          <div class="mt-4 d-flex watch-fanam-one">
            <div   class="bg-warning rectangle-change"></div>
            <div  class=" sec-title watch-fanam-font">
              آماربازدید از وب سایت فنام
            </div>
          </div>
        </BCol>
      </BRow>
      <div class="container">
        <div class="row justify-content-center all-fanam">
          <div class="d-flex flex-column">
            <div class="day-font">روزانه</div>
            <div class="text-warning h2 addad-one">68</div>
          </div>
          <div   class="d-flex week flex-column ml-5">
            <div class="week-font">هفتگی</div>
            <div class="text-warning addad-two h2">543</div>
          </div>
          <div   class="d-flex flex-column month ">
            <div class="month-font">ماهیانه</div>
            <div  class="text-warning addad-three h2">2630</div>
          </div>
          <div  class="d-flex year  flex-column ">
            <div class="year-font">سالیانه</div>
            <div class="text-warning addad-four h2">32768</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped>
</style>
