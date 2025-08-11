<template>
  <div class="bg-[#212121] rounded-[28px] p-4 transition-colors">
    <div class="flex justify-between items-start pb-2">
      <h4 class="font-medium text-white text-[18px] leading-[24px]  ">{{ index }}. {{ item.type }}</h4>
      <span class="font-medium text-[14px] leading-[24px] px-4 py-1 rounded-[10px]" :class="item.status == 'رزرو شده' ? 'text-[#F7C41B] bg-[#FFF0220D]' : item.status == 'انجام شده' ? 'text-[#1EAC74] bg-[#1EAC740D]' : 'text-[#EE3035] bg-[#EE30351A]' ">{{ item.status }}</span>
    </div>
    <div class="text-sm text-[#828282]">{{ item.date }}</div>
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