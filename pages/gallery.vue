<script setup>
import { useStartWebsite } from "@/store/initWebsite";
const startWebsite = useStartWebsite();
const isModalOpen = ref(true);

onMounted(() => {
  startWebsite.setImageClicked(true);
});
</script>

<template>
  <div
    class="flex flex-col items-center bg-[#EFEFEF] pt-[84px] pb-[50px] px-[16px]"
  >
    <div class="flex items-center justify-between w-full">
      <header class="">
        <h1 class="text-xl font-bold">
          <span class="text-brand">گالری</span>تصاویر و تور مجازی
        </h1>
      </header>

      <img src="/icons/left-arrow.svg" alt="" />
    </div>

    <div class="flex flex-col gap-[10px] w-full mt-[25px]">
      <p class="text-[14px] font-medium text-[#828282]">
        ویدیو از نمای بیرونی و داخلی ساختمان کلینیک تن ساز
      </p>

      <!-- <div class="relative">
<img src="/images/example.png" alt="" class="w-full rounded-[22px]">
        </div> -->

      <button class="mt-8 w-full bg-brand text-center rounded-full h-[48px]">
        <NuxtLink
          to="#"
          class="bg-brand text-white font-semibold leading-[26px] rounded-full w-full"
          >تور مجازی کلینیک تن ساز</NuxtLink
        >
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

    <div class="grid grid-cols-2 gap-[16px] mt-[15px]">
      <img
        src="/images/before.jpg"
        alt=""
        class="rounded-[10px] w-full aspect-square"
        v-for="x in 7"
      />
    </div>
  </div>

  <div
    class="fixed top-0 left-0 w-screen h-screen bg-[#0000004a] duration-300 z-[2] pointer-events-none"
    :class="isModalOpen ? ' opacity-100' : 'opacity-0'"
  />

  <div
    class="z-[99] flex flex-col py-[20px] bg-[#ffffff] fixed translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] rounded-[22px] duration-300"
    style="width: calc(100vw - 32px)"
    :class="isModalOpen ? 'scale-100' : 'scale-0'"
  >
    <div class="flex justify-between items-center px-[16px]">
      <div class="flex items-center justify-between w-full">
        <header class="">
          <h1 class="text-[16px] font-bold">
            <span class="text-brand">تصاویر</span>مجموعه
          </h1>
        </header>

        <!-- cross icon -->
      </div>
    </div>

    <img
      src="/images/before.jpg"
      alt=""
      class="w-full aspect-square mt-[20px]"
    />

    <div class="flex flex-col gap-[6px] mt-[14px] px-[16px]">
      <div class="flex justify-between items-center">
        <p class="text-[16px] font-semibold text-[#2E2E2E]">توضیحات :</p>

        <div class="px-[8px] py-[4px] bg-[#ED1C241A] rounded-[35px]">
          <!-- eye icon -->

          <p class="text-[12px] font-medium">200 بازدید</p>
        </div>
      </div>

      <p class="text-[14px] text-[#2E2E2E]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع است.
      </p>
    </div>
  </div>
</template>
