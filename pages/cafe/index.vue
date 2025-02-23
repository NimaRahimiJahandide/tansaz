<script setup lang="ts">
import { useLoadingState } from "@/store/loadingState";
const loadingState = useLoadingState();

setTimeout(() => {
  loadingState.setLoading(false);
}, 2000);

const coffees = ref([
  {
    id: 0,
    image: "/images/cafe1.webp",
    text: 'قهوه ربوستا'
  },
  {
    id: 1,
    image: "/images/cafe2.jpg",
    text: 'قهوه بدون شکر'
  },
  {
    id: 2,
    image: "/images/cafe1.webp",
    text: 'قهوه ربوستا'
  },
  {
    id: 3,
    image: "/images/cafe2.jpg",
    text: 'قهوه بدون شکر'
  },
  {
    id: 4,
    image: "/images/cafe1.webp",
    text: 'قهوه ربوستا'
  },
  {
    id: 5,
    image: "/images/cafe2.jpg",
    text: 'قهوه بدون شکر'
  },
  {
    id: 6,
    image: "/images/cafe1.webp",
    text: 'قهوه ربوستا'
  },
  {
    id: 7,
    image: "/images/cafe2.jpg",
    text: 'قهوه بدون شکر'
  },
]);
</script>

<template>
  <div class="max-w-[1200px] text-dark mx-auto px-3 mt-[75px]">
    <div v-if="loadingState.isLoading">
      <div class="flex md:flex-row flex-col gap-8">
        <div class="md:w-3/4 grid md:grid-cols-3 gap-8">
          <div
            v-for="blog in blogs"
            :key="blog.id"
            class="rounded-3xl p-4 animate-pulse h-[400px] bg-gray-300"
          ></div>
        </div>
        <div class="md:w-1/4">
          <div class="flex items-start gap-[20px]">
            <div class="size-[30px] bg-gray-300 rounded animate-pulse"></div>
            <div
              class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"
            ></div>
          </div>
          <div
            class="w-[80px] mt-2 h-[24px] bg-gray-300 rounded-4xl animate-pulse"
          ></div>
          <div class="flex items-start gap-[20px] mt-[14px]">
            <div class="size-[30px] bg-gray-300 rounded animate-pulse"></div>
            <div
              class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"
            ></div>
          </div>
          <div
            class="w-[80px] mt-2 h-[24px] bg-gray-300 rounded-4xl animate-pulse"
          ></div>
          <div
            class="w-full mt-2 h-[24px] bg-gray-300 rounded-4xl animate-pulse"
          ></div>
          <div
            class="w-full mt-2 h-[24px] bg-gray-300 rounded-4xl animate-pulse"
          ></div>
          <div
            class="w-full mt-2 h-[24px] bg-gray-300 rounded-4xl animate-pulse"
          ></div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="flex md:flex-row flex-col gap-8 mb-28">
        <div class="md:w-3/4 grid md:grid-cols-3 gap-8">
          <div v-for="coffee in coffees" :key="coffee.id"
            class="rounded-3xl bg-white p-4 shadow-[0_0px_10px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1"
          >
            <div class="relative h-[160px] w-full overflow rounded-2xl">
              <img
                :src="coffee.image"
                alt="Robusta Coffee"
                class="h-full w-full object-cover rounded-3xl"
              />
            </div>
            <div class="mt-3 text-center flex flex-col">
              <h3
                class="text-lg font-bold flex items-center justify-center text-center"
              >
                قهوه روبوستا
              </h3>
              <div class="mt-2 flex justify-end">
                <NuxtLink
                  to="#"
                  class="rounded-full flex justify-center items-center size-10 bg-primary p-2 text-white"
                >
                  <Icon
                    name="iconamoon:shopping-card-fill"
                    size="20px"
                    style="color: #fff"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-1/4">
          <div class="flex items-start gap-[20px]">
            <span
              class="bg-primary flex justify-center items-center rounded-[6px] size-[30px]"
            >
              <Icon name="lets-icons:insta" size="17px" style="color: #fff" />
            </span>
            <div class="flex flex-col gap-2.5">
              <p class="font-semibold">صفحه اینستاگرام</p>
            </div>
          </div>
          <span class="text-neutral-400">tansaz.clinic</span>
          <div class="flex items-start gap-[20px] mt-[14px]">
            <span
              class="bg-primary flex justify-center items-center rounded-[6px] size-[30px]"
            >
              <Icon name="mdi:location" size="17px" style="color: #fff" />
            </span>
            <div class="flex flex-col gap-2.5">
              <p class="font-semibold">آدرس کلینیک</p>
            </div>
          </div>
          <span class="text-neutral-400 text-[14px]"
            >شیراز، معالی آباد، نبش دنا، ساختمان هرم نور، طبقه 5 و 6</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
