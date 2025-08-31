<script setup>
import { ref } from 'vue'
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/vue"

const props = defineProps({
  data: Array,
})

const swiperRef = ref(null)
const currentSlideIndex = ref(0)

const onSlideChange = (swiper) => {
  currentSlideIndex.value = swiper.realIndex
}

const goToPrevSlide = () => {
  if (swiperRef.value) {
    swiperRef.value.slidePrev()
  }
}

const goToNextSlide = () => {
  if (swiperRef.value) {
    swiperRef.value.slideNext()
  }
}
</script>

<template>
  <div class="relative">
    <!-- Share and Like buttons -->
    <div class="absolute top-[16px] right-[16px] flex items-center gap-[16px] z-[20]">
      <div class="size-[40px] backdrop-blur-sm bg-[#2E2E2E80] flex items-center justify-center rounded-[50px] cursor-pointer hover:bg-[#2E2E2E90] transition-all">
        <Icon name="ic:baseline-share" class="size-[22px] text-[#ffffff]" />
      </div>
      <div class="h-[40px] w-[84px] gap-[8px] backdrop-blur-sm bg-[#2E2E2E80] flex items-center justify-center rounded-[50px]">
        <Icon name="icon-park-solid:like" class="size-[22px] text-[#ffffff]" />
        <p class="text-[16px] font-semibold text-[#ffffff]">
          {{ data[currentSlideIndex]?.likes || 0 }}
        </p>
      </div>
    </div>

    <!-- Swiper Container -->
    <Swiper 
      :slides-per-view="1" 
      :space-between="10" 
      :loop="true"
      @swiper="swiperRef = $event"
      @slide-change="onSlideChange"
      class="video-swiper"
    >
      <SwiperSlide v-for="(slide, index) in data" :key="slide.id">
        <div class="h-[780px] w-full relative">
          <!-- Background Image -->
          <!-- <img 
            :src="slide.main_image" 
            :alt="slide.name"
            class="h-[780px] w-full object-cover"
          /> -->
          
          <!-- Aparat Video Embed -->
          <div class="absolute inset-0 w-full h-full">
            <div class="h_iframe-aparat_embed_frame h-full w-full">
              <span style="display: block; padding-top: 57%"></span>
              <iframe
                :src="`https://www.aparat.com/video/video/embed/videohash/${slide.videohash}/vt/frame?muted=true`"
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                class="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Bottom Control Panel -->
    <div
      class="absolute bottom-[16px] left-[50%] translate-x-[-50%] p-[12px] bg-[#2E2E2E80] backdrop-blur-sm rounded-[22px] flex flex-col items-center gap-[16px] z-[15]"
      style="width: calc(100% - 32px)"
    >
      <!-- Navigation and Thumbnail -->
      <div class="flex justify-between items-center w-full">
        <!-- Previous Button -->
        <button
          @click="goToPrevSlide"
          class="flex items-center justify-center w-[36px] h-[60px] rounded-[12px] bg-[#ffffff] hover:bg-[#f0f0f0] transition-all cursor-pointer"
        >
          <Icon
            name="fluent:ios-arrow-right-24-filled"
            class="min-w-[34px] text-[#2E2E2E]"
          />
        </button>

        <!-- Current Video Thumbnail -->
        <div class="flex-1 flex justify-center">
          <img
            :src="data[currentSlideIndex]?.thumb_image || data[currentSlideIndex]?.main_image"
            :alt="data[currentSlideIndex]?.name"
            class="h-[60px] w-[116px] object-cover rounded-[12px]"
          />
        </div>

        <!-- Next Button -->
        <button
          @click="goToNextSlide"
          class="flex items-center justify-center w-[36px] h-[60px] rounded-[12px] bg-[#ffffff] hover:bg-[#f0f0f0] transition-all cursor-pointer"
        >
          <Icon
            name="fluent:ios-arrow-left-24-filled"
            class="min-w-[34px] text-[#2E2E2E]"
          />
        </button>
      </div>

      <!-- Video Information -->
      <div class="flex flex-col gap-[4px] items-center text-center">
        <p class="text-[20px] font-bold leading-[28px] text-[#ffffff] max-w-full truncate px-2">
          {{ data[currentSlideIndex]?.name }}
        </p>
        <p class="text-[16px] font-semibold leading-[28px] text-[#ffffff]">
          زمان پخش ویدئو: {{ data[currentSlideIndex]?.duration }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.video-swiper {
  width: 100%;
  height: 780px;
}

/* Custom styling for Aparat embedded iframe */
.h_iframe-aparat_embed_frame {
  position: relative;
  width: 100%;
  height: 100%;
}

.h_iframe-aparat_embed_frame iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .video-swiper {
    height: 60vh;
    min-height: 400px;
  }
  
  .h-\[780px\] {
    height: 60vh !important;
    min-height: 400px !important;
  }
}

@media (max-width: 480px) {
  .text-\[20px\] {
    font-size: 18px !important;
  }
  
  .text-\[16px\] {
    font-size: 14px !important;
  }
  
  .h-\[60px\] {
    height: 50px !important;
  }
  
  .w-\[116px\] {
    width: 100px !important;
  }
  
  .w-\[36px\] {
    width: 32px !important;
  }
}
</style>