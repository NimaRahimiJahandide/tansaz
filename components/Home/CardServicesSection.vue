<script setup lang="ts">
interface Card {
  icon: string;
  text: string;
}

defineProps<{
  card: Card;
}>();
</script>

<template>
  <div>
    <div
      class="w-[20vm] h-[220px] bg-white hover:bg-[rgb(234,237,237)] md:p-[35px] p-[25px] rounded-lg hover:rounded-[35px] shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer group"
    >
      <div class="w-full h-full flex flex-col items-center justify-center p-4">
        <div class="relative w-[73px] h-[83px] mb-3">
          <img :src="card.icon" :alt="card.text">
        </div>
        <div class="text-center">
          <h3 class="text-sm font-medium text-center">{{card.text}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
