<template>
  <div class="bg-white rounded-2xl relative text-[#2E2E2E]">
    <!-- آیکون قلب -->
    <!-- <button class="absolute top-4 left-4 bg-white rounded-full p-2 shadow">
        <svg class="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
        </svg>
      </button> -->
    <!-- عکس پزشک -->
    <img :src="doctor.image" alt="دکتر شهلا فلاحی" class="w-full h-[18.75rem]  rounded-xl mb-4" />
    <!-- تعداد لایک -->
    <!-- <div class="absolute top-44 left-4 flex items-center bg-white rounded-full px-3 py-1 shadow text-red-500 text-sm font-semibold">
        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
        </svg>
        200
      </div> -->
    <!-- مدرک و شهر -->
    <section class="flex flex-col px-4">
      <div class="flex justify-between">
        <h2 class="text-center text-lg font-bold">{{ doctor.name }}</h2>
        <span
          class="flex items-center justify-center bg-[#ED1C2426] px-3 text-[#ED1C24] text-xs font-semibold rounded-2xl">{{ doctor.education }}</span>
      </div>
      <!-- نام و تخصص -->
      <p class="text-sm mt-1">{{ doctor.specialty }}</p>
    </section>
    <!-- توضیحات -->
    <section class="text-justify text-base mt-3 leading-[26px] px-4">
      <p class="font-semibold">
        {{ doctor.description }}
      </p>
      <ul class="pt-1.5">
        <li v-for="(post, index) in doctor.post" :key="index" class="text-brand font-semibold  list-disc list-inside">{{ post }}</li>

      </ul>
      <p class="pb-1.5 pt-3">
        {{ doctor.body }}
      </p>
    </section>
    <!-- دکمه‌ها -->
    <div class="flex justify-between text-sm items-center mt-6 border-t border-[#E1E1E1]">
      <button class="flex flex-1 items-center justify-center gap-1 font-semibold border-l border-[#E1E1E1] h-[52px]">
        <Icon name="mdi:plus-outline" size="24" class="text-brand" />
        <span>رزرو نبوت</span>
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
  doctor: {
    type: Object,
    required: true,
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