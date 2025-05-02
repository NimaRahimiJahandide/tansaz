<template>
  <div class="bg-gray-100  p-4 my-8">
    <ToastSuccess  :title="successTitle" :description="successDescription" v-if="successTitle.length"/>
    <ToastDanger  :title="dangerTitle" :description="dangerDescription" v-if="dangerTitle.length"/>
    <div class="rounded-lg container px-5 mx-auto overflow-hidden">
      <div class="md:flex w-full">
        <!-- Right Side -->
        <div :class="comments.length > 0 ? 'md:w-1/2' : ' w-full'" class="p-4 flex flex-col md:p-8">
          <div class="flex flex-col md:gap-5 gap-2.5 pb-8">
            <h3 class="md:text-[40px] text-xl font-bold">دیدگاه کاربران</h3>
            <p class="md:text-xl text-sm font-bold">با ثبت دیدگاه خود ما را در ارائه خدمات بهتر یاری کنید</p>
          </div>
          <form class="flex flex-col" @submit.prevent="sendComments">
            <!-- Name Input -->
            <div class="mb-4">
              <label for="name" class="block text-gray-700 font-medium mb-2">نام</label>
              <input type="text" id="name" v-model="formData.name" placeholder="نام خود را وارد کنید" required
                @change="v$.name.$touch" :class="!v$.name.$invalid
                  ? 'focus:border-green-400  !bg-green-400/10'
                  : v$.name.$error
                    ? '!border-red-400 focus:border-red-400 text-red-400 !bg-red-400/10'
                    : 'focus:border-black'
                  "
                class="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
            </div>

            <!-- mobile Input -->
            <div class="mb-4">
              <label for="tel" class="block text-gray-700 font-medium mb-2">شماره موبایل</label>
              <input type="tel" id="tel" v-model="formData.mobile" placeholder="شماره موبایل خود را وارد کنید"
                @change="v$.mobile.$touch" :class="!v$.mobile.$invalid
                    ? 'focus:border-green-400  !bg-green-400/10'
                    : v$.mobile.$error
                      ? '!border-red-400 focus:border-red-400 text-red-400 !bg-red-400/10'
                      : 'focus:border-black'
                  "
                class="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
            </div>

            <!-- Comment Textarea -->
            <div class="mb-4">
              <label for="comment" class="block text-gray-700 font-medium mb-2">دیدگاه شما</label>
              <textarea id="comment" v-model="formData.text" placeholder="دیدگاه خود را بنویسید" rows="4" required
                @change="v$.text.$touch" :class="!v$.text.$invalid
                  ? ''
                  : v$.text.$error
                    ? '!border-red-400 focus:border-red-400 text-red-400 !bg-red-400/10'
                    : 'focus:border-black'
                  "
                class="w-full px-3 py-2 resize-none bg-white border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"></textarea>
            </div>

            <!-- Submit Button -->
            <button type="submit" :disabled="v$.$invalid || v$.$errors.length || loading" :class="v$.$invalid || v$.$errors.length || loading
                ? 'cursor-not-allowed'
                : 'cursor-pointer'
              "
              class="w-28 self-end bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 text-center items-center flex justify-center">
              ثبت دیدگاه
            </button>
          </form>
        </div>
        <!-- Left Side -->
        <div v-if="comments.length > 0" class="flex flex-col items-center justify-start gap-5 md:w-1/2 md:mt-8 pt-5 h-[66vh] overflow-y-auto">
          <DevicesCardComment v-for="comment in comments" :key="comment.id" :comment="comment" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import axios from "axios";
import {
  required,
  minLength,
  maxLength,
  numeric,
  helpers,
} from "@vuelidate/validators";

defineProps({
  comments: Object
})

const route = useRoute();
const router = useRouter();

const successTitle = ref("");
const successDescription = ref("");
const dangerTitle = ref("");
const dangerDescription = ref("");

const formData = reactive({
  name: '',
  mobile: '',
  text: ''
})

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
    text: {
      maxLength: helpers.withMessage(
        "توضیحات نباید بیشتر از 500 کاراکتر باشد",
        maxLength(500)
      ),
    },
  };
});

const loading = ref(false);

const sendComments = async () => {
  loading.value = true;
  try {
    await axios.post(`/device-infos/${route.params.id}/comments`, formData);
    successTitle.value = 'نظر شما ثبت شد'
    successDescription.value = 'نظر شما با موفقیت ثبت شد'
    setTimeout(() => {
      successTitle.value = "";
      router.go(0);
    }, 1500);
    loading.value = false;
  } catch (err) {
    loading.value = false;
    dangerTitle.value = "مشکلی پیش آمده!";
    dangerDescription.value = "دوباره تلاش کنید.";
    setTimeout(() => {
      dangerTitle.value = "";
    }, 3000);
  }
}

const v$ = useVuelidate(rules, formData);
</script>

<style scoped>
/* Optional custom styles */
</style>