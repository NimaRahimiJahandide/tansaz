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
    <div class="rounded-2xl">
      <img 
        :src="image" 
        class="rounded-3xl shadow-[0_0_10px_0_rgba(0,0,0,0.5)] p-4 mb-4 md:w-[15rem] w-full md:h-[22rem] object-cover" 
        :alt="title" 
      />
    </div>
    <div class="text-center font-semibold sm:text-base text-sm">
      {{ title }}
    </div>
  </NuxtLink>
</template>
