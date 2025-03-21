<script setup lang="ts">
const slides = ref([
  {
    id: 0,
    image: "/images/exmple1.png",
  },
  {
    id: 1,
    image: "/images/exmple2.png",
  },
  {
    id: 2,
    image: "/images/exmple3.png",
  },
  {
    id: 3,
    image: "/images/exmple4.png",
  },
  {
    id: 4,
    image: "/images/exmple5.png",
  },
  {
    id: 5,
    image: "/images/exmple6.png",
  },
  {
    id: 6,
    image: "/images/exmple7.png",
  },
  {
    id: 7,
    image: "/images/exmple8.png",
  },
  {
    id: 8,
    image: "/images/exmple9.png",
  },
  {
    id: 9,
    image: "/images/exmple10.png",
  },
  {
    id: 10,
    image: "/images/exmple11.jpg",
  },
  {
    id: 11,
    image: "/images/exmple12.png",
  },
]);
</script>

<template>
  <div class="mt-[75px] max-w-[1200px] mx-auto px-5">
    <div
      class="h-full w-full bg-dark bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-white rounded-3xl md:p-[45px] p-6"
    >
      <h3 class="sm:text-[30px] text-2xl font-light">
        نمونه های <span class="text-primary">قبل</span> و بعد
      </h3>
      <p class="font-light mb-3.5 text-justify sm:text-base text-sm mt-2">
        با اطمینانی کامل، زیبایی خود را با ما دو چندان کنید
      </p>
      <div>
        <swiper-container
          class="h-full swiper-container sm:mt-12 mt-5 sm:pb-[50px] pb-5"
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
            <img
              :src="slide.image"
              alt="عکس-قبل-و-بعد-کلینیک-زیبایی-و-لاغری-تن-ساز"
              class="w-full bg-primary object-cover rounded-2xl overflow-hidden"
            />
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </div>
</template>
