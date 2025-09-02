<template>
  <div class="bg-white p-4 pt-[30px]">
    <!-- Header -->
    <header class="text-center mb-8">
      <h1 class="text-xl font-bold">
        در <span class="text-brand">کلينيک تن ساز</span> زيبايي را تجربه مي كنيد<span class="text-brand">!</span>
      </h1>
    </header>

    <!-- Loading State -->
    <div v-if="pending" class="flex justify-center items-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center py-20">
      <p class="text-red-500 mb-4">خطا در بارگذاری سرویس‌ها</p>
      <button 
        @click="refresh" 
        class="bg-brand text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
      >
        تلاش مجدد
      </button>
    </div>

    <!-- Services Section -->
    <section v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <HomeServiceCard 
        v-for="(service, index) in services"
        :key="service.id"
        :title="`خدمات ${service.type}`"
        :description="service.name"
        :id="service.id"
        :image="service.image || `/images/service${index + 1}.png`"
        :data-aos="'fade-up'" 
        :data-aos-delay="100 + (index * 100)" 
        :data-aos-once="true"
      />
    </section>
  </div>
</template>

<script setup>
import { useServices } from '~/composables/services/useServices'

const currentPage = ref(1)

// استفاده از composable برای دریافت سرویس‌ها
const { data, pending, error, refresh } = useServices(currentPage.value)

// استخراج داده‌ها از response
const services = computed(() => data.value?.services || [])

// بارگذاری مجدد سرویس‌ها در صورت نیاز
const refreshServices = () => {
  refresh()
}

// Watch برای تغییرات صفحه
watch(currentPage, async (newPage) => {
  const { data: newData } = await useServices(newPage)
  data.value = newData.value
})
</script>

<style scoped>
/* Custom styles if needed */
</style>