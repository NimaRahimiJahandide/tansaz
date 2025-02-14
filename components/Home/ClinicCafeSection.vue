<script setup lang="ts">
const slides = ref([
  {
    id: 0,
    image: "/images/cafe1.webp",
    text: 'قهوه ربوستا'
  },
  {
    id: 1,
    image: "/images/cafe2.jpg",
    text: 'قهوه بدون شکر'
  },
  {
    id: 2,
    image: "/images/cafe1.webp",
    text: 'قهوه ربوستا'
  },
  {
    id: 3,
    image: "/images/cafe2.jpg",
    text: 'قهوه بدون شکر'
  },
  {
    id: 4,
    image: "/images/cafe1.webp",
    text: 'قهوه ربوستا'
  },
  {
    id: 5,
    image: "/images/cafe2.jpg",
    text: 'قهوه بدون شکر'
  },
  {
    id: 6,
    image: "/images/cafe1.webp",
    text: 'قهوه ربوستا'
  },
  {
    id: 7,
    image: "/images/cafe2.jpg",
    text: 'قهوه بدون شکر'
  },
]);
</script>

<template>
  <div class="max-w-[1200px] mx-auto px-3 text-dark mt-[75px]">
    <div class="flex items-center justify-between">
      <h3 class="text-[30px] font-light">
        کافه <span class="text-primary">کلینیک</span>
      </h3>
      <NuxtLink
        class="flex w-fit gap-[5px] justify-center items-center bg-primary text-white px-[24px] py-[12px] whitespace-nowrap rounded-[10px]"
        to="#"
      >
        <span>مشاهده همه</span>
        <Icon name="mingcute:arrow-left-fill" size="20px" style="color: #fff" />
      </NuxtLink>
    </div>
    <div>
      <swiper-container
        class="h-full swiper-container mt-12"
        :loop="true"
        :pagination="true"
        :slides-per-view="4"
        :space-between="30"
        :breakpoints="{
          0: {
            slidesPerView: 2پ
            ,
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
          <div
            class="rounded-3xl bg-white p-4 shadow-[0_0px_10px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1"
          >
            <div class="relative h-[160px] w-full overflow rounded-2xl">
              <img
                :src="slide.image"
                alt="Robusta Coffee"
                class="h-full w-full object-cover rounded-3xl"
              />
            </div>
            <div class="mt-3 text-center flex flex-col">
              <h3 class="text-lg font-bold flex items-center justify-center text-center">قهوه روبوستا</h3>
              <div class="mt-2 flex justify-end">
                <NuxtLink
                  to="#"
                  class="rounded-full flex justify-center items-center size-10 bg-primary p-2 text-white"
                >
                  <Icon
                    name="iconamoon:shopping-card-fill"
                    size="20px"
                    style="color: #fff"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>
