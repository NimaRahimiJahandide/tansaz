<template>
  <div class="bg-brand flex flex-col py-[85px] items-center">
    <!-- Header -->
    <div class="text-center flex flex-col gap-[10px] text-white mb-16">
      <h1 class="text-3xl font-bold leading-8">گردانه شانس را بچرخانید</h1>
      <p class="text-3xl font-bold leading-8">و برنــــــــــده شویــــــــــــــــــــــد</p>
    </div>

    <!-- Wheel -->
    <div class="relative w-[350px] h-[350px] overflow-hidden rounded-full  transition-transform duration-[5s] ease-out"
      ref="wheel"
      :style="{ transform: `rotate(${currentRotation}deg)` }"
      @transitionend="stopSpin"
    >
      <img src="/images/Wheel.png" alt="چرخ شانس" class="w-full h-full object-cover" />
    </div>

    <!-- Reset -->
    <button  @click="resetGame"
      class="mt-16 bg-white w-[186px] h-[48px] text-brand px-4 py-2 rounded-full font-bold">
      شروع چرخش
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isSpinning = ref(false);
const result = ref(null);
const currentRotation = ref(0);
const wheel = ref(null);

const wheelSections = [
  { name: "۱۰٪ تخفیف برای خدمات لیزر", angle: 0 },
  { name: "کارت هدیه ۱ میلیون تومنی", angle: 45 },
  { name: "کارت هدیه ۲۰۰ هزار تومن", angle: 90 },
  { name: "۲۵٪ تخفیف برای خدمات بوتاکس", angle: 135 },
  { name: "شانس‌ت رو دوباره امتحان کن", angle: 180 },
  { name: "کارت هدیه ۵۰۰ هزار تومن", angle: 225 },
  { name: "۱۰٪ تخفیف برای خدمات لاغری", angle: 270 },
  { name: "کارت هدیه ۲ میلیون تومنی", angle: 315 },
];

const startSpin = () => {
  isSpinning.value = true;

  // Randomly pick a section
  const chosen = wheelSections[Math.floor(Math.random() * wheelSections.length)];
  result.value = chosen.name;

  // Total spins + targeted section
  const spins = 5; // full spins
  const targetRotation = (spins * 360) + (360 - chosen.angle);
  currentRotation.value = targetRotation;
};

const stopSpin = () => {
  isSpinning.value = false;
};

const resetGame = () => {
  result.value = null;
  currentRotation.value = 0;
};
</script>
