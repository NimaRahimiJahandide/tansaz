<script setup>
import { useStartWebsite } from "@/store/initWebsite";

const startWebsite = useStartWebsite();

onMounted(() => {
  startWebsite.setImageClicked(true);
});
</script>

<template>
  <div class="flex flex-col pt-[20px] px-[16px] mt-[64px] bg-[#EFEFEF]">
    <div class="flex items-center justify-between">
      <p class="text-[20px] text-center font-bold">
        <span class="text-[rgb(237,28,36)]"> خدمات </span>
        <span class="text-[#2E2E2E]"> زیبایی </span>
      </p>

      <div
        class="flex items-center justify-center rounded-full border-[1px] border-[#D4D4D4] size-[34px]"
      >
        <Icon name="formkit:arrowleft" size="14" style="color: #2e2e2e" />
      </div>
    </div>

    <div
      class="flex items-center h-[46px] bg-[#ffffff] rounded-[14px] px-[16px] mt-[16px]"
    >
      <img src="/icons/search-icon.svg" alt="" class="size-[20px]" />
      <input
        type="text"
        name=""
        id=""
        placeholder="لاین زیبایی  مورد نظر را جستجو کنید..."
        class="p-[8px] w-full h-full focus:outline-0 placeholder-[#2E2E2E80]"
      />
    </div>

    <div class="flex gap-[16px] mt-[35px]">
      <div class="flex flex-col gap-[23px] w-[171px]">
        <ServicesCard v-for="x in 4" />
      </div>
      <div class="flex flex-col gap-[23px] w-[171px]">
        <p class="text-[16px] font-semibold">
          <span class="text-[#ED1C24]"> لاین زیبـایی </span>

          <span class="text-[#2E2E2E]"> مورد نظرتـان را انتخاب کنید </span>
        </p>

        <ServicesCard v-for="x in 3" />
      </div>
    </div>
  </div>
</template>
