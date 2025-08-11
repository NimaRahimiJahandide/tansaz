<template>
  <div>
    <!-- Desktop Layout -->
    <div class="hidden lg:block">
      <!-- Filters -->
      <div>
        <DashboardPaymentsFilter v-model="filters" />
      </div>

      <!-- Turns Table -->
      <DashboardPaymentsTable :items="filteredPointsHistory" />
    </div>

    <!-- Mobile Layout -->
    <div class="lg:hidden">
      <DashboardPaymentsDropDown />

      <!-- Mobile Filters -->
      <div class="mb-6">
        <DashboardPaymentsFilter v-model="filters" />
      </div>

      <!-- Mobile Turn History -->
      <div class="space-y-4">
        <DashboardPaymentsHistoryItem v-for="(item, index) in filteredPointsHistory" :key="index" :item="item"
          :index="index + 1" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dashboard'
})

// Composables and imports
const router = useRouter()

const filters = ref({
  service: 'لیزر کل بدن',
  fromDate: '1404/03/25',
  toDate: '1404/06/25',
  type: 'همه'
})

const turnsHistory = ref([
  {
    date: '1404/06/25 - 15:30',
    totalPrice: '1،600،000 تومان',
    cashBack: '10%',
    yourEarn: '1،200،000 تومان',
    description: 'لورم ایپسوم متن ساختگی با تولید  نامفهوم  است.',
  },
  {
    date: '1404/06/25 - 15:30',
    totalPrice: '1،600،000 تومان',
    cashBack: '10%',
    yourEarn: '1،200،000 تومان',
    description: 'لورم ایپسوم متن ساختگی با تولید  نامفهوم  است.',
  },
  {
    date: '1404/06/25 - 15:30',
    totalPrice: '1،600،000 تومان',
    cashBack: '10%',
    yourEarn: '1،200،000 تومان',
    description: 'لورم ایپسوم متن ساختگی با تولید  نامفهوم  است.',
  },
])

// Computed properties
const filteredPointsHistory = computed(() => {
  let filtered = turnsHistory.value

  // Filter by type
  // if (filters.value.type !== 'همه') {
  //   filtered = filtered.filter(item => item.type === filters.value.type)
  // }

  // Filter by service
  // if (filters.value.service) {
  //   filtered = filtered.filter(item => item.service === filters.value.service)
  // }

  return filtered
})

// Meta tags for SEO
useSeoMeta({
  title: 'لیست پرداخت ها - تن ساز',
  description: 'مشاهده و لیست پرداخت ها خود در سیستم تن ساز'
})
</script>

<style scoped>
.hover\:bg-gray-750:hover {
  background-color: #374151;
}

.text-red-600 {
  color: #ff1d25;
}

.bg-red-600 {
  background-color: #ff1d25;
}

.bg-brand {
  background-color: #ED1C24;
}

.text-brand {
  color: #ED1C24;
}
</style> 