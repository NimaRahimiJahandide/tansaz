<template>
  <div class="container mx-auto px-4 pb-8">
    <div class="rounded-2xl overflow-hidden relative">
      <transition name="fade" mode="out-in">
        <div :key="activeIndex" class="relative" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
          <!-- Image -->
          <img :src="currentSlide?.main_image || '/images/services3.png'"
            :alt="currentSlide?.title || currentSlide?.name || 'Slide'" class="w-full h-full object-cover" />
        </div>
      </transition>
    </div>

    <!-- pagination -->
    <div class="flex justify-center items-center mt-4">
      <!-- دایره‌های شماره صفحه -->
      <div class="flex flex-col items-center">
        <div v-for="(slide, index) in slidesData" :key="slide.id || index" @click="activeIndex = index"
          class="w-[10px] h-2 rounded-full mx-1 bg-[#D4D4D4] cursor-pointer transition duration-300 ease-in-out"
          :class="{ 'bg-brand w-[30px]': activeIndex === index }"></div>
        </div>
        
      </div>
      <p class="text-[20px] font-bold mt-10">
       {{ currentSlide.description }}
      </p>
  </div>
</template>

<script setup>
// Props definition
const props = defineProps({
  slidesData: {
    type: Array,
  }
})

const activeIndex = ref(0)

// Computed property for current slide
const currentSlide = computed(() => {
  return props.slidesData[activeIndex.value] || null
})

// Watch for changes in slidesData prop and reset activeIndex if necessary
watch(() => props.slidesData, (newSlides) => {
  if (newSlides.length > 0 && activeIndex.value >= newSlides.length) {
    activeIndex.value = 0
  }
}, { immediate: true })

const nextSlide = () => {
  if (props.slidesData.length > 0) {
    activeIndex.value = (activeIndex.value + 1) % props.slidesData.length
  }
}

const prevSlide = () => {
  if (props.slidesData.length > 0) {
    activeIndex.value = (activeIndex.value - 1 + props.slidesData.length) % props.slidesData.length
  }
}

const touchStartX = ref(0)
const touchEndX = ref(0)

const handleTouchStart = (e) => {
  touchStartX.value = e.changedTouches[0].screenX
}

const handleTouchEnd = (e) => {
  touchEndX.value = e.changedTouches[0].screenX
  handleSwipe()
}

const handleSwipe = () => {
  const diff = touchStartX.value - touchEndX.value
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      // کشیدن به چپ → بعدی
      prevSlide()
    } else {
      // کشیدن به راست ← قبلی
      nextSlide()
    }
  }
}
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