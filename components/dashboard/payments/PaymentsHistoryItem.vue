<template>
  <div class="bg-[#212121] rounded-[28px] p-4 transition-colors">
    <div class="flex justify-between items-start pb-2 border-b border-[#32353B]">
      <h4 class="font-medium text-[18px] leading-[24px] text-[#1EAC74]"> <Icon name="tabler:circle-arrow-up-right" size="20"  style="color: #1EAC74" /> {{ item.totalPrice }}</h4>
      <span class="font-medium text-[14px] leading-[24px] px-4 py-1 rounded-[10px] flex">{{ item.date }}</span>
    </div>
    <section class="text-sm flex flex-col text-[#828282] py-2.5 gap-2">
      <div class="flex justify-between">
        <h5 class="text-[14px] text-[#828282]">درصد کش بک :</h5>
        <span class="text-[14px] text-[#F2F4F6]">{{item.cashBack}}</span>
      </div>
      <div class="flex justify-between">
        <h5 class="text-[14px] text-[#828282]">دریافتی شما :</h5>
        <span class="text-[14px] text-[#F2F4F6]">{{item.yourEarn}}</span>
      </div>
      <div class="flex gap-3">
        <h5 class="text-[14px] text-[#828282]">توضیحات :</h5>
        <span class="text-[14px] text-[#F2F4F6]">{{item.description}}</span>
      </div>
    </section>
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