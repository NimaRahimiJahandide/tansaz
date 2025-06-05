<template>
  <div
    class="min-h-screen bg-black text-white flex flex-col items-center justify-center px-14 relative overflow-hidden">
    <!-- Header Text -->
    <div class="text-center z-10 mb-16">
      <h1 class="text-2xl leading-8 font-bold mb-1 text-center">
        کلینیک زیبایی ولاغری
      </h1>
      <div class="text-4xl md:text-5xl font-bold text-red-500">
        <img class="w-[200px] h-[50px] object-fill" src="/icons/web-logo2.svg" alt="tansaz-logo">
      </div>
    </div>

    <!-- Call to Action Button -->
    <div class="z-10 mb-8">
      <button
        class="bg-[#FFFFFF03] py-5 px-5 rounded-full whitespace-nowrap backdrop-blur-[20px] [box-shadow:inset_0_-5px_21px_0_#E3EDEF33,inset_0_0_3px_0_#9A92D24D,inset_0_70px_47px_-75px_#CAACFF4D,inset_0_2px_10px_-4px_#FFFFFF42,inset_0_34px_29px_-49px_#FFFFFF80] text-base font-semibold text-right">
        برای شروع دکمه پایین را <span class="text-primary">فشار</span> دهید!
      </button>
    </div>

    <!-- Arrow Animation -->
    <div class=" z-10">
      <div class="flex items-center justify-center h-28 bg-black">
        <div class="text-6xl font-bold text-primary drop-shadow-neon">
          <svg width="46" height="111" viewBox="0 0 46 111" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="arrowGradient" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#FF0000" stop-opacity="1" />
                <stop offset="0.5" stop-color="#FF0000" stop-opacity="0.5" />
                <stop offset="1" stop-color="#FF0000" stop-opacity="0.2" />
                <animateTransform attributeName="gradientTransform" type="translate" values="0,-111; 0,111" dur="1.1s"
                  repeatCount="indefinite" calcMode="linear" />
              </linearGradient>
            </defs>

            <path d="M23 2V109M23 109L43.5 88.7972M23 109L2.5 88.7972" stroke="url(#arrowGradient)" stroke-width="4"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>

      </div>

    </div>

    <!-- 3D Card Stack -->
    <div class="relative z-10">
      <img src="/icons/start-button.jpg" alt="start-button">
    </div>

    <!-- Phone Button -->
    <div class="fixed bottom-8 left-8 z-20">
      <button
        class="w-14 h-14 bg-red-500 hover:bg-red-600 transition-colors duration-300 rounded-full flex items-center justify-center shadow-lg">
        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      </button>
    </div>

    <!-- Background gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.drop-shadow-neon {
  filter: drop-shadow(0 0 6px #FF0000) drop-shadow(0 0 12px #FF0000) drop-shadow(0 0 18px #FF0000);
}
</style>
