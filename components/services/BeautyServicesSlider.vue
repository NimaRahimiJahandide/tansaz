<script setup>
import { ref, onMounted, nextTick } from 'vue'

const currentSlide = ref(0)
const isTransitioning = ref(false)
const slideDirection = ref('next') // 'next' or 'prev'

const slides = [
  {
    id: 0,
    title: 'خدمات زیبایی',
    lines: 9,
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است.',
    image: '/images/services1.png',
    backgroundImage: '/images/service-init.png',
    backgroundImage2: '/images/service-init1.png'
  },
  {
    id: 1,
    title: 'میکاپ صورت',
    lines: 5,
    description: 'میکاپ حرفه‌ای با استفاده از بهترین برندها و تکنیک‌های روز دنیا برای زیبایی و درخشندگی صورت شما.',
    image: '/images/service-init.png',
    backgroundImage: '/images/services1.png',
    backgroundImage2: '/images/service-init1.png'
  },
  {
    id: 2,
    title: 'ناخن حرفه‌ای',
    lines: 7,
    description: 'طراحی ناخن با بهترین کیفیت و متریال روز دنیا برای زیبایی و استایل منحصر به فرد شما.',
    image: '/images/service-init1.png',
    backgroundImage: '/images/services1.png',
    backgroundImage2: '/images/service-init.png'
  }
]

const emit = defineEmits(['serviceSelected'])

const selectService = (slide) => {
  emit('serviceSelected', slide)
}

const switchToSlide = async (slideIndex) => {
  if (isTransitioning.value) return
  
  isTransitioning.value = true
  
  // Determine direction
  if (slideIndex > currentSlide.value) {
    slideDirection.value = 'next'
  } else if (slideIndex < currentSlide.value) {
    slideDirection.value = 'prev'
  }
  
  // Wait for animation to complete
  await nextTick()
  
  // Change slide after a small delay to allow for fade out
  setTimeout(() => {
    currentSlide.value = slideIndex
    isTransitioning.value = false
  }, 300)
}

// Get the indices for left and right background images
const getLeftImageIndex = () => {
  return (currentSlide.value + 1) % slides.length
}

const getRightImageIndex = () => {
  return (currentSlide.value + 2) % slides.length
}

// Swipe functionality
const touchStartX = ref(0)
const touchEndX = ref(0)
const isSwiping = ref(false)

const handleTouchStart = (event) => {
  touchStartX.value = event.touches[0].clientX
  isSwiping.value = true
}

const handleTouchMove = (event) => {
  if (!isSwiping.value) return
  touchEndX.value = event.touches[0].clientX
}

const handleTouchEnd = () => {
  if (!isSwiping.value) return
  
  const swipeThreshold = 50 // Minimum distance for swipe
  const swipeDistance = touchEndX.value - touchStartX.value
  
  if (Math.abs(swipeDistance) > swipeThreshold) {
    if (swipeDistance > 0) {
      // Swipe right - go to previous slide
      const prevIndex = currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1
      switchToSlide(prevIndex)
    } else {
      // Swipe left - go to next slide
      const nextIndex = (currentSlide.value + 1) % slides.length
      switchToSlide(nextIndex)
    }
  }
  
  isSwiping.value = false
}

// Mouse drag functionality for desktop
const isDragging = ref(false)
const dragStartX = ref(0)
const dragEndX = ref(0)

const handleMouseDown = (event) => {
  isDragging.value = true
  dragStartX.value = event.clientX
}

const handleMouseMove = (event) => {
  if (!isDragging.value) return
  dragEndX.value = event.clientX
}

const handleMouseUp = () => {
  if (!isDragging.value) return
  
  const dragThreshold = 50
  const dragDistance = dragEndX.value - dragStartX.value
  
  if (Math.abs(dragDistance) > dragThreshold) {
    if (dragDistance > 0) {
      // Drag right - go to previous slide
      const prevIndex = currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1
      switchToSlide(prevIndex)
    } else {
      // Drag left - go to next slide
      const nextIndex = (currentSlide.value + 1) % slides.length
      switchToSlide(nextIndex)
    }
  }
  
  isDragging.value = false
}

// Prevent text selection during drag
const handleSelectStart = (event) => {
  if (isDragging.value || isSwiping.value) {
    event.preventDefault()
  }
}
</script>

