<template>
  <div class="container mx-auto px-4 pb-8">
    <div class="rounded-2xl overflow-hidden  relative">
      <transition name="fade" mode="out-in">
        <div :key="activeIndex" class="relative" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
          <!-- Image -->
          <img :src="slides[activeIndex].image" :alt="slides[activeIndex].title" class="w-full h-full object-cover" />
        </div>
      </transition>
    </div>

    <!-- pagination -->
    <div class="flex justify-center items-center mt-4">
      <!-- دایره‌های شماره صفحه -->
      <div class="flex items-center">
        <div v-for="(slide, index) in slides.length" :key="index" @click="activeIndex = index"
          class="w-[10px] h-2 rounded-full mx-1 bg-[#D4D4D4] cursor-pointer transition duration-300 ease-in-out"
          :class="{ 'bg-brand w-[30px]': activeIndex === index }"></div>
      </div>

    </div>
  </div>
</template>

<script setup>
const activeIndex = ref(0)

const slides = ref([
  {
    image: '/images/services3.png',
  },
  {
    image: '/images/services4.png',
  },
  {
    image: '/images/services3.png',
  }
])

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % slides.value.length
}

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + slides.value.length) % slides.value.length
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
