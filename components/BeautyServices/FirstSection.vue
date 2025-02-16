<script setup lang="ts">
const slides = ref([
  {
    id: 0,
    image: "/images/3-3.png",
  },
  {
    id: 1,
    image: "/images/tansaz.png",
  },
]);
</script>

<template>
  <div
    class="max-w-[1200px] text-dark mx-auto px-3 my-[25px] pt-2.5 flex justify-between w-full gap-[20px]"
  >
    <div class="flex flex-col-reverse items-center md:flex-row gap-5">
      <div class="flex flex-col gap-5 md:w-2/3">
        <div>
          <h1 class="text-[33px] font-light">
            <span class="text-primary">خدمات زیبایی در</span> تن ساز
          </h1>
        </div>
        <p class="text-justify leading-9">
          کلینیک زیبایی و لاغری تن‌ساز، همراه همیشگی شما برای رسیدن به زیبایی و
          اندام ایده‌آل، مفتخر است به‌عنوان مجهزترین و تخصصی‌ترین کلینیک زیبایی
          و لاغری در جنوب کشور، در کنار شما باشد.
        </p>
        <p class="text-justify leading-9">
          با بهره‌گیری از پیشرفته‌ترین دستگاه‌های روز دنیا و تیمی از پزشکان مجرب
          و متخصص، کلینیک تن‌ساز تجربه‌ای بی‌نظیر از خدمات زیبایی، جوان‌سازی و
          تناسب اندام را به شما اراِئه خواهد داد.
        </p>
        <div class="flex gap-2.5">
          <NuxtLink to="/contact-us"
            class="bg-primary flex justify-center items-center text-white rounded-r-full py-[18px] px-[25px] max-h-[51px]"
          >
            تماس با ما
          </NuxtLink>
          <NuxtLink to="/about-us"
            class="py-[18px] px-[25px] flex justify-center items-center border max-h-[51px]"
          >
            معرفی مجموعه
          </NuxtLink>
        </div>
      </div>
      <div class=",md:w-1/3">
        <img src="/images/Asset-2x.png" alt="Asset-2x" />
      </div>
    </div>
  </div>
</template>
