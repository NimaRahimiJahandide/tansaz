<script setup lang="ts">
import { useLoadingState } from '@/store/loadingState';
const service = ref(false);
const isMenuOpen = ref(false);

const loadingState = useLoadingState();

setTimeout(() => {
  loadingState.setLoading(false); 
}, 2000);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
<template>
  <div>
    <div v-if="loadingState.isLoading">
      <nav>
        <!-- top of navbar -->
        <div
          class="md:flex hidden justify-between items-center py-[15px] max-w-[1200px] mx-auto px-3"
        >
          <div class="flex items-center gap-[1.25rem]">
            <div class="w-[108px] h-[68px] bg-gray-300 rounded animate-pulse"></div>
            <div class="w-[200px] lg:w-[30rem] h-[68px] bg-gray-300 rounded animate-pulse"></div>
          </div>
          <div class="flex items-center gap-[0.625rem]">
            <div class="size-10 bg-gray-300 rounded animate-pulse"></div>
            <div class="size-10 bg-gray-300 rounded animate-pulse"></div>
            <div class="w-[170px] h-10 bg-gray-300 rounded animate-pulse"></div>
            <div class="w-[115px] h-10 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>
        <hr />
        <!-- bottom of navbar -->
        <ul
          class="md:flex hidden items-center justify-center py-[0.625rem] gap-2 sticky top-0"
        >
          <li v-for="(item, index) in 4" :key="index" class="w-[100px] h-10 bg-gray-300 rounded animate-pulse"></li>
        </ul>
        <hr />
        <!-- start mobile -->
        <div class="flex justify-between md:hidden px-3 py-[0.625rem]">
          <div class="size-10 bg-gray-300 rounded animate-pulse"></div>
          <div class="flex gap-[0.625rem]">
            <div class="size-10 bg-gray-300 rounded animate-pulse"></div>
            <div class="size-10 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>  
        <!-- end mobile -->
      </nav>
    </div>
    
    <div v-else>
      <!-- Overlay -->
      <div :class="['overlay', { open: isMenuOpen }]" @click="toggleMenu"></div>
      <nav>
        <!-- top of navbar -->
        <div
          class="md:flex hidden justify-between items-center py-[15px] max-w-[75rem] mx-auto px-3"
        >
          <div class="flex items-center gap-[1.25rem]">
            <NuxtLink to="/" class="flex items-center py-4 px-2">
              <img class="w-[108px]" src="/icons/logo.png" alt="logo" />
            </NuxtLink>
            <input
              class="bg-background-input py-4 pr-4 pl-7 w-[12.5rem] lg:w-[32rem] focus:border-none focus:outline-none border-none rounded-2xl ml-2"
              type="text"
              placeholder="جستجو محصولات"
            />
          </div>
          <div class="flex items-center gap-[0.625rem]">
            <NuxtLink
              to="#"
              class="bg-[#333333] rounded-[0.625rem] size-10 flex items-center justify-center max-h-10"
            >
              <Icon name="mdi:user" size="24px" style="color: #fff" />
            </NuxtLink>
            <NuxtLink
              to="#"
              class="bg-primary rounded-[0.625rem] size-10 flex items-center justify-center max-h-10"
            >
              <Icon
                name="teenyicons:basket-solid"
                size="22px"
                style="color: #fff"
              />
            </NuxtLink>
            <a
              href="tel:07136385004"
              class="bg-[#262626] rounded-lg whitespace-nowrap text-white tracking-[2px] px-6 py-3 max-h-10 flex items-center justify-center"
            >
              <span>071-36385004</span>
            </a>
            <NuxtLink
              class="bg-primary whitespace-nowrap py-3 px-6 rounded-[0.625rem] text-white flex items-center justify-center max-h-10"
              to="/reserve"
            >
              <span>رزرو آنلاین</span>
            </NuxtLink>
          </div>
        </div>
        <hr />
        <!-- bottom of navbar -->
        <ul
          class="md:flex hidden items-center justify-center py-[0.625rem] sticky top-0"
        >
          <li>
            <NuxtLink to="/" class="text-primary py-2 px-4">صفحه اصلی</NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="#"
              class="navbar-item hover:bg-primary hover:text-white transition-all duration-150 py-2 px-4 rounded-[0.625rem]"
            >
              فروشگاه</NuxtLink
            >
          </li>
          <li class="relative group">
            <NuxtLink
              to="/services/beauty-services"
              class="navbar-item hover:bg-primary hover:text-white transition-all duration-150 py-2 px-4 rounded-[0.625rem] flex items-center justify-center gap-1"
            >
              <span>خدمات زیبایی</span>
              <Icon
                name="dashicons:arrow-down"
                size="24"
                class="icon text-black"
              />
            </NuxtLink>
            <div class="absolute top-full left-0 right-0 h-4"></div>
            <ul
              class="hidden group-hover:flex lg:w-[1000px] w-[750px] gap-[0.625rem] left-1/2 transform -translate-x-1/2 bg-white shadow-[0_0px_35px_rgba(0,0,0,0.12)] absolute top-14 p-[35px] rounded-[0.625rem] z-50"
            >
              <li class="flex flex-col gap-[1.25rem] flex-grow">
                <NuxtLink
                  to="/services/hyphotherapy"
                  class="flex items-center w-fit text-primary bg-light-red font-semibold gap-2 py-[6px] pr-[12px] pl-[16px] rounded-[0.625rem]"
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
                  class="flex items-center w-fit text-primary bg-light-red font-semibold gap-2 py-[6px] pr-[12px] pl-[16px] rounded-[0.625rem]"
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
                  class="flex items-center w-fit text-primary bg-light-red font-semibold gap-2 py-[6px] pr-[12px] pl-[16px] rounded-[0.625rem]"
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
              <li class="flex flex-col gap-[1.25rem] flex-grow">
                <NuxtLink
                  to="#"
                  class="flex items-center w-fit text-primary bg-light-red font-semibold gap-2 py-[6px] pr-[12px] pl-[16px] rounded-[0.625rem]"
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
              <li class="flex flex-col gap-[1.25rem] flex-grow">
                <NuxtLink
                  to="#"
                  class="flex items-center w-fit text-primary bg-light-red font-semibold gap-2 py-[6px] pr-[12px] pl-[16px] rounded-[0.625rem]"
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
              class="navbar-item hover:bg-primary hover:text-white transition-all duration-150 py-2 px-4 rounded-[0.625rem] flex items-center justify-center gap-1"
            >
              <span>خدمات لاغری</span>
              <Icon
                name="dashicons:arrow-down"
                size="24"
                class="icon text-black"
              />
            </NuxtLink>
          </li>
        </ul>
        <hr />
        <!-- start mobile -->
        <div class="flex justify-between md:hidden px-3 py-[0.625rem]">
          <div>
            <button
              @click="toggleMenu"
              class="bg-[#333333] rounded-[0.625rem] cursor-pointer size-10 flex items-center justify-center max-h-10"
            >
              <Icon name="pajamas:hamburger" size="18" style="color: #fff" />
            </button>
          </div>
          <div class="flex gap-[0.625rem]">
            <NuxtLink
              to="#"
              class="bg-primary rounded-[0.625rem] size-10 flex items-center justify-center max-h-10"
            >
              <Icon
                name="teenyicons:basket-solid"
                size="22px"
                style="color: #fff"
              />
            </NuxtLink>
            <NuxtLink
              to="#"
              class="bg-[#333333] rounded-[0.625rem] size-10 flex items-center justify-center max-h-10"
            >
              <Icon name="mdi:user" size="24px" style="color: #fff" />
            </NuxtLink>
          </div>
        </div>
  
        <!--start hamburger menu -->
        <div :class="['mobile-menu', { open: isMenuOpen }]">
          <div class="menu-content flex flex-col gap-5">
            <div class="flex items-end justify-end p-4">
              <button
                @click="toggleMenu"
                class="bg-primary cursor-pointer rounded-[0.625rem] size-5 flex items-center justify-center"
              >
                <Icon name="codex:cross" size="1.25rem" style="color: #fff" />
              </button>
            </div>
            <div class="flex items-center justify-center">
              <img
                class="size-[117px] object-contain"
                src="/icons/logo.png"
                alt="logo"
              />
            </div>
            <div class="flex justify-center gap-2.5">
              <button
                :class="
                  service
                    ? 'bg-[#F1F2F3] text-light-grey '
                    : 'bg-primary text-white'
                "
                class="cursor-pointer rounded-[0.625rem] py-2 px-4"
                @click="service = false"
              >
                منو
              </button>
              <button
                :class="
                  service
                    ? 'bg-primary text-white'
                    : 'bg-[#F1F2F3] text-light-grey '
                "
                class="cursor-pointer rounded-[0.625rem] py-2 px-4 transition-all duration-300"
                @click="service = true"
              >
                خدمات ما
              </button>
            </div>
            <ul class="p-4 text-dark" v-if="service">
              <li>
                <NuxtLink to="#" class="block py-2 px-4">خدمات زیبایی</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="block py-2 px-4">خدمات لاغزی</NuxtLink>
              </li>
            </ul>
            <ul class="p-4 text-dark" v-else>
              <li>
                <NuxtLink to="/" class="block py-2 px-4 text-primary"
                  >صفحه اصلی</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/contact-us" class="block py-2 px-4"
                  >تماس با ما</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="#" class="block py-2 px-4"
                  >رزو آنلاین نوبت</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="#" class="block py-2 px-4">بلاگ</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about-us" class="block py-2 px-4"
                  >درباره ما</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="#" class="block py-2 px-4">فروشگاه</NuxtLink>
              </li>
            </ul>
            <div class="flex flex-col gap-5 px-4">
              <NuxtLink
                to="/contact-us"
                class="flex w-full py-[17px] bg-black text-white items-center justify-center rounded-[0.625rem]"
                >تماس با ما</NuxtLink
              >
              <NuxtLink
                to="#"
                class="flex w-full py-[17px] bg-primary text-white items-center justify-center rounded-[0.625rem]"
                >محصولات ما</NuxtLink
              >
            </div>
          </div>
        </div>
  
        <!--end hamburger menu -->
  
        <!-- end mobile -->
      </nav>
    </div>
  </div>
</template>

<style scoped>
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  height: 100%;
  background: white;
  transition: right 0.3s ease;
  z-index: 1000;
}

.mobile-menu.open {
  right: 0;
}

.overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.overlay.open {
  opacity: 1;
  visibility: visible;
}

.menu-content {
  height: 100%;
  overflow-y: auto;
}

.navbar-item:hover .icon {
  color: white;
  transform: rotate(180deg);
  transition: all 0.15s ease;
}

.group:hover ul {
  display: flex;
  opacity: 1;
  pointer-events: auto;
}

.group ul {
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}
</style>
