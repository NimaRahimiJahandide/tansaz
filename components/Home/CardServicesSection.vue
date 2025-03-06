<script setup lang="ts">
interface Card {
  icon: string;
  title: string;
  route?: String;
}

defineProps<{
  card: Card;
}>();
</script>

<template>
  <NuxtLink class="" :to="card.route || '#'">
    <div
      class="h-52 bg-white hover:bg-[rgb(234,237,237)] md:p-[35px] sm:p-[25px] p-[13px] rounded-3xl hover:rounded-[35px] shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer group"
    >
      <div class="w-full h-full flex flex-col items-center justify-center p-4">
        <div class="relative max-w-[73px] h-[83px] mb-3">
          <img :src="card.icon" :alt="card.title">
        </div>
        <div class="text-center">
          <h3 class="text-sm font-medium text-center">{{card.title}}</h3>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
