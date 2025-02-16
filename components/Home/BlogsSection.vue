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
  <div class="max-w-[1200px] mx-auto px-3 text-dark mt-[75px]">
    <div class="flex items-center justify-between">
      <h3 class="text-[30px] font-light">جدیدترین <span class="text-primary">مقالات</span> آموزشی</h3>
      <NuxtLink
        class="flex w-fit gap-[5px] justify-center items-center bg-primary text-white px-[24px] py-[12px] whitespace-nowrap rounded-[10px]"
        to="#"
      >
        <span>خواندن مقالات</span>
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
          class="swiper-slide rounded-2xl h-full"
        >
          <NuxtLink to="#"
            class="rounded-3xl h-full shadow-[0_0px_10px_rgba(0,0,0,0.1)] transition-transform"
          >
            <div class="relative md:h-[400px] w-full overflow rounded-2xl">
              <img
                :src="slide.image"
                alt="Robusta Coffee"
                class="h-full w-full object-cover rounded-3xl"
              />
            </div>
            <h4>{{slide.text}}</h4>
          </NuxtLink>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>
