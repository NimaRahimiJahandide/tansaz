<script setup lang="ts">
interface Card {
  id: number;
  icon: string;
  text: string;
  route?: string;
}

interface BannerData {
  title: string; 
  cards: Card[];
}

defineProps<{
  bannerData: BannerData; 
}>();
</script>

<template>
  <div class="mt-[85px] text-dark">
    <div>
      <div class="bg-primary h-[222px] relative -z-10">
        <h2
          class="text-white whitespace-nowrap overflow-hidden absolute md:text-[28px] text-[24px] font-semibold text-center left-1/2 transform -translate-x-1/2 mt-[25px]"
        >
          {{ bannerData.title }}
        </h2>
        <img
          class="h-[222px] object-cover w-full"
          src="/images/pattern.png"
          alt="pattern"
        />
      </div>
      <div class="max-w-[1200px] mx-auto px-3">
        <div
          class="flex lg:justify-between flex-wrap justify-center lg:-mt-32 gap-5 -mt-10 z-10"
        >
          <HomeCardServicesSection
            v-for="card in bannerData.cards"
            :key="card.id"
            :card="card"
          />
        </div>
      </div>
    </div>
  </div>
</template>
