<template>
  <div v-show="loading || hasComments" class="bg-[#1D1D1D] flex flex-col py-[50px] font-persian" @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <!-- Header -->
    <div class="text-center mb-8">
      <h2
        class="text-white flex-col gap-2.5 flex items-center justify-center px-[15px] py-[10px] text-xl font-bold mb-2 mx-auto">
        <img src="/icons/Vector.svg" alt="Vector">
        <span>نظرات کاربران</span>
      </h2>
    </div>

    <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true">
      <!-- Loading State -->
      <div v-if="loading" class="text-center text-white py-8">
        در حال بارگذاری کامنت‌ها...
      </div>

      <!-- Error State -->
      <div v-if="error" class="text-center text-red-500 py-8">
        {{ error }}
        <button @click="fetchComments" class="block mx-auto mt-4 bg-brand text-white px-4 py-2 rounded-lg">
          تلاش مجدد
        </button>
      </div>

      <!-- Comments Slider -->
      <div v-if="!loading && !error && hasComments">
        <!-- Slider -->
        <div class="relative overflow-hidden w-full ltr">
          <div class="flex transition-all duration-700 ease-out ltr"
            :style="{ transform: `translateX(calc(50% - ${(activeIndex * totalItemWidth) + totalItemWidth / 2}px))` }">
            <div v-for="(comment, index) in comments" :key="comment.id || index"
              class="min-w-[240px] mx-4 transition-all duration-700 ease-out" :class="getItemClass(index)">
              <HomeUserExperienceCard 
                :name="comment.name || comment.first_name" 
                :lastName="comment.lastName || comment.last_name || ''" 
                :role="comment.role || comment.service || 'مراجعه کننده'"
                :experience="comment.text || comment.comment || comment.description" />
            </div>
          </div>
        </div>    
        <!-- pagination -->
        <div class="flex justify-between items-center mt-4 px-4">
          <!-- دکمه قبلی -->
          <button @click="prevSlide"
            class="bg-brand size-10 flex items-center justify-center text-white font-bold rounded-lg transition-all duration-300 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
    
          <!-- Progress Bar -->
          <div class="flex-1 mx-4">
            <div class="w-full h-1 rounded-full overflow-hidden neon-progress ltr">
              <div class="h-full bg-[#FF2525] neon-progress transition-all duration-100 ease-linear" 
                   :style="{ width: progressValue + '%' }"></div>
            </div>
          </div>
    
          <!-- دکمه بعدی -->
          <button @click="nextSlide"
            class="bg-[#2E2E2E] text-[#929DAC] font-bold size-10 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rotate-180" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
    
        <section class="flex justify-center items-center pt-7">
          <NuxtLink to="/comments" class="bg-[#363636] text-white rounded-full px-7 py-2 transition-all duration-300 hover:bg-[#444444]">مشاهده بیشتر</NuxtLink>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useHomeComments } from '@/composables/home/useHomeComments'

const activeIndex = ref(0)
const progressValue = ref(0)
const itemWidth = 240
const itemMargin = 32 // mx-4 = 16px در هر طرف = 32px کل
const totalItemWidth = itemWidth + itemMargin
const isTransitioning = ref(false)

// Auto-play settings
const autoPlayDuration = 5000 // 5 ثانیه
let progressTimer = null
let isAutoPlaying = true
let isAnimating = false

// Use composable for API data
const {
  comments,
  loading,
  error,
  fetchComments,
  hasComments,
  commentsCount
} = useHomeComments()

const nextSlide = () => {
  if (isTransitioning.value || !hasComments.value) return
  
  isTransitioning.value = true
  pauseAutoPlay()
  progressValue.value = 0
  activeIndex.value = (activeIndex.value + 1) % comments.value.length
  
  // صبر تا انیمیشن کامل شود
  setTimeout(() => {
    isTransitioning.value = false
    startAutoPlay()
  }, 700) // مطابق با duration انیمیشن
}

