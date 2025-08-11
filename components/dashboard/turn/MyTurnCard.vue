<template>
  <div
    class="bg-[#212121] text-white flex flex-col  justify-center xl:p-6 p-4 rounded-[28px] gap-2.5 w-full lg:max-w-[360px]">
    <div class="flex justify-between">
      <h2 class="xl:text-[20px] leading-7 font-bold">{{card.title}}</h2>
      <span class="xl:text-lg leading-6 font-medium text-[#828282]">{{card.date}}</span>
    </div>
    <div class="flex justify-between">
      <span class="xl:text-lg leading-6 font-medium flex items-end text-left self-end">{{card.day}}</span>
      <button class="bg-brand rounded-full flex items-center xl:px-5 px-2 py-2 gap-2 cursor-pointer">
        <Icon name="solar:phone-outline" size="18" style="color: #ffffff" />
        <span class="text-sm font-semibold leading-5">تغییر نوبت</span>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  card: Object,
})
</script>