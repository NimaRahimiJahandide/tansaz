<script setup lang="ts">
defineProps({
  image: String,
  title: String,
  route: String,
});
</script>

<template>
    <NuxtLink
    :to="route"
    class="rounded-3xl group cursor-pointer"
  >
    <div class="overflow-hidden rounded-2xl">
      <img 
        :src="image" 
        class="rounded-3xl shadow-lg p-4 mb-4 w-full transform transition-transform overflow-hidden duration-300 group-hover:scale-110" 
        :alt="title" 
      />
    </div>
    <div class="text-center font-semibold sm:text-base text-sm">
      {{ title }}
    </div>
  </NuxtLink>
</template>
