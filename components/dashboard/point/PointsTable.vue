<template>
  <div>
    <div class="bg-[#212121] rounded-lg overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-[#212121]">
            <tr class="text-[#828282] text-right font-semibold">
              <th class="px-6 py-3">ردیف</th>
              <th class="px-6 py-3">تعداد امتیاز</th>
              <th class="px-6 py-3">بابت</th>
              <th class="px-6 py-3">توضیحات</th>
              <th class="px-6 py-3">تاریخ و زمان</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in paginatedItems" :key="index"
              class="hover:bg-[#212121] transition-colors text-[#F2F4F6]">
              <td class="px-6 py-4" :class="{ 'border-b border-[#32353C]': index < paginatedItems.length - 1 }">
                {{ (currentPage - 1) * itemsPerPage + index + 1 }}
              </td>
              <td class="px-6 py-4" :class="{ 'border-b border-[#32353C]': index < paginatedItems.length - 1 }">
                {{ item.points }}
              </td>
              <td class="px-6 py-4" :class="{ 'border-b border-[#32353C]': index < paginatedItems.length - 1 }">
                {{ item.type }}
              </td>
              <td class="px-6 py-4 max-w-xs truncate"
                :class="{ 'border-b border-[#32353C]': index < paginatedItems.length - 1 }">
                {{ item.description }}
              </td>
              <td class="px-6 py-4" :class="{ 'border-b border-[#32353C]': index < paginatedItems.length - 1 }">
                {{ item.date }}
              </td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>
    <!-- Pagination -->
    <div class="px-6 py-3 flex items-center justify-between">
      <button @click="nextPage" :disabled="currentPage === totalPages"
        class="p-2 rounded-lg bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      <div class="flex space-x-2">
        <button v-for="page in visiblePages" :key="page" @click="goToPage(page)" :class="[
          'px-3 py-1 rounded transition-colors',
          page === currentPage
            ? 'bg-red-600 text-white'
            : 'bg-[#212121] hover:bg-gray-500 text-white'
        ]">
          {{ page }}
        </button>
        <span v-if="totalPages > 5" class="px-3 py-1 text-gray-400">...</span>
      </div>

      <button @click="previousPage" :disabled="currentPage === 1"
        class="p-2 rounded-lg bg-[#212121] hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
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