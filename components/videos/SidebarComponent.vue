<script setup>
defineProps({
  list: Array,
});
</script>

<template>
  <aside class="w-52 p-4 border-l border-gray-100 hidden md:block h-[100vh]">
    <div class="mb-6">
      <h2 class="font-bold mb-4 text-sm">دسته‌بندی</h2>
      <ul class="space-y-2">
        <li v-for="x in list">
          <a href="#" class="text-xs hover:text-red-600 transition-colors"
            >{{ x.name }}</a
          >
        </li>

      </ul>
    </div>
  </aside>
</template>
