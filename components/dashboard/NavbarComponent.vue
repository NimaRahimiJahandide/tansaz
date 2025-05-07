<script setup>
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
<template>
  <div class="bg-[#F1F1F1]">
    <header class="bg-white p-4 shadow-sm rounded-2xl mx-6 mt-2 flex justify-between items-center">
      <div class="flex items-center gap-9">
        <div class="size-[70px] rounded-full bg-gray-200 overflow-hidden"></div>
        <span class="font-bold text-xl text-gray-800">ثریا محمدی</span>
      </div>
      <div>
        <button class="p-2 rounded-full hover:bg-gray-100">
          <Icon name="line-md:bell" size="32" style="color: #000" />
        </button>
      </div>
    </header>
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