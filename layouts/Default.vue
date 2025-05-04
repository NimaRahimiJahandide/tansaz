<script setup lang="ts">
import { useLoadingState } from "../store/loadingState";

const loadingState = useLoadingState();
setTimeout(() => {
  loadingState.setLoading(false);
}, 5000);
</script>

<template>
  <div class="flex flex-col w-full">
    <div v-if="$route.name != 'seminars-id'">
      <Navbar class="z-50" v-if="!loadingState.isLoading" />
      <BottomNavbar  class="sticky top-0 z-40" v-if="!loadingState.isLoading" />
    </div>
      <main :class="$route.name != 'seminars-id' ? 'min-h-screen md:mb-[7rem] mb-[22rem]' : 'mb-[1rem]'" class="w-full ">
        <slot />
      </main>
      <Footer v-if="$route.name != 'seminars-id'" />
  </div>
</template>

<style scoped></style>
