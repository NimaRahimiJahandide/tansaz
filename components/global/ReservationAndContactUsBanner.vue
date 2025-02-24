<template>
  <div class="mt-[75px] max-w-[1200px] mx-auto px-3">
    <div
      class="bg-[radial-gradient(circle,rgba(26,30,65,1)_0%,rgba(239,23,46,1)_100%)] flex gap-5 justify-end mt-[75px] rounded-[25px] p-[25px] md:flex-row flex-col"
    >
      <NuxtLink
        to="/reserve"
        class="text-white bg-primary/70 hover:bg-primary backdrop-blur-md transition-all duration-500 flex flex-col p-[25px] md:w-1/4 rounded-[15px]"
      >
        <h4 class="text-[28px] font-semibold">رزرو نوبت</h4>
        <p>برای رزرو نوبت، کلیک کنید</p>
      </NuxtLink>
      <NuxtLink
        to="/contact-us"
        class="text-white bg-primary/70 backdrop-blur-md hover:bg-primary transition-all duration-500 flex flex-col p-[25px] md:w-1/4 rounded-[15px]"
      >
        <h4 class="text-[28px] font-semibold">ارتباط با ما</h4>
        <p>حتما با ما تماس بگیرید</p>
      </NuxtLink>
      <NuxtLink
        to="#contact-us"
        class="text-white bg-primary/70 backdrop-blur-md hover:bg-primary transition-all duration-500 flex flex-col p-[25px] md:w-1/4 rounded-[15px]"
      >
        <h4 class="text-[28px] font-semibold">مشاوره</h4>
        <p>برای مشاوه، کلیک کنید</p>
      </NuxtLink>
    </div>
  </div>
</template>
