<script setup lang="ts">
import { useLoadingState } from "@/store/loadingState";
import CardServicesSection from "./CardServicesSection.vue";
interface Card {
  id: number;
  text: string;
  icon: string;
  route: string;
}
const banner = ref({
  title:'" خدمات کلینیک تن ساز "',
  cards: [
    {
    id: 0,
    title: "پوست، مو، زیبایی",
    icon: "/icons/zibaii.png",
    route: "/services/1/beauty",
  },
  {
    id: 1,
    title: "لاغری بدون جراحی",
    icon: "/icons/laghari.png",
    route: "/services/21/slimming-services",
  },
  ],
})

const loadingState = useLoadingState();

setTimeout(() => {
  loadingState.setLoading(false);
}, 2000);
</script>

<template>
  <!-- <div class="mt-[85px]" v-if="loadingState.isLoading">
    <div>
      <div class="w-full h-[222px] bg-gray-300 rounded animate-pulse">
       
      </div>
    </div>
  </div> -->
  <div class="mt-[85px]">
    <div>
      <!-- <ServicesSection class="mb-[5rem]" :banner="banner"/> -->
      <div class="bg-primary bg-[url(/images/pattern.png)]">
        <div class="mt-[75px] max-w-[1200px] mx-auto px-5">
          <div class="py-10 px-8">
            <h2
              class="md:text-3xl text-xl text-white font-semibold text-center mb-16"
            >
              {{ banner.title }}
            </h2>
          </div>
        </div>
      </div>
      <div class="max-w-[1200px] mx-auto px-5">
        <div
          class="flex justify-between lg:-mt-10 gap-5 -mt-10 z-10"
        >
          <HomeCardServicesSection class="max-md:w-full"
            v-for="card in banner.cards"
            :key="card.id"
            :card="card"
          />
        </div>
      </div>
      <div class="max-w-[1200px] mx-auto px-5">
        <ReservationAndContactUsBanner />
        <!-- <div class="flex md:flex-row flex-col gap-[20px] mt-[75px]">
          <div
            class="flex flex-col gap-2.5 bg-dark text-white rounded-[25px] p-[35px] w-full backdrop-blur-md"
          >
            <h4 class="text-[30px] font-bold">باشگاه مشتریان</h4>
            <p class="text-[18px] font-light">
              در باشگاه مشتریان از امتیازات ویژه کلینیک تن ساز بهره مند شوید
            </p>
            <NuxtLink
              class="w-fit text-white bg-primary px-[15px] py-2 rounded-[25px]"
              to="#"
              >کلیک کنید</NuxtLink
            >
          </div>
          <div
            class="flex flex-col gap-2.5 bg-primary bg-[url(/images/pattern.png)] text-white rounded-[25px] p-[35px] w-full"
          >
            <h4 class="text-[30px] font-bold">خدمات اقساطی</h4>
            <p class="text-[18px] font-light">
              تا سقف 200 میلیون تومان، بدون سود و بدون ضامن
            </p>
            <NuxtLink
              class="w-fit text-white bg-space px-[15px] py-2 rounded-[25px]"
              to="#"
              >شرایط ویژه</NuxtLink
            >
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
