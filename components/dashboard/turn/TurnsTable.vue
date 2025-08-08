<template>
  <div>
    <div class="bg-[#212121] rounded-lg overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-[#212121]">
            <tr class="text-[#828282] text-right font-semibold">
              <th class="px-6 py-3">ردیف</th>
              <th class="px-6 py-3">نوع خدمت</th>
              <th class="px-6 py-3">تاریخ</th>
              <th class="px-6 py-3">زمان</th>
              <th class="px-6 py-3">وضعیت</th>
              <th class="px-6 py-3">عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in paginatedItems" :key="index"
              class="hover:bg-[#2a2a2a] transition-colors text-[#F2F4F6]">
              <td class="px-6 py-4" :class="{ 'border-b border-[#32353C]': index < paginatedItems.length - 1 }">
                {{ (currentPage - 1) * itemsPerPage + index + 1 }}
              </td>
              <td class="px-6 py-4" :class="{ 'border-b border-[#32353C]': index < paginatedItems.length - 1 }">
                {{ item.service }}
              </td>
              <td class="px-6 py-4" :class="{ 'border-b border-[#32353C]': index < paginatedItems.length - 1 }">
                {{ item.date }}
              </td>
              <td class="px-6 py-4" :class="{ 'border-b border-[#32353C]': index < paginatedItems.length - 1 }">
                {{ item.time }}
              </td>
              <td class="px-6 py-4" :class="{ 'border-b border-[#32353C]': index < paginatedItems.length - 1 }">
                <span 
                  class="px-3 py-1 rounded-[10px] text-sm font-medium"
                  :class="getStatusClass(item.status)"
                >
                  {{ item.status }}
                </span>
              </td>
              <td class="px-6 py-4" :class="{ 'border-b border-[#32353C]': index < paginatedItems.length - 1 }">
                <button 
                  class="px-3 py-1 rounded-[10px] text-sm font-medium transition-colors"
                  :class="getButtonClass(item.status)"
                  @click="handleAction(item)"
                >
                  {{ getButtonText(item.status) }}
                </button>
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

const emit = defineEmits(['change-turn', 'cancel-turn', 'view-details'])

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

const getStatusClass = (status) => {
  switch (status) {
    case 'رزرو شده':
      return 'bg-[#ED1C241A] text-brand'
    case 'لغو شده':
      return 'bg-[#FF69691A] text-[#FF6969]'
    case 'انجام شده':
      return 'bg-[#4CAF501A] text-[#4CAF50]'
    default:
      return 'bg-[#ED1C241A] text-brand'
  }
}

const getButtonClass = (status) => {
  switch (status) {
    case 'رزرو شده':
      return 'bg-brand hover:bg-brand/80 text-white'
    case 'لغو شده':
      return 'bg-[#4CAF50] hover:bg-[#4CAF50]/80 text-white'
    case 'انجام شده':
      return 'bg-[#828282] hover:bg-[#828282]/80 text-white'
    default:
      return 'bg-brand hover:bg-brand/80 text-white'
  }
}

const getButtonText = (status) => {
  switch (status) {
    case 'رزرو شده':
      return 'تغییر نوبت'
    case 'لغو شده':
      return 'رزرو مجدد'
    case 'انجام شده':
      return 'مشاهده جزئیات'
    default:
      return 'تغییر نوبت'
  }
}

const handleAction = (item) => {
  switch (item.status) {
    case 'رزرو شده':
      emit('change-turn', item)
      break
    case 'لغو شده':
      emit('change-turn', item)
      break
    case 'انجام شده':
      emit('view-details', item)
      break
    default:
      emit('change-turn', item)
  }
}

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