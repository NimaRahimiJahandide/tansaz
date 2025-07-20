<script setup>
import { useStartWebsite } from "@/store/initWebsite";
const startWebsite = useStartWebsite();
const router = useRouter();

const goBack = () => {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push('/');
  }
};

const blogs = ref([
  {
    id: 0,
    image: "/images/blog1.png",
    title: "مراقبت پس از درمان ریزش مو",
    duration: "2 دقیقه",
    date: "1404/01/04",
    liked: false,
  },
  {
    id: 1,
    image: "/images/blog1.png",
    title: "تغذیه مناسب برای رشد مو",
    duration: "3 دقیقه",
    date: "1404/01/10",
    liked: false,
  },
  {
    id: 2,
    image: "/images/blog1.png",
    title: "راهکارهای جلوگیری از ریزش مو",
    duration: "4 دقیقه",
    date: "1404/01/18",
    liked: false,
  },
]);

onMounted(() => {
  startWebsite.setImageClicked(true);
});

const toggleLike = (blogId) => {
  const blog = blogs.value.find(b => b.id === blogId);
  if (blog) {
    blog.liked = !blog.liked;
  }
};

const categoryList = ["همه", "علاقه مندی ها", "خدمات لیزر", "خدمات زیبایی"];
const selectedCategory = ref(0);

const goToBlog = (blogId) => {
  router.push(`/blogs/${blogId}`);
};
</script>


<template>
  <div class="flex flex-col items-center bg-[#EFEFEF] pt-[84px]">
    <section class="w-full px-[16px]">
      <div class="flex items-center justify-between w-full">
        <header class="">
          <h1 class="text-xl font-bold">
            <span class="text-brand">مقالات</span> کاربردی
          </h1>
        </header>

        <img @click="goBack" src="/icons/left-arrow.svg" alt="" />
      </div>

      <div class="flex items-center h-[46px] bg-[#ffffff] rounded-[14px]  mt-[16px] w-full px-[16px]">
        <img src="/icons/search-icon.svg" alt="" class="size-[20px]" />
        <input type="text" name="" id="" placeholder="سوال  مورد نظرتان را جستجو کنید..."
          class="p-[8px] w-full h-full focus:outline-0 placeholder-[#2E2E2E80]" />
      </div>
    </section>

    <section class="flex flex-col gap-[4px] w-full mt-[10px] pr-[16px]">
      <div class="w-full">
        <transition name="blog-fade">
          <div class="mt-4 flex items-center gap-[10px] overflow-x-scroll custom-scroll">
            <div class="px-[16px] py-[8px] rounded-[30px] cursor-pointer"
              :class="selectedCategory == i ? 'bg-[#ED1C24]' : 'bg-[#ffffff] '" v-for="(x, i) in categoryList"
              @click="selectedCategory = i">
              <p class="text-[14px] text-nowrap" :class="selectedCategory == i ? 'text-[#ffffff]' : 'text-[#2E2E2E] '
                ">
                {{ x }}
              </p>
            </div>
          </div>
        </transition>
      </div>
    </section>

    <section class="bg-[#EFEFEF] pb-[30px] pt-[18px] w-full px-[16px] flex flex-col gap-4">
      <h2 class="text-lg font-semibold">
        <span class="text-brand">110</span> مقاله وجود دارد
      </h2>
      <article class="rounded-2xl overflow-hidden relative" v-for="blog in blogs" :key="blog"  @click="goToBlog(blog.id)">
        <!-- Heart image -->
        <span class="absolute right-4 top-3 cursor-pointer z-10" @click.stop="toggleLike(blog.id)">
          <img v-if="blog.liked" src="/icons/Heart-white.svg" alt="Heart-white" />
          <img v-else src="/icons/Heart.svg" alt="Heart" />
        </span>

        <!-- Image -->
        <img :src="blog.image" :alt="blog.title" class="w-full h-80 object-cover" />

        <!-- Overlay and Text -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#15151596] to-transparent via-[20.35%] from-[1.3%] flex flex-col justify-end p-4">
          <h3 class="text-lg font-bold text-white leading-6 mb-5">
            {{ blog.title }}
          </h3>
          <p class="flex text-xs font-medium text-white justify-between">
            <span class="mr-2">زمان مطالعه: {{ blog.duration }}</span>
            <span>تاریخ نشر: {{ blog.date }}</span>
          </p>
        </div>
      </article>
      <!-- Button to navigate to FAQ Category Page -->
      <button class="mt-8 w-full bg-brand text-center rounded-full h-[48px]">
        <NuxtLink to="#" class="bg-brand text-white font-semibold leading-[26px] rounded-full w-full">مشاهده بیشتر
        </NuxtLink>
      </button>
    </section>
  </div>
</template>

<style>
.custom-scroll::-webkit-scrollbar {
  width: 0px;
}

.blog-fade-enter-active {
  transition: all 0.3s ease;
}

.blog-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.blog-fade-enter-from,
.blog-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
