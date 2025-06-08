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
      <div class="flex items-center justify-center h-[90px]">
        <div class="inline-flex items-center gap-4 transition-transform duration-300 ease-in-out">
          <div v-for="(person, index) in teamMembers" :key="'pagination-' + index"
            class="transition-all duration-300 flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden relative"
            :class="getThumbnailClass(index)" @click="selectMember(index)">
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

let startTime = null;

const startAutoPlay = () => {
  if (!isAutoPlaying) return;

  pauseAutoPlay(); // پاکسازی تایمرهای قبلی

  progressValue.value = 0;
  startTime = performance.now();

  const animate = (time) => {
    const elapsed = time - startTime;
    const percentage = Math.min((elapsed / autoPlayDuration) * 100, 100);
    progressValue.value = percentage;

    if (percentage < 100) {
      progressTimer = requestAnimationFrame(animate);
    } else {
      nextSlide();
      startAutoPlay();
    }
  };

  progressTimer = requestAnimationFrame(animate);
};


const pauseAutoPlay = () => {
  if (autoPlayTimer) {
    clearTimeout(autoPlayTimer);
    autoPlayTimer = null;
  }
  if (progressTimer) {
    cancelAnimationFrame(progressTimer);
    progressTimer = null;
  }
};


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
    return 'scale-100 rotate-0 opacity-100 z-20';
  } else if (index === activeIndex.value - 1) {
    return 'scale-90 opacity-80 z-10 card-skew-left';
  } else if (index === activeIndex.value + 1) {
    return 'scale-90 opacity-80 z-10 card-skew-right';
  } else {
    return 'scale-85 opacity-60 z-0';
  }
};

const getThumbnailClass = (index) => {
  if (index === activeIndex.value) {
    return 'w-[90px] h-[70px] active-pagination z-10 shadow-lg';
  } else if (
    index === activeIndex.value - 1 ||
    index === activeIndex.value + 1
  ) {
    return 'w-[50px] h-[50px]';
  } else {
    return 'w-[40px] h-[40px] opacity-70';
  }
};

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

.card-skew-left {
  clip-path: polygon(90% 2%, 100% 0%, 100% 100%, 90% 98%);
}
.card-skew-right {
  clip-path: polygon(0% 0%, 10% 2%, 10% 98%, 0% 100%);
}
</style>