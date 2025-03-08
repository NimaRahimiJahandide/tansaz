<script setup lang="ts"></script>

<template>
  <div class="flex">
    <DashboardSidebarComponent />
    <div class="flex flex-col w-full">
        <DashboardNavbarComponent class="sticky top-0 z-50" />
      <slot />
    </div>
  </div>
</template>
