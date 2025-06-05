<script setup lang="ts">
import { useLoadingState } from "../store/loadingState";

const loadingState = useLoadingState();
setTimeout(() => {
  loadingState.setLoading(false);
}, 5000);
</script>

<template>
  <div class="flex flex-col w-full">
      <main>
        <slot />
      </main>
  </div>
</template>

<style scoped></style>
