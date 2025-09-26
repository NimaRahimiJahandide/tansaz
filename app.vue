<script lang="ts" setup>
useSchemaOrg([
  defineWebPage({
    name: 'تن ساز'
  }),
])

// تنظیم meta viewport برای نمایش ثابت موبایل
useHead({
  meta: [
    {
      name: 'viewport',
      content: 'width=425, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
    }
  ]
})
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Container اصلی که در دسکتاپ وسط‌چین می‌شود -->
        <div class="max-w-[425px] mx-auto bg-white min-h-screen shadow-lg relative">
            <NuxtRouteAnnouncer />
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </div>
    </div>
</template>

<style>
*{
    direction: rtl;
    box-sizing: border-box;
    font-family: 'iran-yekan';
    font-display: swap; 
    scroll-behavior: smooth;
}

/* اطمینان از اینکه body و html عرض کامل را اشغال کنند */
html, body {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

/* فورس کردن حداکثر عرض در تمام سطوح */
#__nuxt {
    max-width: none !important;
    width: 100% !important;
}

:root {
    --swiper-pagination-color: #000 !important;
    --swiper-pagination-bullet-inactive-color: #d9d9d9 !important;
    --swiper-pagination-bullet-inactive-opacity: 1 !important;
    --swiper-navigation-background-color: gray;
    --swiper-navigation-color:#ffffff;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>