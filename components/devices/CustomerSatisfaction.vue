<template>
    <div class="bg-[linear-gradient(129deg,_#BE4F4F,_#9D5759,_#884E51)] rounded-tr-3xl rounded-bl-3xl p-6 text-white relative overflow-hidden">
      <!-- Right-aligned title text -->
      <div class="text-right mb-6">
        <h2 class="text-3xl font-black">رضایت مشتریان</h2>
      </div>
  
      <!-- Testimonial Carousel -->
       <div class="flex max-md:flex-col gap-10">
        <p class="text-lg mt-2 font-bold leading-8">
          با اطمینان کامل زیبایی
          خود را با ما دنبال کنید
        </p>
         <div class="relative md:w-2/3 w-full">
           <!-- Navigation Arrows -->
           <button 
             @click="prevSlide" 
             class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 rounded-full p-1"
             aria-label="Previous slide"
           >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left">
               <path d="m15 18-6-6 6-6"/>
             </svg>
           </button>
           
           <div class="flex justify-center">
             <div 
               v-for="(group, groupIndex) in groupedSlides" 
               :key="groupIndex"
               class="transition-opacity duration-300 ease-in-out flex space-x-4"
               :class="{ 'opacity-100': currentSlide === groupIndex, 'opacity-0 hidden': currentSlide !== groupIndex }"
             >
               <div 
                 v-for="(slide, slideIndex) in group" 
                 :key="slideIndex"
                 class="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-white"
               >
                 <img :src="slide.src" alt="Before and after comparison" class="w-full h-full object-cover" />
               </div>
             </div>
           </div>
           <!-- Dots Navigation -->
          <div class="flex justify-center mt-6 space-x-1">
            <button 
              v-for="(_, index) in groupedSlides" 
              :key="index"
              @click="currentSlide = index"
              class="w-2 h-2 rounded-full transition-all duration-300"
              :class="currentSlide === index ? 'bg-white w-6' : 'bg-white/50'"
              :aria-label="`Go to slide ${index + 1}`"
            ></button>
          </div>

           <button 
             @click="nextSlide" 
             class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 rounded-full p-1"
             aria-label="Next slide"
           >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right">
               <path d="m9 18 6-6-6-6"/>
             </svg>
           </button>
         </div>
       </div>
  
      
    </div>
  </template>
  
<script setup>  
const slides = ref([
  { src: 'https://swiperjs.com/demos/images/nature-1.jpg', id: 1 },
  { src: 'https://swiperjs.com/demos/images/nature-2.jpg', id: 2 },
  { src: 'https://swiperjs.com/demos/images/nature-3.jpg', id: 3 },
  { src: 'https://swiperjs.com/demos/images/nature-4.jpg', id: 4 },
  { src: 'https://swiperjs.com/demos/images/nature-5.jpg', id: 5 },
  { src: 'https://swiperjs.com/demos/images/nature-6.jpg', id: 6 },
  { src: 'https://swiperjs.com/demos/images/nature-7.jpg', id: 7 }
]);

const groupedSlides = computed(() => {
  if (process.client) {
    const isMobile = window.innerWidth < 768; // بررسی حالت موبایل
    const groupSize = isMobile ? 1 : 3; // در حالت موبایل 1 آیتم، در سایر حالت‌ها 3 آیتم
    const groups = [];
    for (let i = 0; i < slides.value.length; i += groupSize) {
      groups.push(slides.value.slice(i, i + groupSize));
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
    gap: 0; /* حذف فاصله بین آیتم‌ها */
  }

  .w-24.h-24 {
    width: 100%; /* پر کردن تمام عرض در حالت موبایل */
    height: auto; /* ارتفاع خودکار */
  }
}
</style>