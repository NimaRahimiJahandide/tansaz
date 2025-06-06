<template>
  <div class="min-h-screen">
    <div class=" bg-black text-white flex flex-col items-center px-14 relative overflow-hidden pt-28">
      <!-- Header Text -->
      <div class="text-center z-10 mb-16">
        <h1 class="text-2xl leading-8 font-bold mb-1 text-center">
          کلینیک زیبایی ولاغری
        </h1>
        <div class="text-4xl md:text-5xl font-bold text-brand">
          <img class="w-[200px] h-[50px] object-fill" src="/icons/web-logo2.svg" alt="tansaz-logo">
        </div>
      </div>

      <!-- start header content -->
      <section v-if="!startWebsite.isStart">
        <!-- Call to Action Button -->
        <div class="z-10 mb-8">
          <button @click="playGif"
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

                <path ref="arrowPath" d="M23 2V109M23 109L43.5 88.7972M23 109L2.5 88.7972"
                  :stroke="'url(#arrowGradient)'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section v-else ref="sectionRef"
        class="flex justify-center items-center flex-col gap-[35px] text-lg font-medium leading-6 text-white">
        <p class="menu-item">باشگاه مشتریان</p>
        <p class="menu-item">معرفــی خدمــات</p>
        <p class="menu-item">ارتبــــــاط بــا مـــــــا</p>
      </section>
      <!-- end header content -->

      <!-- 3D Card Stack -->
      <div class="relative z-10">
        <img id="gifImage" src="/icons/start-button.jpg" alt="GIF preview" style="cursor: pointer;" @click="playGif" />
      </div>
      <!-- Phone Button -->
      <HomeFastSupport />
    </div>
    <!-- Service Section -->
    <transition name="fade">
      <div v-if="startWebsite.isStart">
        <HomeServiceSection />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'

import { useStartWebsite } from '@/store/initWebsite'

const startWebsite = useStartWebsite();

const sectionRef = ref(null)

let played = false;

function playGif() {
  if (played) return;

  const img = document.getElementById('gifImage');
  img.src = '/gifs/Tansaz-Once.gif';
  img.onclick = null;
  startWebsite.setImageClicked(true)

  played = true;
}

watch(
  () => startWebsite.isStart,
  async (newVal) => {
    if (newVal) {
      await nextTick()
      const items = sectionRef.value?.querySelectorAll('.menu-item')
      if (items) {
        gsap.from(items, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out'
        })
      }
    }
  }
)

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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>