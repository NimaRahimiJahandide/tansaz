<template>
  <NuxtLink :to="`/service/${id}/${title}`" class="bg-white relative rounded-[22px] overflow-hidden">
    <!-- Image -->
    <img :src="image" alt="Service Image" class="w-full h-64 object-cover" />
    <!-- Content -->
    <div class="p-4 bg-[#F14B52CC] text-white absolute bottom-[10px] rounded-[22px] w-[calc(100%-20px)] mr-[10px]">
      <!-- Title -->
      <h2 class="text-xl font-bold text-center mb-1">{{ title }}</h2>
      <!-- Description -->
      <p class="text-center">{{ description }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});
</script>