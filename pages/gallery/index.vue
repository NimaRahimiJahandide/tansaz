<script setup>
import { useStartWebsite } from "@/store/initWebsite";
import { useGalleries } from "@/composables/gallery/useGalleries";

const startWebsite = useStartWebsite();
const { galleries, pending, error, refresh } = useGalleries();
const isModalOpen = ref(false);
const selectedGallery = ref(null);
const router = useRouter();

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}

const openModal = (gallery) => {
  selectedGallery.value = gallery;
  isModalOpen.value = true;
}

const closeModal = () => {
  isModalOpen.value = false;
  selectedGallery.value = null;
}

// Retry function for error handling
const retryFetch = () => {
  refresh();
}

onMounted(() => {
  startWebsite.setImageClicked(true);
});
</script>

<template>
  <div>
    <section class="flex flex-col items-center bg-[#EFEFEF] pt-[84px] pb-[50px] px-[16px]">
      <div class="flex items-center justify-between w-full">
        <header class="">
          <h1 class="text-xl font-bold">
            <span class="text-brand">گالری </span>تصاویر و تور مجازی
          </h1>
        </header>
  
        <img @click="goBack" src="/icons/left-arrow.svg" alt="" />
      </div>
  
      <div class="flex flex-col gap-[10px] w-full mt-[25px]">
        <p class="text-[14px] font-medium text-[#828282]">
          ویدیو از نمای بیرونی و داخلی ساختمان کلینیک تن ساز
        </p>
  
        <div class="relative">
          <img src="/images/gallery-video.png" alt="" class="w-full rounded-[22px]">
        </div>
  
        <button class="mt-[22px] w-full bg-brand text-center rounded-full h-[48px]">
          <NuxtLink to="#" class="bg-brand text-white font-semibold leading-[26px] rounded-full w-full">تور مجازی
            کلینیک تن ساز</NuxtLink>
        </button>
      </div>
  
      <div class="flex items-center justify-between w-full mt-[30px]">
        <header class="">
          <h1 class="text-[18px] font-semibold">
            <span class="text-brand">تصاویر</span>مجموعه
          </h1>
        </header>
  
        <p class="text-[14px] font-medium text-[#2E2E2E]" v-if="!pending && galleries.length > 0">
          {{ galleries.length }} تصویر
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="flex justify-center items-center w-full mt-[30px] py-[50px]">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-brand"></div>
        <p class="ml-3 text-[14px] text-[#828282]">در حال بارگذاری...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="flex flex-col items-center w-full mt-[30px] py-[50px]">
        <p class="text-[14px] text-red-500 mb-4 text-center">خطا در دریافت اطلاعات گالری</p>
        <button 
          @click="retryFetch" 
          class="px-4 py-2 bg-brand text-white rounded-full text-[14px] font-medium"
        >
          تلاش مجدد
        </button>
      </div>

      <!-- Gallery Grid -->
      <div v-else-if="galleries.length > 0" class="grid grid-cols-2 gap-[16px] mt-[15px] w-full">
        <div 
          v-for="gallery in galleries" 
          :key="gallery.id"
          @click="openModal(gallery)"
          class="cursor-pointer"
          data-aos="fade-up" 
          data-aos-once="true"
        >
          <img 
            :src="gallery.thumb_image" 
            :alt="gallery.title" 
            class="rounded-[16px] w-full aspect-square object-cover hover:opacity-90 transition-opacity"
          />
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="flex flex-col items-center w-full mt-[30px] py-[50px]">
        <p class="text-[14px] text-[#828282] text-center">هیچ تصویری یافت نشد</p>
      </div>
  
      <button 
        v-if="galleries.length > 0" 
        class="mt-[22px] w-full bg-brand text-center rounded-full h-[48px]" 
        data-aos="fade-up" 
        data-aos-once="true"
      >
        <NuxtLink to="#" class="bg-brand text-white font-semibold leading-[26px] rounded-full w-full">
          مشاهده بیشتر
        </NuxtLink>
      </button>
    </section>
  
    <!-- Modal Backdrop -->
    <div 
      v-if="isModalOpen"
      @click="closeModal"
      class="fixed top-0 left-0 w-screen h-screen bg-black/40 backdrop-blur-sm z-[50] transition-opacity duration-300" 
    />
  
    <!-- Modal Content -->
    <div
      class="z-[99] flex flex-col bg-[#ffffff] fixed translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] rounded-[22px] duration-300 shadow-2xl"
      style="width: calc(100vw - 32px); max-width: 400px;" 
      :class="isModalOpen ? 'scale-100' : 'scale-0'"
      v-if="selectedGallery"
    >
      
      <!-- Header with close button -->
      <div class="flex justify-between items-center px-[16px] py-[16px] border-b border-gray-100">
        <h1 class="text-[16px] font-bold">
          <span class="text-brand">{{ selectedGallery.title }}</span>
        </h1>
        <button @click="closeModal" class="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Icon name="heroicons:x-mark" size="20" class="text-gray-600" />
        </button>
      </div>
  
      <!-- Image section -->
      <div class="relative">
        <img 
          :src="selectedGallery.main_image" 
          :alt="selectedGallery.title" 
          class="w-full aspect-square object-cover" 
        />
      </div>
  
      <!-- Content section -->
      <div class="flex flex-col gap-[12px] p-[16px]">
        <div class="flex justify-between items-center">
          <p class="text-[16px] font-semibold text-[#2E2E2E]">توضیحات :</p>
  
          <div class="flex items-center gap-1 px-[8px] py-[4px] bg-[#ED1C241A] rounded-[35px]">
            <Icon name="heroicons:eye" size="12" class="text-[#ED1C24]" />
            <p class="text-[12px] font-medium text-[#ED1C24]">{{ selectedGallery.views }} بازدید</p>
          </div>
        </div>
  
        <p class="text-[14px] text-[#2E2E2E] leading-6">
          {{ selectedGallery.description }}
        </p>

        <p class="text-[12px] text-[#828282] mt-2">
          تاریخ: {{ selectedGallery.created_at_fa }}
        </p>
      </div>
    </div>
  </div>
</template>