<template>
  <section class="bg-[radial-gradient(65.64%_65.64%_at_50%_34.36%,_#565656_0%,_#353535_54.08%,_#1F1F1F_100%)]  pb-[30px] relative">
    <div class="min-h-screen pt-[100px]">
      <!-- Main Content Container -->
      <div class="relative z-10 w-full">
        <!-- Main Model Image with Background Images -->
        <div class="text-center -mb-20 relative overflow-x-hidden">
          <div class=" inline-block">
            <!-- Background Image 1 (Left) - Clickable -->
            <div 
              @click="switchToSlide(getLeftImageIndex())"
              class="absolute -left-10 top-0 opacity-30 cursor-pointer hover:opacity-50 transition-opacity duration-300 z-20">
              <div class="w-[133px] h-[140px] rounded-full overflow-hidden">
                <img :src="slides[getLeftImageIndex()].image" alt="Background 1" class="w-full h-full object-cover" />
              </div>
              <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-brand rounded-full"></div>
            </div>
            
            <!-- Background Image 2 (Right) - Clickable -->
            <div 
              @click="switchToSlide(getRightImageIndex())"
              class="absolute -right-10 -top-0 opacity-30 cursor-pointer hover:opacity-50 transition-opacity duration-300 z-20">
              <div class="w-[133px] h-[140px] rounded-full overflow-hidden">
                <img :src="slides[getRightImageIndex()].image" alt="Background 2" class="w-full h-full object-cover" />
              </div>
              <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-brand rounded-full"></div>
            </div>
  
            <!-- Main Image - Swipeable with Animation -->
            <div 
              @touchstart="handleTouchStart"
              @touchmove="handleTouchMove"
              @touchend="handleTouchEnd"
              @mousedown="handleMouseDown"
              @mousemove="handleMouseMove"
              @mouseup="handleMouseUp"
              @mouseleave="handleMouseUp"
              @selectstart="handleSelectStart"
              class="cursor-grab active:cursor-grabbing select-none">
              <img 
                :src="slides[currentSlide].image" 
                alt="Main Beauty Model" 
                class="w-[196px] h-[236px] object-cover mt-[50px] relative  pointer-events-none transition-all duration-500 ease-in-out "
                :class="{
                  'opacity-0 scale-95': isTransitioning,
                  'opacity-100 scale-100': !isTransitioning
                }" />
            </div>
          </div>
        </div>
  
        <!-- Content Card -->
        <div
          class="bg-[#FFFFFF05] mx-[30px] rounded-3xl px-[25px] pt-[70px] pb-[25px] backdrop-blur-[20px] shadow-[inset_0px_-5px_21px_0px_#E3EDEF33,inset_0px_0px_3px_0px_#9A92D24D,inset_0px_70px_47px_-75px_#CAACFF4D,inset_0px_2px_10px_-4px_#FFFFFF42,inset_0px_34px_29px_-49px_#FFFFFF80] relative">
          
          <!-- Card Stack Effect -->
          <div class="absolute inset-0 rounded-3xl overflow-hidden">
            <!-- Previous Card (Behind) -->
            <div 
              class="absolute inset-0 bg-[#FFFFFF03] rounded-3xl transform scale-95 translate-x-2 opacity-60 transition-all duration-300"
              :class="{ 'opacity-0': currentSlide === 0 }">
            </div>
            
            <!-- Next Card (Behind) -->
            <div 
              class="absolute inset-0 bg-[#FFFFFF03] rounded-3xl transform scale-95 -translate-x-2 opacity-60 transition-all duration-300"
              :class="{ 'opacity-0': currentSlide === slides.length - 1 }">
            </div>
          </div>
  
          <!-- Current Slide Content with Animation -->
          <div class="relative z-10">
            <!-- Title - Static -->
            <div class="flex justify-between items-center mb-4">
              <h1 class="text-[26px] font-bold text-white mb-2">
                <span class="text-brand">{{ slides[currentSlide].title.split(' ')[0] }}</span> {{ slides[currentSlide].title.split(' ').slice(1).join(' ') }}
              </h1>
              <button class="text-brand -rotate-[15deg] bg-[#FFFFFF1A] w-[103px] h-[45px] rounded-[40px] text-[24px] font-semibold absolute left-0 -top-8">
                <span class="text-white">{{ slides[currentSlide].lines }}</span> لاین
              </button>
            </div>
  
            <!-- Description with Fade Animation -->
            <div 
              class="text-white text-sm leading-[23px] mb-8 text-justify font-medium transition-all duration-400 ease-in-out"
              :class="{
                'opacity-0': isTransitioning,
                'opacity-100': !isTransitioning
              }">
              <p>{{ slides[currentSlide].description }}</p>
            </div>
  
            <!-- Main CTA Button - Static -->
            <div>
              <button 
                @click="selectService(slides[currentSlide])"
                class="w-full bg-brand text-white font-semibold h-[42px] rounded-full transition-all duration-300">
                برو به صفحه {{ slides[currentSlide].title }}
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Support Button -->
      <div class="w-full pt-[60px] flex items-center justify-center">
        <button
          class="flex justify-center w-[169px] h-[46px] items-center bg-transparent border border-white text-white font-medium rounded-full shadow-lg">
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
            </path>
          </svg>
          پشتیبانی سریع
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom animations for smooth transitions */
.transition-all {
  transition: all 0.3s ease-in-out;
}

/* Hover effects for navigation */
button:hover {
  transform: scale(1.05);
}

/* Card stack effect */
.transform {
  transition: transform 0.3s ease-in-out;
}

/* Background image transitions */
img {
  transition: opacity 0.3s ease-in-out;
}

/* Hover effect for clickable background images */
.cursor-pointer:hover {
  transform: scale(1.1);
}

/* Smooth transition for all interactive elements */
* {
  transition: all 0.3s ease-in-out;
}

/* Prevent text selection during drag/swipe */
.select-none {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Cursor styles for drag interaction */
.cursor-grab {
  cursor: grab;
}

.cursor-grab:active {
  cursor: grabbing;
}

/* Enhanced slide transition animations */
.transition-all.duration-500 {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Smooth fade and scale for main image */
img.transition-all {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Slide up animation for content */
.transform.translate-y-8 {
  transform: translateY(2rem);
}

.transform.translate-y-0 {
  transform: translateY(0);
}

/* Opacity transitions */
.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

/* Scale transitions for image */
.scale-95 {
  transform: scale(0.95);
}

.scale-100 {
  transform: scale(1);
}
</style>