<script setup>
const props = defineProps({
  service: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div class="w-full flex flex-col items-center">
    <img :src="service.image" alt="" class="w-full h-[127px] rounded-[22px] border-[2px] border-[#F14B52] object-cover object-center  z-[2]">
    <div class="w-[149px] h-[36px] rounded-b-[22px] bg-[#F14B52] mt-[-4px] flex justify-center items-center">
      <p class="text-[14px] font-semibold text-[#ffffff]">
        {{ service.title }}
      </p>

    </div>
  </div>
</template>
