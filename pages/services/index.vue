<script setup>
definePageMeta({
  layout: 'services'
});
import { useStartWebsite } from "@/store/initWebsite";

const startWebsite = useStartWebsite();

const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}

</script>

<template>
  <div>
    <div v-if="!startWebsite.isServicesStart"
      class="min-h-screen bg-[radial-gradient(65.64%_65.64%_at_50%_34.36%,_#565656_0%,_#353535_54.08%,_#1F1F1F_100%)] px-[30px] pt-[100px] pb-[30px] relative">
      <!-- Background Images -->

      <!-- Main Content -->
      <div class="relative z-10 w-full">
        <!-- Main Model Image -->
        <div class="text-center -mb-20">
          <div class="relative inline-block">
            <img src="/images/services1.png" alt="Main Beauty Model" class="w-[196px] h-[236px] object-cover" />
          </div>
        </div>

        <!-- Content Card -->
        <div
          class="bg-[#FFFFFF05] rounded-3xl px-[25px] pt-[70px] pb-[25px] backdrop-blur-[20px] shadow-[inset_0px_-5px_21px_0px_#E3EDEF33,inset_0px_0px_3px_0px_#9A92D24D,inset_0px_70px_47px_-75px_#CAACFF4D,inset_0px_2px_10px_-4px_#FFFFFF42,inset_0px_34px_29px_-49px_#FFFFFF80]">
          <!-- Title -->
          <div class="flex justify-between items-center mb-4">
            <h1 class="text-[26px] font-bold text-white mb-2">
              <span class="text-brand">خدمات</span> زیبایی
            </h1>
            <button class="text-white bg-[#FFFFFF1A] w-[63px] h-[29px] rounded-[40px] text-[14px] font-semibold"><span
                class="text-brand">9</span> لاین</button>
          </div>

          <!-- Description -->
          <div class="text-white text-sm leading-[23px] mb-8 text-justify font-medium">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
              متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است
            </p>
          </div>

          <!-- Main CTA Button -->
          <div>
            <button @click="startWebsite.setServicesStart(true)"
              class="w-full bg-brand text-white font-semibold h-[42px] rounded-full">
              برو به صفحه خدمات زیبایی
            </button>
          </div>
        </div>
      </div>
      <!-- Support Button -->
      <div class="w-full pt-[60px] flex items-center justify-center">
        <button
          class="flex justify-center w-[169px] h-[46px] items-center bg-transparent border border-white text-white font-medium rounded-full shadow-lg">
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
            </path>
          </svg>
          پشتیبانی سریع
        </button>
      </div>
    </div>

    <div v-else class="flex flex-col pt-[20px] px-[16px] mt-[64px] pb-[30px] bg-[#EFEFEF]">
      <div class="flex items-center justify-between">
        <p class="text-[20px] text-center font-bold">
          <span class="text-[rgb(237,28,36)]"> خدمات </span>
          <span class="text-[#2E2E2E]"> زیبایی </span>
        </p>

        <div class="flex items-center justify-center rounded-full border-[1px] border-[#D4D4D4] size-[34px]">
          <Icon @click="goBack" name="formkit:arrowleft" size="14" style="color: #2e2e2e" />
        </div>
      </div>

      <div class="flex items-center h-[46px] bg-[#ffffff] rounded-[14px] px-[16px] mt-[16px]">
        <img src="/icons/search-icon.svg" alt="" class="size-[20px]" />
        <input type="text" name="" id="" placeholder="لاین زیبایی  مورد نظر را جستجو کنید..."
          class="p-[8px] w-full h-full focus:outline-0 placeholder-[#2E2E2E80]" />
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
  </div>
</template>
