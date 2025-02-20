<script setup lang="ts">
const slides = ref([
  {
    id: 0,
    image: "/images/balkkon-2-copy-1.jpg",
  },
  {
    id: 1,
    image: "/images/ELMIRA-ROOM-3-copy-scaled.jpg",
  },
  {
    id: 2,
    image: "/images/ELMIRA-ROOM-copy-Copy-scaled.jpg",
  },
  {
    id: 3,
    image: "/images/FEYSHAAL-1.jpg",
  },
  {
    id: 4,
    image: "/images/pzeshk-4-copy-Copy.jpg",
    text: "قهوه ربوستا",
  }
]);
</script>

<template>
  <div class="mt-[75px] max-w-[1200px] mx-auto px-3 text-dark">
    <div class="flex justify-center items-center gap-[20px]">
      <div class="flex w-1/2 flex-col gap-5">
        <h3 class="text-[30px]">
          درباره کلینیک <span class="text-primary">تن ساز</span>
        </h3>
        <span class="text-light-grey mb-3.5">همه ی آن چیزی که باید بدانید</span>
        <p class="text-[20px] leading-10 text-justify">
          کلینیک تن سازمجهزترین کلینیک زیبایی و لاغری در شیراز است که با استفاده
          از پیشرفته‌ترین دستگاه‌ها و خدمات تخصصی، به افراد کمک می‌کند تا به
          اهداف زیبایی و تناسب اندام خود برسند. این کلینیک با بهره‌گیری از
          پزشکان متخصص و فوق تخصص در زمینه‌های مختلف، از جمله زیبایی، لاغری،
          درمان‌های پوستی و غیره، ارائه‌دهنده درمان‌های مدرن و موثر برای مراجعین
          است.
        </p>
        <NuxtLink
          class="text-white w-fit bg-primary focus:outline-none focus:ring-primary shadow-lg shadow-primary/50  rounded-lg py-[18px] px-[25px] flex justify-center items-center max-h-[51px]"
          to="/about-us"
          >درباره ما</NuxtLink
        >
      </div>
      <div class="w-1/2">
        <swiper-container
          class="h-full swiper-container"
          :loop="true"
          :pagination="true"
          :slides-per-view="1"
          :space-between="30"
        >
          <swiper-slide
            v-for="slide in slides"
            :key="`slide-basic-${slide.id}`"
            class="swiper-slide rounded-2xl h-full"
          >
            <div class="rounded-3xl">
              <img
                :src="slide.image"
                alt="Robusta Coffee"
                class="h-full w-full object-cover rounded-3xl"
              />
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </div>
</template>
