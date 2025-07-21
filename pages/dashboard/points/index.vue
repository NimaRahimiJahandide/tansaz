<template>
  <div>
    <!-- فقط محتوای امتیازات، بدون هدر و سایدبار -->
    <!-- Desktop Layout -->
    <div class="hidden lg:block">
      
      <div class="flex justify-between items-center mb-8">
        <div class="flex items-center space-x-4">
          <button 
            @click="handleEarnMore"
            class="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
            <span>کسب امتیاز بیشتر</span>
          </button>
          <button 
            @click="handleConvertPoints"
            class="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            <span>تبدیل امتیاز</span>
          </button>
        </div>
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-2">
            <span class="text-white">کل امتیاز های من:</span>
            <span class="text-red-600 text-5xl mx-2">{{ totalPoints }}</span>
            <span class="text-red-600 text-2xl">{{ totalPointsText }}</span>
          </h1>
          <button class="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg flex items-center space-x-2 mx-auto transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>امتیازات من</span>
          </button>
        </div>
      </div>

      <!-- Filters -->
      <div class="mb-6">
        <DashboardPointPointsFilters v-model="filters" />
      </div>

      <!-- Points Table -->
      <DashboardPointPointsTable :items="filteredPointsHistory" />
    </div>

    <!-- Mobile Layout -->
    <div class="lg:hidden">
      <!-- Points Summary -->
      <div class="mb-6">
        <DashboardPointPointsSummary 
          :total-points="totalPoints"
          :total-points-text="totalPointsText"
          @convert-points="handleConvertPoints"
          @earn-more="handleEarnMore"
        />
      </div>

      <!-- Mobile Filters -->
      <div class="mb-6">
        <DashboardPointPointsFilters v-model="filters" />
      </div>

      <!-- Mobile Points History -->
      <div class="space-y-4">
        <DashboardPointPointsHistoryItem 
          v-for="(item, index) in filteredPointsHistory" 
          :key="index"
          :item="item"
          :index="index + 1"
        />
      </div>
    </div>
    <ChatWidget />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dashboard'
})
// Composables and imports
const router = useRouter()

// Reactive data
const totalPoints = ref(1200)
const totalPointsText = ref('هزار و دویست')

const filters = ref({
  fromDate: '1404/03/25',
  toDate: '1404/06/25',
  type: 'همه'
})

const pointsHistory = ref([
  {
    points: 30,
    type: 'قرعه کشی',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از گرافیک است.',
    date: '1404/06/25 - 15:30'
  },
  {
    points: 5,
    type: 'تخفیف',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از گرافیک است.',
    date: '1404/06/25 - 15:30'
  },
  {
    points: 23,
    type: 'خرید انه شانس',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از گرافیک است.',
    date: '1404/06/25 - 15:30'
  },
  {
    points: 11,
    type: 'قرعه کشی',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از گرافیک است.',
    date: '1404/06/25 - 15:30'
  },
  {
    points: 5,
    type: 'تخفیف',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از گرافیک است.',
    date: '1404/06/25 - 15:30'
  },
  {
    points: 11,
    type: 'قرعه کشی',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از گرافیک است.',
    date: '1404/06/25 - 15:30'
  },
  {
    points: 8,
    type: 'خرید انه شانس',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از گرافیک است.',
    date: '1404/06/24 - 14:20'
  },
  {
    points: 15,
    type: 'قرعه کشی',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از گرافیک است.',
    date: '1404/06/23 - 16:45'
  }
])

// Computed properties
const filteredPointsHistory = computed(() => {
  if (filters.value.type === 'همه') {
    return pointsHistory.value
  }
  return pointsHistory.value.filter(item => item.type === filters.value.type)
})

// Methods
const handleEarnMore = () => {
  // Handle earn more points logic
  console.log('Navigating to earn more points...')
  // router.push('/dashboard/earn-points')
}

const handleConvertPoints = () => {
  // Handle convert points logic
  console.log('Navigating to convert points...')
  // router.push('/dashboard/convert-points')
}

// Meta tags for SEO
useSeoMeta({
  title: 'امتیازات من - تن ساز',
  description: 'مشاهده و مدیریت امتیازات خود در سیستم تن ساز'
})
</script>

<style scoped>
/* Add any additional custom styles if needed */
.hover\:bg-gray-750:hover {
  background-color: #374151;
}
.text-red-600 {
  color: #ff1d25;
}
.bg-red-600 {
  background-color: #ff1d25;
}
</style>