<script setup>
import { useStartWebsite } from "@/store/initWebsite";
const startWebsite = useStartWebsite();
const activeIndex = ref(null);
const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}

const contactItems = [
  {
    title: 'واتس اپ',
    iconActive: '/icons/ic--baseline-whatsapp-red.svg',
    iconInactive: '/icons/ic--baseline-whatsapp.svg',
  },
  {
    title: 'تماس',
    iconActive: '/icons/solar--phone-outline-red.svg',
    iconInactive: '/icons/solar--phone-outline.svg',
  },
];

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

      <img @click="goBack" src="/icons/left-arrow.svg" alt="" />
    </div>

    <img src="/images/contact-us.png" alt="" class="w-full rounded-[22px] pt-5" />

    <section class="flex justify-between items-center gap-[12px] mt-[30px] w-full">
      <article v-for="(item, index) in contactItems" :key="index" @click="activeIndex = index"
        class="flex flex-col size-[173px] justify-center items-center rounded-[22px] cursor-pointer transition-colors duration-300"
        :class="activeIndex === index ? 'bg-[#ED1C24]' : 'bg-[#ffffff]'">
        <div class="size-[50px] rounded-[12px] flex justify-center items-center transition-colors duration-300"
          :class="activeIndex === index ? 'bg-[#ffffff]' : 'bg-[#ED1C24]'">
          <img :src="activeIndex === index ? item.iconActive : item.iconInactive" />
        </div>

        <p class="text-[16px] font-semibold mt-[12px] transition-colors duration-300"
          :class="activeIndex === index ? 'text-[#ffffff]' : 'text-[#2E2E2E]'">
          {{ item.title }}
        </p>

        <p class="text-[12px] font-medium mt-[6px] transition-colors duration-300"
          :class="activeIndex === index ? 'text-[#ffffff]' : 'text-[#828282]'">
          زمان فعالیت تیم ما
        </p>
        <p class="text-[12px] font-medium mt-[1px] transition-colors duration-300"
          :class="activeIndex === index ? 'text-[#ffffff]' : 'text-[#828282]'">
          دوشنبه تا جمعه • 9 تا 17
        </p>
      </article>
    </section>

    <div class="fex flex-col gap-[8px] mt-[30px] w-full" >
      <p class="text-[12px] text-[#828282]">
        آدرس و نقشه مسیر یابی تا کلینیک تن ساز
      </p>

      <img class="py-3" src="/images/map.png" alt="map">

      <div class="flex items-center gap-1 mt-[4px]">
        <Icon name="mynaui:location" size="13" style="color: #ED1C24" />

        <p class="text-[14px] font-medium text-[#2E2E2E]">
          شیراز، معالی آباد، نبش خیابان دنا، مجتمع هرم نور، طبقه 5
        </p>
      </div>
    </div>

    <div class="flex flex-col w-full mt-[30px] gap-[8px]">
      <p class="text-[12px] text-[#828282]">
        در شبکه های اجتماعی با ما در ارتباط باشید
      </p>

      <div class="flex flex-col gap-[12px]" data-aos="fade-up" data-aos-once="true">
        <div class="flex items-center gap-[16px] bg-white p-[15px] rounded-[15px]">
          <div class="flex justify-center items-center bg-[#ED1C24] size-[50px] rounded-[12px]">
            <Icon name="mdi:instagram" size="26" style="color: #fff" />
          </div>

          <div class="flex flex-col gap-[1px]">
            <p class="text-[16px] font-semibold text-[#2E2E2E]">اینستاگرام</p>
            <p class="text-[14px] font-medium text-[#717171]">
              7.6 هزار دنبال کننده • 118 پست
            </p>
          </div>
        </div>
        <div class="flex items-center gap-[16px] bg-white p-[15px] rounded-[15px]">
          <div class="flex justify-center items-center bg-[#ED1C24] size-[50px] rounded-[12px]">
            <img src="/icons/simple-icons--aparat.svg" alt="aparat">
          </div>

          <div class="flex flex-col gap-[1px]">
            <p class="text-[16px] font-semibold text-[#2E2E2E]">آپارات</p>
            <p class="text-[14px] font-medium text-[#717171]">
              7.6 هزار دنبال کننده • 118 پست
            </p>
          </div>
        </div>
        <div class="flex items-center gap-[16px] bg-white p-[15px] rounded-[15px]">
          <div class="flex justify-center items-center bg-[#ED1C24] size-[50px] rounded-[12px]">
            <Icon name="ri:twitter-x-line" size="26" style="color: #fff" />
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
