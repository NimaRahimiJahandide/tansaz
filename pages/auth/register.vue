<template>
  <div
    class="flex justify-center bg-[radial-gradient(circle,rgba(26,30,65,1)_0%,rgba(239,23,46,1)_100%)] min-h-screen items-center"
  >
    <NuxtLink
      @click="$router.back()"
      class="text-white cursor-pointer items-center gap-1 flex absolute top-10 right-10"
    >
      <Icon name="mdi-light:arrow-right" size="24" style="color: #fff" />
      <span>بازگشت</span>
    </NuxtLink>
    <div
      class="w-[400px] h-full bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] rounded-lg border border-[rgba(255,255,255,0.1)] shadow-lg flex flex-col items-center p-8"
    >
      <div class="relative w-32 h-32 mb-8">
        <a href="/">
          <img
            src="/icons/logo.png"
            alt="tansaz"
            class="absolute w-full h-full object-contain"
          />
        </a>
      </div>
      <form class="w-full space-y-6 text-right">
        <div>
          <input
            type="text"
            placeholder="نام کاربری"
            class="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary text-right"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="ایمیل"
            class="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary text-right"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="رمزعبور"
            class="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary text-right"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="تکرار رمزعبور"
            class="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary text-right"
          />
        </div>
        <div class="flex items-center justify-start gap-2">
          <label class="text-sm text-white">با قوانین موافقم</label>
          <input type="checkbox" class="w-4 h-4 accent-primary" />
        </div>
        <button
          class="w-full py-3 bg-primary text-white rounded-lg hover:bg-[#7A0814] transition-colors duration-300"
        >
          ثبت نام
        </button>
        <div class="text-center flex flex-col mt-6">
          <NuxtLink
            to="/auth/login"
            class="mt-2 text-primary hover:text-[#BF0D1F] transition-colors duration-300"
          >
            ورود با نام کاربری
          </NuxtLink>
          <NuxtLink
            to="/auth/otp"
            class="mt-2 text-primary hover:text-[#BF0D1F] transition-colors duration-300"
          >
            ورود یا ثبت نام با موبایل
          </NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});
</script>
