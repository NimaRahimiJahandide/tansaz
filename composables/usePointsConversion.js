import { ref, computed } from 'vue'

export const usePointsConversion = () => {
  // State
  const points = ref('')
  const selectedOption = ref(null)
  const selectedCashCard = ref(null)
  const selectedService = ref(null)
  
  // Errors
  const pointsError = ref('')
  const optionError = ref('')
  const serviceError = ref('')
  
  // Options
  const conversionOptions = ref([
    { label: 'پول نقد', value: 'cash' },
    { label: 'پول در کیف پول', value: 'wallet' },
    { label: 'استفاده از خدمات', value: 'service' },
    { label: '...', value: 'other' }
  ])
  
  // Cash cards (this would typically come from an API)
  const cashCardOptions = ref([
    { 
      id: 1,
      number: '6604-2232-2838-9876', 
      name: 'علی صالحی', 
      shaba: 'IR123456789012345678901234',
      value: 'card_1'
    },
  ])
  
  // Services (this would typically come from an API)
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
  
  // Computed
  const isFormValid = computed(() => {
    if (!points.value || Number(points.value) <= 0) return false
    if (!selectedOption.value) return false
    
    if (selectedOption.value.value === 'cash' && !selectedCashCard.value) return false
    if (selectedOption.value.value === 'service' && !selectedService.value) return false
    
    return true
  })
  
  const conversionRate = computed(() => {
    // 10 امتیاز = 100 تومان
    return 10
  })
  
  const calculatedAmount = computed(() => {
    if (!points.value) return 0
    return (Number(points.value) / conversionRate.value) * 100
  })
  
  // Methods
  const validatePoints = () => {
    pointsError.value = ''
    
    if (!points.value) {
      pointsError.value = 'لطفاً تعداد امتیاز را وارد کنید'
      return false
    }
    
    if (Number(points.value) <= 0) {
      pointsError.value = 'تعداد امتیاز باید بیشتر از صفر باشد'
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
  
  const validateService = () => {
    serviceError.value = ''
    
    if (!selectedService.value) {
      serviceError.value = 'لطفاً یک خدمت انتخاب کنید'
      return false
    }
    
    const requiredPoints = selectedService.value.points
    if (Number(points.value) < requiredPoints) {
      serviceError.value = `برای این خدمت حداقل ${requiredPoints} امتیاز نیاز است`
      return false
    }
    
    return true
  }
  
  const validateForm = () => {
    const isPointsValid = validatePoints()
    const isOptionValid = validateOption()
    
    let isServiceValid = true
    if (selectedOption.value?.value === 'service') {
      isServiceValid = validateService()
    }
    
    return isPointsValid && isOptionValid && isServiceValid
  }
  
  const resetForm = () => {
    points.value = ''
    selectedOption.value = null
    selectedCashCard.value = null
    selectedService.value = null
    pointsError.value = ''
    optionError.value = ''
    serviceError.value = ''
  }
  
  const buildConversionResult = () => {
    const result = {
      points: Number(points.value),
      cardNumber: '',
      amount: 0,
      currency: '',
      type: selectedOption.value.value
    }
    
    if (selectedOption.value.value === 'service') {
      result.amount = selectedService.value.title
      result.currency = 'خدمت'
      result.serviceId = selectedService.value.id
    } else if (selectedOption.value.value === 'cash') {
      result.amount = calculatedAmount.value
      result.currency = 'تومان پول نقد'
      result.cardNumber = selectedCashCard.value ? selectedCashCard.value.number : ''
    } else if (selectedOption.value.value === 'wallet') {
      result.amount = calculatedAmount.value
      result.currency = 'تومان در کیف پول'
    }
    
    return result
  }
  
  return {
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
  }
}

// composables/useModal.js
export const useModal = () => {
  const isOpen = ref(false)
  
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
    isOpen,
    openModal,
    closeModal,
    toggleModal
  }
}

// composables/useDropdown.js
export const useDropdown = () => {
  const isOpen = ref(false)
  
  const toggle = () => {
    isOpen.value = !isOpen.value
  }
  
  const close = () => {
    isOpen.value = false
  }
  
  const open = () => {
    isOpen.value = true
  }
  
  return {
    isOpen,
    toggle,
    close,
    open
  }
}