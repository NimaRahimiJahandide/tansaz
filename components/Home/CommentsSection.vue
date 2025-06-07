<template>
  <div class="bg-[#1D1D1D] flex flex-col py-[50px] font-persian" @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <!-- Header -->
    <div class="text-center mb-8">
      <h2
        class="text-white w-[240px] bg-[#2E2E2E] px-[15px] py-[10px] rounded-[12px] text-base font-semibold mb-2 mx-auto">
        <span class="text-brand">6 نفر</span> تجربه‌شان را ثبت کرده‌اند
      </h2>
    </div>

    <!-- Slider -->
    <div class="relative overflow-hidden w-full ltr">
      <div class="flex transition-transform duration-500 ease-in-out ltr"
        :style="{ transform: `translateX(calc(50% - ${(activeIndex * totalItemWidth) + totalItemWidth / 2}px))` }">
        <div v-for="(person, index) in teamMembers" :key="index"
          class="min-w-[240px] mx-4 transition-transform duration-500 ease-in-out" :class="getItemClass(index)">
          <HomeUserExperienceCard :name="person.name" :lastName="person.lastName" :role="person.role"
            :experience="person.experience" :image="person.image" />
        </div>
      </div>
    </div>

    <!-- Pagination Thumbnails -->
    <div ref="paginationWrapper" class="relative mt-10 overflow-x-auto whitespace-nowrap scrollbar-hide px-10">
      <!-- Container با ارتفاع ثابت -->
      <div class="flex items-center justify-center h-[90px]">
        <div class="inline-flex items-center gap-4 transition-transform duration-300 ease-in-out">
          <div v-for="(person, index) in teamMembers" :key="'pagination-' + index"
            class="transition-all duration-300 flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden relative"
            :class="{
              'w-[90px] h-[70px] active-pagination z-10 shadow-lg': index === activeIndex,
              'w-[50px] h-[50px] hover:scale-110': index !== activeIndex,
            }" @click="selectMember(index)">
            <img :src="person.image" :alt="person.name" class="w-full h-full object-cover object-top" />
            <!-- Ring برای active -->
            <div v-if="index === activeIndex"
              class="absolute inset-0 ring-2 ring-red-500 rounded-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- ProgressBar -->
    <div class="flex items-center justify-center mt-6">
      <HomeProgressBar :value="progressValue" />
    </div>

    <!-- Logo -->
    <div class="flex flex-col items-center mt-10">
      <img src="/icons/little-logo.svg" alt="little-logo" />
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue'

const activeIndex = ref(2)
const progressValue = ref(0)
const itemWidth = 240
const itemMargin = 32 // mx-4 = 16px در هر طرف = 32px کل
const totalItemWidth = itemWidth + itemMargin

// Auto-play settings
const autoPlayDuration = 5000 // 5 ثانیه
const progressInterval = 50 // هر 50 میلی‌ثانیه آپدیت شود
let autoPlayTimer = null
let progressTimer = null
let isAutoPlaying = true

const teamMembers = [
  {
    name: 'نازنین',
    lastName: 'بیاتی',
    image: '/images/comment3.png',
    role: 'عمل زیبایی بوکال فت',
    experience: 'لورم ایپسوم متن ساختگی یا پیوند لورم از صنعت چاپ و یا استفاده از طراحان گرافیک است.',
  },
  {
    name: 'امیر',
    lastName: 'کاظمی',
    image: '/images/comment1.png',
    role: 'پیکر تراشی',
    experience: 'لورم ایپسوم متن ساختگی یا پیوند لورم از صنعت چاپ و یا استفاده از طراحان گرافیک است.',
  },
  {
    name: 'سارا',
    lastName: 'کریمی',
    image: '/images/comment2.png',
    role: 'لیفت ابرو',
    experience: 'لورم ایپسوم متن ساختگی یا پیوند لورم از صنعت چاپ و یا استفاده از طراحان گرافیک است.',
  },
  {
    name: 'محسن',
    lastName: 'رضایی',
    image: '/images/comment4.png',
    role: 'زاویه فک',
    experience: 'لورم ایپسوم متن ساختگی یا پیوند لورم از صنعت چاپ و یا استفاده از طراحان گرافیک است.',
  },
  {
    name: 'الهام',
    lastName: 'نوری',
    image: '/images/comment5.png',
    role: 'زاویه‌سازی صورت',
    experience: 'لورم ایپسوم متن ساختگی یا پیوند لورم از صنعت چاپ و یا استفاده از طراحان گرافیک است.',
  },
]

