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

const handleServiceSelected = (service) => {
  startWebsite.setServicesStart(true)
  // You can add additional logic here to handle the selected service
  console.log('Selected service:', service)
}

const services = ref([ 
  {
    id: 1,
    title: 'پزشکان زیبایی',
    image: '/images/service-init5.png'
  },
  {
    id: 2,
    title: 'جوانسازی',
    image: '/images/service-init6.png'
  },
  {
    id: 3,
    title: 'تزریقات زیبایی',
    image: '/images/service-init2.png'
  },
  {
    id: 4,
    title: 'اقدامات جراحی',
    image: '/images/service-init3.png'
  },
  {
    id: 5,
    title: 'آنالیز دقیق چهره',
    image: '/images/service-init4.png'
  },
  {
    id: 6,
    title: 'آنالیز دقیق چهره',
    image: '/images/service-init4.png'
  },
  {
    id: 7,
    title: 'تزریقات زیبایی',
    image: '/images/service-init6.png'
  },
  
])

const rightServices = computed(() => services.value.slice(0, 3))
const leftServices = computed(() => services.value.slice(3))

</script>

<template>
  <div>
    <ServicesBeautyServicesSlider v-if="!startWebsite.isServicesStart" @service-selected="handleServiceSelected" />

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

      <div class="flex gap-[16px] mt-[35px] justify-center">
        <div class="flex flex-col gap-[23px] w-[171px]">
          <ServicesCard data-aos="fade-up" data-aos-once="true"
            v-for="service in leftServices"
            :key="service.id"
            :service="service"
            @click="$router.push(`/services/${service.id}/test`)"
          />
        </div>
        <div class="flex flex-col gap-[23px] w-[171px]">
          <p class="text-[16px] font-semibold">
            <span class="text-[#ED1C24]"> لاین زیبـایی </span>
            <span class="text-[#2E2E2E]"> مورد نظرتـان را انتخاب کنید </span>
          </p>
          <ServicesCard data-aos="fade-up" data-aos-once="true"
            v-for="service in rightServices"
            :key="service.id"
            :service="service"
            @click="$router.push(`/services/${service.id}/test`)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
