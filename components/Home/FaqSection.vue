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
      <!-- FAQ Section -->
      <section class="space-y-4">
        <!-- FAQ Items -->
        <HomeFaqItem 
          v-for="(faq, index) in faqs" 
          :key="`faq-${index}`"
          :item-id="`faq-${index}`"
          :question="faq.question" 
          :answer="faq.answer" 
          class="transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
        />
      </section>
      
      <!-- Control Buttons (optional) -->
      <div class="mt-6 flex gap-2 justify-center">
        <button 
          @click="handleExpandAll"
          class="px-4 py-2 text-sm bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
        >
          باز کردن همه
        </button>
        <button 
          @click="handleCollapseAll"
          class="px-4 py-2 text-sm bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
        >
          بستن همه
        </button>
      </div>
  
      <!-- Button to navigate to FAQ Category Page -->
      <button class="mt-8 w-full bg-brand text-center rounded-full h-[48px] hover:bg-brand/90 transition-colors duration-300">
        <NuxtLink 
          to="/faqs" 
          class="bg-brand text-white font-semibold leading-[26px] rounded-full w-full h-full flex items-center justify-center hover:bg-brand/90 transition-colors duration-300"
        >
          صفحه دسته بندی پرسش های متداول
        </NuxtLink>
      </button>
    </div>
  </div>
</template>

<script setup>
// Initialize FAQ composable
const faqComposable = useFaq()

// Provide composable to child components
provide('faqComposable', faqComposable)

// Props
defineProps({
  onScrollToLuck: Function
})

// FAQ Data
const faqs = [
  {
    question: "سوال مورد نظر انجا قرار میگیرد؟",
    answer: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    question: "سوال مورد نظر انجا قرار میگیرد؟",
    answer: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    question: "سوال مورد نظر انجا قرار میگیرد؟",
    answer: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    question: "سوال مورد نظر انجا قرار میگیرد؟",
    answer: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    question: "سوال مورد نظر انجا قرار میگیرد؟",
    answer: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
]

// Control functions
const handleExpandAll = () => {
  faqs.forEach((_, index) => {
    if (!faqComposable.isActive(`faq-${index}`)) {
      faqComposable.toggleItem(`faq-${index}`)
    }
  })
}

const handleCollapseAll = () => {
  faqComposable.closeAll()
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

button:hover {
  transform: translateY(-1px);
}

button:active {
  transform: translateY(0);
}
</style>