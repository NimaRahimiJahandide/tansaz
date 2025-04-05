<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import axios from "axios";
import {
  required,
  minLength,
  maxLength,
  numeric,
  helpers,
} from "@vuelidate/validators";

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
        successTitle.value = response.data.message
        formData.name = "";
        formData.mobile = "";
        formData.text = "";
        loading.value = false;
      }).catch(error => {
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

const v$ = useVuelidate(rules, formData);
</script>
<template>
  <div>
    <ToastSuccess  :title="successTitle" :description="successDescription" v-if="successTitle.length"/>
    <ToastDanger  :title="dangerTitle" :description="dangerDescription" v-if="dangerTitle.length"/>
    <div class="mt-[75px] max-w-[1200px] mx-auto px-5">
      <div class="w-full bg-neutral-900 p-8 rounded-3xl">
        <div class="flex flex-col md:flex-row justify-between items-start gap-5">
          <div class="text-white text-3xl flex flex-col my-auto font-bold text-right">
            رزرو نوبت
            <p class="text-sm font-normal mt-4 text-gray-300">
              برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است.
            </p>
          </div>
          
          <div class="w-full space-y-6">
            <div class="space-y-2">
              <label class="block text-white text-sm">
                نام و نام خانوادگی *
              </label>
              <input v-model="formData.name" type="text" class="w-full p-3 rounded-lg bg-white" @change="v$.name.$touch" />
            </div>
            <div class="space-y-2">
              <label class="block text-white text-sm"> شماره موبایل * </label>
              <input v-model="formData.mobile" type="tel" class="w-full p-3 rounded-lg bg-white" @change="v$.mobile.$touch" />
            </div>
            <div class="space-y-2">
              <label class="block text-white text-sm">
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
              <label class="block text-white text-sm">
                توضیحات در صورت نیاز
              </label>
              <textarea v-model="formData.text"
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
</template>
