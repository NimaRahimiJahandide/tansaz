<template>
  <div class="min-h-screen flex  bg-[#FAFAFA]">
    <ToastSuccess :title="successTitle" :description="successDescription" v-if="successTitle.length" />
    <ToastDanger :title="dangerTitle" :description="dangerDescription" v-if="dangerTitle.length" />
    <div class="flex w-full">
      <!-- Image -->
      <div class="hidden md:block xl:w-1/4">
        <img src="/images/login-pic.png" alt="Holographic Face" class="w-full h-full" />
      </div>
      <!-- Login Form -->
      <div class="w-full lg:w-3/4 p-8 flex items-center justify-center">
        <div class="bg-[#80808026] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-lg p-8 w-full max-w-[627px]">
          <div class="mb-6">
            <label class="block text-right mb-2 text-[#212B36]">شماره موبایل</label>
            <input type="tel" class="w-full px-4 py-3 rounded border bg-white border-[#E2E8F0] text-right"
              @change="v$.mobile.$touch"
              :class="!v$.mobile.$invalid ? '' : v$.mobile.$error ? '!border-red-300 focus:!border-red-300  text-red-600 !bg-red-200' : 'focus:border-[#E2E8F0]'"
              placeholder="شماره موبایل خود را وارد کنید" v-model="formData.mobile" dir="rtl" />
            <div class="text-red-600 text-xs pt-1" v-for="error of v$.mobile.$errors" :key="error.$uid">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>

          <div class="mb-8">
            <label class="block text-right mb-2 text-[#212B36]">رمز ورود</label>
            <div class="relative">
              <input :type="showPassword ? 'text' : 'password'"
                class="w-full px-4 pl-10 py-3 rounded border bg-white border-[#E2E8F0] text-right"
                placeholder="رمز ورود خود را وارد کنید" v-model="formData.password" dir="rtl" />
              <div class="text-red-600 text-xs pt-1" v-for="error of v$.password.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
              <button @click="showPassword = !showPassword"
                class="absolute cursor-pointer inset-y-0 left-0 px-3 flex items-center z-10">
                <Icon v-if="!showPassword" name="iconamoon:eye" size="16" style="color: #00000073" />
                <Icon v-else name="basil:eye-closed-outline" size="16" style="color: #00000073" />
              </button>
            </div>
          </div>
          <div class="flex w-full justify-end">
            <button @click="login" :disabled="v$.$invalid || v$.$errors.length || isLoading"
              :class="v$.$invalid || v$.$errors.length || isLoading ? 'cursor-not-allowed bg-primary/50' : 'cursor-pointer bg-primary'"
              class="w-[142px] bg-primary text-white py-3 rounded-lg transition duration-200">
              ورود
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength, numeric, helpers } from "@vuelidate/validators";
import axios from "axios";

definePageMeta({
  layout: 'auth'
});

useHead({
  title: "تن ساز | ورود به حساب کاربری",
});

const formData = reactive({
  mobile: "",
  password: "",
});

const router = useRouter()

const showPassword = ref(false)
const isLoading = ref(false)

const successTitle = ref("");
const successDescription = ref("");
const dangerTitle = ref("");
const dangerDescription = ref("");

const rules = computed(() => {
  return {
    mobile: {
      required: helpers.withMessage(
        "پرکردن این فیلد الزامی است",
        required
      ),
      numeric: helpers.withMessage(
        "شماره موبایل معتبر نیست",
        numeric
      ),
      minLength: helpers.withMessage(
        "شماره تلفن باید 11 رقم باشد",
        minLength(11)
      ),
      maxLength: helpers.withMessage(
        "شماره تلفن باید 11 رقم باشد",
        maxLength(11)
      ),
    },
    password: {
      required: helpers.withMessage(
        "پرکردن این فیلد الزامی است",
        required
      ),
    }
  };
});


const v$ = useVuelidate(rules, formData);

const login = () => {
  isLoading.value = true
  axios.post('/login', formData).then((response) => {
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      successTitle.value = response.data.message
      setTimeout(() => {
        successTitle.value = "";
        router.push("/dashboard");

      }, 1500);
      token.value = response.data.token
    }
    isLoading.value = false
  }).catch((error) => {
    dangerTitle.value = 'خطا';
    dangerDescription.value = error.response ? error.response?.data?.message : '';
    setTimeout(() => {
      dangerTitle.value = "";
    }, 300);
    isLoading.value = false
  })
}

onMounted(() => {
  if (localStorage.getItem("token")) {
    router.push("/dashboard");
    return;
  }
});
</script>
