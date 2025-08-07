import { ref, computed, watch } from 'vue'

export const usePointsConversion = (initialUserPoints = 1200) => {
  // State
  const points = ref('')
  const selectedOption = ref(null)
  const selectedCashCard = ref(null)
  const selectedService = ref(null)
  const userPoints = ref(initialUserPoints)
  
  // Errors
  const pointsError = ref('')
  const optionError = ref('')
  const serviceError = ref('')
  const cashCardError = ref('')
  
  // Options
  const conversionOptions = ref([
    { label: 'پول نقد', value: 'cash' },
    { label: 'پول در کیف پول', value: 'wallet' },
    { label: 'استفاده از خدمات', value: 'service' }
  ])
  
  // Cash cards - این باید از API بیاد
  const cashCardOptions = ref([
    { 
      id: 1,
      number: '6604-2232-2838-9876', 
      name: 'علی صالحی', 
      shaba: 'IR123456789012345678901234',
      value: 'card_1'
    },
  ])
  
  // Services - این هم باید از API بیاد
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
  
  // Configuration
  const config = ref({
    conversionRate: 10, // 10 امتیاز = 100 تومان
    multiplier: 100,
    minPoints: 1
  })
  
  // Computed properties
  const isFormValid = computed(() => {
    if (!points.value || Number(points.value) <= 0) return false
    if (!selectedOption.value) return false
    
    if (selectedOption.value.value === 'cash' && !selectedCashCard.value) return false
    if (selectedOption.value.value === 'service' && !selectedService.value) return false
    
    return true
  })
  
  const conversionRate = computed(() => config.value.conversionRate)
  
  const calculatedAmount = computed(() => {
    if (!points.value || isNaN(Number(points.value))) return 0
    return Math.floor((Number(points.value) / conversionRate.value) * config.value.multiplier)
  })
  
  const hasEnoughPoints = computed(() => {
    return Number(points.value) <= userPoints.value
  })
  
  const availableServices = computed(() => {
    return services.value.filter(service => 
      service.points <= userPoints.value && !service.completed
    )
  })
  
  // Validation methods
  const validatePoints = () => {
    pointsError.value = ''
    
    if (!points.value) {
      pointsError.value = 'لطفاً تعداد امتیاز را وارد کنید'
      return false
    }
    
    const pointsNum = Number(points.value)
    
    if (isNaN(pointsNum) || pointsNum <= 0) {
      pointsError.value = 'تعداد امتیاز باید عددی مثبت باشد'
      return false
    }
    
    if (pointsNum < config.value.minPoints) {
      pointsError.value = `حداقل ${config.value.minPoints} امتیاز قابل تبدیل است`
      return false
    }
    
    if (pointsNum > userPoints.value) {
      pointsError.value = `شما فقط ${userPoints.value} امتیاز دارید`
      return false
    }
    
    return true
  }
  
  const validateOption = () => {
    optionError.value = ''
    
    if (!selectedOption.value) {
      optionError.value = 'لطفاً نوع تبدیل را انتخاب کنید'
      return false
    }
    
    return true
  }
  
  const validateCashCard = () => {
    cashCardError.value = ''
    
    if (selectedOption.value?.value === 'cash' && !selectedCashCard.value) {
      cashCardError.value = 'لطفاً شماره کارت را انتخاب کنید'
      return false
    }
    
    return true
  }
  
  const validateService = () => {
    serviceError.value = ''
    
    if (selectedOption.value?.value !== 'service') return true
    
    if (!selectedService.value) {
      serviceError.value = 'لطفاً یک خدمت انتخاب کنید'
      return false
    }
    
    const requiredPoints = selectedService.value.points
    const userPointsNum = Number(points.value)
    
    if (userPointsNum < requiredPoints) {
      serviceError.value = `برای این خدمت حداقل ${requiredPoints} امتیاز نیاز است`
      return false
    }
    
    if (selectedService.value.completed) {
      serviceError.value = 'این خدمت قبلاً تکمیل شده است'
      return false
    }
    
    return true
  }
  
  const validateForm = () => {
    const validations = [
      validatePoints(),
      validateOption(),
      validateCashCard(),
      validateService()
    ]
    
    return validations.every(isValid => isValid)
  }
  
  // Utility methods
  const clearErrors = () => {
    pointsError.value = ''
    optionError.value = ''
    serviceError.value = ''
    cashCardError.value = ''
  }
  
  const resetForm = () => {
    points.value = ''
    selectedOption.value = null
    selectedCashCard.value = null
    selectedService.value = null
    clearErrors()
  }
  
  const setMaxPoints = () => {
    points.value = String(userPoints.value)
  }
  
  const buildConversionResult = () => {
    const baseResult = {
      points: Number(points.value),
      type: selectedOption.value?.value || '',
      timestamp: new Date().toISOString()
    }
    
    switch (selectedOption.value?.value) {
      case 'service':
        return {
          ...baseResult,
          amount: selectedService.value?.title || '',
          currency: 'خدمت',
          serviceId: selectedService.value?.id,
          cardNumber: ''
        }
        
      case 'cash':
        return {
          ...baseResult,
          amount: calculatedAmount.value,
          currency: 'تومان پول نقد',
          cardNumber: selectedCashCard.value?.number || '',
          cardId: selectedCashCard.value?.id
        }
        
      case 'wallet':
        return {
          ...baseResult,
          amount: calculatedAmount.value,
          currency: 'تومان در کیف پول',
          cardNumber: ''
        }
        
      default:
        return baseResult
    }
  }
  
  // API methods - این‌ها باید به سرور وصل بشن
  const fetchUserCards = async () => {
    try {
      // const response = await $fetch('/api/user/cards')
      // cashCardOptions.value = response.data
    } catch (error) {
      console.error('Failed to fetch user cards:', error)
    }
  }
  
  const fetchServices = async () => {
    try {
      // const response = await $fetch('/api/services')
      // services.value = response.data
    } catch (error) {
      console.error('Failed to fetch services:', error)
    }
  }
  
  const addNewCard = (cardData) => {
    const newCard = {
      id: Date.now(), // استفاده از timestamp به جای length
      number: cardData.cardNumber,
      name: cardData.holderName || 'کاربر جدید',
      shaba: cardData.ibanNumber,
      value: `card_${Date.now()}`
    }
    
    cashCardOptions.value.push(newCard)
    return newCard
  }
  
  // Watchers
  watch(() => selectedOption.value, (newOption) => {
    // پاک کردن انتخاب‌های قبلی هنگام تغییر نوع تبدیل
    if (newOption?.value !== 'cash') {
      selectedCashCard.value = null
    }
    if (newOption?.value !== 'service') {
      selectedService.value = null
    }
    clearErrors()
  })
  
  watch(() => points.value, () => {
    if (pointsError.value) {
      pointsError.value = ''
    }
  })
  
  return {
    // State
    points,
    selectedOption,
    selectedCashCard,
    selectedService,
    userPoints,
    
    // Errors
    pointsError,
    optionError,
    serviceError,
    cashCardError,
    
    // Options & Data
    conversionOptions,
    cashCardOptions,
    services,
    config,
    
    // Computed
    isFormValid,
    conversionRate,
    calculatedAmount,
    hasEnoughPoints,
    availableServices,
    
    // Methods
    validateForm,
    resetForm,
    clearErrors,
    setMaxPoints,
    buildConversionResult,
    addNewCard,
    
    // API methods
    fetchUserCards,
    fetchServices,
    
    // Individual validations (for custom usage)
    validatePoints,
    validateOption,
    validateCashCard,
    validateService
  }
}

// Modal management composable
export const useModal = (initialState = false) => {
  const isOpen = ref(initialState)
  
  const openModal = () => {
    isOpen.value = true
  }
  
  const closeModal = () => {
    isOpen.value = false
  }
  
  const toggleModal = () => {
    isOpen.value = !isOpen.value
  }
  
  return {
    openModal,
    closeModal,
    toggleModal
  }
}

// Dropdown management composable
export const useDropdown = (initialState = false) => {
  const isOpen = ref(initialState)
  
  const toggle = () => {
    isOpen.value = !isOpen.value
  }
  
  const close = () => {
    isOpen.value = false
  }
  
  const open = () => {
    isOpen.value = true
  }
  
  // Auto-close when clicking outside
  const setupOutsideClick = (containerRef) => {
    const handleClickOutside = (event) => {
      if (containerRef.value && !containerRef.value.contains(event.target)) {
        close()
      }
    }
    
    if (process.client) {
      document.addEventListener('click', handleClickOutside)
      
      return () => {
        document.removeEventListener('click', handleClickOutside)
      }
    }
  }
  
  return {
    isOpen: readonly(isOpen),
    toggle,
    close,
    open,
    setupOutsideClick
  }
}