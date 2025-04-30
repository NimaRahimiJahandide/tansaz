<template>
  <div
    class="bg-[url(/icons/bg-devices.png)] object-cover bg-center rounded-tr-[80px] rounded-bl-[80px] p-6 text-white relative overflow-hidden">
    <!-- Right-aligned title text -->
    <div class="text-center md:text-right mb-6 md:pr-16">
      <h2 class="md:text-[40px] text-2xl font-black">رضایت مشتریان</h2>
    </div>

    <!-- Testimonial Carousel -->
    <div class="flex justify-between max-md:flex-col gap-10">
      <p class="text-lg mt-2 font-bold leading-8 md:pr-16 md:w-60">
        با اطمینان کامل زیبایی
        خود را با ما دنبال کنید
      </p>
      <div class="relative w-full">
        <!-- Navigation Arrows -->
        <button @click="prevSlide"
          class="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 rounded-full p-1"
          aria-label="Previous slide">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-chevron-left">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <div class="flex justify-center">
          <div v-for="(group, groupIndex) in groupedSlides" :key="groupIndex"
            class="transition-opacity duration-300 ease-in-out flex space-x-[40px]"
            :class="{ 'opacity-100': currentSlide === groupIndex, 'opacity-0 hidden': currentSlide !== groupIndex }">
            <div v-for="(slide, slideIndex) in group" :key="slideIndex" class="rounded-2xl relative">
              <article class="absolute -top-[38px] -right-[38px]">
                <div class="flex items-end relative z-10">
                  <img :src="slide.original" alt="before"
                    class="w-[117px] h-[117px] border border-white rounded-full shadow-[0px_4px_4px_0px_#00000033]" />
                  <span class="absolute right-[48px] bottom-1">قبل</span>
                </div>
              </article>
              <img :src="slide.image" alt="Before and after comparison"
                class="max-w-[191px] max-h-[161px] md:w-60 md:h-60 rounded-[16px]" />
            </div>
          </div>
        </div>
        <!-- Dots Navigation -->
        <div class="flex justify-center mt-6 space-x-1">
          <button v-for="(_, index) in groupedSlides" :key="index" @click="currentSlide = index"
            class="w-2 h-2 cursor-pointer rounded-full transition-all duration-300"
            :class="currentSlide === index ? 'bg-white w-6' : 'bg-white/50'"
            :aria-label="`Go to slide ${index + 1}`"></button>
        </div>

        <button @click="nextSlide" class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 rounded-full p-1"
          aria-label="Next slide">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-chevron-right">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>


  </div>
</template>

<script setup>
const props = defineProps({
  pics: Object
})

let sliders = ref([])

const pics = toRef(props, 'pics')

watch(pics, (newVal) => {
  sliders.value = props.pics
}, { deep: true })

const groupedSlides = computed(() => {
  if (process.client) {
    const isMobile = window.innerWidth < 768; // بررسی حالت موبایل
    const groupSize = isMobile ? 1 : 3; // در حالت موبایل 1 آیتم، در سایر حالت‌ها 3 آیتم
    const groups = [];
    for (let i = 0; i < sliders.value.length; i += groupSize) {
      groups.push(sliders.value.slice(i, i + groupSize));
    }
    return groups;
  }
  return []; // در صورتی که در سمت سرور باشد، یک آرایه خالی برگردانید.
});

const currentSlide = ref(0);
const autoplayInterval = ref(null);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + groupedSlides.value.length) % groupedSlides.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % groupedSlides.value.length;
};

const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    nextSlide();
  }, 8000);
};

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
  }
};

onMounted(() => {
  startAutoplay();
  return () => {
    stopAutoplay();
  };
});
</script>

<style scoped>
/* تنظیمات برای حالت موبایل */
@media (max-width: 768px) {
  .flex.space-x-4 {
    gap: 0;
    /* حذف فاصله بین آیتم‌ها */
  }

  .w-24.h-24 {
    width: 100%;
    /* پر کردن تمام عرض در حالت موبایل */
    height: auto;
    /* ارتفاع خودکار */
  }
}
</style>