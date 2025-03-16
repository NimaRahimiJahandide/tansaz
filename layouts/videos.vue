<script setup lang="ts"></script>

<template>
    <div class="flex">
        <VideosSidebarComponent class="sticky top-0" />
        <div class="flex flex-col w-full">
            <VideosNavbarComponent class="sticky top-0 z-50" />
          <slot />
        </div>
      </div>
</template>

<style scoped></style>
