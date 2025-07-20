<template>
  <div class="bg-gray-800 rounded-lg overflow-hidden">
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead class="bg-gray-700">
          <tr>
            <th class="px-6 py-3 text-right text-sm font-medium text-gray-300">ردیف</th>
            <th class="px-6 py-3 text-right text-sm font-medium text-gray-300">تعداد امتیاز</th>
            <th class="px-6 py-3 text-right text-sm font-medium text-gray-300">بابت</th>
            <th class="px-6 py-3 text-right text-sm font-medium text-gray-300">توضیحات</th>
            <th class="px-6 py-3 text-right text-sm font-medium text-gray-300">تاریخ و زمان</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-700">
          <tr v-for="(item, index) in paginatedItems" :key="index" class="hover:bg-gray-750 transition-colors">
            <td class="px-6 py-4 text-sm text-white">{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
            <td class="px-6 py-4 text-sm text-white">{{ item.points }}</td>
            <td class="px-6 py-4 text-sm text-white">{{ item.type }}</td>
            <td class="px-6 py-4 text-sm text-white max-w-xs truncate">{{ item.description }}</td>
            <td class="px-6 py-4 text-sm text-white">{{ item.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- Pagination -->
    <div class="bg-gray-700 px-6 py-3 flex items-center justify-between">
      <button 
        @click="previousPage"
        :disabled="currentPage === 1"
        class="p-2 rounded-lg bg-gray-600 hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      
      <div class="flex space-x-2">
        <button 
          v-for="page in visiblePages" 
          :key="page"
          @click="goToPage(page)"
          :class="[
            'px-3 py-1 rounded transition-colors',
            page === currentPage 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-600 hover:bg-gray-500 text-white'
          ]"
        >
          {{ page }}
        </button>
        <span v-if="totalPages > 5" class="px-3 py-1 text-gray-400">...</span>
      </div>
      
      <button 
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="p-2 rounded-lg bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  itemsPerPage: {
    type: Number,
    default: 6
  }
})

const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(props.items.length / props.itemsPerPage))

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * props.itemsPerPage
  const end = start + props.itemsPerPage
  return props.items.slice(start, end)
})

const visiblePages = computed(() => {
  const pages = []
  const start = Math.max(1, currentPage.value - 2)
  const end = Math.min(totalPages.value, start + 4)
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})

const goToPage = (page) => {
  currentPage.value = page
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}
</script>