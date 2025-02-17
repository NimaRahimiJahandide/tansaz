<script setup lang="ts">
interface FirstSectionDataType {
  title: string; 
  description: string; 
}
defineProps<{
  firstSectionData: FirstSectionDataType;
}>();
</script>

<template>
  <div
    class="max-w-[1200px] text-dark mx-auto px-3 my-[25px] pt-2.5 flex justify-between w-full gap-[20px]"
  >
    <div class="flex flex-col-reverse items-center md:flex-row gap-5">
      <div class="flex flex-col gap-5 md:w-2/3">
        <div>
          <h1 class="text-[33px] font-light">
            <span class="text-primary">{{ firstSectionData.title }}</span> تن ساز
          </h1>
        </div>
        <p class="text-justify leading-9">
          {{ firstSectionData.description }}
        </p>
        <div class="flex gap-2.5">
          <NuxtLink
            to="/contact-us"
            class="bg-primary flex justify-center items-center text-white rounded-r-full py-[18px] px-[25px] max-h-[51px]"
          >
            تماس با ما
          </NuxtLink>
          <NuxtLink
            to="/about-us"
            class="py-[18px] px-[25px] flex justify-center items-center border max-h-[51px]"
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
</template>