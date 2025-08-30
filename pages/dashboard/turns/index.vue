<template>
  <div>
    <!-- Desktop Layout -->
    <div class="hidden lg:block">
      <h1 class="text-2xl font-bold leading-8 mb-4">نوبت های من</h1>

      <!-- Turns Card Desktop -->
      <section class="grid min-[1060px]:grid-cols-3 grid-cols-2 gap-4 mb-10">
        <DashboardTurnMyTurnCard v-for="card in cards" :key="card.id" :card="card" />
      </section>

      <!-- Filters -->
      <div>
        <DashboardTurnFilters v-model="filters" />
      </div>

      <!-- Turns Table -->
      <DashboardTurnTurnsTable :items="filteredPointsHistory" />
    </div>

    <!-- Mobile Layout -->
    <div class="lg:hidden">
      <DashboardTurnDropDown />

      <!-- Turns Card Mobile -->
      <section class="grid gap-4 mb-10">
        <DashboardTurnMyTurnCard v-for="card in cards" :key="card.id" :card="card" />
      </section>


      <!-- Mobile Filters -->
      <div class="mb-6">
        <DashboardTurnFilters v-model="filters" />
      </div>

      <!-- Mobile Turn History -->
      <div class="space-y-4">
        <DashboardTurnHistoryItem v-for="(item, index) in filteredPointsHistory" :key="index" :item="item"
          :index="index + 1" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { DashboardTurnTurnsTable } from '#components'

definePageMeta({
  layout: 'dashboard'
})

// Composables and imports
const router = useRouter()

// Modal state
const showConvertModal = ref(false)

// Reactive data
const totalPoints = ref(1200)
const totalPointsText = ref('هزار و دویست')

const filters = ref({
  service: 'لیزر کل بدن',
  fromDate: '1404/03/25',
  toDate: '1404/06/25',
  type: 'همه'
})

const turnsHistory = ref([
  {
    points: 30,
    type: 'لیزر کل بدن',
    service: 'لیزر کل بدن',
    status: 'رزرو شده',
    date: '1404/06/25 - 15:30'
  },
  {
    points: 5,
    type: 'لیزر کل بدن',
    service: 'لیزر کل بدن',
    status: 'لغو شده',
    date: '1404/06/25 - 15:30'
  },
  {
    points: 23,
    type: 'لیزر کل بدن',
    service: 'لیزر کل بدن',
    status: 'انجام شده',
    date: '1404/06/25 - 15:30'
  },
])

// Computed properties
const filteredPointsHistory = computed(() => {
  let filtered = turnsHistory.value

  // Filter by type
  if (filters.value.type !== 'همه') {
    filtered = filtered.filter(item => item.type === filters.value.type)
  }

  // Filter by service
  if (filters.value.service) {
    filtered = filtered.filter(item => item.service === filters.value.service)
  }

  return filtered
})

const cards = ref([
  {
    id:1,
    title: 'لیزر کل بدن',
    date: '1404/02/12',
    day: 'دوشنبه . 14:30'
  },
  {
    id:2,
    title: 'لیزر کل بدن',
    date: '1404/02/12',
    day: 'دوشنبه . 14:30'
  },
  {
    id:2,
    title: 'لیزر کل بدن',
    date: '1404/02/12',
    day: 'دوشنبه . 14:30'
  },
])

// Meta tags for SEO
useSeoMeta({
  title: 'نوبت های من - تن ساز',
  description: 'مشاهده و مدیریت نوبت های خود در سیستم تن ساز'
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