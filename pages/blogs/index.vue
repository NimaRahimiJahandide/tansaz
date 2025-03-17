<script setup lang="ts">
import { useLoadingState } from "@/store/loadingState";
const loadingState = useLoadingState();

setTimeout(() => {
  loadingState.setLoading(false);
}, 2000);

const blogs = ref([
  {
    id: 0,
    image: "/images/photo_2024-08-21_22-15-45-682x1024.jpg",
    text: "جراحی بوکال فت، ساب سیژن و پیوند چربی",
  },
  {
    id: 1,
    image: "/images/photo_2024-08-21_22-15-49-682x1024.jpg",
    text: "تزریقات زیبایی بوتاکس، ژل و فیلر و هایفوتراپی",
  },
  {
    id: 2,
    image: "/images/photo_2024-08-21_22-16-13-682x1024.jpg",
    text: " استفاده از معتبرترین برند مواد برندهای صنعت زیبایی و جراحی",
  },
  {
    id: 3,
    image: "/images/photo_2024-08-21_22-15-54-682x1024.jpg",
    text: "از پرفروش ترین برند مواد برندهای صنعت زیبایی",
  },
]);

const newBlogs = ref([
  {
    id: 0,
    image: "/images/photo_2024-08-21_22-15-45-682x1024.jpg",
    text: "جراحی بوکال فت، ساب سیژن و پیوند چربی",
  },
  {
    id: 1,
    image: "/images/photo_2024-08-21_22-15-49-682x1024.jpg",
    text: "تزریقات زیبایی بوتاکس، ژل و فیلر و هایفوتراپی",
  },
  {
    id: 2,
    image: "/images/photo_2024-08-21_22-16-13-682x1024.jpg",
    text: " استفاده از معتبرترین برند مواد برندهای صنعت زیبایی و جراحی",
  },
  {
    id: 3,
    image: "/images/photo_2024-08-21_22-15-54-682x1024.jpg",
    text: "از پرفروش ترین برند مواد برندهای صنعت زیبایی",
  },
]);
</script>

<template>
  <div class="max-w-[1200px] text-dark mx-auto px-5 mt-[75px]">
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
    <div>
      <div class="flex lg:flex-row flex-col gap-8 mb-28">
        <div
          class="lg:w-3/4 w-full grid min-[378px]:grid-cols-2 md:grid-cols-3 lg:grid-col-3 gap-8 justify-items-center"
        >
          <BlogCardComponent
            v-for="blog in blogs"
            :key="blog.id"
            :title="blog.text"
            :route="`/blogs/${blog.id}`"
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
            <div class="flex flex-col gap-1">
              <p class="font-semibold">صفحه اینستاگرام</p>
              <strong class="text-neutral-400 font-normal"
                >tansaz.clinic</strong
              >
            </div>
          </div>

          <div class="flex items-start gap-[20px] mt-[14px]">
            <span
              class="bg-primary flex justify-center items-center rounded-[6px] min-w-[30px] h-[30px]"
            >
              <Icon name="mdi:location" size="17px" style="color: #fff" />
            </span>
            <div class="flex flex-col gap-1">
              <p class="font-semibold">آدرس کلینیک</p>
              <strong class="text-neutral-400 text-[14px] font-normal"
                >شیراز، معالی آباد، نبش دنا، ساختمان هرم نور، طبقه 5 و 6</strong
              >
            </div>
          </div>

          <article class="mb-8 cursor-pointer group mt-[14px]">
            <summary class="font-semibold flex items-center gap-2">
              <span>دسته بندی</span>
            </summary>
            <div class="mt-4"><div>مقالات</div></div>
          </article>
          <article class="mb-8 cursor-pointer group mt-[14px]">
            <summary class="font-semibold flex items-center gap-2">
              <span>آخرین مطالب</span>
            </summary>
            <div class="mt-4 space-y-4">
              <NuxtLink
                v-for="blog in newBlogs"
                :to="`/blogs/${blog.id}`"
                :key="blog.id"
                class="flex gap-2 items-center"
              >
                <img :src="blog.image" class="rounded-lg size-[50px]" alt="" />
                <div class="text-sm text-justify">
                  {{ blog.text }}
                </div>
              </NuxtLink>
            </div>
          </article>
          <article class="mb-8 cursor-pointer group">
            <summary class="font-semibold flex items-center gap-2">
              <span>خدمات ما</span>
            </summary>
            <div class="mt-4 flex flex-col gap-2">
              <div>زیبایی و لاغری</div>
              <div>کافه کلینیک</div>
              <div>اجاره تجهیزات پزشکی</div>
              <div>اعزام پزشک به منزل</div>
              <div>آکادمی و آموزش</div>
              <div>فروشگاه آنلاین</div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
