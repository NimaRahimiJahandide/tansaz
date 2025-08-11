<template>
  <header>
    <!-- Mobile Header -->
    <div class="lg:hidden bg-[#212121] p-4 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <img class="w-36  object-contain" src="/icons/new-logo-white.png" alt="logo">
      </div>
      <div class="flex items-center space-x-3">
        <img class="w-6 h-6 cursor-pointer" src="/icons/Menu_Alt_01-white.svg" alt="menu"
          @click="$emit('open-sidebar')">
        <Icon name="bx:user" size="24" class="text-white cursor-pointer" />
      </div>
    </div>

    <!-- Desktop Header -->
    <div class="hidden lg:block bg-[#151515] p-4">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center space-x-8">
          <nav class="flex space-x-6">
            <NuxtLink to="/" class="text-gray-300 hover:text-white transition-colors">صفحه اصلی</NuxtLink>
            <NuxtLink to="/services/beauty"
              class="text-gray-300 flex items-center space-x-1 hover:text-white transition-colors">
              <span>خدمات زیبایی</span>
              <Icon name="mdi:chevron-down" size="16" class="text-brand" />
            </NuxtLink>
            <NuxtLink to="/services/weight-loss"
              class="text-gray-300 flex items-center space-x-1 hover:text-white transition-colors">
              <span>خدمات لاغری</span>
              <Icon name="mdi:chevron-down" size="16" class="text-brand" />
            </NuxtLink>
            <NuxtLink to="/services/laser"
              class="text-gray-300 flex items-center space-x-1 hover:text-white transition-colors">
              <span>خدمات لیزر</span>
              <Icon name="mdi:chevron-down" size="16" class="text-brand" />
            </NuxtLink>
          </nav>
        </div>
        <div class="flex items-center space-x-4">
          <div class="relative">
            <input type="text" placeholder="جستجو"
              class="bg-[#212121] text-white px-4 py-2 rounded-[2.5rem] pr-10 focus:outline-none">
            <svg class="w-5 h-5 absolute right-3 top-2.5 text-[#828282] cursor-pointer" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button class="bg-brand hover:bg-brand/80 px-4 py-2 rounded-full cursor-pointer transition-colors">
            رزرو نوبت
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  isSidebarOpen: Boolean
})
</script>

<style scoped></style>