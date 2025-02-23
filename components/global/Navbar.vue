<script setup lang="ts">
import { useLoadingState } from "@/store/loadingState";
const service = ref(false);
const isMenuOpen = ref(false);
const loadingState = useLoadingState();

const isServicesMenuOpen = ref(false);

setTimeout(() => {
  loadingState.setLoading(false);
}, 2000);
</script>
<template>
  <div>
    <div v-if="loadingState.isLoading">
      <nav>
        <!-- top of navbar -->
        <div
          class="md:flex hidden justify-between items-center py-[15px] max-w-[1200px] mx-auto px-3"
        >
          <div class="flex items-center gap-[20px]">
            <div
              class="w-[108px] h-[68px] bg-gray-300 rounded animate-pulse"
            ></div>
            <div
              class="w-[200px] lg:w-[420px] h-[68px] bg-gray-300 rounded animate-pulse"
            ></div>
          </div>
          <div class="flex items-center gap-[10px]">
            <div class="size-10 bg-gray-300 rounded animate-pulse"></div>
            <div class="size-10 bg-gray-300 rounded animate-pulse"></div>
            <div class="w-[170px] h-10 bg-gray-300 rounded animate-pulse"></div>
            <div class="w-[115px] h-10 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>
        <!-- start mobile -->
        <div class="flex justify-between md:hidden px-3 py-[10px]">
          <div class="size-10 bg-gray-300 rounded animate-pulse"></div>
          <div class="flex gap-[10px]">
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
          class="md:flex hidden justify-between items-center py-[15px] max-w-[1200px] mx-auto px-3"
        >
          <div class="flex items-center gap-[20px]">
            <NuxtLink to="/" class="flex items-center py-4 px-2">
              <img class="w-[108px]" src="/icons/logo.png" alt="logo" />
            </NuxtLink>
            <input
              class="bg-background-input py-4 pr-4 pl-7 w-[200px] lg:w-[420px] focus:border-none focus:outline-none border-none rounded-2xl ml-2"
              type="text"
              placeholder="جستجو محصولات"
            />
          </div>
          <div class="flex items-center gap-[10px]">
            <NuxtLink
              to="#"
              class="bg-[#333333] rounded-[10px] size-10 flex items-center justify-center max-h-10"
            >
              <Icon name="mdi:user" size="24px" style="color: #fff" />
            </NuxtLink>
            <NuxtLink
              to="#"
              class="bg-primary rounded-[10px] size-10 flex items-center justify-center max-h-10"
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
              class="bg-primary whitespace-nowrap py-3 px-6 rounded-[10px] text-white flex items-center justify-center max-h-10"
              to="/reserve"
            >
              <span>رزرو آنلاین</span>
            </NuxtLink>
          </div>
        </div>
        <!-- start mobile -->
        <div
          class="flex fixed w-full bg-white justify-between md:hidden px-3 py-[10px]"
        >
          <div>
            <button
              @click="toggleMenu"
              class="bg-[#333333] rounded-[10px] cursor-pointer size-10 flex items-center justify-center max-h-10"
            >
              <Icon name="pajamas:hamburger" size="18" style="color: #fff" />
            </button>
          </div>
          <div class="flex gap-[10px]">
            <NuxtLink
              to="#"
              class="bg-primary rounded-[10px] size-10 flex items-center justify-center max-h-10"
            >
              <Icon
                name="teenyicons:basket-solid"
                size="22px"
                style="color: #fff"
              />
            </NuxtLink>
            <NuxtLink
              to="#"
              class="bg-[#333333] rounded-[10px] size-10 flex items-center justify-center max-h-10"
            >
              <Icon name="mdi:user" size="24px" style="color: #fff" />
            </NuxtLink>
          </div>
        </div>
        <!--start hamburger menu -->
        <div :class="['mobile-menu', { open: isMenuOpen }]">
          <div class="menu-content flex flex-col gap-5">
            <button
              @click="toggleMenu"
              class="absolute -left-[20%] top-3 cursor-pointer rounded-[10px] size-10 flex items-center justify-center"
            >
              <Icon
                class="hover:rotate-90 transition-all duration-1000"
                name="codex:cross"
                size="40px"
                style="color: #fff"
              />
            </button>
            <div class="flex items-center justify-center">
              <img
                class="size-[117px] object-contain"
                src="/icons/logo.png"
                alt="logo"
              />
            </div>
            <div class="flex justify-center gap-2.5"></div>
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
                <NuxtLink
                  to="/"
                  class="block py-2 px-4 text-primary hover:text-primary"
                  >صفحه اصلی</NuxtLink
                >
              </li>
              <li>
                <div
                  class="flex cursor-pointer items-center justify-between py-2 px-4 hover:text-primary"
                  @click="toggleServicesMenu"
                >
                  <span>خدمات ما</span>
                  <Icon
                    name="dashicons:arrow-down"
                    size="24"
                    class="icon text-black transition-transform duration-200"
                    :class="{ 'rotate-180': isServicesMenuOpen }"
                  />
                </div>
                <ul
                  v-if="isServicesMenuOpen"
                  class="pl-6 transition-all duration-300 overflow-hidden mr-5"
                >
                  <li>
                    <NuxtLink
                      to="/services/service1"
                      class="block py-2 px-4 hover:text-primary"
                      >هایفوتراپی</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/services/service2"
                      class="block py-2 px-4 hover:text-primary"
                      >لیزر موهای زائد</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/services/service3"
                      class="block py-2 px-4 hover:text-primary"
                      >تزریقات زیبایی</NuxtLink
                    >
                  </li>
                </ul>
              </li>
              <li>
                <NuxtLink
                  to="/contact-us"
                  class="block py-2 px-4 hover:text-primary"
                  >تماس با ما</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="#" class="block py-2 px-4 hover:text-primary"
                  >رزو آنلاین نوبت</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="#" class="block py-2 px-4 hover:text-primary"
                  >بلاگ</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/about-us"
                  class="block py-2 px-4 hover:text-primary"
                  >درباره ما</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="#" class="block py-2 px-4 hover:text-primary"
                  >فروشگاه</NuxtLink
                >
              </li>
            </ul>

            <div class="flex flex-col gap-5 px-4">
              <NuxtLink
                to="/contact-us"
                class="flex w-full py-[17px] bg-space text-white items-center justify-center rounded-[10px]"
                >تماس با ما</NuxtLink
              >
              <NuxtLink
                to="#"
                class="flex w-full py-[17px] bg-primary text-white items-center justify-center rounded-[10px]"
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

.sticky {
  position: -webkit-sticky; /* برای ساپورت در مرورگرهای قدیمی */
  position: sticky;
  top: 0;
  background: white;
  z-index: 50;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
