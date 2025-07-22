<template>
  <div class="flex justify-between rounded-lg p-4 lg:p-6">
    <h3 class="text-lg lg:text-2xl font-bold mb-4">تاریخچه امتیازات من</h3>

    <!-- Desktop Layout -->
    <div class="hidden lg:grid lg:grid-cols-3 lg:gap-4">
      <div>
        <DashboardGlobalFilterComponent />
      </div>
      <div>
        <select v-model="filters.type" @change="emitFilterChange"
          class="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500">
          <option value="همه">همه</option>
          <option value="قرعه کشی">قرعه کشی</option>
          <option value="تخفیف">تخفیف</option>
          <option value="خرید انه شانس">خرید انه شانس</option>
        </select>
      </div>
      <div>
        <label class="block text-sm font-medium mb-2">از تاریخ:</label>
        <select v-model="filters.fromDate" @change="emitFilterChange"
          class="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500">
          <option value="1404/03/25">1404/03/25</option>
          <option value="1404/04/25">1404/04/25</option>
          <option value="1404/05/25">1404/05/25</option>
        </select>
      </div>
      <div>
        <label class="block text-sm font-medium mb-2">تا تاریخ:</label>
        <select v-model="filters.toDate" @change="emitFilterChange"
          class="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500">
          <option value="1404/06/25">1404/06/25</option>
          <option value="1404/07/25">1404/07/25</option>
          <option value="1404/08/25">1404/08/25</option>
        </select>
      </div>
    </div>

    <!-- Mobile Layout -->
    <div class="lg:hidden space-y-4">
      <div>
        <label class="block text-sm font-medium mb-2">از تاریخ:</label>
        <select v-model="filters.fromDate" @change="emitFilterChange"
          class="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500">
          <option value="1404/03/25">1404/03/25</option>
          <option value="1404/04/25">1404/04/25</option>
          <option value="1404/05/25">1404/05/25</option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium mb-2">تا تاریخ:</label>
        <select v-model="filters.toDate" @change="emitFilterChange"
          class="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500">
          <option value="1404/06/25">1404/06/25</option>
          <option value="1404/07/25">1404/07/25</option>
          <option value="1404/08/25">1404/08/25</option>
        </select>
      </div>

      <div class="flex items-center bg-[#232323] rounded-full px-4 py-1 min-w-[120px]">
        <span class="text-gray-400 text-sm ml-1">بابت:</span>
        <select v-model="filters.type" @change="emitFilterChange"
          class="bg-[#232323] text-white text-sm font-medium border-none focus:ring-0 outline-none appearance-none px-1 py-0">
          <option value="همه">همه</option>
          <option value="قرعه کشی">قرعه کشی</option>
          <option value="تخفیف">تخفیف</option>
          <option value="خرید انه شانس">خرید انه شانس</option>
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
      fromDate: '1404/03/25',
      toDate: '1404/06/25',
      type: 'همه'
    })
  }
})

const emit = defineEmits(['update:modelValue'])

const filters = ref({ ...props.modelValue })

const emitFilterChange = () => {
  emit('update:modelValue', { ...filters.value })
}

// Watch for external changes
watch(() => props.modelValue, (newValue) => {
  filters.value = { ...newValue }
}, { deep: true })
</script>