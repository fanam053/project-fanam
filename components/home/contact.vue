<!-- =========================================================================================
    File Name: contact.vue
    Description: contact Component in page one
    Component Name: contact component 
    ----------------------------------------------------------------------------------------
    Item Name: Fanam 
      Author: pooria vakili

========================================================================================== -->

<template>
  <div  class="col-lg-6 contact-form-all">
    <div class=" sp-two form-all-contact">
      <form
        id="contact-form"
        name="contact_form"
        class="contact-form style-three"
        action="inc/sendmail.php"
        method="post"
      >
        <div class="row clearfix">
        
          <div class="col-md-6 col-sm-6 col-xs-12">
            
            <div class="">
              <div class="text-white">نام ونام خانوادگی</div>
             
              <input
                type="text"
                name="form_name"
                placeholder=""
                class="form-name"

                required=""
                style="border-radius: 10px;"
                data-msg-required="وارد کردن این قسمت الزامی است"
              />
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="form-group">
              <div class="text-white">تلفن</div>
              <input
              style="border-radius: 10px;"
                type="email"
                name="form_email"
                class="form-name required email"
                value=""
                
                dir="ltr"
                required=""
                data-msg-required="وارد کردن این قسمت الزامی است"
                data-msg-email="لطفا یک ایمیل معتبر وارد کنید"
              />
            </div>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12">
            <div class="form-group">
              <div class="text-white">موضوع</div>
              <input
              style="border-radius: 10px;"
                type="text"
                name="form_phone"
                class="form-name"
                value=""
             
                dir="ltr"
              />
            </div>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12">
            <div class="form-group">
              <div class="text-white">ایمیل</div>
              <input
              style="border-radius: 10px;;"
                type="text"
                name="form_subject"
                class="form-name"
                value=""
              />
            </div>
          </div>
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="form-group">
              <div class="text-white">توضیحات</div>
              <textarea
              style="border-radius: 10px;"
                name="form_message"
                class="form-name"
                type="text"
              ></textarea>
            </div>
          </div>
        </div>
      
      </form>
    </div>
  </div>
</template>
<script setup>

</script>
<style>

</style>


