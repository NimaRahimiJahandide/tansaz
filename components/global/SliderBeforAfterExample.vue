<script setup lang="ts">
defineProps({
    title: String,
    description: String,
    slides: Object
})
</script>

<template>
  <div class="mt-[75px] max-w-[1200px] mx-auto px-3">
    <div class="bg-dark text-white rounded-3xl p-[45px]">
      <h3 class="text-[30px] font-light">
        نمونه های <span class="text-primary">قبل</span> و بعد
      </h3>
      <p class="font-light mb-3.5">{{description}}</p>
      <div>
        <swiper-container
          class="h-full swiper-container mt-12 pb-[50px]"
          :loop="true"
          :navigation="true"
          :slides-per-view="4"
          :space-between="0"
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
            class="swiper-slide h-full"
          >
            <img
              :src="slide.image"
              alt=""
              class="w-full bg-primary object-cover overflow-hidden"
            />
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </div>
</template>
