<template>
  <div class="relative w-[90px] h-[6px] rounded-full overflow-hidden backdrop-blur-[18px]">
    <!-- Progress Bar Brush Style -->
    <div
      class="absolute top-0 left-0 h-full progress-brush"
      :style="{ width: `${value}%` }"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  value: {
    type: Number,
    default: 0,
    validator: (val) => val >= 0 && val <= 100,
  }
});
</script>

<style scoped>
.progress-brush {
  background: linear-gradient(to right, #FF2525 30%, rgba(255, 0, 0, 0.0) 100%);
  filter: blur(4px);
  transition: width 0.05s linear;
  border-radius: 9999px;
}
</style>
