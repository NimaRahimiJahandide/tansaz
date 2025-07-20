<template>
  <div class="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors">
    <div class="flex justify-between items-start mb-2">
      <h4 class="font-semibold text-white">{{ index }}. {{ item.type }}</h4>
      <span class="text-red-500 font-bold">{{ item.points }} امتیاز</span>
    </div>
    <p class="text-sm text-gray-300 mb-2 leading-relaxed">{{ item.description }}</p>
    <div class="text-xs text-gray-400">{{ item.date }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})
</script>