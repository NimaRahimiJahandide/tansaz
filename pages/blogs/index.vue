<script setup lang="ts">
import { useLoadingState } from "@/store/loadingState";
import axios from "axios";
const loadingState = useLoadingState();

const newBlogs = ref([]);

const blogs = ref([]);

const getBlogs = async () => {
loadingState.setLoading(true);
 await axios.get(`/categories/1/posts`)
  .then(response=>{
    loadingState.setLoading(false);
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
  <div class="max-w-[1240px] text-dark mx-auto px-5 mt-[75px]">
    <Head>
      <Title>تن ساز | مقالات</Title>
      <!-- <Link rel="canonical" :href="config.public.websiteURL + decodeURI(route.fullPath)" /> -->
      <Meta name="description" content="کلینیک زیبایی و لاغری تن ساز" />
      <Meta property="og:description" content="کلینیک زیبایی و لاغری تن ساز" />
      <Meta property="og:image" content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
      <Meta property="og:image:secure_url" content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
      <Meta property="og:image:width" content="400" />
      <Meta property="og:image:height" content="300" />
      <Meta property="og:image:alt" content="تن ساز | مقالات" />
      <Meta property="og:url" content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
    </Head>
    <!-- <div v-if="loadingState.isLoading">
      <div class="flex md:flex-row flex-col gap-8">
        <div class="md:w-3/4 grid md:grid-cols-3 gap-8">
          <div
            v-for="blog in blogs"
            :key="blog.id"
            class="rounded-3xl p-4 animate-pulse h-[400px] bg-gray-300"
          >
          </div>
        </div>
        <div class="md:w-1/4">
          <div class="flex items-start gap-[20px]">
            <div class="size-[30px] bg-gray-300 rounded animate-pulse"></div>
            <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
          </div>
          <div class="w-[80px] mt-2 h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
          <div class="flex items-start gap-[20px] mt-[14px]">
            <div class="size-[30px] bg-gray-300 rounded animate-pulse"></div>
            <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
          </div>
          <div class="w-[80px] mt-2 h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
          <div class="w-full mt-2 h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
          <div class="w-full mt-2 h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
          <div class="w-full mt-2 h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
  
        </div>
      </div>
    </div> -->
    <LoadingComponent v-show="loadingState.isLoading"/>
    <div v-show="!loadingState.isLoading">
      <div class="flex lg:flex-row flex-col gap-8 mb-28">
        <div
          class="lg:w-3/4 w-full grid min-[378px]:grid-cols-2 md:grid-cols-3 lg:grid-col-3 gap-8 justify-items-center"
        >
          <BlogCardComponent
            v-for="blog in blogs"
            :key="blog.id"
            :title="blog.title"
            :route="`/blogs/${blog.id}/${blog.slug}`"
            :image="blog.image"
          />
        </div>
        <div class="lg:w-1/4 w-full">
          <div class="flex items-start gap-[20px]">
            <span
              class="bg-primary flex justify-center items-center rounded-[6px] size-[30px]"
            >
              <Icon name="lets-icons:insta" size="17px" style="color: #fff" />
            </span>
            <a target="_blank" href="https://www.instagram.com/tansaz.clinic?igsh=a3V5Z2lucTlleXZr" class="flex flex-col gap-1">
              <p class="font-semibold">صفحه اینستاگرام</p>
              <strong class="text-neutral-400 font-normal"
                >tansaz.clinic</strong
              >
            </a>
          </div>

          <div class="flex items-start gap-[20px] mt-[14px]">
            <span
              class="bg-primary flex justify-center items-center rounded-[6px] min-w-[30px] h-[30px]"
            >
              <Icon name="mdi:location" size="17px" style="color: #fff" />
            </span>
            <nuxt-link to="/about-us" class="flex flex-col gap-1">
              <p class="font-semibold">آدرس کلینیک</p>
              <strong class="text-neutral-400 text-[14px] font-normal"
                >شیراز، معالی آباد، نبش دنا، ساختمان هرم نور، طبقه 5 و 6</strong
              >
            </nuxt-link>
          </div>

          <article class="mb-8 cursor-pointer group mt-[14px]">
            <div class="font-semibold flex items-center gap-2">
              <span>دسته بندی</span>
            </div>
            <div class="mt-4"><div>مقالات</div></div>
          </article>
          <article class="mb-8 cursor-pointer group mt-[14px]">
            <div class="font-semibold flex items-center gap-2">
              <span>آخرین مطالب</span>
            </div>
            <div class="mt-4 space-y-4">
              <NuxtLink
                v-for="blog in blogs"
                :to="`/blogs/${blog.id}`"
                :key="blog.id"
                class="flex gap-2 items-center"
              >
                <img
                  :src="blog.image"
                  class="rounded-lg size-[50px] object-contain"
                  :alt="blog.title"
                />
                <div class="text-sm text-justify">
                  {{ blog.title }}
                </div>
              </NuxtLink>
            </div>
          </article>
          <article class="mb-8 cursor-pointer group">
            <div class="font-semibold flex items-center gap-2">
              <span>خدمات ما</span>
            </div>
            <div class="mt-4 flex flex-col gap-2">
              <NuxtLink to="/services/1/beauty">زیبایی</NuxtLink>
              <NuxtLink to="/services/21/slimming-services">لاغری</NuxtLink>
              <NuxtLink to="/services/6/hyphotherapy">هایفوتراپی</NuxtLink>
              <NuxtLink to="/services/7/laser-hair-removal">لیزررفع مو های زائد</NuxtLink>
              <NuxtLink to="/services/3/surgery">اقدامات جراحی</NuxtLink>
              <NuxtLink to="/services/17/facial">فشیال تخصصی</NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
