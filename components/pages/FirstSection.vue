<script setup lang="ts">
import { useLoadingState } from "@/store/loadingState";

interface FirstSectionDataType {
  title: string;
  description: string;
}
defineProps<{
  firstSectionData: FirstSectionDataType;
}>();

const loadingState = useLoadingState();

setTimeout(() => {
  loadingState.setLoading(false);
}, 2000);
</script>

<template>
  <div>
    <!-- <div
      v-if="loadingState.isLoading"
      class="max-w-[1200px] text-dark mx-auto px-3 my-[25px] pt-2.5 flex justify-between w-full gap-[20px]"
    >
      <div class="flex w-full flex-col-reverse items-center md:flex-row gap-5">
        <div class="flex flex-col gap-5 w-full md:w-2/3">
          <div>
            <div
              class="w-1/2 h-[24px] bg-gray-300 rounded-4xl animate-pulse"
            ></div>
          </div>
          <div
            class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"
          ></div>
          <div
            class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"
          ></div>
          <div
            class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"
          ></div>

          <div class="flex gap-2.5">
            <div
              class="w-[118px] h-[51px] bg-gray-300 rounded animate-pulse"
            ></div>
            <div
              class="w-[118px] h-[51px] bg-gray-300 rounded animate-pulse"
            ></div>
          </div>
        </div>
        <div class="md:w-1/3 w-full">
          <div
            class="h-[30vh] bg-gray-300 rounded-4xl animate-pulse"
          ></div>
        </div>
      </div>
    </div> -->

    <div
      class="max-w-[1200px] text-dark mx-auto px-5 my-[25px] pt-2.5 flex justify-between w-full gap-[20px]"
    >
      <div class="flex flex-col-reverse items-center md:flex-row gap-5">
        <div class="flex flex-col gap-5 md:w-2/3">
          <div>
            <h1 class="text-[33px] font-light">
              <span class="text-primary">{{ firstSectionData.title }}</span> تن
              ساز
            </h1>
          </div>
          <p class="text-justify leading-9">
            {{ firstSectionData.description }}
          </p>
          <div class="flex gap-2.5">
            <NuxtLink
            to="/contact-us"
            class="text-white  bg-primary focus:outline-none focus:ring-primary shadow-lg shadow-primary/50  rounded-lg py-[18px] px-[25px] flex justify-center items-center max-h-[51px]"
          >
            تماس با ما</NuxtLink
          >
          <NuxtLink
            to="/about-us"
            class="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white hover:shadow-lg transition-all duration-300 hover:shadow-primary/50 py-[18px] px-[25px] flex justify-center items-center max-h-[51px] border border-primary hover:border-transparent rounded"
          >
            معرفی مجموعه
          </NuxtLink>
          </div>
        </div>
        <div class="md:w-1/3">
          <img src="/images/Asset-2x.png" alt="Asset-2x" />
        </div>
      </div>
    </div>
  </div>
</template>
