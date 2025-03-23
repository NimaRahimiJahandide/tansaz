<script setup lang="ts">
import after from "/images/after.jpg";
import before from "/images/before.jpg";
</script>

<template>
  <div
    class="container max-w-[1200px] mx-auto px-5 mt-12"
  >
    <div
      class="max-w-xl mx-auto rounded-lg overflow-hidden relative"
    >
      <client-only>
        <VueCompareImage
          :left-image="before"
          :right-image="after"
          leftImageLabel="قبل"
          leftImageAlt="عکس قبل"
          rightImageLabel="بعد"
          rightImageAlt="عکس بعد"
          handle='<div style="border: 1px solid white; display: flex; border-radius: 50%; width: 40px; height: 40px; justify-content: center; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="#fff" d="M12 7.5L4 0v15z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="#fff" d="M3 7.5L11 0v15z"/></svg></div>'
        />
      </client-only>
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 text-white px-4 py-2 rounded text-sm z-[1]">
        کاهش سایز
      </div>
    </div>
  </div>
</template>

<style>
.vci--left-label{
    background: #01010e12;
    width: 50px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.vci--right-label{
    background: #01010e12;
    width: 50px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
