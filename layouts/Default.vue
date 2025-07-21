<script setup lang="ts">
import { useStartWebsite } from '@/store/initWebsite'

const startWebsite = useStartWebsite();
const route = useRoute();

// Check if we're on the home or services page
const isHomePage = computed(() => {
  return route.path === '/' || route.path === '/home';
});
const isServicesPage = computed(() => {
  return route.path.startsWith('/services');
});
</script>

<template>
  <div class="flex flex-col w-full">
    <!-- Show navbar with transition only on home page -->
    <transition v-if="isHomePage" name="fade-navbar" appear>
      <NavbarComponent v-if="startWebsite.isStart" />
    </transition>
    <!-- Show navbar with transition only on services page -->
    <transition v-else-if="isServicesPage" name="fade-navbar" appear>
      <NavbarComponent v-if="startWebsite.isServicesStart" />
    </transition>
    <!-- Show fixed navbar on all other pages -->
    <NavbarComponent v-else />
    <main>
      <slot />
    </main>
     <transition name="fade-slide" appear>
      <Footer v-if="startWebsite.isStart" />
    </transition>
  </div>
</template>

<style scoped>
.fade-navbar-enter-active, .fade-navbar-leave-active {
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-navbar-enter-from, .fade-navbar-leave-to {
  opacity: 0;
}
.fade-navbar-enter-to, .fade-navbar-leave-from {
  opacity: 1;
}
</style>