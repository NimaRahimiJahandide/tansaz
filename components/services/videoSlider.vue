<script setup>
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/vue";

defineProps({
  data: Array,
});
</script>

<template>
  <div class="relative">
    <div
      class="absolute top-[16px] right-[16px] flex items-center gap-[16px] z-[9]"
    >
      <div
        class="size-[40px] backdrop-blur-sm bg-[#2E2E2E80] flex items-center justify-center rounded-[50px]"
      >
        <Icon name="ic:baseline-share" class="size-[22px] text-[#ffffff]" />
      </div>
      <div
        class="h-[40px] w-[84px] gap-[8px] backdrop-blur-sm bg-[#2E2E2E80] flex items-center justify-center rounded-[50px]"
      >
        <Icon name="icon-park-solid:like" class="size-[22px] text-[#ffffff]" />
        <p class="text-[16px] font-semibold text-[#ffffff]">324</p>
      </div>
    </div>
    <Swiper :slides-per-view="1" :space-between="'10px'" :loop="true">
      <SwiperSlide v-for="slide in data" :key="slide">
        <div class="h-[780px] w-full">
          <img :src="slide" alt="" class="h-[780px] w-full" />
        </div>
      </SwiperSlide>
    </Swiper>

    <div
      class="absolute bottom-[16px] left-[50%] translate-x-[-50%] p-[12px] bg-[#2E2E2E80] rounded-[22px] flex flex-col items-center gap-[16px] z-[9]"
      style="width: calc(100% - 32px)"
    >
      <div class="flex justify-between items-center w-full">
        <div
          class="flex items-center justify-center w-[36px] h-[60px] rounded-[12px] bg-[#ffffff]"
        >
          <Icon
            name="fluent:ios-arrow-right-24-filled"
            class="min-w-[34px] text-[#2E2E2E]"
          />
        </div>

        <img
          src="/images/services2.png"
          alt=""
          class="h-[60px] w-[116px] object-cover rounded-[12px]"
        />

        <div
          class="flex items-center justify-center w-[36px] h-[60px] rounded-[12px] bg-[#ffffff]"
        >
          <Icon
            name="fluent:ios-arrow-right-24-filled"
            class="min-w-[34px] text-[#2E2E2E] rotate-180"
          />
        </div>
      </div>

      <div class="flex flex-col gap-[4px] items-center">
        <p class="text-[20px] font-bold leading-[28px] text-[#ffffff]">
          عملکرد دستگاه الکساندرا (کندلا)
        </p>
        <p class="text-[16px] font-semibold leading-[28px] text-[#ffffff]">
          زمان پخش ویدئو: 2 دقیقه و 3 ثانیه
        </p>
      </div>
    </div>
  </div>
</template>
