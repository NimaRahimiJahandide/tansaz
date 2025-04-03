<script setup>
defineProps({
    video: Object,
})
</script>

<template>
  <NuxtLink :to="`/videos/${video.id}`" class="group cursor-pointer">
    <div class="relative rounded-lg overflow-hidden mb-2">
      <div>
        <img class="w-full object-cover" :src="video.image" :alt="video.title">
      </div>
    </div>
    <h3 class="text-sm font-medium mb-1 line-clamp-2">
        {{video.title}}
    </h3>
    <div class="flex items-center text-gray-500 text-xs">
      <span>{{ video.views ? video.views : '0' }} بازدید</span> <span class="mx-1">•</span>
      <span>{{video.created_at_fa}}</span>
    </div>
  </NuxtLink>
</template>

<style>
.h_iframe-aparat_embed_frame {
  position: relative;
}
.h_iframe-aparat_embed_frame .ratio {
  display: block;
  width: 100%;
  height: auto;
}
.h_iframe-aparat_embed_frame iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
