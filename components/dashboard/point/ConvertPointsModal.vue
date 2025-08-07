<template>
  <div>
    <!-- Convert Points Modal -->
    <div v-if="!showSuccessModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-[#2F2F2F80] bg-opacity-60 backdrop-blur-[5px]">
      <div class="bg-[#151515] rounded-2xl w-full max-w-[400px] mx-4 p-6 relative shadow-lg">
        <!-- Close Button -->
        <button @click="$emit('close')"
          class="absolute left-4 top-4 text-white cursor-pointer text-2xl focus:outline-none">
          <span aria-hidden="true">&times;</span>
        </button>
        <!-- Title -->
        <h2 class="text-white text-2xl font-semibold text-right mb-6">تبدیل امتیاز</h2>
        <!-- Input: امتیاز -->
        <div class="mb-4">
          <label class="block text-white mb-2 text-sm font-medium">چند امتیاز می‌خواهید تبدیل کنید؟</label>
          <div class="relative">
            <input v-model="points" type="text" min="1"
              class="w-full rounded-lg bg-[#232323] text-white p-3 focus:outline-none focus:ring-2 focus:ring-brand border-none placeholder-gray-500 text-right" />
            <span
              class="absolute cursor-pointer left-4 top-1/2 transform -translate-y-1/2 text-brand font-semibold text-sm">همه</span>
          </div>
          <div v-if="pointsError" class="text-red-600 text-xs mt-1">{{ pointsError }}</div>
        </div>
        <!-- Dropdown: تبدیل به -->
        <div class="mb-4">
          <label class="block text-white mb-2 text-sm font-medium">تبدیل به</label>
          <div class="relative">
            <button @click="dropdownOpen = !dropdownOpen" type="button"
              class="w-full flex justify-between items-center cursor-pointer bg-[#232323] text-white p-3 rounded-lg focus:outline-none">
              <span>{{ selectedOption ? selectedOption.label : 'انتخاب کنید' }}</span>
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="dropdownOpen"
              class="absolute right-0 left-0 mt-2 bg-[#232323] rounded-lg shadow-lg z-10 max-h-48 overflow-auto p-2.5">
              <div v-for="option in options" :key="option.value" @click="selectOption(option)"
                class="p-3 cursor-pointer hover:bg-[#444444] rounded-[14px] text-white text-sm border-b border-[#222] last:border-b-0">
                {{ option.label }}
              </div>
            </div>
          </div>
          <div v-if="optionError" class="text-red-600 text-xs mt-1">{{ optionError }}</div>
        </div>
        <!-- convert to cash -->
        <section v-if="selectedOption && selectedOption.value == 'cash'">
          <div class="flex justify-between bg-[#1EAC741A] text-white text-sm rounded-2xl py-2.5 px-4">
            <span>تبدیل 10 امتیاز</span>
            <Icon name="mage:reload-reverse" size="18" style="color: #1EAC74" />
            <span>دریافتی 100 تومان</span>
          </div>
          <div class="my-4">
            <label class="block text-white mb-2 text-sm font-medium">شماره کارت</label>
            <div class="relative">
              <button @click="dropdownCashCard = !dropdownCashCard" type="button"
                class="w-full flex justify-between items-center cursor-pointer bg-[#232323] text-white p-3 rounded-lg focus:outline-none">
                <span>{{ selectedCashCard ? selectedCashCard.label : 'شماره کارت خود را انتخاب کنید' }}</span>
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-if="dropdownCashCard"
                class="absolute right-0 left-0 mt-2 bg-[#232323] rounded-lg shadow-lg z-10 max-h-48 overflow-auto p-2.5">
                <div v-for="option in cashCardOptions" :key="option.value" @click="selectOptionCashCard(option)"
                  class="p-3 cursor-pointer hover:bg-[#444444] rounded-[14px] text-white text-sm border-b border-[#222] last:border-b-0">
                  <div class="flex justify-between w-full">
                    <span>{{ option.number }}</span> {{ option.name }}
                  </div>
                  <span>{{ option.shaba }}</span>
                </div>
                <div class="flex items-center text-[#589ED4] text-sm font-medium cursor-pointer pb-[18px] pr-3">
                  <Icon name="ic:round-plus" size="18" style="color: #589ED4" /> اضافه کردن شماره کارت
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Confirm Button -->
        <div class="flex gap-2.5">
          <button @click="submit"
            :class="disabled ? 'opacity-50 cursor-not-allowed bg-[#1D1D1D] text-[#828282]' : ' cursor-pointer'"
            class="w-full bg-brand text-white py-3 rounded-full mt-4 font-bold text-lg hover:bg-opacity-90 transition">تبدیل
            کن</button>
          <button @click="$emit('close')"
            class="w-full bg-[#363636] text-white py-3 rounded-full mt-4 font-bold text-lg transition cursor-pointer">لغو
            کن</button>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showSuccessModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-[#2F2F2F80] bg-opacity-60 backdrop-blur-[5px]">
      <div class="bg-[#151515] rounded-2xl w-full max-w-[400px] mx-4 p-6 relative shadow-lg">
        <!-- Success Icon with Rocket -->
        <div class="flex justify-center mb-6 mt-4">
          <div class="relative">
            <!-- Green checkmark background -->
            <div class="w-[150px] h-[127px] rounded-full flex items-center justify-center">
              <img src="public/icons/checkmark.svg" alt="checkmark">
            </div>
          </div>
        </div>

        <!-- Success Title -->
        <h2 class="text-white text-lg font-medium text-center mb-8">تبدیل با موفقیت انجام شد!</h2>

        <!-- Summary Information -->
        <div class="space-y-4 mb-6">
          <!-- Points Converted -->
          <div class="flex justify-between items-center text-white">
            <span class="text-gray-400">تبدیل</span>
            <span class="font-medium">{{ conversionResult.points }} امتیاز</span>
          </div>

          <!-- Amount Received -->
          <div class="flex justify-between items-center text-white">
            <span class="text-gray-400">دریافتی شما</span>
            <span class="font-medium">{{ conversionResult.amount }} {{ conversionResult.currency }}</span>
          </div>

          <!-- Card Number -->
          <div class="flex justify-between items-center text-white">
            <span class="text-gray-400">به شماره کارت</span>
            <span class="font-medium font-mono">{{ conversionResult.cardNumber }}</span>
          </div>
        </div>

        <!-- Warning/Info Message -->
        <div class="mb-6 bg-[#1EAC741A] rounded-2xl px-3.5 py-3 gap-2 flex items-start space-x-3 space-x-reverse">
          <div class="flex-shrink-0">
            <Icon name="charm:shield-tick" size="18" style="color: #1EAC74" />
          </div>
          <div class="text-[#F2F4F6] text-sm leading-relaxed">کاربر عزیز، مبلغ مورد نظر تا 48 ساعت دیگر به حساب شما
            واریز می شود.
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-2.5">
          <button @click="goToDashboard"
            class="w-full bg-[#ff1d25] text-white py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition cursor-pointer">
            داشبورد
          </button>
          <button @click="closeSuccessModal"
            class="w-full bg-[#363636] text-white py-3 rounded-full font-bold text-lg transition cursor-pointer">
            بستن
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const points = ref('')
const pointsError = ref('')
const dropdownOpen = ref(false)
const dropdownCashCard = ref(false)
const selectedOption = ref(null)
const optionError = ref('')
const showSuccessModal = ref(false)

const router = useRouter()

const options = [
  { label: 'پول نقد', value: 'cash' },
  { label: 'پول در کیف پول', value: 'wallet' },
  { label: 'استفاده از خدمات', value: 'service' },
  { label: '...', value: 'other' }
]

const selectedCashCard = ref(null)

const cashCardOptions = [
  { number: '6604-2232-2838-9876', name: 'علی صالحی', shaba: 'IR123456789012345678901234' },
]

// Conversion result data
const conversionResult = ref({
  points: 0,
  amount: 0,
  currency: 'تومان پول نقد',
  cardNumber: ''
})

function selectOption(option) {
  selectedOption.value = option
  dropdownOpen.value = false
  optionError.value = ''
}

function selectOptionCashCard(option) {
  selectedCashCard.value = option
  dropdownCashCard.value = false
}

function submit() {
  pointsError.value = ''
  optionError.value = ''

  if (!points.value || Number(points.value) <= 0) {
    pointsError.value = 'لطفا تعداد امتیاز معتبر وارد کنید.'
    return
  }
  if (!selectedOption.value) {
    optionError.value = 'لطفا نوع تبدیل را انتخاب کنید.'
    return
  }

  // Simulate API call and success
  try {
    // محاسبه مقدار تبدیل (مثلاً هر 10 امتیاز = 100 تومان)
    const convertedAmount = (Number(points.value) / 10) * 100

    // آماده‌سازی داده‌های نتیجه
    conversionResult.value = {
      points: Number(points.value),
      amount: convertedAmount,
      currency: selectedOption.value === 'cash' ? 'تومان پول نقد' :
        selectedOption.value === 'wallet' ? 'تومان در کیف پول' : 'امتیاز خدمات',
      cardNumber: selectedCashCard.value ? selectedCashCard.value.number : '2345-8765-9876-3453'
    }

    // نمایش مودال موفقیت
    showSuccessModal.value = true

  } catch (error) {
    console.error('Error during conversion:', error)
    // Handle error - show error message
  }
}

function closeSuccessModal() {
  showSuccessModal.value = false
  $emit('close')
}

function goToDashboard() {
  // Navigate to dashboard
  closeSuccessModal()
  // Add navigation logic here if needed
  router.push('/dashboard/points')
}
</script>

<style scoped>
.bg-brand {
  background-color: #ff1d25;
}

.hover\:bg-gray-750:hover {
  background-color: #23272f;
}
</style>