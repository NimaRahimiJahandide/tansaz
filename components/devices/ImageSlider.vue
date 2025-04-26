<script setup>
    const images = [
        {
            src: 'https://swiperjs.com/demos/images/nature-1.jpg',
            id: 1
        },
        {
            src: 'https://swiperjs.com/demos/images/nature-2.jpg',
            id: 2
        },
        {
            src: 'https://swiperjs.com/demos/images/nature-3.jpg',
            id: 3
        },
        {
            src: 'https://swiperjs.com/demos/images/nature-4.jpg',
            id: 4
        },
        {
            src: 'https://swiperjs.com/demos/images/nature-5.jpg',
            id: 5
        }
        ,
        {
            src: 'https://swiperjs.com/demos/images/nature-6.jpg',
            id: 6
        }
        ,
        {
            src: 'https://swiperjs.com/demos/images/nature-7.jpg',
            id: 7
        }
    ];

    const clickedImageId = ref(null);

    function imageClick(id) {
        clickedImageId.value = id;
    }
    function getImageSrc(id) {
    const image = images.find(image => image.id === id);
    if (image) {
        return image.src;
    }
    return null; // or any default value if the image is not found
    }
</script>
<template>
    <div class="flex gap-[10px] overflow-hidden  h-[510px] flex-row">
        <div class="flex flex-col gap-[10px] max-h-[410px] overflow-scroll small-images">
            <img 
            v-for="image in images" 
            :key="image.id"  
            :src="image.src"
            class="w-[100px] h-[90px] cursor-pointer"
            @click="imageClick(image.id)"
        >
        </div>
        <div class="w-full">
            <img v-show="clickedImageId === null" src='https://swiperjs.com/demos/images/nature-1.jpg' alt="scissors" class="w-full h-[410px]">
            <img v-show="clickedImageId !== null" :src="getImageSrc(clickedImageId)" alt="" class="w-full h-[410px]">
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
</style>
