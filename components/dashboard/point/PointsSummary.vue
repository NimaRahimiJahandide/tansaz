<template>
  <div class="bg-gray-800 rounded-lg p-6 text-center">
    <div class="flex items-center justify-center space-x-2 mb-4">
      <span class="text-red-500 font-bold">امتیازات من</span>
      <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    </div>
    
    <h2 class="text-sm text-gray-300 mb-2">کل امتیاز های من:</h2>
    <div class="text-4xl font-bold text-red-500 mb-2">{{ totalPoints }}</div>
    <div class="text-sm text-red-400 mb-6">{{ totalPointsText }}</div>
    
    <div class="space-y-3">
      <button 
        @click="$emit('convert-points')"
        class="w-full bg-gray-700 hover:bg-gray-600 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg>
        <span>تبدیل امتیاز</span>
      </button>
      
      <button 
        @click="$emit('earn-more')"
        class="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
        </svg>
        <span>کسب امتیاز بیشتر</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  totalPoints: {
    type: Number,
    default: 1200
  },
  totalPointsText: {
    type: String,
    default: 'هزار و دویست'
  }
})

const emit = defineEmits(['convert-points', 'earn-more'])
</script>