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
      <!-- <div
        class="absolute inset-0 cursor-pointer bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center"
      >
      <img class="object-cover absolute" src="/images/cafe2.jpg" alt="">
        <div
          class="w-12 h-12 rounded-full bg-primary bg-opacity-0 group-hover:bg-opacity-90 transform scale-0 group-hover:scale-100 transition-transform flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            ></path>
          </svg>
        </div>
      </div> -->
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
