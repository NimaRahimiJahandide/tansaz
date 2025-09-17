<template>
  <div class="bg-white rounded-2xl relative text-[#2E2E2E]">
    <button class="absolute top-4 right-4 rounded-full">
      <svg class="w-[30px] h-[30px] text-red-500" fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
      </svg>
    </button>
    <!-- عکس پزشک -->
    <img :src="thumb_image" :alt="name" class="w-full h-[18.75rem] object-cover rounded-xl mb-4" />
    <div
      class="absolute top-[256px] left-0 flex items-center bg-brand rounded-r-[5px] h-7 w-16 justify-center shadow text-white text-sm font-semibold">
      {{ likes }}
      <svg class="w-4 h-4 mr-1" fill="#fff" viewBox="0 0 20 20">
        <path
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
      </svg>
    </div>
    <!-- مدرک و شهر -->
    <section class="flex flex-col px-4">
      <div class="flex justify-between">
        <h2 class="text-center text-lg font-bold">{{ name }}</h2>
        <span
          class="flex items-center justify-center bg-[#ED1C2426] px-3 text-[#ED1C24] text-xs font-semibold rounded-2xl">{{
          education }}</span>
      </div>
      <!-- نام و تخصص -->
      <p class="text-sm mt-1">{{ expertise }}</p>
    </section>

    <!-- توضیحات -->
    <section class="text-justify text-base mt-3 leading-[26px] px-4">
      <div class="font-semibold" v-html="description"></div>

      <!-- خدمات (در صورت وجود) -->
      <ul v-if="services && services.length > 0" class="pt-1.5">
        <li v-for="service in services" :key="service.id" class="text-brand font-semibold list-disc list-inside">
          {{ service.name }} ({{ service.type }})
        </li>
      </ul>
    </section>

    <!-- دکمه‌ها -->
    <div class="flex justify-between text-sm items-center mt-6 border-t border-[#E1E1E1]">
      <button class="flex flex-1 items-center justify-center gap-1 font-semibold border-l border-[#E1E1E1] h-[52px]">
        <Icon name="mdi:plus-outline" size="24" class="text-brand" />
        <span>رزرو نوبت</span>
      </button>
      <button class="flex flex-1 text-sm items-center justify-center gap-1 font-semibold">
        <Icon name="material-symbols:list-rounded" size="24" class="text-brand" />
        <span>مشاهده خدمات</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  expertise: {
    type: String,
    required: true,
  },
  thumb_image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  likes: {
    type: Number,
    default: 0,
  },
  services: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.text-brand {
  color: #FF3B3B;
}

.bg-brand {
  background: #FF3B3B;
}
</style>