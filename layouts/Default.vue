<script setup lang="ts">
import { useLoadingState } from "../store/loadingState";

const loadingState = useLoadingState();
setTimeout(() => {
  loadingState.setLoading(false);
}, 2000);
</script>

<template>
  <div class="flex flex-col w-full">
      <Navbar class="z-50" v-if="!loadingState.isLoading"/>
      <BottomNavbar  class="sticky top-0 z-40" v-if="!loadingState.isLoading" />
      <main class="w-full min-h-screen md:mb-[7rem] mb-[22rem]">
        <slot />
      </main>
      <Footer />
  </div>
</template>

<style scoped></style>
