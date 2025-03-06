<script setup lang="ts">
import { useLoadingState } from "@/store/loadingState";
interface Card {
  id: number;
  text: string;
  icon: string;
  route: string;
}

let cards = ref<Card[]>([
  {
    id: 0,
    text: "پوست، مو، زیبایی",
    icon: "/icons/zibaii.png",
    route: "/services/1",
  },
  {
    id: 1,
    text: "لاغری بدون جراحی",
    icon: "/icons/laghari.png",
    route: "/services/2",
  },
]);

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
      <ServicesSection class="mb-[5rem]"/>
      <div class="max-w-[1200px] mx-auto px-3">
        <ReservationAndContactUsBanner />
        <div class="flex md:flex-row flex-col gap-[20px] mt-[75px]">
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
        </div>
      </div>
    </div>
  </div>
</template>
