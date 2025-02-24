<script setup lang="ts">
import { useLoadingState } from "@/store/loadingState";
const loadingState = useLoadingState();
const isSticky = ref(false);
const handleScroll = () => {
  const navbar = document.querySelector('.sticky-nav');
  if (navbar) {
    const rect = navbar.getBoundingClientRect();
    isSticky.value = rect.top <= 0;
  }
};

setTimeout(() => {
  loadingState.setLoading(false);
}, 2000);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
  <div>
    <!-- <div v-if="loadingState.isLoading">
      <hr />
      <ul
        class="md:flex hidden items-center justify-center py-[10px] gap-2 sticky top-0"
      >
        <li
          v-for="(item, index) in 4"
          :key="index"
          class="w-[100px] h-10 bg-gray-300 rounded animate-pulse"
        ></li>
      </ul>
      <hr />
    </div> -->
    <ul
    :class="['md:flex hidden items-center justify-center py-[10px] w-full sticky top-0 bg-white shadow-md z-50 sticky-nav', isSticky ? 'border-b' : 'border-y']"    >
      <li>
        <NuxtLink to="/" class="text-primary py-2 px-4">صفحه اصلی</NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="#"
          class="navbar-item hover:bg-primary hover:text-white transition-all duration-150 py-2 px-4 rounded-[10px]"
        >
          فروشگاه</NuxtLink
        >
      </li>
      <li class="relative group">
        <NuxtLink
          to="/services/beauty-services"
          class="navbar-item hover:bg-primary hover:text-white transition-all duration-150 py-2 px-4 rounded-[10px] flex items-center justify-center gap-1"
        >
          <span>خدمات زیبایی</span>
          <Icon name="dashicons:arrow-down" size="24" class="icon text-black" />
        </NuxtLink>
        <div class="absolute top-full left-0 right-0 h-4"></div>
        <ul
          class="hidden group-hover:flex lg:w-[55rem] w-[40rem] gap-[10px] left-1/2 transform -translate-x-1/2 bg-white shadow-[0_0px_35px_rgba(0,0,0,0.12)] absolute top-14 p-[35px] rounded-[10px]"
        >
          <li class="flex flex-col gap-[20px] flex-grow">
            <NuxtLink
              to="/services/hyphotherapy"
              class="flex items-center w-fit text-primary bg-light-red font-semibold gap-2 py-[6px] pr-[12px] pl-[16px] rounded-[10px]"
            >
              <Icon
                name="mingcute:arrow-left-circle-fill"
                size="18"
                class="text-primary"
              />
              هایفوتراپی
            </NuxtLink>
            <NuxtLink
              to="/services/laser-hair-removal"
              class="flex items-center w-fit text-primary bg-light-red font-semibold gap-2 py-[6px] pr-[12px] pl-[16px] rounded-[10px]"
            >
              <Icon
                name="mingcute:arrow-left-circle-fill"
                size="18"
                class="text-primary"
              />
              لیزررفع مو های زائد
            </NuxtLink>
            <NuxtLink
              to="/services/beauty-injections"
              class="flex items-center w-fit text-primary bg-light-red font-semibold gap-2 py-[6px] pr-[12px] pl-[16px] rounded-[10px]"
            >
              <Icon
                name="mingcute:arrow-left-circle-fill"
                size="18"
                class="text-primary"
              />
              تزریقات زیبایی
            </NuxtLink>
            <ul
              class="list-disc list-inside marker:text-primary flex flex-col gap-1"
            >
              <li class="navbar-children_item">
                <NuxtLink to="/services/botox"> بوتاکس </NuxtLink>
              </li>
              <li class="navbar-children_item">
                <NuxtLink to="/services/gel-and-filler">
                  ژل، فیلر و آنزیم
                </NuxtLink>
              </li>
              <li class="navbar-children_item">
                <NuxtLink to="/services/hydrating-mesogels">
                  مزوژل های آبرسان
                </NuxtLink>
              </li>
              <li class="navbar-children_item">
                <NuxtLink to="/services/mesotherapy"> مزوتراپی و prp </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="flex flex-col gap-[20px] flex-grow">
            <NuxtLink
              to="#"
              class="flex items-center w-fit text-primary bg-light-red font-semibold gap-2 py-[6px] pr-[12px] pl-[16px] rounded-[10px]"
            >
              <Icon
                name="mingcute:arrow-left-circle-fill"
                size="18"
                class="text-primary"
              />
              اقدامات جراحی
            </NuxtLink>
            <ul
              class="list-disc list-inside marker:text-primary flex flex-col gap-1"
            >
              <li class="navbar-children_item">
                <NuxtLink to="#"> جراحی بوکال فت </NuxtLink>
              </li>
              <li class="navbar-children_item">
                <NuxtLink to="#"> جراحی سانترال لب </NuxtLink>
              </li>
              <li class="navbar-children_item">
                <NuxtLink to="#"> کاشت نخهای لیفت و جوانساز </NuxtLink>
              </li>
              <li class="navbar-children_item">
                <NuxtLink to="#"> ساب سیژن تراپی </NuxtLink>
              </li>
              <li class="navbar-children_item">
                <NuxtLink to="#"> تزریق و پیوند اتولوگ چربی </NuxtLink>
              </li>
              <li class="navbar-children_item">
                <NuxtLink to="#"> ساکشن غبغب </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="flex flex-col gap-[20px] flex-grow">
            <NuxtLink
              to="#"
              class="flex items-center w-fit text-primary bg-light-red font-semibold gap-2 py-[6px] pr-[12px] pl-[16px] rounded-[10px]"
            >
              <Icon
                name="mingcute:arrow-left-circle-fill"
                size="18"
                class="text-primary"
              />
              فشیال تخصصی
            </NuxtLink>
          </li>
        </ul>
      </li>
      <li>
        <NuxtLink
          to="#"
          class="navbar-item hover:bg-primary hover:text-white transition-all duration-150 py-2 px-4 rounded-[10px] flex items-center justify-center gap-1"
        >
          <span>خدمات لاغری</span>
          <Icon name="dashicons:arrow-down" size="24" class="icon text-black" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
