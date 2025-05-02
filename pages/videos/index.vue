<script setup>
import axios from "axios";
import { useLoadingState } from "@/store/loadingState";

const loadingState = useLoadingState();
const videos = ref([]);
const categories = ref([]);

const route = useRoute()

const query = computed(() => route.query.category)

watch(query , () => {
  getVideos()
})

const getVideos = async () => {
  loadingState.setLoading(true);
  try {
    const data = await axios.get(`/categories/${route.query.category ? route.query.category : '1'}/videos`);
    const categoriesData = await axios.get("/categories?isactive=1");
    if (data.status == 200 || categoriesData.status == 200) {
      loadingState.setLoading(false);
    }
    categories.value = categoriesData.data.data;

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
  <LoadingComponent v-show="loadingState.isLoading" />

  <section class="flex min-h-screen" v-show="!loadingState.isLoading">
    <Head>
      <Title>تن ساز | ویدیوهای تن ساز</Title>
      <!-- <Link rel="canonical" :href="config.public.websiteURL + decodeURI(route.fullPath)" /> -->
      <Meta name="description" content="کلینیک زیبایی و لاغری تن ساز" />
      <Meta property="og:description" content="کلینیک زیبایی و لاغری تن ساز" />
      <Meta
        property="og:image"
        content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png"
      />
      <Meta
        property="og:image:secure_url"
        content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png"
      />
      <Meta property="og:image:width" content="400" />
      <Meta property="og:image:height" content="300" />
      <Meta property="og:image:alt" content="تن ساز | ویدیوهای تن ساز" />
      <Meta
        property="og:url"
        content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png"
      />
    </Head>
    <VideosSidebarComponent class="sticky top-10" :list="categories" />
    <div class="container max-w-[1240px] mx-auto bg-white text-gray-800 rtl">
      <div class="overflow-x-auto max-md:mt-16 scrollbar-hide md:hidden block">
        <ul class="flex items-center px-2 py-1 min-w-max">
          <nuxt-link
            v-for="category in categories"
            :key="category.id"
            :to="`/videos?category=${category?.id}`"
            class="whitespace-nowrap px-3 py-1.5 text-xs font-medium hover:bg-gray-100 rounded-md transition-colors"
            >{{ category.name }}</nuxt-link
          >
        </ul>
      </div>
      <main class="flex flex-row-reverse">
        <div class="flex-1 p-5">
          <h1 class="font-bold text-lg mb-3">ویدیوهای تن ساز</h1>
          <div v-if="videos.length"
            class="grid grid-cols-1 min-[370px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <VideosCardComponent
              v-for="video in videos"
              :key="video.id"
              :video="video"
            />
          </div>
          <div class="flex flex-col items-center justify-center h-100 gap-10" v-else>
            <Icon name="lucide:search-x" size="60px"  style="color: #333333" />
            ویدیویی یافت نشد
          </div>
        </div>
      </main>
    </div>
  </section>
</template>
