<template>
  <div class="bg-white">
    <img class="" src="/images/blog-banner.png" alt="blog-banner" />
    <h2 class="text-xl font-bold leading-7 text-center pb-4 pt-[30px]">
      <span class="text-brand">رویداد های</span> کلینیک تن ساز
    </h2>
    <div class="container mx-auto px-4 pb-8"  data-aos="fade-up" data-aos-once="true">
      <div class="rounded-2xl overflow-hidden relative">
        <transition name="fade" mode="out-in">
          <div :key="activeIndex" class="relative" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
            <!-- Image -->
            <img :src="slides[activeIndex].image" :alt="slides[activeIndex].title" class="w-full h-80 object-cover" />

            <!-- Overlay and Text -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#15151596] to-transparent via-[20.35%] from-[1.3%] flex flex-col justify-end p-4">
              <h3 class="text-lg font-bold text-white leading-6 mb-5">
                {{ slides[activeIndex].title }}
              </h3>
              <p class="flex text-xs font-medium text-white justify-between">
                <span>تاریخ برگزاری: {{ slides[activeIndex].date }}</span>
              </p>
            </div>
          </div>
        </transition>
      </div>

      <!-- pagination -->
      <div class="flex justify-between items-center mt-4">
        <!-- دکمه قبلی -->
        <button @click="prevSlide"
          class="bg-brand size-10 flex items-center justify-center text-white font-bold rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- شماره‌های صفحه -->
        <div class="flex items-center gap-2">
          <div v-for="(slide, index) in slides.length" :key="index" @click="activeIndex = index"
            class="w-8 h-8 rounded-xl cursor-pointer transition duration-300 ease-in-out flex items-center justify-center text-sm font-medium"
            :class="{ 'bg-[#0000000D] text-[#2E2E2E]': activeIndex === index, 'text-[#929DAC]': activeIndex !== index }">
            {{ index + 1 }}
          </div>
        </div>

        <!-- دکمه بعدی -->
        <button @click="nextSlide"
          class="bg-[#D4D4D4] text-[#929DAC] font-bold size-10 flex items-center justify-center rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rotate-180" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
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

const route = useRoute();

const activeIndex = ref(0);

const slides = ref([
  {
    image: "/images/seminar.jpg",
    title: "برگزاری سمینار آبان 1405",
    duration: "2 دقیقه",
    date: "1404/01/04",
  },
  {
    image: "/images/blog1.png",
    title: "تغذیه مناسب برای رشد مو",
    duration: "3 دقیقه",
    date: "1404/01/10",
  },
  {
    image: "/images/blog1.png",
    title: "راهکارهای جلوگیری از ریزش مو",
    duration: "4 دقیقه",
    date: "1404/01/18",
  },
]);

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  activeIndex.value =
    (activeIndex.value - 1 + slides.value.length) % slides.value.length;
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
</style>