<template>
  <nav class="flex items-center h-16 fixed top-0 left-0 right-0 w-full z-50 transition-colors duration-300" :class="{
    'bg-transparent': isServiceRoute  && !isScrolled,
    'bg-white': !isServiceRoute || isScrolled,
  }">
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
       <!-- Logo -->
      <div class="flex items-center space-x-2">
        <img @click="$router.push('/')" :src="(isServiceRoute && !isScrolled)
          ? '/icons/new-logo-white.png'
          : '/icons/new-logo.png'" alt="Logo" class="w-[155px]" />

      </div>

      <div class="flex gap-8 items-center">
        <!-- Hamburger Menu -->
        <div class="md:hidden">
          <button type="button" class="focus:outline-none flex items-center" @click="toggleMenu">
            <img :src="(isServiceRoute && !isScrolled)
              ? '/icons/Menu_Alt_01-white.svg'
              : '/icons/Menu_Alt_01.svg'" alt="Menu_Alt_01" />
          </button>
        </div>
        <!-- Profile Icon -->
        <div>
          <button class="focus:outline-none flex items-center">
            <Icon name="bx:user" size="24"
              :style="{ color: (isServiceRoute && !isScrolled) ? '#ffffff' : '#2e2e2e' }" />

          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="mobile-menu">
      <div v-if="isMenuOpen"
        class="fixed top-0 left-0 w-full bg-white h-full overflow-y-auto z-[1000] transform translate-x-0 transition-transform duration-300 ease-in-out"
        :class="{
          'translate-x-0': isMenuOpen,
          '-translate-x-full': !isMenuOpen,
        }">
        <div class="flex sticky bg-white top-0 z-[60] justify-between items-center p-4 border-b border-[#E1E1E1]">
          <h2 class="text-[20px] text-[#2E2E2ECC]">فهرست منو</h2>
          <Icon @click="isMenuOpen = !isMenuOpen" name="formkit:arrowleft" size="14" style="color: #2e2e2e" />
        </div>

        <ul class="flex flex-col gap-[10px] mb-[90px]">
          <li class="py-2 px-4" :class="{
            'bg-[#EFEFEF] border-r-4 border-brand': activeItem === 'support',
          }" @click="activeItems('support')">
            <NuxtLink to="#" class="flex items-center gap-4">
              <img src="/icons/user.svg" alt="user" />
              <span class="text-[#2E2E2E] leading-[34px]">پشتیبانی مشتریان</span>
            </NuxtLink>
          </li>

          <!-- Services Dropdown -->
          <li class="flex flex-col">
            <div
              class="flex justify-between items-center w-full py-2 px-4"
              :class="{
                'bg-[#EFEFEF] border-r-4 border-brand': isServicesOpen || activeItem === 'services',
              }"
              @click="toggleServices"
            >
              <div class="flex items-center gap-4">
                <img src="/icons/services.svg" alt="services" />
                <span class="text-[#2E2E2E] leading-[34px] font-medium">معرفی خدمات</span>
              </div>
              <Icon v-if="isServicesOpen" name="flowbite:angle-up-outline" size="16" style="color: #000" />
              <Icon v-if="!isServicesOpen" name="uil:angle-down"  size="24" style="color: #000" />
            </div>
            <transition name="submenu" @enter="onEnter" @leave="onLeave">
              <ul v-if="isServicesOpen" class="mr-8 mt-3 border-r-2 border-[#E1E1E1] transition-all duration-300">
                <!-- Loading state -->
                <li v-if="servicesPending" class="py-2 px-4">
                  <span class="text-[#2E2E2ECC] leading-[34px]">در حال بارگذاری...</span>
                </li>
                
                <!-- Error state -->
                <li v-else-if="servicesError" class="py-2 px-4">
                  <span class="text-red-500 leading-[34px]">خطا در بارگذاری خدمات</span>
                </li>
                
                <!-- Services list from API -->
                <li 
                  v-else
                  v-for="service in servicesData?.services || []" 
                  :key="service.id"
                  class="py-2 px-4" 
                  :class="{
                    'bg-[#EFEFEF] -mr-[2px] border-r-2 border-brand ml-4 rounded-l text-brand': activeItem === `service-${service.id}`,
                  }" 
                  @click.stop="activeItems(`service-${service.id}`)"
                >
                  <NuxtLink :to="`/service/${service.id}/${service.slug || 'service'}`">
                    <span class="text-[#2E2E2ECC] leading-[34px]">{{ service.title || service.name }}</span>
                  </NuxtLink>
                </li>
                
                <!-- Fallback static items if no services from API -->
                <template v-if="!servicesPending && !servicesError && (!servicesData?.services || servicesData.services.length === 0)">
                  <li class="py-2 px-4" :class="{
                    'bg-[#EFEFEF] -mr-[2px] border-r-2 border-brand ml-4 rounded-l text-brand': activeItem === 'beauty',
                  }" @click.stop="activeItems('beauty')">
                    <NuxtLink to="/service/1/test">
                      <span class="text-[#2E2E2ECC] leading-[34px]">خدمات زیبایی</span>
                    </NuxtLink>
                  </li>
                  <li class="py-2 px-4" :class="{
                    'bg-[#EFEFEF] -mr-[2px] border-r-2 border-brand ml-4 rounded-l text-brand': activeItem === 'slimming',
                  }" @click.stop="activeItems('slimming')">
                    <NuxtLink to="/service/1/test">
                      <span class="text-[#2E2E2ECC] leading-[34px]">خدمات لاغری</span>
                    </NuxtLink>
                  </li>
                  <li class="py-2 px-4" :class="{
                    'bg-[#EFEFEF] -mr-[2px] border-r-2 border-brand ml-4 rounded-l text-brand': activeItem === 'laser',
                  }" @click.stop="activeItems('laser')">
                    <NuxtLink to="/service/1/test">
                      <span class="leading-[34px] text-[#2E2E2ECC]">خدمات لیزر</span>
                    </NuxtLink>
                  </li>
                </template>
              </ul>
            </transition>
          </li>
          <li class="py-2 px-4" :class="{
            'bg-[#EFEFEF] border-r-4 border-brand': activeItem === 'gallery',
          }" @click="activeItems('gallery')">
            <NuxtLink to="/gallery" class="flex items-center gap-4">
              <img src="/icons/gallery.svg" alt="gallery" />
              <span class="text-[#2E2E2E] leading-[34px]">گالری تصاویر و تور مجازی</span>
            </NuxtLink>
          </li>
          <li class="py-2 px-4" :class="{
            'bg-[#EFEFEF] border-r-4 border-brand': activeItem === 'faqs',
          }" @click="activeItems('faqs')">
            <NuxtLink to="/faqs" class="flex items-center gap-4">
              <img src="/icons/question.svg" alt="question" />
              <span class="text-[#2E2E2E] leading-[34px]">پرسش های متداول
              </span>
            </NuxtLink>
          </li>
          <li class="py-2 px-4" :class="{
            'bg-[#EFEFEF] border-r-4 border-brand': activeItem === 'contact-us',
          }" @click="activeItems('contact-us')">
            <NuxtLink to="/contact-us" class="flex items-center gap-4">
              <img src="/icons/phone.svg" alt="phone" />
              <span class="text-[#2E2E2E] leading-[34px]">ارتباط با ما</span>
            </NuxtLink>
          </li>
          <li class="py-2 px-4" :class="{
            'bg-[#EFEFEF] border-r-4 border-brand': activeItem === 'articles',
          }" @click="activeItems('articles')">
            <NuxtLink to="/blogs" class="flex items-center gap-4">
              <img src="/icons/file.svg" alt="file" />
              <span class="text-[#2E2E2E] leading-[34px]">آخرین مقالات</span>
            </NuxtLink>
          </li>
        </ul>

        <!-- Buttons -->
        <div class="px-4 py-5">
          <button class="w-full h-12 font-semibold bg-brand text-white px-4 py-2 rounded-full">
            ثبت نام
          </button>
          <button class="w-full h-12 font-semibold mt-4 bg-[#EFEFEF] text-[#2E2E2E] px-4 py-2 rounded-full">
            ورود
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { useServices } from '~/composables/services/useServices'

