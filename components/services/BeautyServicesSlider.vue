<script setup>
import { ref, onMounted, nextTick, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const currentSlide = ref(0)
const isTransitioning = ref(false)

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

// Calculate indices for prev/next slides
const getPrevSlideIndex = () => {
  return currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1
}

const getNextSlideIndex = () => {
  return (currentSlide.value + 1) % slides.length
}

// Content animation function
const animateContent = (direction = 'next') => {
  return new Promise((resolve) => {
    const contentInner = document.querySelector('.content-inner')
    if (!contentInner) {
      resolve()
      return
    }

    // Create timeline for content animation
    const contentTl = gsap.timeline({
      onComplete: () => resolve()
    })

    // Phase 1: Animate old content out (slide up + fade out)
    contentTl.to(contentInner, {
      y: -30,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in"
    })

    // Phase 2: Update content and animate new content in (slide up from bottom + fade in)
    contentTl.call(() => {
      // Content is updated here via Vue reactivity
      // Reset position for new content to slide in from bottom
      gsap.set(contentInner, {
        y: 30,
        opacity: 0
      })
    })
    .to(contentInner, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out"
    }, "+=0.1") // Small delay between out and in

    contentTl.play()
  })
}

// Main slide switching function with content animation
const switchToSlide = async (slideIndex) => {
  if (isTransitioning.value || slideIndex === currentSlide.value) return
  
  isTransitioning.value = true
  
  // Determine direction
  let direction = 'next'
  if (slideIndex === getPrevSlideIndex()) {
    direction = 'prev'
  } else if (slideIndex === getNextSlideIndex()) {
    direction = 'next'
  } else {
    // Handle direct clicks
    const distNext = (slideIndex - currentSlide.value + slides.length) % slides.length
    const distPrev = (currentSlide.value - slideIndex + slides.length) % slides.length
    direction = distNext <= distPrev ? 'next' : 'prev'
  }
  
  // Get all image containers
  const centerImage = document.querySelector('.center-image-container')
  const leftImage = document.querySelector('.left-image-container')  
  const rightImage = document.querySelector('.right-image-container')
  
  if (!centerImage || !leftImage || !rightImage) {
    isTransitioning.value = false
    return
  }
  
  // Create timeline for image circular movement
  const imageTl = gsap.timeline()
  
  const duration = 0.8
  const ease = "power2.inOut"
  
  if (direction === 'next') {
    // CIRCULAR CLOCKWISE MOVEMENT:
    // Center → Top-Left (exit up-left)
    imageTl.to(centerImage, {
      x: -120,
      y: -80,
      duration: duration,
      ease: ease,
      force3D: true
    }, 0)
    
    // Right → Center (main movement)
    imageTl.to(rightImage, {
      x: 0,
      y: 0,
      duration: duration,
      ease: ease,
      force3D: true
    }, 0)
    
    // Left → Top-Right (moves to replace right)
    imageTl.to(leftImage, {
      x: 120,
      y: -80,
      duration: duration,
      ease: ease,
      force3D: true
    }, 0)
    
  } else {
    // CIRCULAR COUNTER-CLOCKWISE MOVEMENT:
    // Center → Top-Right (exit up-right)
    imageTl.to(centerImage, {
      x: 120,
      y: -80,
      duration: duration,
      ease: ease,
      force3D: true
    }, 0)
    
    // Left → Center (main movement)
    imageTl.to(leftImage, {
      x: 0,
      y: 0,
      duration: duration,
      ease: ease,
      force3D: true
    }, 0)
    
    // Right → Top-Left (moves to replace left)
    imageTl.to(rightImage, {
      x: -120,
      y: -80,
      duration: duration,
      ease: ease,
      force3D: true
    }, 0)
  }

  // Start image animation and content animation simultaneously
  const imageAnimationPromise = new Promise((resolve) => {
    imageTl.call(resolve)
    imageTl.play()
  })

  // Start content animation after a slight delay
  setTimeout(() => {
    animateContent(direction).then(() => {
      // Content animation completed
    })
  }, 100)

  // Wait for image animation to complete, then update slide and reset positions
  await imageAnimationPromise
  
  // Update slide index AFTER image animation
  currentSlide.value = slideIndex
  
  // Reset image positions to default
  await nextTick()
  resetToDefaultPositions()
  
  isTransitioning.value = false
}

