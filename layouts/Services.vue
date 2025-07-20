<script setup lang="ts">
import { useStartWebsite } from '@/store/initWebsite'

const startWebsite = useStartWebsite();
</script>

<template>
  <div class="flex flex-col w-full">
    <transition name="fade-slide" appear>
      <NavbarComponent v-if="startWebsite.isServicesStart" />
    </transition>
    <main>
      <slot />
    </main>
     <transition name="fade-slide" appear>
      <Footer v-if="startWebsite.isServicesStart" />
    </transition>
  </div>
</template>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-slide-enter-to, .fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
