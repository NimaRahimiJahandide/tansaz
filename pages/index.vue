<template>
  <div class="min-h-screen bg-black text-white flex flex-col items-center  px-14 relative overflow-hidden pt-16">
    <!-- Header Text -->
    <div class="text-center z-10 mb-16">
      <h1 class="text-2xl leading-8 font-bold mb-1 text-center">
        کلینیک زیبایی ولاغری
      </h1>
      <div class="text-4xl md:text-5xl font-bold text-brand">
        <img class="w-[200px] h-[50px] object-fill" src="/icons/web-logo2.svg" alt="tansaz-logo">
      </div>
    </div>

    <!-- Call to Action Button -->
    <div class="z-10 mb-8">
      <button
        class="bg-[#FFFFFF03] py-5 px-5 rounded-full whitespace-nowrap backdrop-blur-[20px] [box-shadow:inset_0_-5px_21px_0_#E3EDEF33,inset_0_0_3px_0_#9A92D24D,inset_0_70px_47px_-75px_#CAACFF4D,inset_0_2px_10px_-4px_#FFFFFF42,inset_0_34px_29px_-49px_#FFFFFF80] text-base font-semibold text-right">
        برای شروع دکمه پایین را <span class="text-brand">فشار</span> دهید!
      </button>
    </div>

    <!-- Arrow Animation -->
    <div class="z-10 mb-10">
      <div class="flex items-center justify-center h-28 bg-black">
        <div class="text-6xl font-bold text-brand">
          <svg width="46" height="111" viewBox="0 0 46 111" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="arrowGradient" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#FF0000" stop-opacity="1" />
                <stop offset="0.5" stop-color="#FF0000" stop-opacity="0.5" />
                <stop offset="1" stop-color="#FF0000" stop-opacity="0.2" />
              </linearGradient>
            </defs>

            <path ref="arrowPath" d="M23 2V109M23 109L43.5 88.7972M23 109L2.5 88.7972" :stroke="'url(#arrowGradient)'"
              stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </div>

    <!-- 3D Card Stack -->
    <div class="relative z-10">
      <img id="gifImage" src="/icons/start-button.jpg" alt="GIF preview" style="cursor: pointer;" @click="playGif()" />
    </div>

    <!-- Phone Button -->
    <div class="fixed flex items-center bottom-8 left-8 z-20">
      <transition name="fade">
        <article v-if="tooltipOpen" class="relative pl-[10px]">
          <div
            class="tooltip-box relative flex items-center pl-[16px] w-[240px] h-[50px] bg-white rounded-[8px] gap-[10px] p-[3px]">
            <img class="size-[44px] rounded-[7px] object-cover" src="/images/Tooltip.png" alt="Tooltip">
            <span class="text-brand text-sm font-semibold">پشتیبانی سریع با مشاوران ما</span>
          </div>
        </article>
      </transition>

      <button @click="tooltipOpen = !tooltipOpen"
        class="size-[70px] bg-brand rounded-full flex items-center justify-center shadow-lg">
        <Icon name="mdi-light:phone" size="35" style="color: #fff" />
      </button>

    </div>

    <!-- Background gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none"></div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'

import { useStartWebsite } from '@/store/initWebsite'

const startWebsite = useStartWebsite();
const tooltipOpen = ref(false)

function playGif() {
  const img = document.getElementById('gifImage');
  img.src = '/gifs/Tansaz-Once.gif';
  img.onclick = null; // غیرفعال کردن کلیک مجدد (اختیاری)
  startWebsite.setImageClicked(true)
}

onMounted(() => {
  const gradient = document.querySelector('#arrowGradient')

  gsap.to(gradient, {
    attr: { gradientTransform: 'translate(0,111)' },
    duration: 1.1,
    repeat: -1,
    yoyo: false,
    ease: 'linear',
    onRepeat: () => {
      // Reset to start for continuous effect
      gradient.setAttribute('gradientTransform', 'translate(0,-111)')
    }
  })
})
</script>

<style scoped>
.tooltip-box::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 8px solid white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
