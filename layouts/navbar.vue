<!-- =========================================================================================
    File Name: navbar.vue
    Description: navbar  Component in layout page
    Component Name: navbar component
    ----------------------------------------------------------------------------------------
    Item Company: Fanam 
      Author: pooria vakili

========================================================================================== -->
<template>
  <div  class="navbar-change" >
  <div style="" class="header-upper">
    <div class="container">
      <div>
        <b-navbar class="navbar-fanam" toggleable="lg" type="dark" variant="dark">


    <b-collapse  id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item  style="color: #fff;font-size: 14px;" href="/">{{ $t('home') }} </b-nav-item>
        <b-nav-item  href="/services">  </b-nav-item>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em style="font-size: 14px;" class="font-style-none ">{{ $t('service') }}</em>
            <i style="font-size:14px"  class="fa fa-chevron-down"></i>

          </template>
          <b-dropdown-item href="/bankingSystems">توسعه سامانه های بانکی</b-dropdown-item>
          <b-dropdown-item href="/intelligenceSystems"> توسعه سامانه های هوش تجاری</b-dropdown-item>
          <b-dropdown-item href="/SoftwareSystems"> توسعه سامانه های نرم افزار </b-dropdown-item>
          <b-dropdown-item href="/consultingServices"> خدمات مشاوره</b-dropdown-item>

        </b-nav-item-dropdown>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em style="font-size: 14px;" class="font-style-none iran-sans" >{{ $t('project') }}</em>
            <i style="font-size:14px" class="fa fa-chevron-down"></i>

          </template>
          <b-dropdown-item href="http://my.karafariniomid.ir/sign-in">بانک داری الکترونیک خاص</b-dropdown-item>
          <b-dropdown-item href="http://smart.karafariniomid.ir">سامانه هوشمند کسب کارامید</b-dropdown-item>
          <b-dropdown-item href="https://samen.karafariniomid.ir">سامانه وصول مطالبات ونظارت</b-dropdown-item>
          <b-dropdown-item href="http://legalpilot.karafariniomid.ir/">سامانه حقوقی </b-dropdown-item>
          <b-dropdown-item href="https://tara.karafariniomid.ir">سامانه مدیریت  صندوق های خرد محلی</b-dropdown-item>
          <b-dropdown-item href="https://shoghl.mcls.gov.ir">سامانه جستجوی شغل کشور</b-dropdown-item>
          <b-dropdown-item href="https://lmissandbox.karafariniomid.ir">سامانه اطلاعات بازار کار کشور</b-dropdown-item>

        </b-nav-item-dropdown>
        <b-nav-item style="font-size: 14px"  href="/cooperation "> درخواست همکاری  </b-nav-item>
        <b-nav-item style="font-size: 14px;" href="/pos" >خدمات pos</b-nav-item>
        <b-nav-item style="font-size: 14px;" href="/about" >درباره ما</b-nav-item>
        <b-nav-item style="font-size: 14px;" href="/contact" > ارتباط باما</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <div class="search-change">
        <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input  size="sm" class="mr-sm-2 input-search" placeholder="Search"></b-form-input>
            <img class="icon-search-input"  src="../public/Asset 81.svg" alt="">
        </b-nav-form>
      </b-navbar-nav>
      </div>
    </b-collapse>
  </b-navbar>
</div>
    </div>
  </div>
  </div>
<div class="d-flex position-relative justify-content-center sidebar-all align-items-center" >
  <div   style="border-radius: 10px 0 25px;margin-top: 10px;"  class="navbar-change-one  w-75 bg-dark p-3">
   <div>
    <Sidebar  v-model:visible="visible">
<div class="text-left   ml-5">
 <a style="color: #000;" href="/">خانه</a> 
 </div>
 <div  class="text-left  ml-5 ">
        <SplitButton  outlined class="mr-2" :label="$t('service')"  @click="save" :model="items" />
    </div>
    <div  class="text-left ml-5  ">
        <SplitButton  outlined class="mr-2" :label="$t('project')"  @click="save" :model="project" />
    </div>
    <div class="text-left  ml-5">
 <a style="color: #000;" href="/cooperation">درخواست همکاری</a> 
 </div>
 <div class="text-left  ml-5">
 <a style="color: #000;" href="/pos"> خدمات pos </a> 
 </div>

    </Sidebar>
    <Button style="width:60px;height: 40px;border-radius: 10px;" icon="pi pi-home
" @click="visible = true" />
       
   </div>
   </div>
</div>
</template>
<script setup >
const visible=ref(false)


const items = [
    {
        label:' توسعه سامانه های بانکی',
        command: () => {
            window.location.href = '/bankingSystems';
        }
        
        
        
    },
    {
        label: 'توسعه سامانه های هوش تجاری',
        command: () => {
            window.location.href = '/intelligenceSystems';
        }
       
    },
    {
        label: 'توسعه سامانه های نرم افزار',
        command:()=>{
            window.location.href="/SoftwareSystems"
        }
       
        
    },
    { label: ' خدمات مشاوره ',
     command:()=>{
        window.location.href="/consultingServices"
     }


},
   
];
const project = [
    {
        label:'  بانکداری الکترونیک خاص',
        command: () => {
            window.location.href = 'http://my.karafariniomid.ir/sign-in';
        }
        
        
        
    },
    {
        label: 'سامانه هوشمند کسب کارامید ',
        command: () => {
            window.location.href = 'http://smart.karafariniomid.ir/#';
        }
       
    },
    {
        label: 'سامانه وصول مطالبات ونظارت',
        command: () => {
            window.location.href = 'https://samen.karafariniomid.ir';
        }
       
        
    },
    { label: 'سامانه حقوقی ', 
    command: () => {
            window.location.href = 'http://legalpilot.karafariniomid.ir/';
        }

},
    {
      label:'سامانه مدیریت  صندوق های خرد محلی',
      command: () => {
            window.location.href = 'https://tara.karafariniomid.ir';
        }
    },
    {
      label:'سامانه جستجوی شغل کشور',
      command: () => {
            window.location.href = 'https://shoghl.mcls.gov.ir';
        }
    },
    {
      label:'سامانه اطلاعات بازار کار کشور',
      command: () => {
            window.location.href = 'https://lmissandbox.karafariniomid.ir';
        }
    }
];

</script>
<style>
</style>
