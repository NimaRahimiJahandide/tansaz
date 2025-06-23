<script setup>
import { useStartWebsite } from "@/store/initWebsite";
const startWebsite = useStartWebsite();

onMounted(() => {
  startWebsite.setImageClicked(true);
});
</script>

<template>
  <div class="flex flex-col items-center bg-[#EFEFEF] pt-[84px] pb-[50px] px-[16px]">
    <div class="flex items-center justify-between w-full">
      <header class="">
        <h1 class="text-xl font-bold">
          <span class="text-brand">ارتباط</span> با ما
        </h1>
      </header>

      <img src="/icons/left-arrow.svg" alt="" />
    </div>
    <!-- 
    <img
      src="/images/contact-us-banner.png"
      alt=""
      class="w-full rounded-[22px]"
    /> -->

    <div class="flex justify-between items-center gap-[12px] mt-[30px] w-full">
      <div
        class="flex flex-col size-[173px] bg-[#ED1C24] justify-center items-center rounded-[22px]"
      >
        <div
          class="size-[50px] rounded-[12px] bg-[#ffffff] flex justify-center items-center"
        >
          <!-- icon -->
        </div>

        <p class="text-[16px] font-semibold text-[#ffffff] mt-[12px]">
          واتس اپ
        </p>

        <p class="text-[12px] font-medium text-[#ffffff] mt-[6px]">
          زمان فعالیت تیم ما
        </p>
        <p class="text-[12px] font-medium text-[#ffffff] mt-[1px]">
          دوشنبه تا جمعه • 9 تا 17
        </p>
      </div>

      <div
        class="flex flex-col size-[173px] bg-[#ffffff] justify-center items-center rounded-[22px]"
      >
        <div
          class="size-[50px] rounded-[12px] bg-[#ED1C24] flex justify-center items-center"
        >
          <!-- icon -->
        </div>

        <p class="text-[16px] font-semibold text-[#2E2E2E] mt-[12px]">
          واتس اپ
        </p>

        <p class="text-[12px] font-medium text-[#828282] mt-[6px]">
          زمان فعالیت تیم ما
        </p>
        <p class="text-[12px] font-medium text-[#828282] mt-[1px]">
          دوشنبه تا جمعه • 9 تا 17
        </p>
      </div>
    </div>

    <div class="fex flex-col gap-[8px] mt-[30px] w-full">
      <p class="text-[12px] text-[#828282]">
        آدرس و نقشه مسیر یابی تا کلینیک تن ساز
      </p>

      <!-- frame -->

      <div class="flex items-center mt-[4px]">
        <!-- icon -->

        <p class="text-[14px] font-medium text-[#2E2E2E]">
          شیراز، معالی آباد، نبش خیابان دنا، مجتمع هرم نور، طبقه 5
        </p>
      </div>
    </div>

    <div class="flex flex-col w-full mt-[30px] gap-[8px]">
      <p class="text-[12px] text-[#828282]">
        در شبکه های اجتماعی با ما در ارتباط باشید
      </p>

      <div class="flex flex-col gap-[12px]">
        <div class="flex items-center gap-[16px]">
          <div
            class="flex justify-center items-center bg-[#ED1C24] size-[50px] rounded-[12px]"
          >
            <!-- icon -->
          </div>

          <div class="flex flex-col gap-[1px]">
            <p class="text-[16px] font-semibold text-[#2E2E2E]">اینستاگرام</p>
            <p class="text-[14px] font-medium text-[#717171]">
              7.6 هزار دنبال کننده • 118 پست
            </p>
          </div>
        </div>
        <div class="flex items-center gap-[16px]">
          <div
            class="flex justify-center items-center bg-[#ED1C24] size-[50px] rounded-[12px]"
          >
            <!-- icon -->
          </div>

          <div class="flex flex-col gap-[1px]">
            <p class="text-[16px] font-semibold text-[#2E2E2E]">آپارات</p>
            <p class="text-[14px] font-medium text-[#717171]">
              7.6 هزار دنبال کننده • 118 پست
            </p>
          </div>
        </div>
        <div class="flex items-center gap-[16px]">
          <div
            class="flex justify-center items-center bg-[#ED1C24] size-[50px] rounded-[12px]"
          >
            <!-- icon -->
          </div>

          <div class="flex flex-col gap-[1px]">
            <p class="text-[16px] font-semibold text-[#2E2E2E]">توییتر</p>
            <p class="text-[14px] font-medium text-[#717171]">
              7.6 هزار دنبال کننده • 118 پست
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
