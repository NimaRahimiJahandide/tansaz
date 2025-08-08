<template>
    <div>
        <!-- Desktop Layout -->
        <div class="hidden lg:block">
            <h1 class="text-2xl mb-4">نوبت های من</h1>

            <!-- Filters -->
            <div>
                <DashboardTurnTurnFilters v-model="filters" />
            </div>

            <!-- Turns Table -->
            <DashboardTurnTurnsTable :items="filteredTurns" @change-turn="handleChangeTurn"
                @view-details="handleViewDetails" />
        </div>

        <!-- Mobile Layout -->
        <div class="lg:hidden">
            <DashboardTurnTurnDropDown />

            <!-- Mobile Filters -->
            <div class="mb-6">
                <DashboardTurnTurnFilters v-model="filters" />
            </div>

            <!-- Mobile Turns History -->
            <div class="space-y-4">
                <DashboardTurnTurnCard v-for="(turn, index) in filteredTurns" :key="index" :turn="turn"
                    @change-turn="handleChangeTurn" @view-details="handleViewDetails" />
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

// Reactive data
const filters = ref({
    status: 'همه',
    fromDate: '1404/03/25',
    toDate: '1404/06/25'
})

const turnsData = ref([
    {
        id: 1,
        service: 'لیزر رکل بدن',
        date: '1404/02/12',
        time: '14:30',
        status: 'رزرو شده',
        doctor: 'دکتر احمدی',
        location: 'کلینیک تن ساز - شعبه مرکزی'
    },
    {
        id: 2,
        service: 'بوتاکس پیشانی',
        date: '1404/02/12',
        time: '14:30',
        status: 'رزرو شده',
        doctor: 'دکتر رضایی',
        location: 'کلینیک تن ساز - شعبه شمال'
    },
    {
        id: 3,
        service: 'لیزر رکل بدن',
        date: '1404/02/12',
        time: '14:30',
        status: 'لغو شده',
        doctor: 'دکتر محمدی',
        location: 'کلینیک تن ساز - شعبه غرب'
    },
    {
        id: 4,
        service: 'لیزر رکل بدن',
        date: '1404/06/25',
        time: '15:30',
        status: 'انجام شده',
        doctor: 'دکتر احمدی',
        location: 'کلینیک تن ساز - شعبه مرکزی'
    },
    {
        id: 5,
        service: 'بوتاکس پیشانی',
        date: '1404/06/25',
        time: '15:30',
        status: 'رزرو شده',
        doctor: 'دکتر رضایی',
        location: 'کلینیک تن ساز - شعبه شمال'
    },
    {
        id: 6,
        service: 'لاغری موضعی',
        date: '1404/06/24',
        time: '14:20',
        status: 'انجام شده',
        doctor: 'دکتر کریمی',
        location: 'کلینیک تن ساز - شعبه جنوب'
    },
    {
        id: 7,
        service: 'میکرونیدلینگ',
        date: '1404/06/23',
        time: '16:45',
        status: 'لغو شده',
        doctor: 'دکتر صادقی',
        location: 'کلینیک تن ساز - شعبه شرق'
    },
    {
        id: 8,
        service: 'پلاسما جت',
        date: '1404/06/22',
        time: '13:15',
        status: 'انجام شده',
        doctor: 'دکتر حسینی',
        location: 'کلینیک تن ساز - شعبه غرب'
    }]
)   

</script>