// Reset all positions to their default circular layout
const resetToDefaultPositions = () => {
  const centerImage = document.querySelector('.center-image-container')
  const leftImage = document.querySelector('.left-image-container')
  const rightImage = document.querySelector('.right-image-container')
  
  if (!centerImage || !leftImage || !rightImage) return
  
  // Reset to default circular positions with hardware acceleration
  gsap.set(centerImage, {
    x: 0,
    y: 0,
    force3D: true
  })
  
  gsap.set(leftImage, {
    x: -120,
    y: -80,
    force3D: true
  })
  
  gsap.set(rightImage, {
    x: 120,
    y: -80,
    force3D: true
  })
}

// Touch/Swipe functionality
const touchStartX = ref(0)
const touchEndX = ref(0)
const isSwiping = ref(false)

const handleTouchStart = (event) => {
  if (isTransitioning.value) return
  touchStartX.value = event.touches[0].clientX
  isSwiping.value = true
}

const handleTouchMove = (event) => {
  if (!isSwiping.value || isTransitioning.value) return
  touchEndX.value = event.touches[0].clientX
}

const handleTouchEnd = () => {
  if (!isSwiping.value || isTransitioning.value) return
  
  const swipeThreshold = 50
  const swipeDistance = touchEndX.value - touchStartX.value
  
  if (Math.abs(swipeDistance) > swipeThreshold) {
    if (swipeDistance > 0) {
      switchToSlide(getPrevSlideIndex())
    } else {
      switchToSlide(getNextSlideIndex())
    }
  }
  
  isSwiping.value = false
}

// Mouse drag functionality
const isDragging = ref(false)
const dragStartX = ref(0)
const dragEndX = ref(0)

const handleMouseDown = (event) => {
  if (isTransitioning.value) return
  isDragging.value = true
  dragStartX.value = event.clientX
}

const handleMouseMove = (event) => {
  if (!isDragging.value || isTransitioning.value) return
  dragEndX.value = event.clientX
}

const handleMouseUp = () => {
  if (!isDragging.value || isTransitioning.value) return
  
  const dragThreshold = 50
  const dragDistance = dragEndX.value - dragStartX.value
  
  if (Math.abs(dragDistance) > dragThreshold) {
    if (dragDistance > 0) {
      switchToSlide(getPrevSlideIndex())
    } else {
      switchToSlide(getNextSlideIndex())
    }
  }
  
  isDragging.value = false
}

const handleSelectStart = (event) => {
  if (isDragging.value || isSwiping.value) {
    event.preventDefault()
  }
}

// Keyboard navigation
const handleKeyDown = (event) => {
  if (isTransitioning.value) return
  if (event.key === 'ArrowLeft') {
    switchToSlide(getPrevSlideIndex())
  } else if (event.key === 'ArrowRight') {
    switchToSlide(getNextSlideIndex())
  }
}

onMounted(() => {
  nextTick(() => {
    resetToDefaultPositions()
    window.addEventListener('keydown', handleKeyDown)
  })
})

