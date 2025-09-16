<template>
  <div :class="!isTransparent ? 'bg-white' : ''">
    <img
      class="pt-[30px] w-full" :class="isBlogDetailPage ? 'px-4' : ''"
      :src="isBlogDetailPage ? '/images/contact-us.png' : '/images/blog-banner.png'"
      alt="blog-banner"
    />
    <h2 v-if="isBlogDetailPage" class="text-xl font-bold leading-7 text-center pb-4 pt-[30px]">
      <span class="text-brand">پربازدیدترین</span> مقالات
    </h2>
    <h2 v-else class="text-xl font-bold leading-7 text-center pb-4 pt-[30px]">
      <span class="text-brand">مقالات کاربردی</span> برای شما عزیزان
    </h2>
    <div class="container mx-auto px-4 pb-8" data-aos="fade-up" data-aos-delay="700" data-aos-once="true">
      <!-- Loading state -->
      <div v-if="pending" class="rounded-2xl overflow-hidden relative">
        <div class="w-full h-80 bg-gray-200 animate-pulse flex items-center justify-center">
          <span class="text-gray-500">در حال بارگذاری...</span>
        </div>
      </div>
      
      <!-- Error state -->
      <div v-else-if="error" class="rounded-2xl overflow-hidden relative">
        <div class="w-full h-80 bg-red-100 flex items-center justify-center">
          <span class="text-red-500">خطا در بارگذاری مقالات</span>
        </div>
      </div>
      
      <!-- Content -->
      <div v-else-if="posts.length > 0" class="rounded-2xl overflow-hidden relative">
        <transition name="slide-fade" mode="out-in">
          <div
            :key="activeIndex"
            class="relative"
            @touchstart="handleTouchStart"
            @touchend="handleTouchEnd"
          >
            <!-- Heart image -->
            <span
              class="absolute right-4 top-3 cursor-pointer z-10"
              @click="toggleLike"
            >
              <img
                v-if="isLiked"
                src="/icons/Heart-white.svg"
                alt="Heart-white"
                width="30px"
              />
              <img v-else src="/icons/Heart.svg" alt="Heart" width="30px"/>
            </span>
            <!-- Image with link -->
            <NuxtLink :to="`/blogs/${posts[activeIndex].slug}`">
              <img
                :src="posts[activeIndex].image"
                :alt="posts[activeIndex].title"
                class="w-full h-80 object-cover cursor-pointer"
              />
            </NuxtLink>

            <!-- Overlay and Text -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#15151596] to-transparent via-[20.35%] from-[1.3%] flex flex-col justify-end p-4"
            >
              <NuxtLink :to="`/blogs/${posts[activeIndex].slug}`">
                <h3 class="text-lg font-bold text-white leading-6 mb-5 cursor-pointer hover:text-brand transition-colors">
                  {{ posts[activeIndex].title }}
                </h3>
              </NuxtLink>
              <p class="flex text-xs font-medium text-white justify-between">
                <span class="mr-2"
                  >زمان مطالعه: {{ posts[activeIndex].duration }}</span
                >
                <span>تاریخ نشر: {{ posts[activeIndex].date }}</span>
              </p>
            </div>
          </div>
        </transition>
      </div>

      <!-- No posts message -->
      <div v-else class="rounded-2xl overflow-hidden relative">
        <div class="w-full h-80 bg-gray-100 flex items-center justify-center">
          <span class="text-gray-500">هیچ مقاله‌ای یافت نشد</span>
        </div>
      </div>

      <!-- pagination -->
      <div v-if="posts.length > 1" class="flex justify-between items-center mt-4">
        <!-- دکمه قبلی -->
        <button
          @click="prevSlide"
          class="bg-brand size-10 flex items-center justify-center text-white font-bold rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <!-- دایره‌های شماره صفحه -->
        <div class="flex items-center">
          <div
            v-for="(_, index) in posts"
            :key="index"
            @click="activeIndex = index"
            class="w-[10px] h-2 rounded-full mx-1 bg-[#D4D4D4] cursor-pointer transition duration-300 ease-in-out"
            :class="{ 'bg-brand w-[30px]': activeIndex === index }"
          ></div>
        </div>

        <!-- دکمه بعدی -->
        <button
          @click="nextSlide"
          class="bg-[#D4D4D4] text-[#929DAC] font-bold size-10 flex items-center justify-center rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isTransparent: Boolean,
});
import { useHomePosts } from '~/composables/home/useHomePosts'


const route = useRoute();

const isBlogDetailPage = computed(() => route.path.startsWith('/blogs/'));

// Use the composable to fetch posts
const { posts, pending, error } = useHomePosts();

const activeIndex = ref(0);

const nextSlide = () => {
  if (posts.value.length > 0) {
    activeIndex.value = (activeIndex.value + 1) % posts.value.length;
  }
};

const prevSlide = () => {
  if (posts.value.length > 0) {
    activeIndex.value =
      (activeIndex.value - 1 + posts.value.length) % posts.value.length;
  }
};

const touchStartX = ref(0);
const touchEndX = ref(0);

const handleTouchStart = (e) => {
  touchStartX.value = e.changedTouches[0].screenX;
};

const handleTouchEnd = (e) => {
  touchEndX.value = e.changedTouches[0].screenX;
  handleSwipe();
};

const handleSwipe = () => {
  const diff = touchStartX.value - touchEndX.value;
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      // کشیدن به چپ → بعدی
      prevSlide();
    } else {
      // کشیدن به راست ← قبلی
      nextSlide();
    }
  }
};

const isLiked = ref(false);

const toggleLike = () => {
  isLiked.value = !isLiked.value;
};

// Reset activeIndex when posts change
watch(posts, (newPosts) => {
  if (newPosts.length > 0 && activeIndex.value >= newPosts.length) {
    activeIndex.value = 0;
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.4,0,0.2,1);
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(60px) scale(0.98);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-60px) scale(0.98);
}
.slide-fade-enter-to, .slide-fade-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}
</style>