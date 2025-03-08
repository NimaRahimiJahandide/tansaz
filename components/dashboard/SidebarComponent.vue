<template>
  <div class="min-w-64 bg-primary text-white md:flex hidden flex-col px-4">
    <div class="flex items-center mt-6 mb-4">
      <div
        class="size-10 bg-gray-200 overflow-hidden rounded-full flex items-center justify-center"
      >
        <Icon
          name="ph:user-fill"
          size="40"
          class="-mb-3 overflow-hidden"
          style="color: #fff"
        />
      </div>
      <span class="mr-2 text-sm">علی علیزاده</span>
    </div>
    <div class="w-full mt-6">
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
    </div>
  </div>
</template>
