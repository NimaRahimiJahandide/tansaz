<script setup>
defineProps({
    video: Object,
})
</script>

<template>
  <div class="group">
    <div class="relative rounded-lg overflow-hidden mb-2">
      <div class="h_iframe-aparat_embed_frame">
        <span style="display: block; padding-top: 57%"></span
        ><iframe
          :src="video.url"
          allowFullScreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        ></iframe>
      </div>
    </div>
    <h3 class="text-sm font-medium mb-1 line-clamp-2">
        {{video.title}}
    </h3>
    <div class="flex items-center text-gray-500 text-xs">
      <span>{{ video.views }} بازدید</span> <span class="mx-1">•</span>
      <span>{{video.updateAt}}</span>
    </div>
  </div>
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
