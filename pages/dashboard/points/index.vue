<template>
  <div>
    <!-- Desktop Layout -->
    <div class="hidden lg:block">
      <div class="flex justify-between items-center mb-8 bg-[#212121] p-[25px] rounded-[28px]">
        <div class="text-center">
          <h1 class="text-2xl mb-2">
            <span class="text-white">کل امتیاز های من:</span>
            <span class="text-brand text-2xl mx-2">{{ totalPoints }}</span>
            <span class="text-brand text-2xl">{{ totalPointsText }}</span>
          </h1>
        </div>
        <div class="flex items-center space-x-4">
          <button 
            @click="openConvertModal"
            class="bg-[#363636] px-6 py-3 rounded-full flex items-center space-x-2 transition-colors cursor-pointer hover:bg-[#404040]"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            <span>تبدیل امتیاز</span>
          </button>
          <button 
            @click="handleEarnMore"
            class="bg-brand px-6 py-3 rounded-full flex items-center space-x-2 transition-colors cursor-pointer hover:bg-opacity-90"
          >
            <Icon name="ei:plus" size="24" style="color: #FFFFFF" />
            <span>کسب امتیاز بیشتر</span>
          </button>
        </div>
      </div>

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
      
      <!-- Points Summary -->
      <div class="mb-6">
        <DashboardPointPointsSummary 
          :total-points="totalPoints"
          :total-points-text="totalPointsText"
          @convert-points="openConvertModal"
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
    
    <!-- Convert Points Modal -->
    <DashboardPointConvertPointsModal 
      v-if="showConvertModal" 
      :user-points="totalPoints"
      @close="closeConvertModal" 
      @conversion-success="handleConversionSuccess"
    />
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

  // Add date filtering logic here if needed
  // if (filters.value.fromDate && filters.value.toDate) {
  //   filtered = filtered.filter(item => {
  //     // Add your date comparison logic here
  //     return true
  //   })
  // }

  return filtered
})

// Methods
const handleEarnMore = () => {
  // Handle earn more points logic
  console.log('Navigating to earn more points...')
  // router.push('/dashboard/earn-points')
}

const showConvertModal = ref(false)

const handleConvertPoints = () => {
  showConvertModal.value = true
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