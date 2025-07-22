<template>
  <div class="flex justify-between rounded-lg p-4 lg:p-6">
    <h3 class="text-lg lg:text-2xl font-bold mb-4">تاریخچه امتیازات من</h3>

    <!-- Desktop Layout -->
    <div class="hidden lg:grid lg:grid-cols-3 lg:gap-4">
      <div>
        <DashboardGlobalFilterComponent 
          :items="typeItems"
          label="بابت"
          v-model="filters.type"
          @update:modelValue="emitFilterChange"
        />
      </div>
      <div>
        <DashboardGlobalFilterComponent 
          :items="dateItems"
          label="از تاریخ"
          v-model="filters.fromDate"
          @update:modelValue="emitFilterChange"
        />
      </div>
      <div>
        <DashboardGlobalFilterComponent 
          :items="toDateItems"
          label="تا تاریخ"
          v-model="filters.toDate"
          @update:modelValue="emitFilterChange"
        />
      </div>
    </div>

    <!-- Mobile Layout -->
    <div class="lg:hidden space-y-4">
      <div>
        <DashboardGlobalFilterComponent 
          :items="dateItems"
          label="از تاریخ"
          v-model="filters.fromDate"
          @update:modelValue="emitFilterChange"
        />
      </div>

      <div>
        <DashboardGlobalFilterComponent 
          :items="toDateItems"
          label="تا تاریخ"
          v-model="filters.toDate"
          @update:modelValue="emitFilterChange"
        />
      </div>

      <div class="flex items-center bg-[#232323] rounded-full px-4 py-1 min-w-[120px]">
        <span class="text-gray-400 text-sm ml-1">بابت:</span>
        <select v-model="filters.type" @change="emitFilterChange"
          class="bg-[#232323] text-white text-sm font-medium border-none focus:ring-0 outline-none appearance-none px-1 py-0">
          <option value="همه">همه</option>
          <option value="قرعه کشی">قرعه کشی</option>
          <option value="تخفیف">تخفیف</option>
          <option value="خریدانه شانس">خریدانه شانس</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({
      service: 'خدمات لاغری',
      fromDate: '1404/03/25',
      toDate: '1404/06/25',
      type: 'همه'
    })
  }
})

const emit = defineEmits(['update:modelValue'])

const filters = ref({ ...props.modelValue })

// Service items (from original FilterComponent)
const serviceItems = ref([
  { id: 1, title: 'خدمات کلینیک تن ساز', value: 'خدمات کلینیک تن ساز', active: false },
  { id: 2, title: 'خدمات زیبایی', value: 'خدمات زیبایی', active: false },
  { id: 3, title: 'خدمات لاغری', value: 'خدمات لاغری', active: true },
  { id: 4, title: 'خدمات لیزر', value: 'خدمات لیزر', active: false },
  { id: 5, title: 'سایر موارد کلینیک تن ساز', value: 'سایر موارد کلینیک تن ساز', active: false },
  { id: 6, title: 'باشگاه مشتریان', value: 'باشگاه مشتریان', active: false }
])

// Type items
const typeItems = ref([
  { id: 1, title: 'همه', value: 'همه', active: true },
  { id: 2, title: 'قرعه کشی', value: 'قرعه کشی', active: false },
  { id: 3, title: 'تخفیف', value: 'تخفیف', active: false },
  { id: 4, title: 'خریدانه شانس', value: 'خریدانه شانس', active: false }
])

// Date items
const dateItems = ref([
  { id: 1, title: '1404/03/25', value: '1404/03/25', active: true },
  { id: 2, title: '1404/04/25', value: '1404/04/25', active: false },
  { id: 3, title: '1404/05/25', value: '1404/05/25', active: false }
])

// To Date items
const toDateItems = ref([
  { id: 1, title: '1404/06/25', value: '1404/06/25', active: true },
  { id: 2, title: '1404/07/25', value: '1404/07/25', active: false },
  { id: 3, title: '1404/08/25', value: '1404/08/25', active: false }
])

const emitFilterChange = () => {
  emit('update:modelValue', { ...filters.value })
}

// Watch for external changes
watch(() => props.modelValue, (newValue) => {
  filters.value = { ...newValue }
}, { deep: true })

// Update active states when filters change
watch(() => filters.value, (newFilters) => {
  // Update service items active state
  serviceItems.value.forEach(item => {
    item.active = item.value === newFilters.service
  })
  
  // Update type items active state
  typeItems.value.forEach(item => {
    item.active = item.value === newFilters.type
  })
  
  // Update date items active state
  dateItems.value.forEach(item => {
    item.active = item.value === newFilters.fromDate
  })
  
  // Update to date items active state
  toDateItems.value.forEach(item => {
    item.active = item.value === newFilters.toDate
  })
}, { deep: true, immediate: true })
</script>