<script setup lang="ts">
import axios from "axios";

const blogs = ref([]);

const getBlogs = async () => {
 await axios.get(`/categories/1/posts`)
  .then(response=>{
    blogs.value = response.data.data;
  }).catch(err=>{
    console.log(err);
  })
};

onMounted(() => {
  getBlogs();
});
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
          v-for="blog in blogs"
          :key="blog.id"
          class="swiper-slide pt-2 px-2 w-10"
        >
          <BlogCardComponent
            :title="blog.title"
            :image="blog.image"
            :route="`/blogs/${blog.id}`"
          />
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<style>

</style>
