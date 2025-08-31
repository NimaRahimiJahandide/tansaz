<template>
  <div class="bg-[#EFEFEF] p-4 py-[30px] w-full">
    <!-- FAQ Banner - فقط در صفحه اصلی نمایش داده می‌شود -->
    <img 
      v-if="showBanner && typeof onScrollToLuck === 'function'" 
      @click="onScrollToLuck"
      class="object-cover pb-[30px] cursor-pointer hover:opacity-90 transition-opacity duration-300" 
      src="/images/Faq-Banner.png" 
      alt="Faq-Banner" 
    />
    
    <!-- Header -->
    <header class="mb-8">
      <h1 class="text-xl font-bold">
        <span class="text-brand">پرسش</span> های متداول
      </h1>
    </header>

    <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
      <!-- Loading State -->
      <div v-if="finalLoading" class="flex justify-center items-center py-8">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-brand"></div>
      </div>

      <!-- Error State -->
      <div v-else-if="finalError" class="text-center py-8">
        <p class="text-red-500 mb-4">{{ finalError }}</p>
        <button 
          v-if="showRetryButton"
          @click="handleRetry" 
          class="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand/90 transition-colors"
        >
          تلاش مجدد
        </button>
      </div>

      <!-- FAQ Section -->
      <section v-else-if="finalFaqs && finalFaqs.length > 0" class="space-y-4">
        <!-- FAQ Items -->
        <ServicesFaqItem 
          v-for="faq in finalFaqs" 
          :key="`faq-${faq.id}`"
          :item-id="`faq-${faq.id}`"
          :question="faq.question" 
          :answer="faq.answer" 
          class="transform transition-all duration-300"
        />
      </section>

      <!-- Empty State -->
      <div v-else-if="!finalLoading" class="text-center py-8">
        <p class="text-gray-500">پرسش متداولی یافت نشد.</p>
      </div>
  
      <button 
        class="mt-8 w-full bg-brand text-center rounded-full h-[48px] transition-colors duration-300"
      >
        <NuxtLink 
          to="/faqs" 
          class="bg-brand text-white font-semibold leading-[26px] rounded-full w-full h-full flex items-center justify-center transition-colors duration-300"
        >
          صفحه دسته بندی پرسش های متداول
        </NuxtLink>
      </button>

    </div>
  </div>
</template>

<script setup>
// Props
const props = defineProps({
  // FAQ data - can be passed from parent component
  faqs: {
    type: Array,
    default: () => []
  },
  // Loading state
  loading: {
    type: Boolean,
    default: false
  },
  // Error message
  error: {
    type: String,
    default: null
  },
  // Show banner image (for home page)
  showBanner: {
    type: Boolean,
    default: true
  },
  // Show category button (for home page)
  showCategoryButton: {
    type: Boolean,
    default: true
  },
  // Show retry button in error state
  showRetryButton: {
    type: Boolean,
    default: true
  },
  // Scroll to luck function (for home page)
  onScrollToLuck: {
    type: Function,
    default: null
  }
})

// Emits
const emit = defineEmits(['retry'])

// For backward compatibility with home page
const shouldUseComposable = computed(() => {
  return props.faqs.length === 0 && !props.loading && !props.error
})

// Composables - فقط برای backward compatibility
let faqComposable = null
let faqApi = null

// Initialize composables if needed
onMounted(async () => {
  if (shouldUseComposable.value) {
    try {
      // Import composables only when needed
      const { useFaq, useFaqApi } = await import('~/composables/home/useFaq')
      
      faqComposable = useFaq()
      faqApi = useFaqApi()
      
      // Provide FAQ composable to child components
      provide('faqComposable', faqComposable)
      
      // Fetch FAQs
      if (faqApi && faqApi.fetchFaqs) {
        faqApi.fetchFaqs()
      }
    } catch (error) {
      console.warn('Could not load FAQ composable:', error)
    }
  }
})

// Computed properties for data
const finalFaqs = computed(() => {
  if (props.faqs.length > 0) {
    return props.faqs
  }
  return faqApi?.faqs?.value || []
})

const finalLoading = computed(() => {
  if (props.loading !== undefined) {
    return props.loading
  }
  return faqApi?.loading?.value || false
})

const finalError = computed(() => {
  if (props.error !== null) {
    return props.error
  }
  return faqApi?.error?.value || null
})

// Refetch function for error handling
const handleRetry = () => {
  if (props.showRetryButton) {
    emit('retry')
  } else if (faqApi && faqApi.fetchFaqs) {
    faqApi.fetchFaqs()
  }
}
</script>

<style scoped>
/* Additional smooth transitions */
.space-y-4 > * + * {
  margin-top: 1rem;
}

/* Improve button interactions */
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

button:active {
  transform: translateY(0);
}

/* Loading spinner animation */
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>