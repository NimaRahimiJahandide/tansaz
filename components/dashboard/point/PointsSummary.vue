<template>
  <div class="bg-[#212121] rounded-[28px] p-4">
    <h2 class="text-[24px] leading-[32px] text-white mb-2">کل امتیاز های من:</h2>
    <div class="text-[24px] leading-[32px] text-[#ED1C24] mb-6">{{ totalPoints }} {{ totalPointsText }}</div>

    <div class="space-y-3">
      <button @click="$emit('convert-points')"
        class="w-full bg-[#363636] py-3 rounded-full flex items-center justify-center space-x-2 transition-colors cursor-pointer">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <span>تبدیل امتیاز</span>
      </button>

      <button @click="$emit('earn-more')"
        class="w-full bg-brand py-3 rounded-full flex items-center justify-center space-x-2 transition-colors">
        <Icon name="ei:plus" size="22" style="color: #FFFFFF" />

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