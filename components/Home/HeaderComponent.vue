<script setup lang="ts">
import { useLoadingState } from "@/store/loadingState";
const loadingState = useLoadingState();

setTimeout(() => {
  loadingState.setLoading(false);
}, 2000);

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
  <div>
    <!-- <div
      v-if="loadingState.isLoading"
      class="max-w-[1200px] text-dark mx-auto px-3 my-[25px] pt-2.5 flex justify-between w-full gap-[20px]"
    >
      <div class="flex w-full flex-col md:flex-row gap-5">
        <div class="w-[calc(100vw-50px)] md:hidden sm:h-[40vh]">
          <div
            class="w-full h-[40vh] bg-gray-300 rounded-4xl animate-pulse"
          ></div>
        </div>
        <div class="flex md:flex-row flex-col justify-between w-full">
          <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-3.5">
              <div
                class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"
              ></div>
              <div
                class="w-1/2 h-[24px] bg-gray-300 rounded-4xl animate-pulse"
              ></div>
            </div>
            <div class="flex flex-col gap-2">
              <div
                class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"
              ></div>
              <div
                class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"
              ></div>
              <div
                class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"
              ></div>
            </div>
            <div class="flex flex-col gap-2">
              <div
                class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"
              ></div>
              <div
                class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"
              ></div>
              <div
                class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"
              ></div>
            </div>
            <div class="flex gap-2.5">
              <div
                class="w-[118px] h-[51px] bg-gray-300 rounded animate-pulse"
              ></div>
              <div
                class="w-[118px] h-[51px] bg-gray-300 rounded animate-pulse"
              ></div>
            </div>
          </div>
          <div class="hidden md:flex -z-1">
            <div
              class="size-[300px] bg-gray-300 rounded-4xl animate-pulse"
            ></div>
          </div>
          <div
            class="flex md:flex-col md:justify-between justify-center items-center text-center gap-5 mt-3 mr-5"
          >
            <div class="flex flex-col gap-2">
              <div
                class="w-[100px] h-[24px] bg-gray-300 rounded-4xl animate-pulse"
              ></div>
              <div
                class="w-[100px] h-[24px] bg-gray-300 rounded-4xl animate-pulse"
              ></div>
            </div>
            <div class="flex flex-col gap-2">
              <div
                class="w-[100px] h-[24px] bg-gray-300 rounded-4xl animate-pulse"
              ></div>
              <div
                class="w-[100px] h-[24px] bg-gray-300 rounded-4xl animate-pulse"
              ></div>
            </div>
            <div class="flex flex-col gap-2">
              <div
                class="w-[100px] h-[24px] bg-gray-300 rounded-4xl animate-pulse"
              ></div>
              <div
                class="w-[100px] h-[24px] bg-gray-300 rounded-4xl animate-pulse"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div
      class="max-w-[1200px] text-dark mx-auto px-3 my-[25px] pt-2.5 flex justify-between w-full gap-[20px]"
    >
      <div class="flex flex-col md:flex-row gap-5">
        <!-- start slider mobile -->
        <div class="w-[calc(100vw-50px)] md:hidden sm:h-[40vh]">
          <swiper-container
            class="h-full swiper-container mt-12 pb-[50px]"
            :loop="true"
            :pagination="true"
            :slides-per-view="1"
            :space-between="0"
          >
            <swiper-slide
              v-for="slide in slides"
              :key="`slide-basic-${slide.id}`"
              class="swiper-slide rounded-2xl h-full"
            >
              <img
                :src="slide.image"
                alt=""
                class="w-full object-cover rounded-2xl overflow-hidden"
              />
            </swiper-slide>
          </swiper-container>
        </div>
        <!-- end slider mobile -->
        <div class="flex flex-col gap-5 grow">
          <div>
            <h1 class="sm:text-[33px] text-2xl font-medium">کلینیک زیبایی و لاغری تن ساز</h1>
            <p class="text-primary sm:text-[17px] text-sm font-medium">
              تندرستی، سلامتی، زیبایی
            </p>
          </div>
          <p class="text-justify sm:text-base text-sm">
            کلینیک زیبایی و لاغری تن‌ساز، همراه همیشگی شما برای رسیدن به زیبایی
            و اندام ایده‌آل، مفتخر است به‌عنوان مجهزترین و تخصصی‌ترین کلینیک
            زیبایی و لاغری در جنوب کشور، در کنار شما باشد.
          </p>
          <p class="text-justify sm:text-base text-sm">
            با بهره‌گیری از پیشرفته‌ترین دستگاه‌های روز دنیا و تیمی از پزشکان
            مجرب و متخصص، کلینیک تن‌ساز تجربه‌ای بی‌نظیر از خدمات زیبایی،
            جوان‌سازی و تناسب اندام را به شما اراِئه خواهد داد.
          </p>
          <div class="flex gap-2.5">
            <NuxtLink
              to="/contact-us"
              class="text-white sm:text-base text-sm bg-primary focus:outline-none focus:ring-primary shadow-lg shadow-primary/50  rounded-lg py-2.5 sm:py-[18px] sm:px-[25px] px-5 flex justify-center items-center max-h-[51px]"
            >
              تماس با ما</NuxtLink
            >
            <NuxtLink
              to="/about-us"
              class="bg-transparent sm:text-base text-sm hover:bg-primary text-primary font-semibold hover:text-white hover:shadow-lg transition-all duration-300 hover:shadow-primary/50 py-2.5 sm:py-[18px] sm:px-[25px] px-5 flex justify-center items-center max-h-[51px] border border-primary hover:border-transparent rounded"
            >
              معرفی مجموعه
            </NuxtLink>
          </div>
        </div>
        <!-- start slider desktop -->
        <div
          class="hidden md:flex w-full min-[852px]:max-w-md max-w-[350px]"
        >
          <swiper-container
            class="h-full w-full swiper-container"
            :loop="true"
            :pagination="{ clickable: true }"
            :slides-per-view="1"
            :space-between="0"
          >
            <swiper-slide
              v-for="slide in slides"
              :key="`slide-basic-${slide.id}`"
              class="swiper-slide w-full rounded-2xl h-full -z-10"
            >
              <img
                :src="slide.image"
                alt=""
                class="w-full object-cover rounded-2xl -z-1"
              />
            </swiper-slide>
          </swiper-container>
        </div>
        <!-- end slider desktop -->
        <div
          class="flex md:flex-col md:justify-between justify-center items-center text-center gap-5 grow min-w-[110px] mr-5"
        >
          <div>
            <span class="text-primary sm:text-[28px] text-2xl font-semibold leading-8"
              >3+</span
            >
            <p>سال فعالیت</p>
          </div>
          <div>
            <span class="text-primary sm:text-[28px] text-2xl font-semibold leading-8"
              >2000+</span
            >
            <p>مشتری</p>
          </div>
          <div>
            <span class="text-primary sm:text-[28px] text-2xl font-semibold leading-8"
              >6+</span
            >
            <p>خدمات</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
