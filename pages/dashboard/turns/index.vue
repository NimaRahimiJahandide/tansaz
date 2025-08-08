<template>
  <div>
    <!-- Desktop Layout -->
    <div class="hidden lg:block">
      <h1 class="text-2xl mb-4">نوبت های من</h1>

      <!-- Filters -->
      <div>
        <DashboardPointPointsFilters v-model="filters" />
      </div>

      <!-- Points Table -->
      <DashboardPointPointsTable :items="filteredPointsHistory" />
    </div>

    <!-- Mobile Layout -->
    <div class="lg:hidden">
      <DashboardPointPointsDropDown />

      <!-- Mobile Filters -->
      <div class="mb-6">
        <DashboardPointPointsFilters v-model="filters" />
      </div>

      <!-- Mobile Points History -->
      <div class="space-y-4">
        <DashboardPointPointsHistoryItem v-for="(item, index) in filteredPointsHistory" :key="index" :item="item"
          :index="index + 1" />
      </div>
    </div>

    <!-- Convert Points Modal -->
    <DashboardPointConvertPointsModal v-if="showConvertModal" :user-points="totalPoints" @close="closeConvertModal"
      @conversion-success="handleConversionSuccess" />
  </div>
</template>

<script setup>
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
  service: 'خدمات لاغری',
  fromDate: '1404/03/25',
  toDate: '1404/06/25',
  type: 'همه'
})

const pointsHistory = ref([
  {
    points: 30,
    type: 'قرعه کشی',
    service: 'خدمات لاغری',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از گرافیک است.',
    date: '1404/06/25 - 15:30'
  },
  {
    points: 5,
    type: 'تخفیف',
    service: 'خدمات زیبایی',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از گرافیک است.',
    date: '1404/06/25 - 15:30'
  },
  {
    points: 23,
    type: 'خریدانه شانس',
    service: 'خدمات لاغری',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از گرافیک است.',
    date: '1404/06/25 - 15:30'
  },
  {
    points: 11,
    type: 'قرعه کشی',
    service: 'خدمات کلینیک تن ساز',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از گرافیک است.',
    date: '1404/06/25 - 15:30'
  },
  {
    points: 5,
    type: 'تخفیف',
    service: 'خدمات لیزر',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از گرافیک است.',
    date: '1404/06/25 - 15:30'
  },
  {
    points: 11,
    type: 'قرعه کشی',
    service: 'باشگاه مشتریان',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از گرافیک است.',
    date: '1404/06/25 - 15:30'
  },
  {
    points: 8,
    type: 'خریدانه شانس',
    service: 'خدمات لاغری',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از گرافیک است.',
    date: '1404/06/24 - 14:20'
  },
  {
    points: 15,
    type: 'قرعه کشی',
    service: 'سایر موارد کلینیک تن ساز',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از گرافیک است.',
    date: '1404/06/23 - 16:45'
  }
])

// Computed properties
const filteredPointsHistory = computed(() => {
  let filtered = pointsHistory.value

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

// Modal methods
const openConvertModal = () => {
  showConvertModal.value = true
}

const closeConvertModal = () => {
  showConvertModal.value = false
}

const handleConversionSuccess = (conversionData) => {
  console.log('Conversion successful:', conversionData)
  // Update total points if needed
  totalPoints.value -= conversionData.points
  // Don't close modal here! Let the success modal handle the closing
  // closeConvertModal() // Remove this line
  // Maybe show a toast notification
}

// Other methods
const handleEarnMore = () => {
  console.log('Navigating to earn more points...')
  // router.push('/dashboard/earn-points')
}

// Meta tags for SEO
useSeoMeta({
  title: 'امتیازات من - تن ساز',
  description: 'مشاهده و مدیریت امتیازات خود در سیستم تن ساز'
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