const prevSlide = () => {
  if (isTransitioning.value || !hasComments.value) return
  
  isTransitioning.value = true
  pauseAutoPlay()
  progressValue.value = 0
  activeIndex.value = (activeIndex.value - 1 + comments.value.length) % comments.value.length
  
  // صبر تا انیمیشن کامل شود
  setTimeout(() => {
    isTransitioning.value = false
    startAutoPlay()
  }, 700) // مطابق با duration انیمیشن
}

const startAutoPlay = () => {
  if (!isAutoPlaying || isTransitioning.value || !hasComments.value) return
  pauseAutoPlay() // پاکسازی تایمرهای قبلی
  progressValue.value = 0
  let startTime = null
  isAnimating = true

  const animate = (time) => {
    if (!isAnimating || isTransitioning.value) return
    if (!startTime) startTime = time
    const elapsed = time - startTime
    const percentage = Math.min((elapsed / autoPlayDuration) * 100, 100)
    progressValue.value = percentage
    if (percentage < 100) {
      progressTimer = requestAnimationFrame(animate)
    } else {
      progressValue.value = 100
      nextSlide()
    }
  }
  progressTimer = requestAnimationFrame(animate)
}

const pauseAutoPlay = () => {
  isAnimating = false
  if (progressTimer) {
    cancelAnimationFrame(progressTimer)
    progressTimer = null
  }
}

const resumeAutoPlay = () => {
  isAutoPlaying = true
  if (!isTransitioning.value && hasComments.value) {
    startAutoPlay()
  }
}

const stopAutoPlay = () => {
  isAutoPlaying = false
  pauseAutoPlay()
  progressValue.value = 0
}

const getItemClass = (index) => {
  const diff = (index - activeIndex.value + comments.value.length) % comments.value.length
  
  if (diff === 0) {
    // آیتم فعال
    return 'scale-100 rotate-0 opacity-100 z-20 transform-gpu'
  } else if (diff === 1 || diff === comments.value.length - 1) {
    // آیتم‌های مجاور
    const isLeft = diff === comments.value.length - 1
    return `scale-90 opacity-80 z-10 transform-gpu ${isLeft ? 'card-skew-left' : 'card-skew-right'}`
  } else {
    // باقی آیتم‌ها
    return 'scale-85 opacity-60 z-0 transform-gpu'
  }
}

// شروع auto-play هنگام mount
onMounted(() => {
  fetchComments() // Load comments from API
})

// Watch for successful data load to start autoplay
watch(hasComments, (newValue) => {
  if (newValue && !isTransitioning.value) {
    startAutoPlay()
  }
}, { immediate: true })

// پاکسازی timer ها هنگام unmount
onUnmounted(() => {
  pauseAutoPlay()
})

// متوقف کردن auto-play هنگام hover روی کامپوننت
const handleMouseEnter = () => {
  pauseAutoPlay()
}

const handleMouseLeave = () => {
  if (isAutoPlaying && !isTransitioning.value && hasComments.value) {
    startAutoPlay()
  }
}

// در معرض قرار دادن توابع برای استفاده خارجی (اختیاری)
defineExpose({
  startAutoPlay,
  pauseAutoPlay,
  stopAutoPlay,
  resumeAutoPlay
})
</script>

<style scoped>
.ltr {
  direction: ltr;
}

.transform-gpu {
  transform-style: preserve-3d;
  backface-visibility: hidden;
  will-change: transform, opacity;
}

.card-skew-left {
  clip-path: polygon(90% 2%, 100% 0%, 100% 100%, 90% 98%);
}

.card-skew-right {
  clip-path: polygon(0% 0%, 10% 2%, 10% 98%, 0% 100%);
}

.neon-progress {
  box-shadow:
    0 0 0.6em #22222222,
    0 0 0.8em #FF2525cc;
  border-image-source: linear-gradient(0.71deg, rgba(255, 0, 0, 0) 43.39%, #FF2525 97.71%);
}

/* بهبود انیمیشن‌های اضافی */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>