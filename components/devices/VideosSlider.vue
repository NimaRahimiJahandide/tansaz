<script setup>
const props = defineProps({
  clips: Object
})

let videos = ref([])
const srcValue = ref('')
let firstUrl = ref('')
const clips = toRef(props, 'clips')
videos.value = props.clips
if (props.clips.length > 0) {
  const script = videos.value[0]?.script;
  if (script.includes("aparat.com/v/")) {
    firstUrl.value = script.split("/").pop().replace(/["',]/, '').trim();
  }
  else if (script.includes("aparat.com/embed/")) {
    const match = script.match(/aparat\.com\/embed\/([^?&"]+)/);
    firstUrl.value = match ? match[1] : null;
  }
  else {
    firstUrl.value = null;
    console.error("قالب شناسه ویدیو نامعتبر است!");
  }
}

const clickedImageId = ref(null);

function imageClick(video) {
  clickedImageId.value = video.id;
  srcValue.value = video.script.match(/src="https:\/\/www\.aparat\.com\/embed\/([^?]+)/)[1]
}

</script>
<template>
  <div v-if="clips.length > 0" class="flex gap-[10px] overflow-hidden md:flex-row flex-col">
    <div class="w-full">
      <div class="h_iframe-aparat_embed_frame">
        <span :class="clickedImageId === null ? 'block pt-[57%]' : ''"></span>
        <iframe class="w-full h-[60vh]" v-show="clickedImageId === null"
          :src="`https://www.aparat.com/video/video/embed/videohash/${firstUrl}/vt/frame`" allowFullScreen="true"
          webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
        <div class="h_iframe-aparat_embed_frame"><span
            :class="clickedImageId === null ? '' : 'block pt-[57%]'"></span><iframe class="w-full h-[60vh]"
            :src="`https://www.aparat.com/video/video/embed/videohash/${srcValue}/vt/frame`" allowFullScreen="true"
            webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>

      </div>
    </div>
    <div class="flex flex-col gap-[10px]  max-h-[60vh] overflow-scroll small-images">
      <span class="flex items-center gap-5 font-bold" v-for="video in videos">
        <img :key="video.id" :src="video.image" class="w-[100px] h-[90px] cursor-pointer" @click="imageClick(video)">
        {{ video.name }}
      </span>
    </div>
  </div>
</template>
<style>
::-webkit-scrollbar {
  display: none;
}

.small-images {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

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
