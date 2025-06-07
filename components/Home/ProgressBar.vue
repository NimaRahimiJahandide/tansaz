<template>
  <div class="relative w-[90px] h-[3px] rounded-full overflow-hidden">
    <!-- Progress Bar -->
    <div
      ref="progressBar"
      class="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FF2525] via-[#FF2525] to-[#FF000000] transition-all duration-500 backdrop-blur-[18px] ease-in-out"
      :style="{ width: `${value}%` }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Props
const props = defineProps({
  value: {
    type: Number,
    default: 0,
    validator: (val) => val >= 0 && val <= 100,
  }
});

// Refs
const progressBar = ref(null);

// Lifecycle Hooks
onMounted(() => {
  // Optional: Smooth animation for initial rendering
  if (props.value > 0) {
    setTimeout(() => {
      progressBar.value.style.width = `${props.value}%`;
    }, 100);
  }
});
</script>

<style scoped>
</style>