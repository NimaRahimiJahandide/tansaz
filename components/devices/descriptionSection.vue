<script setup>
let active= ref(true)
defineProps({
  title: String,
  shortDescription: String,
  functionality: String
})
</script>

<template>
    <div class="rounded-lg overflow-hidden">
        <div class="flex flex-row">
          <!-- Red sidebar -->
          <div class="w-10 md:w-16 h-[25vh] flex flex-col">
            <div @click="active = !active" :class="active ? 'bg-red-200' : ''" class="flex-1 rounded-r-2xl border border-l-0 cursor-pointer border-red-500 flex items-center justify-center">
              <span class="text-base  font-bold transform rotate-90 text-center">
                توضیحات
              </span>
            </div>
            <div @click="active = !active" :class="active ? '' : 'bg-red-200'" class="flex-1 flex rounded-r-2xl border border-l-0 cursor-pointer border-red-500 items-center justify-center">
              <span class="whitespace-nowrap font-bold transform  rotate-90 text-center">عمکرد دستگاه</span>
            </div>
          </div>
          <!-- Main content area -->
          <div class="flex-1 shadow-md bg-gray-50 p-6 md:p-8">
            <h2 class="md:text-xl text-sm font-bold mb-6 text-right">
              {{ title }}
            </h2>
            <p class="text-justify mb-4 leading-8" v-if="active">{{shortDescription}}</p>
            <p class="text-justify mb-4 leading-8" v-else>{{functionality}}</p>
          </div>
        </div>
      </div>
</template>