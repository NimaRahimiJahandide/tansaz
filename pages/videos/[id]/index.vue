<script setup>
import axios from "axios";
import { useLoadingState } from "@/store/loadingState";
const loadingState = useLoadingState();

const route = useRoute();

const video = ref({});
const videos = ref({});
const categories = ref([]);
const srcValue= ref('')

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

const getVideo = async () => {
  loadingState.setLoading(true);

  try {
    const data = await axios.get(`/videos/${route.params.id}`);

    const categoriesData = await axios.get("/categories?isactive=1");

    categories.value = categoriesData.data.data;
    video.value = data.data.data;
    if(data.status == 200 || categoriesData.status == 200){
      loadingState.setLoading(false);
    }
    const divCode = video.value.script
    srcValue.value = divCode.match(/src="https:\/\/www\.aparat\.com\/embed\/([^?]+)/)[1];    

  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  getVideos();
  getVideo();
});
</script>

<template>
  <LoadingComponent v-show="loadingState.isLoading"/>

  <section class="flex min-h-screen" v-show="!loadingState.isLoading">
    <Head>
      <Title>تن ساز | {{video.title}}</Title>
      <!-- <Link rel="canonical" :href="config.public.websiteURL + decodeURI(route.fullPath)" /> -->
      <Meta name="description" content="کلینیک زیبایی و لاغری تن ساز" />
      <Meta property="og:description" content="کلینیک زیبایی و لاغری تن ساز" />
      <Meta property="og:image" content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
      <Meta property="og:image:secure_url" content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
      <Meta property="og:image:width" content="400" />
      <Meta property="og:image:height" content="300" />
      <Meta property="og:image:alt" content="تن ساز | ویدیو ها" />
      <Meta property="og:url" content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
    </Head>
    <VideosSidebarComponent class="sticky top-14" :list="categories" />
    <div
      class="container max-w-[1240px] mx-auto bg-white text-gray-800 rtl mb-28"
    >
      <div class="overflow-x-auto max-md:mt-16 scrollbar-hide md:hidden block">
        <ul class="flex items-center px-2 py-1 min-w-max">
          <a
            v-for="category in categories"
            :key="category.id"
            href="#"
            class="whitespace-nowrap px-3 py-1.5 text-xs font-medium hover:bg-gray-100 rounded-md transition-colors"
            >{{ category.name }}</a
          >
        </ul>
      </div>
      <main class="flex flex-row-reverse">
        <div class="flex-1 p-5">
         <div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe :src="`https://www.aparat.com/video/video/embed/videohash/${srcValue}/vt/frame`"  allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>
          <div class="flex flex-col gap-3 pt-5 pb-20">
            <h1 class="text-[24px] font-bold">{{ video?.title }}</h1>
            <p>{{ video.body }}</p>
          </div>
          <h2 class="font-bold text-lg mb-3">ویدیوهای مشابه</h2>
          <div class="grid grid-cols-1 min-[370px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <VideosCardComponent
              v-for="video in videos"
              :key="video.id"
              :video="video"
            />
          </div>
        </div>
      </main>
      <div class="max-w-[1240px] px-5 pt-10">
        <BlogCommentSection :is-video="true" />
      </div>
    </div>
  </section>
</template>
<style>.h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style>