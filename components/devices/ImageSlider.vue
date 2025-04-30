<script setup>
const props = defineProps({
  slider: Object
})

let pics = ref([])

const slider = toRef(props, 'slider')

watch(slider, (newVal) => {
  pics.value = props.slider
}, { deep: true })

const images = [
  {
    src: '/images/cms-slime.png',
    id: 1
  },
  {
    src: 'https://swiperjs.com/demos/images/nature-2.jpg',
    id: 2
  },
  {
    src: '/images/cms-slime.png',
    id: 3
  },
  {
    src: 'https://swiperjs.com/demos/images/nature-4.jpg',
    id: 4
  },
  {
    src: '/images/cms-slime.png',
    id: 5
  },
  {
    src: 'https://swiperjs.com/demos/images/nature-6.jpg',
    id: 6
  },
  {
    src: '/images/cms-slime.png',
    id: 7
  }
];

const clickedImageId = ref(1);
const scrollContainer = ref(null);

function imageClick(id) {
  clickedImageId.value = id;
}

function getImageSrc(id) {
  const image = images.find(image => image.id === id);
  return image ? image.src : images[0].src;
}

function scrollUp() {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({
      top: -100,
      behavior: 'smooth'
    });
  }
}

function scrollDown() {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({
      top: 100,
      behavior: 'smooth'
    });
  }
}

function nextImage() {
  const currentIndex = images.findIndex(img => img.id === clickedImageId.value);
  const nextIndex = (currentIndex + 1) % images.length;
  clickedImageId.value = images[nextIndex].id;
}

function prevImage() {
  const currentIndex = images.findIndex(img => img.id === clickedImageId.value);
  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  clickedImageId.value = images[prevIndex].id;
}
</script>

<template>
  <div class="flex gap-[10px] overflow-hidden h-[510px] flex-row">
    <div class="flex flex-col h-full gap-1 relative">
      <!-- <img class="cursor-pointer absolute -top-2.5" @click="scrollUp" src="/icons/arrow-circle-left.svg" alt="arrow-circle-left"> -->
      <div ref="scrollContainer" class="flex flex-col gap-[10px] max-h-[410px] overflow-scroll small-images">
        <img v-for="image in pics" :key="image.id" :src="image.image" class="w-[100px] h-[90px] cursor-pointer"
          :class="{ '': clickedImageId === image.id }" @click="imageClick(image.id)">
      </div>
      <!-- <img class="cursor-pointer absolute -bottom-2.5 transform rotate-180" @click="scrollDown" src="/icons/arrow-circle-left.svg" alt="arrow-circle-left"> -->

    </div>
    <div class="w-full flex flex-col items-center gap-4">
      <img :src="getImageSrc(clickedImageId)" alt="Main image" class="w-full h-[410px] object-cover">
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
</style>