const isMenuOpen = ref(false);
const activeItem = ref(null);
const isServicesOpen = ref(false);
const isScrolled = ref(false);

const route = useRoute();

// استفاده از composable برای دریافت خدمات
const { data: servicesData, pending: servicesPending, error: servicesError } = useServices();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleServices = () => {
  isServicesOpen.value = !isServicesOpen.value;
  activeItem.value = "services";
};

const activeItems = (item) => {
  activeItem.value = item;

  // اگر آیتم انتخاب شده غیر از services یا زیرمجموعه‌هاش بود، منو بسته شود
  const serviceItems = ["services", "beauty", "slimming", "laser"];
  
  // اضافه کردن آیتم‌های جدید از API به لیست خدمات
  const apiServiceItems = servicesData.value?.services?.map(service => `service-${service.id}`) || [];
  const allServiceItems = [...serviceItems, ...apiServiceItems];
  
  if (!allServiceItems.includes(item)) {
    isServicesOpen.value = false;
  } else {
    isServicesOpen.value = true;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

const isServiceRoute = computed(() => {
  return route.value?.path?.startsWith('/service/');
});

watch(() => route.fullPath, () => {
  isMenuOpen.value = false;
});
</script>

<style scoped>
.submenu-enter-active,
.submenu-leave-active {
  transition: all 0.3s ease;
}

.submenu-enter-from,
.submenu-leave-to {
  opacity: 0;
  max-height: 0;
}

.submenu-enter-to,
.submenu-leave-from {
  opacity: 1;
  max-height: 500px;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.4s ease;
}

.mobile-menu-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.mobile-menu-enter-to {
  transform: translateX(0%);
  opacity: 1;
}

.mobile-menu-leave-from {
  transform: translateX(0%);
  opacity: 1;
}

.mobile-menu-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>