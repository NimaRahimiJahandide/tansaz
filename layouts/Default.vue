<script setup lang="ts">
import { useStartWebsite } from '@/store/initWebsite'

const startWebsite = useStartWebsite();
const route = useRoute();

// Check if we're on the home page
const isHomePage = computed(() => {
  return route.path === '/' || route.path === '/home';
});
</script>

<template>
  <div class="flex flex-col w-full">
    <!-- Show navbar with transition only on home page -->
    <transition v-if="isHomePage" name="fade-slide" appear>
      <NavbarComponent v-if="startWebsite.isStart" />
    </transition>
    <!-- Show navbar immediately on other pages -->
    <NavbarComponent v-if="!isHomePage" />
    <main>
      <slot />
    </main>
     <transition name="fade-slide" appear>
      <Footer v-if="startWebsite.isStart" />
    </transition>
  </div>
</template>