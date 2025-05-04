<template>
  <header class="sticky top-0 z-50 bg-white shadow-sm">
    <div class="flex items-center justify-between p-2 border-b border-b-gray-100">
      <div class="flex items-center gap-2">
        <!-- <button class="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button> -->
        <nuxt-link to="/">
          <img width="50" height="50" src="/icons/TansazClinic.png" alt="logo">
        </nuxt-link>
      </div>
      <div class="relative flex-grow max-w-[400px] mx-4">
        <input
          type="text"
          placeholder="جستجوی ویدیو، کانال"
          class="w-full py-1.5 px-4 pl-10 bg-gray-100 rounded-md text-sm focus:outline-none"
        />
        <button
          class="absolute cursor-pointer left-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div class="flex items-center gap-2">
        <nuxt-link class="border px-3 py-1.5 rounded-2xl border-gray-100 hover:bg-primary hover:text-white transition-all duration-300" to="/dashboard">ورود</nuxt-link>
      </div>
    </div>

    <div class="overflow-x-auto scrollbar-hide">
      <nav class="flex items-center px-2 py-1 min-w-max">
        <a
          href="#"
          class="whitespace-nowrap px-3 py-1.5 text-xs font-medium hover:bg-gray-100 rounded-md transition-colors"
          >تازه‌ها</a
        >
        <a
          href="#"
          class="whitespace-nowrap px-3 py-1.5 text-xs font-medium hover:bg-gray-100 rounded-md transition-colors"
          >خودرو و وسایل نقلیه</a
        >
        <a
          href="#"
          class="whitespace-nowrap px-3 py-1.5 text-xs font-medium hover:bg-gray-100 rounded-md transition-colors"
          >ورزشی</a
        >
        <a
          href="#"
          class="whitespace-nowrap px-3 py-1.5 text-xs font-medium hover:bg-gray-100 rounded-md transition-colors"
          >کارتون و انیمیشن</a
        >
        <a
          href="#"
          class="whitespace-nowrap px-3 py-1.5 text-xs font-medium hover:bg-gray-100 rounded-md transition-colors"
          >طنز</a
        >
        <a
          href="#"
          class="whitespace-nowrap px-3 py-1.5 text-xs font-medium hover:bg-gray-100 rounded-md transition-colors"
          >گیم</a
        >
        <a
          href="#"
          class="whitespace-nowrap px-3 py-1.5 text-xs font-medium hover:bg-gray-100 rounded-md transition-colors"
          >تکنولوژی و گجت</a
        >
        <a
          href="#"
          class="whitespace-nowrap px-3 py-1.5 text-xs font-medium hover:bg-gray-100 rounded-md transition-colors"
          >غذا و سلامت</a
        >
        <a
          href="#"
          class="whitespace-nowrap px-3 py-1.5 text-xs font-medium hover:bg-gray-100 rounded-md transition-colors"
          >گردشگری و سفر</a
        >
        <a
          href="#"
          class="whitespace-nowrap px-3 py-1.5 text-xs font-medium hover:bg-gray-100 rounded-md transition-colors"
          >هنر و طراحی</a
        >
        <a
          href="#"
          class="whitespace-nowrap px-3 py-1.5 text-xs font-medium hover:bg-gray-100 rounded-md transition-colors"
          >مذهبی</a
        >
        <a
          href="#"
          class="whitespace-nowrap px-3 py-1.5 text-xs font-medium hover:bg-gray-100 rounded-md transition-colors"
          >موسیقی</a
        >
        <a
          href="#"
          class="whitespace-nowrap px-3 py-1.5 text-xs font-medium hover:bg-gray-100 rounded-md transition-colors"
          >بانوان</a
        >
      </nav>
    </div>
  </header>
</template>