const selectMember = async (index) => {
  // توقف auto-play موقت هنگام کلیک دستی
  pauseAutoPlay()

  activeIndex.value = index
  progressValue.value = 0

  await nextTick()
  scrollActiveThumbnailIntoCenter()

  // شروع مجدد auto-play بعد از 3 ثانیه
  setTimeout(() => {
    startAutoPlay()
  }, 3000)
}

const nextSlide = () => {
  const nextIndex = (activeIndex.value + 1) % teamMembers.length
  activeIndex.value = nextIndex
  scrollActiveThumbnailIntoCenter()
}

const startAutoPlay = () => {
  if (!isAutoPlaying) return

  progressValue.value = 0

  // شروع progress bar
  progressTimer = setInterval(() => {
    if (progressValue.value < 100) {
      progressValue.value += (100 / (autoPlayDuration / progressInterval))
    }
  }, progressInterval)

  // تغییر اسلاید بعد از مدت زمان مشخص
  autoPlayTimer = setTimeout(() => {
    nextSlide()
    startAutoPlay() // شروع مجدد برای اسلاید بعدی
  }, autoPlayDuration)
}

const pauseAutoPlay = () => {
  if (autoPlayTimer) {
    clearTimeout(autoPlayTimer)
    autoPlayTimer = null
  }
  if (progressTimer) {
    clearInterval(progressTimer)
    progressTimer = null
  }
}

const resumeAutoPlay = () => {
  isAutoPlaying = true
  startAutoPlay()
}

const stopAutoPlay = () => {
  isAutoPlaying = false
  pauseAutoPlay()
  progressValue.value = 0
}

const getItemClass = (index) => {
  if (index === activeIndex.value) {
    return 'scale-100 rotate-0 opacity-100'
  } else if (index === activeIndex.value - 1) {
    return 'scale-90 rotate-y-12 opacity-80'
  } else if (index === activeIndex.value + 1) {
    return 'scale-90 -rotate-y-12 opacity-80'
  } else {
    return 'scale-85 opacity-60'
  }
}

const paginationWrapper = ref(null)

const scrollActiveThumbnailIntoCenter = () => {
  const wrapper = paginationWrapper.value
  const activeThumb = wrapper?.querySelector('.active-pagination')

  if (wrapper && activeThumb) {
    const wrapperRect = wrapper.getBoundingClientRect()
    const activeRect = activeThumb.getBoundingClientRect()
    const offset = activeRect.left - wrapperRect.left - wrapper.clientWidth / 2 + activeThumb.clientWidth / 2
    wrapper.scrollBy({ left: offset, behavior: 'smooth' })
  }
}

// شروع auto-play هنگام mount
onMounted(() => {
  startAutoPlay()
})

// پاکسازی timer ها هنگام unmount
onUnmounted(() => {
  pauseAutoPlay()
})

// متوقف کردن auto-play هنگام hover روی کامپوننت
const handleMouseEnter = () => {
  pauseAutoPlay()
}

const handleMouseLeave = () => {
  if (isAutoPlaying) {
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

.rotate-y-12 {
  transform: perspective(1000px) rotateY(12deg);
}

.-rotate-y-12 {
  transform: perspective(1000px) rotateY(-12deg);
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>