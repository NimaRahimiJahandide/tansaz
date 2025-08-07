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
        <div class="mb-4 dropdown-container">
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
          <div class="flex justify-between bg-[#1EAC741A] text-white text-sm rounded-2xl py-2.5 px-4 mb-4">
            <span>تبدیل 10 امتیاز</span>
            <Icon name="mage:reload-reverse" size="18" style="color: #1EAC74" />
            <span>دریافتی 100 تومان</span>
          </div>
          <div class="mb-4">
            <label class="block text-white mb-2 text-sm font-medium">شماره کارت</label>
            <div class="relative dropdown-container">
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

        <!-- convert to service -->
        <section v-if="selectedOption && selectedOption.value === 'service'">
          <!-- انتخاب خدمت -->
          <div class="mb-4">
            <label class="block text-white mb-2 text-sm font-medium">انتخاب خدمت</label>
            <div class="relative dropdown-container">
              <button @click="dropdownService = !dropdownService" type="button"
                class="w-full flex justify-between items-center cursor-pointer bg-[#232323] text-white p-3 rounded-lg focus:outline-none">
                <span>{{ selectedService ? selectedService.title : 'خدمت مورد نظر خود را انتخاب کنید' }}</span>
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <!-- Dropdown Menu -->
              <div v-if="dropdownService"
                class="absolute right-0 left-0 mt-2 bg-[#232323] rounded-lg shadow-lg z-10 max-h-80 overflow-auto p-2.5">
                <div v-for="service in services" :key="service.id" @click="selectService(service)"
                  class="p-3 cursor-pointer hover:bg-[#444444] rounded-[14px] text-white text-sm border-b border-[#222] last:border-b-0 transition-colors">
                  <!-- عنوان و ستاره‌ها -->
                  <div class="flex justify-between items-center mb-2">
                    <span class="font-medium text-sm">{{ service.title }}</span>
                     <!-- ستاره‌های رتبه‌بندی -->
                    <div class="flex items-center flex-row-reverse">
                      <template v-for="star in 5" :key="star">
                        <svg class="w-3 h-3" :class="star <= service.rating ? 'text-[#F7C41B]' : 'text-gray-600'"
                          fill="currentColor" viewBox="0 0 20 20">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </template>
                      
                    </div>
                  </div>

                  <!-- امتیاز و وضعیت -->
                  <div class="flex justify-between items-center">
                   
                     <span class="text-[#D4D4D4] text-xs px-2 py-1 rounded-lg">
                      {{ service.points }} امتیاز
                    </span>

                    <!-- وضعیت تکمیل -->
                    <div class="flex items-center space-x-1 space-x-reverse">
                      <span class="text-xs" :class="service.completed ? 'text-white' : 'text-[#589ED4]'">
                        {{ service.completed ? 'تکمیل شده' : 'می خواهم تکمیل کنم' }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="serviceError" class="text-red-600 text-xs mt-1">{{ serviceError }}</div>
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

          <!-- Amount Received or Service -->
          <div class="flex justify-between items-center text-white">
            <span class="text-gray-400">{{ selectedOption?.value === 'service' ? 'خدمت دریافتی' : 'دریافتی شما'
            }}</span>
            <span class="font-medium">{{ conversionResult.amount }} {{ conversionResult.currency }}</span>
          </div>

          <!-- Card Number (only for cash) -->
          <div v-if="selectedOption?.value === 'cash'" class="flex justify-between items-center text-white">
            <span class="text-gray-400">به شماره کارت</span>
            <span class="font-medium font-mono">{{ conversionResult.cardNumber }}</span>
          </div>
        </div>

        <!-- Warning/Info Message -->
        <div class="mb-6 bg-[#1EAC741A] rounded-2xl px-3.5 py-3 gap-2 flex items-start space-x-3 space-x-reverse">
          <div class="flex-shrink-0">
            <Icon name="charm:shield-tick" size="18" style="color: #1EAC74" />
          </div>
          <div class="text-[#F2F4F6] text-sm leading-relaxed">
            {{ selectedOption?.value === 'service'
              ? 'کاربر عزیز، درخواست شما ثبت شد، تیم پشتیبانی تنساز برای رزرو نوبت با شما تماس خواهند گرفت.'
              : 'کاربر عزیز، مبلغ مورد نظر تا 48 ساعت دیگر به حساب شما واریز می شود.'
            }}
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


// متغیرهای جدید برای انتخاب خدمات
const dropdownService = ref(false)
const selectedService = ref(null)
const serviceError = ref('')

// لیست خدمات قابل انتخاب
const services = ref([
  { 
    id: 1, 
    title: 'بوتاکس پیشانی', 
    points: 100, 
    completed: true, 
    rating: 5 
  },
  { 
    id: 2, 
    title: 'لاغری موضعی', 
    points: 150, 
    completed: false, 
    rating: 4 
  },
  { 
    id: 3, 
    title: 'لیزر کل بدن', 
    points: 300, 
    completed: true, 
    rating: 5 
  },
  { 
    id: 4, 
    title: 'هایفو تراپی', 
    points: 80, 
    completed: true, 
    rating: 4 
  },
  { 
    id: 5, 
    title: 'لیفت شقیقه', 
    points: 120, 
    completed: true, 
    rating: 5 
  }
])

// انتخاب خدمت
function selectService(service) {
  selectedService.value = service
  dropdownService.value = false
  serviceError.value = ''
}

// اعتبارسنجی انتخاب خدمت
const validateService = () => {
  if (!selectedService.value) {
    serviceError.value = 'لطفاً یک خدمت انتخاب کنید'
    return false
  }
  
  // بررسی امتیاز کافی
  const requiredPoints = selectedService.value.points
  if (Number(points.value) < requiredPoints) {
    serviceError.value = `برای این خدمت حداقل ${requiredPoints} امتیاز نیاز است`
    return false
  }
  
  return true
}

// بروزرسانی تابع submit موجود
const submit = () => {
  pointsError.value = ''
  optionError.value = ''
  serviceError.value = ''

  if (!points.value || Number(points.value) <= 0) {
    pointsError.value = 'لطفا تعداد امتیاز معتبر وارد کنید.'
    return
  }
  
  if (!selectedOption.value) {
    optionError.value = 'لطفا نوع تبدیل را انتخاب کنید.'
    return
  }

  // اعتبارسنجی بر اساس نوع انتخاب شده
  let isValid = true
  
  if (selectedOption.value.value === 'cash') {
    // اعتبارسنجی برای پول نقد (کد موجود)
  } else if (selectedOption.value.value === 'service') {
    isValid = validateService()
  }

  if (!isValid) return

  // شبیه‌سازی API call و موفقیت
  try {
    let conversionData = {
      points: Number(points.value),
      cardNumber: ''
    }

    if (selectedOption.value.value === 'service') {
      conversionData.amount = selectedService.value.title
      conversionData.currency = 'خدمت'
    } else if (selectedOption.value.value === 'cash') {
      const convertedAmount = (Number(points.value) / 10) * 100
      conversionData.amount = convertedAmount
      conversionData.currency = 'تومان پول نقد'
      conversionData.cardNumber = selectedCashCard.value ? selectedCashCard.value.number : '2345-8765-9876-3453'
    }

    conversionResult.value = conversionData
    showSuccessModal.value = true

  } catch (error) {
    console.error('Error during conversion:', error)
  }
}

// بستن dropdown هنگام کلیک خارج از آن
const closeDropdowns = () => {
  dropdownOpen.value = false
  dropdownCashCard.value = false
  dropdownService.value = false
}

// اضافه کردن event listener برای بستن dropdown
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown-container')) {
      closeDropdowns()
    }
  })
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdowns)
})
</script>

<style scoped>
.bg-brand {
  background-color: #ff1d25;
}

.hover\:bg-gray-750:hover {
  background-color: #23272f;
}
</style>