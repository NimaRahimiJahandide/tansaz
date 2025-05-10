<template>
    <div v-if="show" class="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
        <div class="bg-white rounded-xl p-6 max-w-5xl w-full relative">
            <button @click="close" class="absolute top-4 left-4 text-red-500 text-2xl">
                ❌
            </button>

            <h2 class="text-xl font-bold text-right mb-4">گالری تصاویر</h2>

            <img :src="activeImage" class="w-full rounded-lg mb-6 max-h-[400px] object-contain" />

            <Swiper :slides-per-view="6" space-between="10" class="thumb-swiper">
                <SwiperSlide v-for="(img, index) in images" :key="index" @click="activeImage = img"
                    class="cursor-pointer">
                    <img :src="img" class="rounded-md border hover:border-blue-500 transition" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Props or setup logic
const show = ref(true)

const images = [
    '/images/dashboard-gallery1.png',
    '/images/dashboard-gallery2.png',
    '/images/dashboard-gallery3.png',
    '/images/dashboard-gallery2.png',
    '/images/dashboard-gallery3.png',
    '/images/dashboard-gallery2.png',
    '/images/dashboard-gallery3.png',
    '/images/dashboard-gallery2.png',
    '/images/dashboard-gallery3.png',
    '/images/dashboard-gallery2.png',
    '/images/dashboard-gallery3.png',
]

const activeImage = ref(images[0])

function close() {
    show.value = false
}
</script>

<style scoped>
.thumb-swiper img {
    width: 80px;
    height: 80px;
    object-fit: cover;
}
</style>