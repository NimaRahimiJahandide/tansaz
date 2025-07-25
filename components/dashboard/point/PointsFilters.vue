<template>
  <div class="flex lg:flex-row flex-col justify-between rounded-lg pb-5">
    <h3 class="text-lg lg:text-2xl font-bold mb-4">تاریخچه امتیازات من</h3>

    <!-- Desktop Layout -->
    <div class="hidden lg:grid lg:grid-cols-3 lg:gap-4">
      <div>
        <DashboardGlobalFilterComponent :items="typeItems" label="بابت" v-model="filters.type"
          @update:modelValue="emitFilterChange" />
      </div>
      <div>
        <DashboardGlobalFilterComponent :items="dateItems" label="از تاریخ" v-model="filters.fromDate"
          @update:modelValue="emitFilterChange" />
      </div>
      <div>
        <DashboardGlobalFilterComponent :items="toDateItems" label="تا تاریخ" v-model="filters.toDate"
          @update:modelValue="emitFilterChange" />
      </div>
    </div>

    <!-- Mobile Layout -->
    <div class="lg:hidden grid grid-cols-2 gap-2">
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
    
      <div class="col-span-2">
        <DashboardGlobalFilterComponent
          :items="typeItems"
          label="بابت"
          v-model="filters.type"
          @update:modelValue="emitFilterChange"
        />
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