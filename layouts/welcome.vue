<template>
    <div class="banner " >
    <div class="container ">
      <div class="row ">
        <div class="col-md-9 col-lg-9 change-mohtava-fanam mt-2 col-xs-12">
          <li style="font-size: 12px;" class="text-white">به فناوری اطلاعات کارافرین خاص خوش اومدید</li>
        </div>
        <div class="col-md-1 col-lg-1 col-xs-12">
          <div class="change-dropdown">
            <BDropdown
            left
              v-model="show1"
              size="lg"
              variant="link"
              toggle-class="text-decoration-none "
              no-carret
            >
              <template #button-content>
                <img
                  style="width: 20px;margin-top:5px;margin-right: 50px; height: 20px"
                  src="../public/location.png"
                  alt=""
                />
              </template>

              <BDropdownItemButton @click="changeLanguage('en')">
                <div class="d-flex">
                  <div style="top: -2px" class="mr-1 position-relative">en</div>
                  <img
                    style="width: 20px; height: 20px"
                    src="../public/english.png"
                  />
                </div>
              </BDropdownItemButton>
              <BDropdownItemButton @click="changeLanguage('fa')">
                <div class="d-flex">
                  <div style="right: 2px;bottom:2px" class="position-relative">fa</div>
                  <img
                    style="height:20px; right: 10px"
                    class="position-relative"
                    src="../public/iran.jpg"
                  />
                </div>
              </BDropdownItemButton>
            </BDropdown>
          </div>
        </div>
        <div style="margin-top: 11px;" class="col-md-2 col-lg-2  change-content col-xs-12">
          <div class="d-flex">
         
            <span style="font-size: 14px;" class="text-white  ml-2">
              {{ currentTime.toLocaleTimeString('fa-IR') }}
            </span>
            <span style="font-size: 14px;" class="text-white  ml-2">
              {{ todayJalali }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup>
import { useCurrentTime } from "../composables/useCurrentTime";
import { useI18n } from "vue-i18n";
import moment from "jalali-moment";
import fa from "moment/src/locale/fa";

const { currentTime } = useCurrentTime();
    console.log(currentTime.value);
    const t = useI18n();

moment.locale("fa", fa);
let todayJalali = moment().locale("fa").format("YYYY/M/D");
const show1 = ref(false);
function changeLanguage(locale) {
  t.locale.value = locale;
}

</script>