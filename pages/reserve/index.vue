<script setup lang="ts">
import { useLoadingState } from "@/store/loadingState";
import { useVuelidate } from "@vuelidate/core";
import axios from "axios";
import {
  required,
  minLength,
  maxLength,
  numeric,
  helpers,
} from "@vuelidate/validators";
const loadingState = useLoadingState();
const route = useRoute();

const successTitle = ref("");
const successDescription = ref("");
const dangerTitle = ref("");
const dangerDescription = ref("");

const formData = reactive({
  name: "",
  mobile: "",
  subject: "پوست، مو، زیبایی",
  text: "",
});

const loading = ref(false)

const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage("پرکردن این فیلد الزامی است", required),
      minLength: helpers.withMessage(
        "نام و نام خانواگی باید حداقل 2 کارکتر باشد",
        minLength(2)
      ),
    },
    mobile: {
      numeric,
      required: helpers.withMessage("پرکردن این فیلد الزامی است", required),
      minLength: helpers.withMessage(
        "شماره موبایل صحیح نمی یاشد",
        minLength(11)
      ),
      maxLength: helpers.withMessage(
        "شماره موبایل صحیح نمی یاشد",
        maxLength(11)
      ), 
    },
    text:{
      maxLength: helpers.withMessage(
        "توضیحات نباید بیشتر از 500 کاراکتر باشد",
        maxLength(500)
      ), 
    }
  };
});

const consultations = () => {
  if (formData.name != "" && formData.mobile != "") {
    loading.value = true
    axios.post("/consultations", formData)
      .then(response => {
        console.log(response);
        successTitle.value = response.data.message
        formData.name = "";
        formData.mobile = "";
        formData.text = "";
        loading.value = false;
      }).catch(error => {
        console.log(error);
        dangerTitle.value ="مشکلی پیش آمده!";
        dangerDescription.value ="دوباره تلاش کنید.";
        setTimeout(() => {
          dangerTitle.value = "";
    }, 3000);
        loading.value = false;
      })
  }
};

const charCount = computed(() => {
  return formData.text.length;
});

useSchemaOrg([
  defineWebSite({
    name: "تن ساز",
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: 'خانه', item: '/' },
      { name: `رزرو آنلاین`, item: decodeURI(route.fullPath) },
    ],
  })
]);

setTimeout(() => {
  loadingState.setLoading(false);
}, 2000);
const v$ = useVuelidate(rules, formData);
</script>

