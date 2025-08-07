<template>
  <div>
    <!-- Main Convert Points Modal -->
    <div v-if="!showSuccessModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-[#2F2F2F80] bg-opacity-60 backdrop-blur-[5px]">
      <div class="bg-[#151515] rounded-2xl w-full max-w-[400px] mx-4 p-6 relative shadow-lg">
        <!-- Close Button -->
        <button @click="handleClose"
          class="absolute left-4 top-4 text-white cursor-pointer text-2xl focus:outline-none">
          <span aria-hidden="true">&times;</span>
        </button>

        <!-- Title -->
        <h2 class="text-white text-2xl font-semibold text-right mb-6">تبدیل امتیاز</h2>

        <!-- Points Input -->
        <DashboardPointConversionPointsInput
          v-model="points"
          :error="pointsError"
        />

        <!-- Conversion Type Dropdown -->
        <DashboardPointConversionTypeDropdown
          v-model="selectedOption"
          :options="conversionOptions"
          :error="optionError"
        />

        <!-- Cash Card Selection -->
        <DashboardPointConversionCashCardSelection
          v-model="selectedCashCard"
          :show="selectedOption?.value === 'cash'"
          :cards="cashCardOptions"
          :conversion-rate="conversionRate"
          :calculated-amount="calculatedAmount"
          @add-card="handleAddCard"
        />

        <!-- Service Selection -->
        <DashboardPointConversionServiceSelection
          v-model="selectedService"
          :show="selectedOption?.value === 'service'"
          :services="services"
          :error="serviceError"
        />

        <!-- Warning Message -->
        <div v-if="selectedOption?.value?.value === 'cash'" class="mb-6 bg-[#1EAC741A] rounded-2xl px-3.5 py-3 gap-2 flex items-start space-x-3 space-x-reverse">
          <div class="flex-shrink-0">
            <Icon name="charm:shield-tick" size="18" style="color: #1EAC74" />
          </div>
          <div class="text-[#F2F4F6] text-sm leading-relaxed">
            کاربر عزیز، لطفاً توجه نمایید {{ getWarningMessage() }}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-2.5">
          <button 
            @click="handleSubmit"
            :disabled="!isFormValid"
            :class="!isFormValid ? 'opacity-50 cursor-not-allowed bg-[#1D1D1D] text-[#828282]' : 'cursor-pointer bg-brand hover:bg-opacity-90'"
            class="w-full text-white py-3 rounded-full mt-4 font-bold text-lg transition"
          >
            تبدیل کن
          </button>
          <button 
            @click="handleClose"
            class="w-full bg-[#363636] hover:bg-[#404040] text-white py-3 rounded-full mt-4 font-bold text-lg transition cursor-pointer"
          >
            لغو کن
          </button>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <DashboardPointConversionSuccessModal
      :show="showSuccessModal"
      :result="conversionResult"
      @close="handleCloseSuccess"
      @go-to-dashboard="handleGoToDashboard"
    />

    <!-- Add Card Modal -->
    <DashboardPointAddCardModal
      v-if="showAddCardModal"
      @close="showAddCardModal = false"
      @add-card="handleCardAdded"
    />
  </div>
</template>

<script setup>
// Props & Emits
const props = defineProps({
  userPoints: {
    type: Number,
    default: 1200
  }
})

const emit = defineEmits(['close', 'conversion-success'])

// Composables
const router = useRouter()

// Modal states - using simple refs instead of composable
const showSuccessModal = ref(false)
const showAddCardModal = ref(false)

// Use points conversion composable
const {
  // State
  points,
  selectedOption,
  selectedCashCard,
  selectedService,
  
  // Errors  
  pointsError,
  optionError,
  serviceError,
  
  // Options
  conversionOptions,
  cashCardOptions,
  services,
  
  // Computed
  isFormValid,
  conversionRate,
  calculatedAmount,
  
  // Methods
  validateForm,
  resetForm,
  buildConversionResult
} = usePointsConversion(props.userPoints)

// Local state
const conversionResult = ref({})

// Computed
const getWarningMessage = () => {
  if (selectedOption.value?.value === 'cash') {
    return 'شماره کارت به نام خودتان باشد، در غیر این صورت عملیات انجام نمی‌شود.'
  }
}

// Methods
const handleClose = () => {
  resetForm()
  emit('close')
}

const handleAddCard = () => {
  showAddCardModal.value = true
}

const handleCardAdded = (cardData) => {
  // Add new card to options
  const newCard = {
    id: cashCardOptions.value.length + 1,
    number: cardData.cardNumber,
    name: 'کاربر جدید', // This should come from user data
    shaba: cardData.ibanNumber,
    value: `card_${cashCardOptions.value.length + 1}`
  }
  
  cashCardOptions.value.push(newCard)
  selectedCashCard.value = newCard
  showAddCardModal.value = false
}

const handleSubmit = async () => {
  console.log('Submit clicked')
  
  if (!validateForm()) {
    console.log('Form validation failed')
    return
  }

  try {
    console.log('Processing conversion...')
    
    // Here you would typically make an API call
    // const response = await $fetch('/api/points/convert', {
    //   method: 'POST',
    //   body: buildConversionResult()
    // })

    // For now, simulate the conversion
    conversionResult.value = buildConversionResult()
    console.log('Conversion result:', conversionResult.value)
    
    // Show success modal
    showSuccessModal.value = true
    
    // Emit success event with result
    emit('conversion-success', conversionResult.value)
    
  } catch (error) {
    console.error('Conversion failed:', error)
    // Handle error (show toast, error message, etc.)
  }
}

const handleCloseSuccess = () => {
  showSuccessModal.value = false
  resetForm()
  emit('close')
}

const handleGoToDashboard = () => {
  handleCloseSuccess()
  router.push('/dashboard/points')
}

// Lifecycle
onUnmounted(() => {
  resetForm()
})
</script>

<style scoped>
.bg-brand {
  background-color: #ED1C24;
}

.focus\:ring-brand:focus {
  --tw-ring-color: #ED1C24;
}

.text-brand {
  color: #ED1C24;
}
</style>