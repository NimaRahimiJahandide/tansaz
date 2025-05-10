<template>
    <div class="min-h-screen flex  bg-[#FAFAFA]">
      <ToastSuccess :title="successTitle" :description="successDescription" v-if="successTitle.length" />
      <ToastDanger :title="dangerTitle" :description="dangerDescription" v-if="dangerTitle.length" />
      <div class="flex w-full">
        <!-- Image -->
        <div class="hidden sm:block xl:w-1/4">
          <img src="/images/login-pic.png" alt="Holographic Face" class="w-full h-full" />
        </div>
        <!-- Login Form -->
        <div class="w-full lg:w-3/4 p-8 flex items-center justify-center max-sm:bg-[url(/images/login-pic.png)] bg-left-top bg-cover bg-no-repeat">
          <div class="bg-[#FFFFFFCC] sm:bg-white border border-[#F1F1F1] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-[16px] p-8 w-full max-w-[627px]">
            <h2 class="text-center text-[24px] font-bold">فراموشی رمز</h2>
            <div class="mb-6">
              <label class="block text-right mb-2 text-[#212B36] font-medium">کد تایید را وارد کنید</label>
              <input type="tel" class="w-full px-4 py-3 rounded text-[#64748B] placeholder-[#64748B] border bg-white border-[#E2E8F0] text-right" v-model="formData.mobile" dir="rtl" />
            </div>

            <div class="flex w-full justify-end">
              <button @click="$router.push('/auth/forget-password')"
                class="sm:w-[142px] w-[100px] bg-primary text-white cursor-pointer sm:py-3 py-1 rounded-lg transition duration-200">
                تایید
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
    title: "تن ساز | فراموشی رمز",
  });
  
  const formData = reactive({
    mobile: "",
  });
  
  const router = useRouter()
  
  const isLoading = ref(false)
  
  const successTitle = ref("");
  const successDescription = ref("");
  const dangerTitle = ref("");
  const dangerDescription = ref("");
  
//   const rules = computed(() => {
//     return {
//       mobile: {
//         required: helpers.withMessage(
//           "پرکردن این فیلد الزامی است",
//           required
//         ),
//         numeric: helpers.withMessage(
//           "شماره موبایل معتبر نیست",
//           numeric
//         ),
//         minLength: helpers.withMessage(
//           "شماره تلفن باید 11 رقم باشد",
//           minLength(11)
//         ),
//         maxLength: helpers.withMessage(
//           "شماره تلفن باید 11 رقم باشد",
//           maxLength(11)
//         ),
//       },
//       password: {
//         required: helpers.withMessage(
//           "پرکردن این فیلد الزامی است",
//           required
//         ),
//       }
//     };
//   });
  
  
//   const v$ = useVuelidate(rules, formData);
  
//   const login = () => {
//     isLoading.value = true
//     axios.post('/login', formData).then((response) => {
//       if (response.status === 200) {
//         localStorage.setItem("token", response.data.token);
//         successTitle.value = response.data.message
//         setTimeout(() => {
//           successTitle.value = "";
//           router.push("/dashboard");
  
//         }, 1500);
//         token.value = response.data.token
//       }
//       isLoading.value = false
//     }).catch((error) => {
//       dangerTitle.value = 'خطا';
//       dangerDescription.value = error.response ? error.response?.data?.message : '';
//       setTimeout(() => {
//         dangerTitle.value = "";
//       }, 300);
//       isLoading.value = false
//     })
//   }
  
  onMounted(() => {
    if (localStorage.getItem("token")) {
      router.push("/dashboard");
      return;
    }
  });
  </script>
  