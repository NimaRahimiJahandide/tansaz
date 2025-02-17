<script setup lang="ts">
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
  <div class="max-w-[1200px] text-dark mx-auto px-3 mt-[75px]">
    <div class="font-sans bg-white p-8">
      <div class="flex md:flex-row flex-col gap-8">
        <div class="md:w-3/4 grid md:grid-cols-3 gap-8">
          <NuxtLink
            to="#"
            v-for="blog in blogs"
            :key="blog.id"
            class="rounded-3xl shadow-lg p-4 hover:scale-105 transition-transform cursor-pointer"
          >
            <img :src="blog.image" class="rounded-2xl mb-4 w-full" alt="" />
            <div class="text-center font-semibold">
              {{ blog.text }}
            </div>
          </NuxtLink>
        </div>
        <div class="md:w-1/4">
          <div class="flex items-start gap-[20px]">
            <span
              class="bg-primary flex justify-center items-center rounded-[6px] size-[30px]"
            >
              <Icon name="lets-icons:insta" size="17px" style="color: #fff" />
            </span>
            <div class="flex flex-col gap-2.5">
              <p class="font-semibold">صفحه اینستاگرام</p>
            </div>
          </div>
          <span class="text-neutral-400">tansaz.clinic</span>
          <div class="flex items-start gap-[20px] mt-[14px]">
            <span
              class="bg-primary flex justify-center items-center rounded-[6px] size-[30px]"
            >
              <Icon name="mdi:location" size="17px" style="color: #fff" />
            </span>
            <div class="flex flex-col gap-2.5">
              <p class="font-semibold">آدرس کلینیک</p>
            </div>
          </div>
          <span class="text-neutral-400 text-[14px]"
            >شیراز، معالی آباد، نبش دنا، ساختمان هرم نور، طبقه 5 و 6</span
          >
          <details class="mb-8 cursor-pointer group mt-[14px]">
            <summary class="font-semibold flex items-center gap-2">
              <span>دسته بندی</span>
              <Icon
                class="group-open:rotate-180 transition-transform"
                name="ep:arrow-down"
                size="17px"
                style="color: #000"
              />
            </summary>
            <div class="mt-4"><div>مقالات</div></div>
          </details>
          <details class="mb-8 cursor-pointer group mt-[14px]">
            <summary class="font-semibold flex items-center gap-2">
              <span>آخرین مطالب</span>
              <Icon
                class="group-open:rotate-180 transition-transform"
                name="ep:arrow-down"
                size="17px"
                style="color: #000"
              />
            </summary>
            <div class="mt-4 space-y-4">
              <NuxtLink
                to="#"
                v-for="blog in newBlogs"
                :key="blog.id"
                class="flex gap-2 items-center"
              >
                <img :src="blog.image" class="rounded-lg size-[50px]" alt="" />
                <div class="text-sm">
                  {{ blog.text }}
                </div>
              </NuxtLink>
            </div>
          </details>
          <details class="mb-8 cursor-pointer group">
            <summary class="font-semibold flex items-center gap-2">
              <span>خدمات ما</span>
              <Icon
                class="group-open:rotate-180 transition-transform"
                name="ep:arrow-down"
                size="17px"
                style="color: #000"
              />
            </summary>
            <div class="mt-4 flex flex-col gap-2">
                <div>زیبایی و لاغری</div>
                <div>کافه کلینیک</div>
                <div>اجاره تجهیزات پزشکی</div>
                <div>اعزام پزشک به منزل</div>
                <div>آکادمی و آموزش</div>
                <div>فروشگاه آنلاین</div>
        </div>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>
