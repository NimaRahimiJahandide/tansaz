<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#2F2F2F80] bg-opacity-60">
    <div class="bg-[#181818] rounded-2xl w-full max-w-[400px] mx-4 p-6 relative shadow-lg">
      <!-- Close Button -->
      <button @click="$emit('close')" class="absolute left-4 top-4 text-gray-400 hover:text-white text-2xl focus:outline-none">
        <span aria-hidden="true">&times;</span>
      </button>
      
      <!-- Title -->
      <h2 class="text-white text-xl font-bold text-center mb-6">اضافه کردن شماره کارت</h2>
      
      <!-- Card Number Input -->
      <div class="mb-4">
        <label class="block text-white mb-2 text-sm font-medium">شماره کارت</label>
        <input
          v-model="cardNumber"
          type="text"
          placeholder="6604-2232-2838-9876"
          class="w-full rounded-lg bg-[#232323] text-white p-3 focus:outline-none focus:ring-2 focus:ring-brand border-none placeholder-white"
          @input="formatCardNumber"
        />
        <div v-if="cardNumberError" class="text-red-600 text-xs mt-1">{{ cardNumberError }}</div>
      </div>
      
      <!-- IBAN Input -->
      <div class="mb-4">
        <label class="block text-white mb-2 text-sm font-medium">شماره شبا</label>
        <input
          v-model="ibanNumber"
          type="text"
          placeholder="IR98 3546 0000 0003 2345 88700"
          class="w-full rounded-lg bg-[#232323] text-white p-3 focus:outline-none focus:ring-2 focus:ring-brand border-none placeholder-white"
          @input="formatIbanNumber"
        />
        <div v-if="ibanError" class="text-red-600 text-xs mt-1">{{ ibanError }}</div>
      </div>
      
      <!-- Warning Message -->
      <div class="mb-6 bg-[#1EAC741A] rounded-2xl px-3.5 py-3 gap-2 flex items-start space-x-3 space-x-reverse">
        <div class="flex-shrink-0">
          <Icon name="charm:shield-tick" size="18"  style="color: #1EAC74" />
        </div>
        <div class="text-[#F2F4F6] text-sm leading-relaxed">
          کاربر عزیز، لطفاً توجه نمایید شماره کارت به نام خودتان
          باشد، در غیر این صورت عملیات انجام نمی‌شود.
        </div>
      </div>
      
      <!-- Action Buttons -->
      <div class="flex space-x-3 gap-4 space-x-reverse">
        <button 
          @click="handleAddCard"
          class="flex-1 bg-brand hover:bg-red-600 text-white py-3 rounded-full font-medium transition-colors"
        >
          اضافه کن
        </button>
        <button 
          @click="$emit('close')"
          class="flex-1 bg-[#363636] hover:bg-[#404040] text-white py-3 rounded-full font-medium transition-colors"
        >
          لغو کن
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close', 'add-card'])

const cardNumber = ref('')
const ibanNumber = ref('')
const cardNumberError = ref('')
const ibanError = ref('')

const formatCardNumber = (event) => {
  let value = event.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
  let formattedValue = value.match(/.{1,4}/g)?.join('-') || value
  cardNumber.value = formattedValue
  
  // Clear error when user starts typing
  if (cardNumberError.value) {
    cardNumberError.value = ''
  }
}

const formatIbanNumber = (event) => {
  let value = event.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
  
  // Add IR prefix if not present
  if (value && !value.startsWith('IR')) {
    value = 'IR' + value
  }
  
  // Format IBAN with spaces every 4 characters after IR
  if (value.startsWith('IR')) {
    let irPart = 'IR'
    let numberPart = value.substring(2)
    let formattedNumber = numberPart.match(/.{1,4}/g)?.join(' ') || numberPart
    ibanNumber.value = irPart + (numberPart ? ' ' + formattedNumber : '')
  } else {
    ibanNumber.value = value
  }
  
  // Clear error when user starts typing
  if (ibanError.value) {
    ibanError.value = ''
  }
}

const validateCardNumber = () => {
  if (!cardNumber.value) {
    cardNumberError.value = 'لطفاً شماره کارت را وارد کنید'
    return false
  }
  
  const cleanCardNumber = cardNumber.value.replace(/[-\s]/g, '')
  if (cleanCardNumber.length !== 16) {
    cardNumberError.value = 'شماره کارت باید 16 رقم باشد'
    return false
  }
  
  return true
}

const validateIban = () => {
  if (!ibanNumber.value) {
    ibanError.value = 'لطفاً شماره شبا را وارد کنید'
    return false
  }
  
  const cleanIban = ibanNumber.value.replace(/\s/g, '')
  if (!cleanIban.startsWith('IR')) {
    ibanError.value = 'شماره شبا باید با IR شروع شود'
    return false
  }
  
  if (cleanIban.length !== 26) {
    ibanError.value = 'شماره شبا باید 24 رقم بعد از IR باشد'
    return false
  }
  
  return true
}

const handleAddCard = () => {
  cardNumberError.value = ''
  ibanError.value = ''
  
  const isCardValid = validateCardNumber()
  const isIbanValid = validateIban()
  
  if (isCardValid && isIbanValid) {
    emit('add-card', {
      cardNumber: cardNumber.value,
      ibanNumber: ibanNumber.value
    })
  }
}
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