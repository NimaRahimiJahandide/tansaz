<script setup lang="ts">
import { useStartWebsite } from "@/store/initWebsite";
import { useServices } from '~/composables/services/useServices'

const startWebsite = useStartWebsite();

onMounted(() => {
  startWebsite.setImageClicked(true);
});

const route = useRoute()
const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}

// Get current page from query parameters
const currentPage = computed(() => {
  return parseInt(route.query.page as string) || 1
})

// Fetch services data using the composable
const { data: servicesData, pending, error } = useServices(currentPage.value)

// Transform API data to match the expected format
const services = computed(() => {
  if (!servicesData.value?.services) return []
  
  return servicesData.value.services.map(service => ({
    id: service.id,
    title: service.name,
    image: service.thumb_image
  }))
})

const rightServices = computed(() => services.value.slice(0, 3))
const leftServices = computed(() => services.value.slice(3))
</script>

<template>
  <div>
    <!-- Show all services (original content) -->
    <div class="flex flex-col pt-[20px] px-[16px] mt-[64px] pb-[30px] bg-[#EFEFEF]">
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

      <!-- Loading state -->
      <div v-if="pending" class="flex justify-center items-center mt-[35px] h-[200px]">
        <p class="text-[16px] text-[#2E2E2E]">Loading...</p>
      </div>

      <!-- Error state -->
      <div v-else-if="error" class="flex justify-center items-center mt-[35px] h-[200px]">
        <p class="text-[16px] text-[#ED1C24]">Failed to load data</p>
      </div>

      <!-- Services content -->
      <div v-else class="flex gap-[16px] mt-[35px] justify-center">
        <div class="flex flex-col gap-[23px] w-[171px]">
          <ServicesCard data-aos="fade-up" data-aos-once="true" v-for="service in leftServices" :key="service.id"
            :service="service" @click="$router.push(`/service/${service.id}/test`)" />
        </div>
        <div class="flex flex-col gap-[23px] w-[171px]">
          <p class="text-[16px] font-semibold">
            <span class="text-[#ED1C24]"> لاین زیبـایی </span>
            <span class="text-[#2E2E2E]"> مورد نظرتـان را انتخاب کنید </span>
          </p>
          <ServicesCard data-aos="fade-up" data-aos-once="true" v-for="service in rightServices" :key="service.id"
            :service="service" @click="$router.push(`/service/${service.id}/test`)" />
        </div>
      </div>
    </div>
  </div>
</template>