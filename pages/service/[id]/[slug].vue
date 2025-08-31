<script setup>
import { useStartWebsite } from "@/store/initWebsite";
import { useService } from '~/composables/services/useService'

const startWebsite = useStartWebsite();
const route = useRoute()
const { service, loading, error, fetchService } = useService()

const activeIndex = ref(null);

// Fetch service data on component mount
onMounted(async () => {
  startWebsite.setImageClicked(true);
  await fetchService(route.params.id)
});

const categories = ref([
  {
    id: 1,
    title: 'بوتاکس',
  },
  {
    id: 2,
    title: 'ژل و فیلر',
  },
  {
    id: 3,
    title: 'مزوتراپی',
  },
  {
    id: 4,
    title: 'پی آر پی',
  },
  {
    id: 5,
    title: 'مزوژل ها',
  },
  {
    id: 6,
    title: 'سایر',
  },
])

// Loading state
const isLoading = computed(() => loading.value)
// Error state
const hasError = computed(() => error.value !== null)
// Service data
const serviceData = computed(() => service.value)

// Computed properties for service data
const serviceName = computed(() => serviceData.value?.name || '')
const serviceType = computed(() => serviceData.value?.type || '')
const serviceDescription = computed(() => serviceData.value?.description || '')
const serviceMainImage = computed(() => serviceData.value?.main_image || '/images/blog1.png')
const serviceBeforeAfters = computed(() => serviceData.value?.beforeAfters || [])
const serviceClips = computed(() => serviceData.value?.clips || [])
const serviceMaterials = computed(() => serviceData.value?.materials || [])
const serviceFaqs = computed(() => serviceData.value?.faqs || [])

// Prepare clips data for video slider
const clipsData = computed(() => {
  return serviceClips.value.length > 0 
    ? serviceClips.value.map(clip => clip.url || clip.image || clip)
    : ['/images/services2.png']
})
</script>

<template>
  <div>
    <!-- Loading State -->
    <div v-if="isLoading" class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ED1C24] mx-auto mb-4"></div>
        <p class="text-[#2E2E2E]">در حال بارگذاری...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="hasError" class="flex items-center justify-center min-h-screen">
      <div class="text-center p-8">
        <div class="text-red-500 text-5xl mb-4">⚠️</div>
        <h2 class="text-xl font-bold text-[#2E2E2E] mb-2">خطا در بارگذاری</h2>
        <p class="text-[#666] mb-4">متأسفانه امکان بارگذاری اطلاعات وجود ندارد</p>
        <button 
          @click="fetchService(route.params.id)"
          class="px-4 py-2 bg-[#ED1C24] text-white rounded-lg hover:bg-[#d91920] transition-colors"
        >
          تلاش مجدد
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div v-else-if="serviceData">
      <div class="w-full h-[354px] relative">
        <div class="absolute top-0 left-0 w-full h-[354px] bg-[#000000af] z-[2]" />
        <img :src="serviceMainImage" :alt="serviceName" class="w-full h-[354px] object-cover" />
        <div class="flex flex-col absolute top-[94px] right-[16px] z-[3]">
          <p class="text-[#ED1C24] text-[30px] font-bold">{{ serviceType }}</p>
          <p class="text-[#FFFFFF] text-[30px] font-bold">{{ serviceName }}</p>
        </div>

        <div class="grid grid-cols-3 gap-[10px] px-[16px] w-full absolute top-[198px] right-0 z-[3]">
          <div v-for="(x, index) in categories" :key="index" @click="activeIndex = index"
            class="h-[38px] rounded-[30px] flex items-center justify-center cursor-pointer backdrop-blur-xl inset-shadow-[0px_-5px_21px_0px_#e3edef41,0px_70px_47px_-74px_#CAACFF4D]"
            :class="activeIndex === index ? 'bg-brand' : 'bg-transparent'">
            <p class="text-[14px] text-[#ffffff]">{{ x.title }}</p>
          </div>
        </div>
      </div>
      
      <div class="flex flex-col pt-[20px] px-[16px] mt-[-40px] relative bg-[#F8F8F8] rounded-t-[40px] pb-[16px] z-[10]" data-aos="fade-up"> 
        <p class="text-[20px] font-bold">
          <span class="text-[#ED1C24]">{{ serviceName }}</span>
          <span class="text-[#000000]"> چیست ؟</span>
        </p>

        <div 
          v-html="serviceDescription" 
          class="text-[16px] text-justify text-[#2E2E2E] leading-[30px] mt-[10px]"
        ></div>

        <div class="flex items-center justify-end">
          <ServicesFastSupport />
        </div>
      </div>

      <!-- Before/After Section -->
      <HomeBeforAfterExample 
        v-if="serviceBeforeAfters.length > 0" 
        :data="serviceBeforeAfters"
        data-aos="fade-up" 
        data-aos-once="true"
      />

      <!-- Video Slider Section -->
      <ServicesVideoSlider 
        :data="clipsData" 
        data-aos="fade-up" 
        data-aos-once="true"
      />

      <!-- FAQ Section -->
      <ServicesFaqSection 
        v-if="serviceFaqs.length > 0"
        :faqs="serviceFaqs"
        data-aos="fade-up" 
        data-aos-once="true"
      />

      <!-- Materials/Devices Section -->
      <section 
        v-if="serviceMaterials.length > 0" 
        class="flex flex-col w-full bg-[#F5F5F5] px-[16px] py-[30px] relative"
      >
        <div class="absolute bottom-0 right-0 w-full bg-gradient-to-t h-[200px] from-[#00000016] to-[#00000000]"></div>
        <p class="text-[20px] font-bold">
          <span class="text-[#ED1C24]"> متریال درجه یک </span>
          <span class="text-[#000000]"> برای {{ serviceName }} </span>
          <span class="text-[#ED1C24]"> ! </span>
        </p>

        <div data-aos="fade-up" data-aos-once="true">
          <ServicesSliderComponent :slides="serviceMaterials" />
    
          <p class="text-[20px] font-bold">
            <span class="text-[#000000]"> {{ serviceName }} در کمتر از 20 دقیقه، </span>
            <span class="text-[#ED1C24]"> بدون درد </span>
            <span class="text-[#000000]"> و با </span>
            <span class="text-[#ED1C24]"> بی حسی </span>
            <span class="text-[#000000]"> موضعی انجام می شود. </span>
          </p>
        </div>
      </section>

      <Comments/>
      <HomeBlogsSection/>
    </div>
  </div>
</template>

<style scoped>
.custom-gradient {
  @apply bg-no-repeat bg-cover;
  background-image:
    linear-gradient(0deg, #F5F5F5, #F5F5F5),
    linear-gradient(180deg, rgba(0, 0, 0, 0) 90.73%, rgba(0, 0, 0, 0.2) 110.4%);
}
</style>