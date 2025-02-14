<script setup lang="ts">
interface Card {
  id: number;
  text: string;
  icon: string;
}

let cards = ref<Card[]>([
  { id: 0, text: "پوست، مو، زیبایی", icon: "/icons/zibaii.png" },
  { id: 1, text: "لاغری بدون جراحی", icon: "/icons/laghari.png" },
]);
</script>

<template>
  <div class="mt-[85px]">
    <div>
      <div class="bg-primary h-[222px] relative -z-10">
        <h2
          class="text-white whitespace-nowrap overflow-hidden absolute md:text-[28px] text-[24px] font-semibold text-center left-1/2 transform -translate-x-1/2 mt-[25px]"
        >
          " خدمات کلینیک تن ساز "
        </h2>
        <img
          class="h-[222px] object-cover w-full"
          src="/images/pattern.png"
          alt="pattern"
        />
      </div>
      <div class="max-w-[1200px] mx-auto px-3">
        <div
          class="flex lg:justify-between justify-center lg:-mt-32 gap-5 -mt-10 z-10"
        >
          <HomeCardServicesSection
            v-for="card in cards"
            :key="card.id"
            :card="card"
          />
        </div>
        <div
          class="flex gap-5 mt-[75px] md:flex-row flex-col justify-center items-center"
        >
          <NuxtLink class="rounded-[25px]" to="#">
            <img class="rounded-[25px]" src="/images/second.jpg" alt="" />
          </NuxtLink>
          <NuxtLink class="rounded-[25px]" to="#">
            <img class="rounded-[25px]" src="/images/first.jpg" alt="first" />
          </NuxtLink>
        </div>
        
        <div class="bg-primary flex gap-5 justify-end bg-[url(/images/pattern.png)] mt-[75px] rounded-[25px] p-[25px] md:flex-row flex-col">
          <NuxtLink to="#" class="text-white bg-black flex flex-col p-[25px] md:w-1/4 rounded-[15px]">
            <h4 class="text-[28px] font-semibold">رزرو نوبت</h4>
            <p>برای رزرو نوبت، کلیک کنید</p>
          </NuxtLink>
          <NuxtLink to="#" class="text-white bg-black flex flex-col p-[25px] md:w-1/4 rounded-[15px]">
            <h4 class="text-[28px] font-semibold">ارتباط با ما</h4>
            <p>حتما با ما تماس بگیرید</p>
          </NuxtLink>
          <NuxtLink to="#" class="text-white bg-black flex flex-col p-[25px] md:w-1/4 rounded-[15px]">
            <h4 class="text-[28px] font-semibold">مشاوره</h4>
            <p>برای مشاوه، کلیک کنید</p>
          </NuxtLink>
        </div>

        <div class="flex md:flex-row flex-col gap-[20px] mt-[75px]">
          <div class="flex flex-col gap-2.5 bg-dark text-white rounded-[25px] p-[35px] w-full">
            <h4 class="text-[30px] font-bold">باشگاه مشتریان</h4>
            <p class="text-[18px] font-light">در باشگاه مشتریان از امتیازات ویژه کلینیک تن ساز بهره مند شوید</p>
            <NuxtLink class="w-fit text-white bg-primary px-[15px] py-2 rounded-[25px]" to="#">کلیک کنید</NuxtLink>
          </div>
          <div class="flex flex-col gap-2.5 bg-primary bg-[url(/images/pattern.png)] text-white rounded-[25px] p-[35px] w-full">
            <h4 class="text-[30px] font-bold">خدمات اقساطی</h4>
            <p class="text-[18px] font-light">تا سقف 200 میلیون تومان، بدون سود و بدون ضامن</p>
            <NuxtLink class="w-fit text-white bg-dark px-[15px] py-2 rounded-[25px]" to="#">شرایط ویژه</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
