<template>
  <div class="min-h-screen flex  bg-[#FAFAFA]">
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
            <input type="text" class="w-full px-4 py-3 rounded border bg-white border-[#E2E8F0] text-right"
              placeholder="شماره موبایل خود را وارد کنید" v-model="mobileNumber" dir="rtl" />
          </div>

          <div class="mb-8">
            <label class="block text-right mb-2 text-gray-700">رمز ورود</label>
            <div class="relative">
              <input :type="showPassword ? 'text' : 'password'"
                class="w-full px-4 py-3 rounded border bg-white border-[#E2E8F0] text-right"
                placeholder="رمز ورود خود را وارد کنید" v-model="password" dir="rtl" />
              <button @click="showPassword = !showPassword" class="absolute cursor-pointer inset-y-0 left-0 px-3 flex items-center z-10">
                <Icon v-if="!showPassword"  name="iconamoon:eye" size="16" style="color: #00000073" />
                <Icon v-else  name="basil:eye-closed-outline" size="16" style="color: #00000073" />
              </button>
            </div>
          </div>

          <div class="flex w-full justify-end">
            <button @click="login"
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
definePageMeta({
  layout: 'auth'
});

const mobileNumber = ref('')
const password = ref('')
const showPassword = ref(false)

const login = () => {
  console.log('Logging in with:', mobileNumber.value, password.value)
}
</script>
