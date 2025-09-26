<template>
  <div class="bg-white rounded-[16px] p-4 overflow-hidden">
    <!-- Question -->
    <div @click="handleToggle" class="flex items-center justify-between cursor-pointer select-none">
      <h3 class="text-sm font-medium leading-[23px] pr-2 truncate-text">{{ question }}</h3>
      <div 
        class="transition-transform duration-500 ease-out transform-gpu shrink-0 rotate-180" 
        :class="{ 'rotate-[360deg]': isOpen }"
      >
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_362_39)">
            <path
              d="M8.47438 6.35397C8.80169 6.08701 9.2842 6.10584 9.58929 6.41094L15.4226 12.2443L15.4796 12.3077C15.7466 12.6351 15.7277 13.1176 15.4226 13.4227C15.1175 13.7278 14.635 13.7466 14.3077 13.4796L14.2442 13.4227L9.0001 8.17852L3.75596 13.4227C3.43052 13.7481 2.90301 13.7481 2.57757 13.4227C2.25214 13.0972 2.25214 12.5697 2.57757 12.2443L8.41091 6.41094L8.47438 6.35397Z"
              fill="#2E2E2E" />
          </g>
          <defs>
            <clipPath id="clip0_362_39">
              <rect x="18" y="18.5" width="18" height="18" rx="9" transform="rotate(-180 18 18.5)"
                fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>

    <!-- Answer Container -->
    <div 
      ref="answerContainer"
      class="transition-all duration-500 ease-out"
      :style="containerStyle"
    >
      <div 
        ref="answerContent"
        class="transition-all duration-500 ease-out"
        :class="contentClasses"
      >
        <div class="pt-4 border-t border-[#E1E1E1] mt-4">
          <p class="text-[#2E2E2E] text-sm text-justify leading-[26px]">
            {{ answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  itemId: {
    type: [String, Number],
    default: () => Math.random().toString(36).substr(2, 9)
  }
});

// Get composable instance from parent or create new one
const { toggleItem, isActive } = inject('faqComposable', () => {
  // Fallback if no composable provided
  const showAnswer = ref(false)
  return {
    toggleItem: () => { showAnswer.value = !showAnswer.value },
    isActive: () => showAnswer.value
  }
})

const answerContainer = ref(null)
const answerContent = ref(null)
const contentHeight = ref(0)

const isOpen = computed(() => isActive(props.itemId))

const containerStyle = computed(() => ({
  height: isOpen.value ? `${contentHeight.value}px` : '0px',
  paddingTop: isOpen.value ? '0px' : '0px',
  paddingBottom: isOpen.value ? '0px' : '0px',
  overflow: isOpen.value ? 'visible' : 'hidden'
}))

const contentClasses = computed(() => ({
  'transform translate-y-0 opacity-100': isOpen.value,
  'transform -translate-y-2 opacity-0': !isOpen.value,
}))

const handleToggle = () => {
  toggleItem(props.itemId)
}

const measureContent = () => {
  if (answerContent.value) {
    // Temporarily show content to measure it
    const container = answerContainer.value
    const content = answerContent.value
    
    const originalHeight = container.style.height
    const originalOverflow = container.style.overflow
    
    container.style.height = 'auto'
    container.style.overflow = 'visible'
    
    contentHeight.value = content.scrollHeight
    
    container.style.height = originalHeight
    container.style.overflow = originalOverflow
  }
}

// Watch for content changes and remeasure
watch(() => props.answer, () => {
  nextTick(measureContent)
}, { immediate: false })

onMounted(() => {
  nextTick(measureContent)
  
  // Remeasure on window resize
  const handleResize = () => {
    measureContent()
  }
  
  window.addEventListener('resize', handleResize)
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
})
</script>

<style scoped>
/* Add hardware acceleration for smoother animations */
.transform-gpu {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Ensure smooth transitions */
* {
  will-change: auto;
}

/* Improve text rendering during animations */
.transition-all {
  text-rendering: optimizeSpeed;
}

/* Text truncation for question */
.truncate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
</style>