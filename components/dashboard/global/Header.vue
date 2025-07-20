<template>
    <header>
        <!-- Mobile Header -->
        <div class="lg:hidden bg-[#212121] p-4 flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <img class="w-6 h-6 cursor-pointer" src="/icons/Menu_Alt_01-white.svg" alt="menu">
                <Icon name="bx:user" size="24" class="text-white"/>
            </div>
            <div class="flex items-center space-x-3">
               <img class="w-36  object-contain" src="/icons/new-logo.png" alt="logo">
            </div>
        </div>

        <!-- Desktop Header -->
        <div class="hidden lg:block bg-[#212121] p-4">
            <div class="max-w-7xl mx-auto flex items-center justify-between">
                <div class="flex items-center space-x-8">
                    <NuxtLink to="/" class="flex items-center space-x-3">
                        <svg class="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7l-10-5z" />
                        </svg>
                        <span class="text-xl font-bold text-red-500">tansaz</span>
                    </NuxtLink>
                    <nav class="flex space-x-6">
                        <NuxtLink to="/" class="text-gray-300 hover:text-white transition-colors">صفحه اصلی</NuxtLink>
                        <NuxtLink to="/services/beauty" class="text-gray-300 hover:text-white transition-colors">خدمات
                            زیبایی</NuxtLink>
                        <NuxtLink to="/services/weight-loss" class="text-gray-300 hover:text-white transition-colors">
                            خدمات لاغری</NuxtLink>
                        <NuxtLink to="/services/laser" class="text-gray-300 hover:text-white transition-colors">خدمات
                            لیزر</NuxtLink>
                    </nav>
                </div>
                <div class="flex items-center space-x-4">
                    <button class="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors">
                        رزرو نوبت
                    </button>
                    <div class="relative">
                        <input type="text" placeholder="جستجو"
                            class="bg-gray-700 text-white px-4 py-2 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-red-500">
                        <svg class="w-5 h-5 absolute left-3 top-2.5 text-gray-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>

</script>

<style scoped>
</style>