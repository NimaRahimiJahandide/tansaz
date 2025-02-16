<script setup lang="ts">
const service = ref(false);
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
<template>
  <div>
    <!-- Overlay -->
    <div :class="['overlay', { open: isMenuOpen }]" @click="toggleMenu"></div>
    <nav>
      <!-- top of navbar -->
      <div
        class="md:flex hidden justify-between items-center py-[15px] max-w-[1200px] mx-auto px-3"
      >
        <div class="flex items-center gap-[20px]">
          <NuxtLink to="#" class="flex items-center py-4 px-2">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
              />
            </svg>
          </NuxtLink>
          <NuxtLink
            to="#"
            class="bg-primary rounded-[10px] size-10 flex items-center justify-center max-h-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 512 512"
            >
              <path
                fill="#fff"
                d="M454.65 169.4A31.82 31.82 0 0 0 432 160h-64v-16a112 112 0 0 0-224 0v16H80a32 32 0 0 0-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0 0 50.48-20.55a69.48 69.48 0 0 0 21.52-50.2V192a31.75 31.75 0 0 0-9.35-22.6M176 144a80 80 0 0 1 160 0v16H176Z"
              />
            </svg>
          </NuxtLink>
          <a
            href="tel:07136385004"
            class="bg-[#262626] rounded-lg whitespace-nowrap text-white tracking-[2px] px-6 py-3 max-h-10 flex items-center justify-center"
          >
            <span>071-36385004</span>
          </a>
          <NuxtLink
            class="bg-primary whitespace-nowrap py-3 px-6 rounded-[10px] text-white flex items-center justify-center max-h-10"
            to="#"
          >
            <span>رزرو آنلاین</span>
          </NuxtLink>
        </div>
      </div>
      <hr />
      <!-- bottom of navbar -->
      <ul
        class="md:flex hidden items-center justify-center py-[10px] sticky top-0"
      >
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
            to="/beauty-services"
            class="navbar-item hover:bg-primary hover:text-white transition-all duration-150 py-2 px-4 rounded-[10px] flex items-center justify-center gap-1"
          >
            <span>خدمات زیبایی</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12px"
              height="12px"
              viewBox="0 0 40 40"
            >
              <path fill="#000" d="M4.659 11.833h30.682L20 32.167z" />
            </svg>
          </NuxtLink>
          <div class="absolute top-full left-0 right-0 h-4"></div>
          <ul
            class="hidden group-hover:flex lg:w-[1000px] w-[750px] gap-[10px] left-1/2 transform -translate-x-1/2 bg-white shadow-[0_0px_35px_rgba(0,0,0,0.12)] absolute top-14 p-[35px] rounded-[10px] z-50"
          >
            <li class="flex flex-col gap-[20px] flex-grow">
              <NuxtLink
                to="#"
                class="flex items-center w-fit text-primary bg-light-red font-semibold gap-2 py-[6px] pr-[12px] pl-[16px] rounded-[10px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  height="14px"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="#EF172E"
                    d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m17 35.428H30.307V48L15 32l15.307-16v11.143H49z"
                  />
                </svg>
                هایفوتراپی
              </NuxtLink>
              <NuxtLink
                to="#"
                class="flex items-center w-fit text-primary bg-light-red font-semibold gap-2 py-[6px] pr-[12px] pl-[16px] rounded-[10px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  height="14px"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="#EF172E"
                    d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m17 35.428H30.307V48L15 32l15.307-16v11.143H49z"
                  />
                </svg>
                لیزررفع مو های زائد
              </NuxtLink>
              <NuxtLink
                to="#"
                class="flex items-center w-fit text-primary bg-light-red font-semibold gap-2 py-[6px] pr-[12px] pl-[16px] rounded-[10px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  height="14px"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="#EF172E"
                    d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m17 35.428H30.307V48L15 32l15.307-16v11.143H49z"
                  />
                </svg>
                تزریقات زیبایی
              </NuxtLink>
              <ul
                class="list-disc list-inside marker:text-primary flex flex-col gap-1"
              >
                <li class="navbar-children_item">
                  <NuxtLink to="#"> بوتاکس </NuxtLink>
                </li>
                <li class="navbar-children_item">
                  <NuxtLink to="#"> ژل، فیلر و آنزیم </NuxtLink>
                </li>
                <li class="navbar-children_item">
                  <NuxtLink to="#"> مزوژل های آبرسان </NuxtLink>
                </li>
                <li class="navbar-children_item">
                  <NuxtLink to="#"> مزوتراپی و prp </NuxtLink>
                </li>
              </ul>
            </li>
            <li class="flex flex-col gap-[20px] flex-grow">
              <NuxtLink
                to="#"
                class="flex items-center w-fit text-primary bg-light-red font-semibold gap-2 py-[6px] pr-[12px] pl-[16px] rounded-[10px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  height="14px"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="#EF172E"
                    d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m17 35.428H30.307V48L15 32l15.307-16v11.143H49z"
                  />
                </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  height="14px"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="#EF172E"
                    d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m17 35.428H30.307V48L15 32l15.307-16v11.143H49z"
                  />
                </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12px"
              height="12px"
              viewBox="0 0 40 40"
            >
              <path fill="#000" d="M4.659 11.833h30.682L20 32.167z" />
            </svg>
          </NuxtLink>
        </li>
      </ul>
      <hr />
      <!-- start mobile -->
      <div class="flex justify-between md:hidden px-3 py-[10px]">
        <div>
          <button
            @click="toggleMenu"
            class="bg-[#333333] rounded-[10px] cursor-pointer size-10 flex items-center justify-center max-h-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 16 16"
            >
              <path
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
              />
            </svg>
          </button>
        </div>
        <div class="flex gap-[10px]">
          <NuxtLink
            to="#"
            class="bg-primary rounded-[10px] size-10 flex items-center justify-center max-h-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 512 512"
            >
              <path
                fill="#fff"
                d="M454.65 169.4A31.82 31.82 0 0 0 432 160h-64v-16a112 112 0 0 0-224 0v16H80a32 32 0 0 0-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0 0 50.48-20.55a69.48 69.48 0 0 0 21.52-50.2V192a31.75 31.75 0 0 0-9.35-22.6M176 144a80 80 0 0 1 160 0v16H176Z"
              />
            </svg>
          </NuxtLink>
          <NuxtLink
            to="#"
            class="bg-[#333333] rounded-[10px] size-10 flex items-center justify-center max-h-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>

      <!--start hamburger menu -->
      <div :class="['mobile-menu', { open: isMenuOpen }]">
        <div class="menu-content flex flex-col gap-5">
          <div class="flex items-end justify-end p-4">
            <button
              @click="toggleMenu"
              class="bg-primary cursor-pointer rounded-[10px] size-5 flex items-center justify-center"
            >
              <Icon name="codex:cross" size="20px" style="color: #fff" />
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
              class="cursor-pointer rounded-[10px] py-2 px-4"
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
              class="cursor-pointer rounded-[10px] py-2 px-4 transition-all duration-300"
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
              <NuxtLink to="/contact-us" class="block py-2 px-4">تماس با ما</NuxtLink>
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
              <NuxtLink to="#" class="block py-2 px-4">درباره ما</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="block py-2 px-4">فروشگاه</NuxtLink>
            </li>
          </ul>
          <div class="flex flex-col gap-5 px-4">
            <NuxtLink
              to="/contact-us"
              class="flex w-full py-[17px] bg-black text-white items-center justify-center rounded-[10px]"
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

.navbar-item:hover svg {
  transform: rotate(180deg);
  transition: all 0.15s ease;
}

.navbar-item:hover svg path {
  fill: white;
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
