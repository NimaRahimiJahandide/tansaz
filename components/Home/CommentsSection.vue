<template>
  <div class="bg-[#1D1D1D] flex flex-col py-[50px] font-persian" @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <!-- Header -->
    <div class="text-center mb-8">
      <h2
        class="text-white flex-col gap-2.5 flex items-center justify-center px-[15px] py-[10px] text-xl font-bold mb-2 mx-auto">
        <img src="/icons/Vector.svg" alt="Vector">
        <span>تجربه مراجعه کننده ها</span>
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

    <!-- ProgressBar -->
    <div class="flex items-center justify-center mt-6">
      <HomeProgressBar :value="progressValue" />
    </div>

    <!-- pagination -->
    <div class="flex justify-between items-center mt-4 px-4">
      <!-- دکمه قبلی -->
      <button @click="prevSlide"
        class="bg-brand size-10 flex items-center justify-center text-white font-bold rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg> 
      </button>

      <!-- شماره‌های صفحه -->
      <div class="flex items-center gap-2 text-white font-bold">
        <button v-for="(slide, index) in teamMembers.length" :key="index" @click="selectMember(index)"
          class="w-8 h-8 flex items-center justify-center rounded-lg  transition duration-300 ease-in-out"
          :class="activeIndex === index ? 'bg-[#FFFFFF0D] text-white' : ''">
          {{ index + 1 }}
        </button>
      </div>


      <!-- دکمه بعدی -->
      <button @click="nextSlide"
        class="bg-[#2E2E2E] text-[#929DAC] font-bold size-10 flex items-center justify-center rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rotate-180" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>

    <section class="flex justify-center items-center pt-7">
      <NuxtLink to="/comments" class="bg-[#363636] text-white rounded-full px-7 py-2">مشاهده بیشتر</NuxtLink>
    </section>
  
  </div>
</template>

<script setup>
const activeIndex = ref(0)
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

const teamMembers = ref([
  {
    name: 'نازنین',
    lastName: 'بیاتی',
    image: '/images/comment3.png',
    role: 'عمل زیبایی بوکال فت',
    experience: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
  {
    name: 'امیر',
    lastName: 'کاظمی',
    image: '/images/comment1.png',
    role: 'پیکر تراشی',
    experience: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
  {
    name: 'سارا',
    lastName: 'کریمی',
    image: '/images/comment2.png',
    role: 'لیفت ابرو',
    experience: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
  {
    name: 'محسن',
    lastName: 'رضایی',
    image: '/images/comment4.png',
    role: 'زاویه فک',
    experience: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
  {
    name: 'الهام',
    lastName: 'نوری',
    image: '/images/comment5.png',
    role: 'زاویه‌سازی صورت',
    experience: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
])

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % teamMembers.value.length
}

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + teamMembers.value.length) % teamMembers.value.length
}

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