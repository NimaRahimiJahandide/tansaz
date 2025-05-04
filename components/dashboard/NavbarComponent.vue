<script setup>
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
<template>
  <div>
    <div class="flex justify-between bg-white shadow-lg items-center h-20 px-10">
      <div class="flex md:gap-5 gap-1 items-center">
        <a href="/">
          <img src="/icons/TansazClinic.png" alt="Logo" class="w-16 object-cover" />
        </a>
        <button @click="toggleMenu"
          class="group w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center mr-2 cursor-pointer hover:bg-primary transition duration-300"
        >
          <Icon
            name="quill:hamburger"
            size="22"
            class="text-dark group-hover:text-white transition duration-300"
          />
        </button>
        <a
          href="/"
          class="group w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center mr-2 cursor-pointer hover:bg-primary transition duration-300"
        >
          <Icon
            name="line-md:home"
            size="18"
            class="text-dark group-hover:text-white transition duration-300"
          />
        </a>
      </div>
      <a
        href="/"
        class="group w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center mr-2 cursor-pointer hover:bg-primary transition duration-300"
      >
        <Icon
          name="mdi:power"
          size="18"
          class="text-dark group-hover:text-white transition duration-300"
        />
      </a>
    </div>
        <!--start hamburger menu -->
        <div :class="['mobile-menu', { open: isMenuOpen }]">
          <div class="menu-content flex flex-col gap-5">
            <button
              @click="toggleMenu"
              class="absolute left-0 top-3 cursor-pointer rounded-[10px] size-10 flex items-center justify-center"
            >
              <Icon
                class="hover:rotate-90 transition-all duration-1000"
                name="codex:cross"
                size="40px"
                style="color: #fff"
              />
            </button>
            <ul class="p-4 text-white mt-32 ">
              <div
              class="bg-red-700 hover:bg-red-800 transition-all rounded p-3 flex gap-5 items-center mb-3 cursor-pointer"
            >
              <Icon name="mdi:gift-outline" size="18" style="color: #fff" />
              <span class="text-sm">تن ساز کلاب</span>
            </div>
            <div
              class="bg-red-700 hover:bg-red-800 transition-all rounded p-3 flex gap-5 items-center cursor-pointer"
            >
              <Icon
                name="mdi:ship-wheel"
                size="18"
                style="color: #fff"
              />
              <span class="text-sm">گردونه شانس</span>
            </div>
            </ul>
          </div>
        </div>
        <!--end hamburger menu -->
  </div>
</template>

<style scoped>
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  background: #ef172e;
  transition: right 0.3s ease;
  z-index: 1000;
}

.mobile-menu.open {
  right: 0;
}

</style>