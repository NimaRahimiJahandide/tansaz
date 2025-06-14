<script setup>
import { useStartWebsite } from "@/store/initWebsite";
const startWebsite = useStartWebsite();

onMounted(() => {
  startWebsite.setImageClicked(true);
});
</script>

<template>
  <div>
    <div class="w-full h-[354px] relative">
      <div
        class="absolute top-0 left-0 w-full h-[354px] bg-[#000000af] z-[2]"
      />
      <img src="/images/blog1.png" alt="" class="w-full h-[354px]" />
      <div class="flex flex-col absolute top-[94px] right-[16px] z-[3]">
        <p class="text-[#ED1C24] text-[30px] font-bold">تزریقات</p>
        <p class="text-[#FFFFFF] text-[30px] font-bold">زیبایی</p>
      </div>

      <div
        class="grid grid-cols-3 gap-[10px] px-[16px] w-full absolute top-[198px] right-0 z-[3]"
      >
        <div
          v-for="x in 6"
          class="h-[38px] rounded-[30px] flex items-center justify-center backdrop-blur-xl inset-shadow-[0px_-5px_21px_0px_#e3edef41,0px_70px_47px_-74px_#CAACFF4D]"
        >
          <p class="text-[14px] text-[#ffffff]">بوتاکس</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col pt-[20px] px-[16px] mt-[64px] bg-[#EFEFEF]"></div>
  </div>
</template>

<style scoped>
/* .custom-shadow {
  box-shadow: inset;
} */
</style>
