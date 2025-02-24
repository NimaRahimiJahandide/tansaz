<script setup lang="ts">
const slides = ref([
  {
    id: 0,
    image: "/images/photo_2024-08-21_22-15-45-682x1024.jpg",
    text: "جراحی بوکال فت، ساب سیژن و پیوند چربی",
  },
  {
    id: 1,
    image: "/images/photo_2024-08-21_22-15-49-682x1024.jpg",
    text: "تزریقات زیبایی بوتاکس، ژل و فیلر و هایفوتراپی",
  },
  {
    id: 2,
    image: "/images/photo_2024-08-21_22-16-13-682x1024.jpg",
    text: " استفاده از معتبرترین برند مواد برندهای صنعت زیبایی و جراحی",
  },
  {
    id: 3,
    image: "/images/photo_2024-08-21_22-15-54-682x1024.jpg",
    text: "از پرفروش ترین برند مواد برندهای صنعت زیبایی",
  },
]);
</script>

<template>
  <div class="max-w-[1200px] mx-auto px-3 text-dark mt-[75px] md:mb-28">
    <div class="flex items-center justify-between">
      <h3 class="md:text-[30px] text-[22px] font-light">
        جدیدترین <span class="text-primary">مقالات</span> آموزشی
      </h3>
      <NuxtLink
        class="text-white w-fit bg-primary focus:outline-none whitespace-nowrap gap-1 focus:ring-primary shadow-lg shadow-primary/50 rounded-lg py-[18px] md:px-[25px] px-[10px] flex justify-center items-center max-h-[51px]"
        to="/blogs"
      >
        <span>مقالات</span>
        <Icon name="mingcute:arrow-left-fill" size="20px" style="color: #fff" />
      </NuxtLink>
    </div>
    <div>
      <swiper-container
        class="h-full swiper-container mt-12"
        :loop="true"
        :navigation="true"
        :slides-per-view="4"
        :space-between="30"
        :breakpoints="{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 4,
          },
        }"
      >
        <swiper-slide
          v-for="slide in slides"
          :key="`slide-basic-${slide.id}`"
          class="swiper-slide"
        >
          <BlogCardComponent :title="slide.text" :image="slide.image" />
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>
