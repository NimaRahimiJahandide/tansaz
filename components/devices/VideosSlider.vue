<script setup>
    const images = [
        {
            src: 'https://swiperjs.com/demos/images/nature-1.jpg',
            id: 1,
            title: 'عنوان ویدیو',
            url: "https://www.aparat.com/video/video/embed/videohash/r85lx69/vt/frame"
        },
        {
            src: 'https://swiperjs.com/demos/images/nature-2.jpg',
            id: 2,
            title: 'عنوان ویدیو',
            url: "https://www.aparat.com/video/video/embed/videohash/xoa91tr/vt/frame"
        },
        {
            src: 'https://swiperjs.com/demos/images/nature-3.jpg',
            id: 3,
            title: 'عنوان ویدیو',
            url: "https://www.aparat.com/video/video/embed/videohash/eqel3ag/vt/frame"
        },
        {
            src: 'https://swiperjs.com/demos/images/nature-4.jpg',
            id: 4,
            title: 'عنوان ویدیو',
            url: "https://www.aparat.com/video/video/embed/videohash/rke89ls/vt/frame"
        }
    ];

    const clickedImageId = ref(null);

    function imageClick(id) {
        clickedImageId.value = id;
    }
    function getImageSrc(id) {
    const image = images.find(image => image.id === id);
    if (image) {
        return image.url;
    }
    return null; // or any default value if the image is not found
    }
</script>
<template>
    <div class="flex gap-[10px] overflow-hidden md:h-[65vh] md:flex-row flex-col">
        <div class="w-full">
            <div class="h_iframe-aparat_embed_frame">
                <span style="display: block;padding-top: 57%"></span>
                <iframe class="w-full h-[60vh]" v-show="clickedImageId === null" src="https://www.aparat.com/video/video/embed/videohash/r85lx69/vt/frame"  allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                <iframe class="w-full h-[60vh]" v-show="clickedImageId !== null" :src="getImageSrc(clickedImageId)"  allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
            </div>
            </div>
        <div class="flex flex-col gap-[10px]  max-h-[60vh] overflow-scroll small-images">
            <span class="flex items-center gap-5 font-bold" v-for="image in images">
                <img 
                :key="image.id"  
                :src="image.src"
                class="w-[100px] h-[90px] cursor-pointer"
                @click="imageClick(image.id)"
            >
            {{ image.title }}
            </span>
        </div>
    </div>
</template>
<style>

::-webkit-scrollbar {
  display: none;
}
.small-images{
    scrollbar-width: none;
    -ms-overflow-style: none;
}
.h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}
</style>
