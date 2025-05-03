<script setup lang="ts">
defineProps({
  blogs:Object,
})
</script>

<template>
  <div class="max-w-[1240px] mx-auto px-5 text-dark mt-[75px] md:mb-28">
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
        :loop="false"
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
          v-for="blog in blogs"
          :key="blog.id"
          class="swiper-slide pt-2 px-2"
        >
          <BlogCardComponent :title="blog.title" :image="blog.image" :route="`/blogs/${blog.id}`" />
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>