<template>
  <div>
    <ToastSuccess  :title="successTitle" :description="successDescription" v-if="successTitle.length"/>
    <ToastDanger  :title="dangerTitle" :description="dangerDescription" v-if="dangerTitle.length"/>
    <div
      class="flex flex-col md:flex-row max-w-[1200px] text-dark mx-auto px-5 mt-[75px]"
    >
      <!-- <div
        v-if="loadingState.isLoading"
        class="flex flex-col md:flex-row max-w-[1200px] text-dark mx-auto w-full px-3 mt-[75px]"
      >
        <div class="w-full h-[500px] bg-gray-300 rounded animate-pulse"></div>
      </div> -->
      <div class="w-full flex md:flex-row bg-background-input  rounded-3xl flex-col shadow-2xl">
        <div
          class="md:w-1/2 p-8"
        >
          <div class="mb-8">
            <h2 class="text-2xl mb-2 text-justify">
              رزرو نوبت <span class="text-primary">آنلاین</span> به چه صورت می
              باشد ؟
            </h2>
            <p class="text-[14px] text-justify">
              برای گرفتن نوبت مشاوره رایگان فرم رو پرکنید و منتظر تماس کارشناسان
              ما باشید .
            </p>
          </div>
          <div class="space-y-6">
            <div class="flex items-start gap-[20px]">
              <span
                class="bg-primary flex justify-center items-center rounded-[6px] min-w-[30px] h-[30px]"
              >
                <Icon
                  name="ic:baseline-phone"
                  size="17px"
                  style="color: #fff"
                />
              </span>
              <div class="flex flex-col gap-2.5">
                <p class="text-[20px] font-semibold">شماره های تماس</p>
                <span class="text-neutral-400"
                  >07136383752، 07136383751، 07136385004</span
                >
              </div>
            </div>
            <div class="flex items-start gap-[20px]">
              <span
                class="bg-primary flex justify-center items-center rounded-[6px] min-w-[30px] h-[30px]"
              >
                <Icon name="mdi:location" size="17px" style="color: #fff" />
              </span>
              <div class="flex flex-col gap-2.5">
                <p class="text-[20px] font-semibold">آدرس کلینیک</p>
                <span class="text-neutral-400"
                  >شیراز، معالی آباد، نبش دنا، ساختمان هرم نور، طبقه 5 و 6</span
                >
              </div>
            </div>
            <div class="flex items-start gap-[20px]">
              <span
                class="bg-primary flex justify-center items-center rounded-[6px] size-[30px]"
              >
                <Icon name="lets-icons:insta" size="17px" style="color: #fff" />
              </span>
              <div class="flex flex-col gap-2.5">
                <p class="text-[20px] font-semibold">صفحه اینستاگرام</p>
                <span class="text-neutral-400">tansaz.clinic</span>
              </div>
            </div>
            <div class="flex items-start gap-[20px]">
              <span
                class="bg-primary flex justify-center items-center rounded-[6px] size-[30px]"
              >
                <Icon
                  name="ic:baseline-telegram"
                  size="17px"
                  style="color: #fff"
                />
              </span>
              <div class="flex flex-col gap-2.5">
                <p class="text-[20px] font-semibold">تلگرام</p>
                <span class="text-neutral-400">09336074147</span>
              </div>
            </div>
            <div class="flex items-start gap-[20px]">
              <span
                class="bg-primary flex justify-center items-center rounded-[6px] size-[30px]"
              >
                <Icon
                  name="ic:baseline-whatsapp"
                  size="17px"
                  style="color: #fff"
                />
              </span>
              <div class="flex flex-col gap-2.5">
                <p class="text-[20px] font-semibold">واتس اپ</p>
                <span class="text-neutral-400">09336074147</span>
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 p-8">
          <div
            class="flex flex-col md:flex-row justify-between items-start gap-5"
          >
            <div class="w-full space-y-6">
              <div class="space-y-2">
                <label class="block text-sm">
                  نام و نام خانوادگی *
                </label>
                <input v-model="formData.name" type="text" class="w-full p-3 rounded-lg bg-white" @change="v$.name.$touch" :class="!v$.name.$invalid
                ? 'focus:border-green-400  !bg-green-400/10'
                : v$.name.$error
                  ? '!border-red-400 focus:border-red-400 text-red-400 !bg-red-400/10'
                  : 'focus:border-black'
                " />
              </div>
              <div class="space-y-2">
                <label class="block text-sm"> شماره موبایل * </label>
                <input v-model="formData.mobile" type="tel" class="w-full p-3 rounded-lg bg-white" @change="v$.mobile.$touch" :class="!v$.mobile.$invalid
                ? 'focus:border-green-400  !bg-green-400/10'
                : v$.mobile.$error
                  ? '!border-red-400 focus:border-red-400 text-red-400 !bg-red-400/10'
                  : 'focus:border-black'
                "/>
              </div>
              <div class="space-y-2">
                <label class="block text-sm">
                  در چه زمینه‌ای مشاوره میخواهید؟ *
                </label>
                <div class="relative w-full">
                  <select v-model="formData.subject" class="w-full p-3 pr-8 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer">
                    <option value="پوست، مو، زیبایی" selected>پوست، مو، زیبایی</option>
                    <option value="پوست">پوست</option>
                    <option value="مو">مو</option>
                    <option value="زیبایی">زیبایی</option>
                  </select>
                </div>
              </div>
              <div class="space-y-2">
                <label class="block text-sm">
                  توضیحات در صورت نیاز
                </label>
                <textarea v-model="formData.text" @change="v$.text.$touch" :class="!v$.text.$invalid
                ? 'focus:border-green-400  !bg-green-400/10'
                : v$.text.$error
                  ? '!border-red-400 focus:border-red-400 text-red-400 !bg-red-400/10'
                  : 'focus:border-black'
                "
                  class="w-full h-32 p-3 rounded-lg bg-white resize-none"
                ></textarea>
                <p class="text-gray-400 text-xs">{{ charCount }} از ۵۰۰ حرف کاراکتر</p>
              </div>
              <div class="space-y-4">
                <button :disabled="v$.$invalid || v$.$errors.length || loading" @click="consultations()"
                :class="v$.$invalid || v$.$errors.length || loading ? 'cursor-not-allowed' : 'cursor-pointer'" 
                  class="w-full relative h-[48px] p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                <div v-if="loading" role="status" class="absolute left-[calc(50%-10px)] top-2">
                  <svg class="h-6 inline w-6 animate-spin" viewBox="3 3 18 18">
                    <path class="fill-transparent"
                        d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z">
                    </path>
                    <path class="fill-[#fff]"
                        d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z">
                    </path>
                  </svg>
                </div>
                <span v-else>رزرو نوبت</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
