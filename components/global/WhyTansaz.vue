<script setup lang="ts">
defineProps({
  title: String,
  cards: Object,
});
</script>
<template>
  <div class="mt-[75px] max-w-[1240px] mx-auto px-5 text-dark">
    <div
      class="flex flex-col gap-5 mx-auto bg-[#F9F9F9] rounded-[30px] lg:p-[55px] p-4"
    >
      <h4 class="text-[30px]">{{ title }}</h4>
      <div class="grid md:grid-cols-3 gap-5">
        <div
          class="rounded-[15px] text-[18px] leading-9 flex justify-center items-center p-[25px] bg-white border border-[rgba(39,39,39,0.12)]"
          v-for="card in cards"
          :key="card.id"
        >
          {{ card.text }}
        </div>
      </div>
    </div>
  </div>
</template>
