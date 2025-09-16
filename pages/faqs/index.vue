<script setup>
import { useStartWebsite } from "@/store/initWebsite";
import FaqItem from "~/components/global/FaqItem.vue";
import { useFaq } from "~/composables/home/useFaq";
import { useFaqs } from "~/composables/faqs/useFaqs";
const startWebsite = useStartWebsite();
const router = useRouter();

// Initialize FAQ state management
const faqState = useFaq();
provide('faqComposable', faqState);

// Fetch FAQs from API
const { faqs, loading, error, hasNextPage, hasPrevPage, nextPage, prevPage, currentPage } = useFaqs();

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}

onMounted(() => {
  startWebsite.setImageClicked(true);
});

// Category filtering
const categoryList = ref(["همه", "خدمات لاغری", "آنالیز اندارم", "عضله ساز"]);
const selectedCategory = ref(0);
const isCategoryOpen = ref(false);
const searchQuery = ref("");

// Get unique categories from API data
const uniqueCategories = computed(() => {
  if (!faqs.value?.data) return ["همه"];
  const categories = new Set(faqs.value.data.map(faq => faq.category));
  return ["همه", ...Array.from(categories)];
});

// Filter FAQs based on selected category and search
const filteredFaqs = computed(() => {
  if (!faqs.value?.data) return [];
  
  let filtered = faqs.value.data;
  
  // Filter by category
  if (selectedCategory.value > 0) {
    const selectedCategoryName = uniqueCategories.value[selectedCategory.value];
    filtered = filtered.filter(faq => faq.category === selectedCategoryName);
  }
  
  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim();
    filtered = filtered.filter(faq => 
      faq.question.toLowerCase().includes(query) || 
      faq.answer.toLowerCase().includes(query)
    );
  }
  
  return filtered;
});

// Update category list when data changes
watch(() => faqs.value?.data, () => {
  categoryList.value = uniqueCategories.value;
}, { immediate: true });
</script>

<template>
  <div class="flex flex-col items-center bg-[#EFEFEF] pt-[84px] px-[16px]">
    <div class="flex items-center justify-between w-full">
      <header class="">
        <h1 class="text-xl font-bold">
          <span class="text-brand">پرسش</span> های متداول
        </h1>
      </header>

      <img @click="goBack" src="/icons/left-arrow.svg" alt="" class="cursor-pointer" />
    </div>

    <div class="flex items-center h-[46px] bg-[#ffffff] rounded-[16px] px-[16px] mt-[16px] w-full">
      <img src="/icons/search-icon.svg" alt="" class="size-[20px]" />
      <input
        v-model="searchQuery"
        type="text"
        placeholder="سوال مورد نظر را جستجو کنید..."
        class="p-[8px] w-full h-full focus:outline-0 placeholder-[#2E2E2E80]"
      />
    </div>

    <div class="flex flex-col gap-[4px] w-full mt-[10px]">
      <p class="text-[14px] font-medium text-[#000000]">انتخاب دسته بندی</p>

      <div class="w-full">
        <!-- Category Selector -->
        <div
          @click="isCategoryOpen = !isCategoryOpen"
          class="flex items-center justify-between cursor-pointer bg-white p-4 w-full rounded-[16px]"
        >
          <h3 class="text-sm font-medium leading-[23px]">
            {{ categoryList[selectedCategory] }}
          </h3>
          <svg
            class="transition-transform duration-300"
            :class="{ 'rotate-180': isCategoryOpen }"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_362_39)">
              <path
                d="M8.47438 6.35397C8.80169 6.08701 9.2842 6.10584 9.58929 6.41094L15.4226 12.2443L15.4796 12.3077C15.7466 12.6351 15.7277 13.1176 15.4226 13.4227C15.1175 13.7278 14.635 13.7466 14.3077 13.4796L14.2442 13.4227L9.0001 8.17852L3.75596 13.4227C3.43052 13.7481 2.90301 13.7481 2.57757 13.4227C2.25214 13.0972 2.25214 12.5697 2.57757 12.2443L8.41091 6.41094L8.47438 6.35397Z"
                fill="#2E2E2E"
              />
            </g>
            <defs>
              <clipPath id="clip0_362_39">
                <rect
                  x="18"
                  y="18.5"
                  width="18"
                  height="18"
                  rx="9"
                  transform="rotate(-180 18 18.5)"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <!-- Category Options -->
        <transition name="slide-fade">
          <div
            v-if="isCategoryOpen"
            class="mt-4 flex items-center gap-[10px] overflow-x-scroll custom-scroll"
          >
            <div
              v-for="(category, i) in categoryList"
              :key="i"
              class="px-[16px] py-[8px] rounded-[30px] cursor-pointer"
              :class="selectedCategory === i ? 'bg-[#ED1C24]' : 'bg-[#ffffff]'"
              @click="() => {
                selectedCategory = i;
                isCategoryOpen = false;
              }"
            >
              <p
                class="text-[14px] text-nowrap"
                :class="selectedCategory === i ? 'text-[#ffffff]' : 'text-[#2E2E2E]'"
              >
                {{ category }}
              </p>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <div class="bg-[#EFEFEF] py-[16px] w-full">
      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-8">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-brand"></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
        <p>خطا در دریافت اطلاعات. لطفا دوباره تلاش کنید.</p>
      </div>

      <!-- FAQ Section -->
      <section v-else class="space-y-4">
        <!-- No FAQs Found -->
        <div v-if="filteredFaqs.length === 0" class="text-center py-8 text-gray-600">
          <p>هیچ سوالی یافت نشد.</p>
        </div>

        <!-- FAQ Items -->
        <div v-else class="space-y-4">
        
            <!-- FAQ Item -->
            <FaqItem v-for="faq in filteredFaqs" :key="faq.id"
              :question="faq.question"
              :answer="faq.answer"
              :item-id="faq.id"
            />
        </div>
      </section>

      <!-- Button to navigate to FAQ Category Page -->
      <button class="mt-8 w-full bg-brand text-center rounded-full h-[48px]">
        <NuxtLink
          to="#"
          class="bg-brand text-white font-semibold leading-[26px] rounded-full w-full"
          >مشاهده بیشتر</NuxtLink
        >
      </button>
    </div>
  </div>
</template>

<style scoped>
.custom-scroll::-webkit-scrollbar {
  width: 0px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>