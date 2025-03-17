<script setup>
const videos = ref([
  {
    id: 0,
    url: 'https://www.aparat.com/video/video/embed/videohash/eauv152/vt/frame',
    title: 'عجیب ترین رویدادهای مراسم افتتاحیه المپیک ۲۰۲۴ پاریس!',
    views: '۲۷۲',
    updateAt: '۳ روز پیش',
  },
  {
    id: 1,
    url: 'https://www.aparat.com/video/video/embed/videohash/unrz7l6/vt/frame',
    title: 'تو این شرایط رو ترکش کن!!',
    views: '۱۵۰',
    updateAt: '۱ روز پیش',
  },
  {
    id: 2,
    url: 'https://www.aparat.com/video/video/embed/videohash/haxi66g/vt/frame',
    title: 'چکاب و زیبایی حامد و مجتبی روستایی!!',
    views: '۱۵۰',
    updateAt: '۱ روز پیش',
  },
  {
    id: 3,
    url: 'https://www.aparat.com/video/video/embed/videohash/iahh8hq/vt/frame',
    title: 'چکاب و زیبایی حامد و مجتبی روستایی!!',
    views: '۱۵۰',
    updateAt: '۱ روز پیش',
  },
])
</script>

<template>
  <div>
    <div class="container max-w-[1200px] mx-auto bg-white text-gray-800 rtl">
      <main class="flex flex-row-reverse">
        <div class="flex-1 p-5">
          <h1 class="font-bold text-lg mb-3">ویدیوهای تن ساز</h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <VideosCardComponent  v-for="video in videos" :key="video.id" :video="video"/>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
