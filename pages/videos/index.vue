<script setup>
import axios from "axios";

const videos = ref([]);
const categories = ref([]);

const getVideos = async () => {
  try {
    const data = await axios.get("/categories/1/videos");
    const categoriesData = await axios.get("/categories?isactive=1");

    categories.value = categoriesData.data.data

    videos.value = data.data.data;
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  getVideos();
});
</script>

<template>
  <section class="flex min-h-screen">
    <VideosSidebarComponent class="sticky top-10" :list="categories"/>
    <div class="container max-w-[1200px] mx-auto bg-white text-gray-800 rtl">
      <div class="overflow-x-auto max-md:mt-16 scrollbar-hide md:hidden block">
        <ul class="flex items-center px-2 py-1 min-w-max">
          <a v-for="category in categories" :key="category.id"
            href="#"
            class="whitespace-nowrap px-3 py-1.5 text-xs font-medium hover:bg-gray-100 rounded-md transition-colors"
            >{{category.name}}</a
          >
        </ul>
      </div>
      <main class="flex flex-row-reverse">
        <div class="flex-1 p-5">
          <h1 class="font-bold text-lg mb-3">ویدیوهای تن ساز</h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <VideosCardComponent
              v-for="video in videos"
              :key="video.id"
              :video="video"
            />
          </div>
        </div>
      </main>
    </div>
  </section>
</template>
