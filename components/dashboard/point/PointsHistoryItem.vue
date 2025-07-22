<template>
  <div class="bg-[#212121] rounded-[28px] p-4 transition-colors">
    <div class="flex justify-between items-start pb-2">
      <h4 class="font-medium text-white text-[18px] leading-[24px]  ">{{ index }}. {{ item.type }}</h4>
      <span class="text-brand bg-[#ED1C241A] font-medium text-[14px] leading-[24px] px-4 py-1 rounded-[10px]">{{ item.points }} امتیاز</span>
    </div>
    <div>
      <p class="text-white mb-2 text-[14px] leading-[26px] text-justify"><span class="text-[#828282]">توضیحات :</span> {{ item.description }}</p>
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