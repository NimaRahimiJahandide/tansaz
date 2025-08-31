<template>
  <div class="bg-[#EFEFEF] p-4 py-[30px] w-full">
    <img 
      v-if="$route.path === '/' && typeof onScrollToLuck === 'function'" 
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
      <div v-if="loading" class="flex justify-center items-center py-8">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-brand"></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-8">
        <p class="text-red-500 mb-4">{{ error }}</p>
        <button 
          @click="refetch" 
          class="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand/90 transition-colors"
        >
          تلاش مجدد
        </button>
      </div>

      <!-- FAQ Section -->
      <section v-else class="space-y-4">
        <!-- FAQ Items -->
        <HomeFaqItem 
          v-for="faq in faqs" 
          :key="`faq-${faq.id}`"
          :item-id="`faq-${faq.id}`"
          :question="faq.question" 
          :answer="faq.answer" 
          class="transform transition-all duration-300"
        />
      </section>
  
      <!-- Button to navigate to FAQ Category Page -->
      <button class="mt-8 w-full bg-brand text-center rounded-full h-[48px] transition-colors duration-300">
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
// Import composables - تغییر در این قسمت
import { useFaq, useFaqApi } from '~/composables/home/useFaq'

// Initialize composables
const faqComposable = useFaq()
const { faqs, loading, error, fetchFaqs } = useFaqApi()

// Provide FAQ composable to child components
provide('faqComposable', faqComposable)

// Props
defineProps({
  onScrollToLuck: Function
})

// Refetch function for error handling
const refetch = () => {
  fetchFaqs()
}

// Fetch FAQs on component mount
onMounted(() => {
  fetchFaqs()
})
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