onUnmounted(() => {
  gsap.killTweensOf("*")
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <section class="bg-[radial-gradient(65.64%_65.64%_at_50%_34.36%,_#565656_0%,_#353535_54.08%,_#1F1F1F_100%)] pb-[30px] relative overflow-hidden">
    <div class="min-h-screen pt-[100px]">
      <!-- Main Content Container -->
      <div class="relative z-10 w-full">
        <!-- Images Container - Circular Layout -->
        <div class="text-center -mb-20 relative h-[320px] overflow-visible">
          <div class="inline-block relative w-[350px] h-[320px]">
            
            <!-- Left Top Position - Background Image -->
            <div 
              class="left-image-container absolute top-[30px] left-[50px] cursor-pointer transition-transform duration-200"
              @click="!isTransitioning && switchToSlide(getPrevSlideIndex())"
              style="transform: translateX(-120px) translateY(-80px)">
              <div class="w-[130px] h-[140px] overflow-hidden opacity-60">
                <img :src="slides[getPrevSlideIndex()].image" alt="Previous slide" class="w-full h-full object-cover" />
              </div>
              <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-brand rounded-full"></div>
            </div>
            
            <!-- Right Top Position - Background Image -->
            <div 
              class="right-image-container absolute top-[30px] right-[50px] cursor-pointer transition-transform duration-200"
              @click="!isTransitioning && switchToSlide(getNextSlideIndex())"
              style="transform: translateX(120px) translateY(-80px)">
              <div class="w-[130px] h-[140px] overflow-hidden opacity-60">
                <img :src="slides[getNextSlideIndex()].image" alt="Next slide" class="w-full h-full object-cover" />
              </div>
              <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-brand "></div>
            </div>
  
            <!-- Center Position - Main Image -->
            <div 
              class="center-image-container absolute top-[50px] left-1/2 transform -translate-x-1/2 cursor-grab active:cursor-grabbing select-none"
              @touchstart="handleTouchStart"
              @touchmove="handleTouchMove"
              @touchend="handleTouchEnd"
              @mousedown="handleMouseDown"
              @mousemove="handleMouseMove"
              @mouseup="handleMouseUp"
              @mouseleave="handleMouseUp"
              @selectstart="handleSelectStart">
              <img 
                :src="slides[currentSlide].image" 
                alt="Main Beauty Model" 
                class="w-[200px] h-[240px] object-cover pointer-events-none" />
            </div>
          </div>
        </div>
  
        <!-- Content Card - FIXED CONTAINER -->
        <div
          class="content-container bg-[#FFFFFF05] mx-[30px] rounded-3xl px-[25px] pt-[70px] pb-[25px] backdrop-blur-[20px] shadow-[inset_0px_-5px_21px_0px_#E3EDEF33,inset_0px_0px_3px_0px_#9A92D24D,inset_0px_70px_47px_-75px_#CAACFF4D,inset_0px_2px_10px_-4px_#FFFFFF42,inset_0px_34px_29px_-49px_#FFFFFF80] relative">
          
          <!-- Card Stack Effect -->
          <div class="absolute inset-0 rounded-3xl overflow-hidden">
            <div class="absolute inset-0 bg-[#FFFFFF03] rounded-3xl transform scale-95 translate-x-2 opacity-60"></div>
            <div class="absolute inset-0 bg-[#FFFFFF03] rounded-3xl transform scale-95 -translate-x-2 opacity-60"></div>
          </div>
  
          <!-- Current Slide Content - ANIMATED INNER CONTENT -->
          <div class="content-inner relative z-10">
            <!-- Title -->
            <div class="flex justify-between items-center mb-4">
              <h1 class="text-[26px] font-bold text-white mb-2">
                <span class="text-brand">{{ slides[currentSlide].title.split(' ')[0] }}</span> 
                {{ slides[currentSlide].title.split(' ').slice(1).join(' ') }}
              </h1>
              <button class="text-brand -rotate-[15deg] bg-[#FFFFFF1A] w-[103px] h-[45px] rounded-[40px] text-[24px] font-semibold absolute left-0 -top-8">
                <span class="text-white">{{ slides[currentSlide].lines }}</span> لاین
              </button>
            </div>
  
            <!-- Description -->
            <div class="text-white text-sm leading-[23px] mb-8 text-justify font-medium">
              <p>{{ slides[currentSlide].description }}</p>
            </div>
  
            <!-- Main CTA Button -->
            <div>
              <button 
                @click="selectService(slides[currentSlide])"
                class="w-full bg-brand text-white font-semibold h-[42px] rounded-full transition-transform duration-200">
                برو به صفحه {{ slides[currentSlide].title }}
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Support Button -->
      <div class="w-full bottom-10 absolute pt-[60px] flex items-center justify-center">
        <button
          class="flex justify-center w-[169px] h-[46px] items-center bg-transparent border border-white text-white font-medium rounded-full shadow-lg transition-transform duration-200">
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

/* Smooth hover transitions only */
.transition-transform {
  transition: transform 0.2s ease-out;
}

/* Ensure proper positioning */
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

/* Allow overflow for circular animation */
.overflow-visible {
  overflow: visible;
}

/* Content animation styles */
.content-inner {
  /* Ensure content is ready for GSAP animations */
  transform: translateY(0);
  opacity: 1;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .inline-block {
    transform: scale(0.85);
  }
}

@media (max-width: 480px) {
  .inline-block {
    transform: scale(0.75);
  }
}
</style>