<script setup lang="ts">
interface Card {
  icon: string;
  text: string;
  route?: String;
}

defineProps<{
  card: Card;
}>();
</script>

<template>
  <NuxtLink class="sm:max-w-[200px] max-w-[150px]" :to="card.route || '#'">
    <div
      class="w-[20vm] h-[220px] bg-white hover:bg-[rgb(234,237,237)] md:p-[35px] sm:p-[25px] p-[15px] rounded-3xl hover:rounded-[35px] shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer group"
    >
      <div class="w-full h-full flex flex-col items-center justify-center p-4">
        <div class="relative max-w-[73px] h-[83px] mb-3">
          <img :src="card.icon" :alt="card.text">
        </div>
        <div class="text-center">
          <h3 class="text-sm font-medium text-center">{{card.text}}</h3>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
