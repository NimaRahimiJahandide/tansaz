<script setup>
import { useStartWebsite } from "@/store/initWebsite";
const startWebsite = useStartWebsite();
const isModalOpen = ref(false);
const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}

const items = ref([
  {
    image: '/images/tour1.png'
  },
  {
    image: '/images/tour2.png'
  },
  {
    image: '/images/tour3.png'
  },
  {
    image: '/images/tour4.png'
  },
])

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
  
        <p class="text-[14px] font-medium text-[#2E2E2E]">32 تصویر</p>
      </div>
  
      <div class="grid grid-cols-2 gap-[16px] mt-[15px]" >
        <img @click="isModalOpen = !isModalOpen" :src="item.image" alt="" class="rounded-[16px] w-full aspect-square" data-aos="fade-up"
          v-for="item in items" :key="item.id" />
      </div>
  
      <button class="mt-[22px] w-full bg-brand text-center rounded-full h-[48px]" data-aos="fade-up">
        <NuxtLink to="#" class="bg-brand text-white font-semibold leading-[26px] rounded-full w-full">مشاهده بیشتر
        </NuxtLink>
      </button>
    </section>
  
    <div v-if="isModalOpen"
      @click="isModalOpen = false"
      class="fixed top-0 left-0 w-screen h-screen bg-black/40 backdrop-blur-sm z-[50] transition-opacity duration-300" />
  
    <div
      class="z-[99] flex flex-col bg-[#ffffff] fixed translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] rounded-[22px] duration-300 shadow-2xl"
      style="width: calc(100vw - 32px); max-width: 400px;" :class="isModalOpen ? 'scale-100' : 'scale-0'">
      
      <!-- Header with close button -->
      <div class="flex justify-between items-center px-[16px] py-[16px] border-b border-gray-100">
        <h1 class="text-[16px] font-bold">
          <span>فضایی برای</span> <span class="text-brand">استراحت</span>
        </h1>
        <button @click="isModalOpen = false" class="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Icon name="heroicons:x-mark" size="20" class="text-gray-600" />
        </button>
      </div>
  
      <!-- Image section -->
      <div class="relative">
        <img src="public/images/tour1.png" alt="" class="w-full aspect-square object-cover" />
      </div>
  
      <!-- Content section -->
      <div class="flex flex-col gap-[12px] p-[16px]">
        <div class="flex justify-between items-center">
          <p class="text-[16px] font-semibold text-[#2E2E2E]">توضیحات :</p>
  
          <div class="flex items-center gap-1 px-[8px] py-[4px] bg-[#ED1C241A] rounded-[35px]">
            <Icon name="heroicons:eye" size="12" class="text-[#ED1C24]" />
            <p class="text-[12px] font-medium text-[#ED1C24]">200 بازدید</p>
          </div>
        </div>
  
        <p class="text-[14px] text-[#2E2E2E] leading-6">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
          از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
          متنوع است.
        </p>
      </div>
    </div>
  </div>
</template>
