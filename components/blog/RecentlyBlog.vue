<script setup lang="ts">
const slides = ref([
  {
    id: 0,
    image: "/images/photo_2024-08-21_22-15-45-682x1024.jpg",
    text: "جراحی بوکال فت، ساب سیژن و پیوند چربی",
    route: "/blogs/1",
  },
  {
    id: 1,
    image: "/images/photo_2024-08-21_22-15-49-682x1024.jpg",
    text: "تزریقات زیبایی بوتاکس، ژل و فیلر و هایفوتراپی",
    route: "/blogs/1",
  },
  {
    id: 2,
    image: "/images/photo_2024-08-21_22-16-13-682x1024.jpg",
    text: " استفاده از معتبرترین برند مواد برندهای صنعت زیبایی و جراحی",
    route: "/blogs/1",
  },
  {
    id: 3,
    image: "/images/photo_2024-08-21_22-15-54-682x1024.jpg",
    text: "از پرفروش ترین برند مواد برندهای صنعت زیبایی",
    route: "/blogs/1",
  },
]);
</script>

<template>
  <div class="max-w-[1200px] mx-auto px-5 text-dark mt-[75px] md:mb-28">
    <div class="flex items-center justify-center">
      <h3 class="md:text-[30px] text-[22px] font-light">
        آخرین <span class="text-primary">مقالات</span>
      </h3>
    </div>
    <div>
      <swiper-container
        class="h-[57vh] swiper-container mt-12 "
        :loop="true"
        :pagination="{ clickable: true }"
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
          class="swiper-slide pt-2 px-2 w-10"
        >
          <BlogCardComponent
            :title="slide.text"
            :image="slide.image"
            :route="slide.route"
          />
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<style>

</style>
