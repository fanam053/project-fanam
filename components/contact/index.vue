<!-- =========================================================================================
    File Name: contact.vue
    Description:contact.vue  Component in layout page
    Component Name: contact
    ----------------------------------------------------------------------------------------
    Item Company: Fanam 
      Author: pooria vakili

========================================================================================== -->
<template>
  <div class="page-wrapper">
    <section
      class="page-title"
      style="background-image: url('/background/3.jpg');margin-top: 10px;"
    >
      <div class="container">
        <h1>ارتباط باما</h1>
      </div>
    </section>

    <section class="page-info">
      <div class="container">
        <div class="flex-box-five">
          <ul class="bread-crumb">
            <li><a href="/">خانه</a></li>
            <li>تماس با ما</li>
          </ul>
          <div class="share-link">
            <a href="#"><i class="fa fa-share-alt"></i>اشتراک گذاری</a>
          </div>
        </div>
      </div>
    </section>
    <!-- End Page Info -->

    <!-- contact form -->
    <section class="contact-form-section sp-two">
      <div class="container">
        <div class="default-form-area">
          <form
            id="contact-form"
            name="contact_form"
            class="contact-form style-two"
            action="inc/sendmail.php"
            method="post"
          >
            <div class="row clearfix">
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="form-group style-two">
                  <input
                    type="text"
                    name="form_name"
                    class="form-control"
                    value=""
                    placeholder="نام"
                    required=""
                    data-msg-required="وارد کردن این قسمت الزامی است"
                  />
                </div>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="form-group style-two">
                  <input
                    type="email"
                    name="form_email"
                    class="form-control required email"
                    value=""
                    placeholder="ایمیل"
                    required=""
                    data-msg-required="وارد کردن این قسمت الزامی است"
                    data-msg-email="لطفا یک ایمیل معتبر وارد کنید"
                    dir="ltr"
                  />
                </div>
              </div>
              <div class="col-md-6 col-sm-12 col-xs-12">
                <div class="form-group style-two">
                  <input
                    type="text"
                    name="form_phone"
                    class="form-control"
                    value=""
                    placeholder="تلفن"
                    dir="ltr"
                  />
                </div>
              </div>
              <div class="col-md-6 col-sm-12 col-xs-12">
                <div class="form-group style-two">
                  <input
                    type="text"
                    name="form_subject"
                    class="form-control"
                    value=""
                    placeholder="موضوع"
                  />
                </div>
              </div>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="form-group style-two">
                  <textarea
                    name="form_message"
                    class="form-control textarea required"
                    placeholder="پیام شما"
                    data-msg-required="وارد کردن این قسمت الزامی است"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="contact-section-btn text-center">
              <div class="form-group style-two">
                <input
                  id="form_botcheck"
                  name="form_botcheck"
                  class="form-control"
                  type="hidden"
                  value=""
                />
                <button
                  class="theme-btn btn-style-one"
                  type="submit"
                  data-loading-text="لطفا منتظر باشید ..."
                >
                  ارسال پیام
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- map section -->
  </div>
</template>

<script>
export default {};
</script>

<style></style>
