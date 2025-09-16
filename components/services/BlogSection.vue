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
    
    <!-- Loading State -->
    <div v-if="postsLoading" class="flex items-center justify-center py-20">
      <div class="text-center">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ED1C24] mx-auto mb-4"></div>
        <p class="text-[#2E2E2E]">در حال بارگذاری مقالات...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="postsError" class="flex items-center justify-center py-20">
      <div class="text-center">
        <div class="text-red-500 text-3xl mb-2">⚠️</div>
        <p class="text-[#666] mb-4">خطا در بارگذاری مقالات</p>
        <button @click="retryFetch"
          class="px-4 py-2 bg-[#ED1C24] text-white rounded-lg hover:bg-[#d91920] transition-colors">
          تلاش مجدد
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div v-else-if="slides.length > 0" class="container mx-auto px-4 pb-8" data-aos="fade-up" data-aos-delay="700" data-aos-once="true">
      <div class="rounded-2xl overflow-hidden relative">
        <transition name="slide-fade" mode="out-in">
          <div
            :key="activeIndex"
            class="relative cursor-pointer"
            @click="navigateToBlog(slides[activeIndex])"
            @touchstart="handleTouchStart"
            @touchend="handleTouchEnd"
          >
            <!-- Heart image -->
            <span
              class="absolute right-4 top-3 cursor-pointer z-10 pointer-events-auto"
              @click.stop="toggleLike"
            >
              <img
                v-if="isLiked"
                src="/icons/Heart-white.svg"
                alt="Heart-white"
                width="30px"
              />
              <img v-else src="/icons/Heart.svg" alt="Heart" width="30px"/>
            </span>
            
            <!-- Image -->
            <img
              :src="slides[activeIndex].image"
              :alt="slides[activeIndex].title"
              class="w-full h-80 object-cover"
            />

            <!-- Overlay and Text -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#15151596] to-transparent via-[20.35%] from-[1.3%] flex flex-col justify-end p-4 pointer-events-none"
            >
              <h3 class="text-lg font-bold text-white leading-6 mb-5">
                {{ slides[activeIndex].title }}
              </h3>
              <p class="flex text-xs font-medium text-white justify-between">
                <span class="mr-2"
                  >زمان مطالعه: {{ slides[activeIndex].duration }}</span
                >
                <span>تاریخ نشر: {{ slides[activeIndex].date }}</span>
              </p>
            </div>
          </div>
        </transition>
      </div>

      <!-- pagination -->
      <div class="flex justify-between items-center mt-4">
        <!-- دکمه قبلی -->
        <button
          @click="prevSlide"
          class="bg-brand size-10 flex items-center justify-center text-white font-bold rounded-lg"
          :disabled="slides.length <= 1"
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
            v-for="(slide, index) in slides.length"
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
          :disabled="slides.length <= 1"
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

    <!-- Empty State -->
    <div v-else class="flex items-center justify-center py-20">
      <div class="text-center">
        <div class="text-gray-400 text-4xl mb-4">📄</div>
        <p class="text-[#666]">مقاله‌ای برای نمایش وجود ندارد</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePosts } from '~/composables/services/usePosts'

const props = defineProps({
  isTransparent: Boolean,
  serviceId: {
    type: [String, Number],
    default: 1
  }
});

const route = useRoute();
const { posts, loading: postsLoading, error: postsError, fetchPosts } = usePosts()

const isBlogDetailPage = computed(() => route.path.startsWith('/blogs/'));

const activeIndex = ref(0);
const isLiked = ref(false);
const touchStartX = ref(0);
const touchEndX = ref(0);

// محاسبه زمان خواندن بر اساس تعداد کلمات (تقریبی)
const calculateReadingTime = (title) => {
  const wordsCount = title.split(' ').length
  const readingTime = Math.max(1, Math.ceil(wordsCount / 50)) // فرض 50 کلمه در دقیقه برای فارسی
  return `${readingTime} دقیقه`
}

// تبدیل داده‌های API به فرمت مورد نیاز کامپوننت
const slides = computed(() => {
  if (!posts.value || posts.value.length === 0) return []
  
  return posts.value.map(post => ({
    id: post.id,
    image: post.thumb_image || post.main_image || '/images/blog1.png',
    title: post.title,
    duration: calculateReadingTime(post.title),
    date: post.created_at_fa,
    slug: post.slug
  }))
})

// وقتی slides تغییر کرد، activeIndex را ریست کن
watch(slides, (newSlides) => {
  if (newSlides.length > 0 && activeIndex.value >= newSlides.length) {
    activeIndex.value = 0
  }
}, { immediate: true })

const nextSlide = () => {
  if (slides.value.length > 0) {
    activeIndex.value = (activeIndex.value + 1) % slides.value.length;
  }
};

const prevSlide = () => {
  if (slides.value.length > 0) {
    activeIndex.value = (activeIndex.value - 1 + slides.value.length) % slides.value.length;
  }
};

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
  } else if (Math.abs(diff) < 10) {
    // اگر حرکت کمی بود، به عنوان کلیک در نظر بگیر
    navigateToBlog(slides.value[activeIndex.value])
  }
};

const toggleLike = () => {
  isLiked.value = !isLiked.value;
  // اینجا می‌تونی API call برای like/unlike اضافه کنی
};

const navigateToBlog = (blog) => {
  if (blog && blog.id && blog.slug) {
    navigateTo(`/blogs/${blog.id}/${blog.slug}`)
  }
}

const retryFetch = () => {
  fetchPosts(props.serviceId)
}

// بارگذاری داده‌ها هنگام mount
onMounted(() => {
  fetchPosts(props.serviceId)
})

// اگر serviceId تغییر کرد، داده‌های جدید را بارگذاری کن
watch(() => props.serviceId, (newServiceId) => {
  if (newServiceId) {
    fetchPosts(newServiceId)
  }
}, { immediate: false })
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

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>