<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#2F2F2F80] bg-opacity-60">
    <div class="bg-[#181818] rounded-2xl w-full max-w-[400px] mx-4 p-6 relative shadow-lg">
      <!-- Close Button -->
      <button @click="$emit('close')" class="absolute left-4 top-4 text-gray-400 hover:text-white text-2xl focus:outline-none">
        <span aria-hidden="true">&times;</span>
      </button>
      <!-- Title -->
      <h2 class="text-white text-xl font-bold text-center mb-6">تبدیل امتیاز</h2>
      <!-- Input: امتیاز -->
      <div class="mb-4">
        <label class="block text-gray-300 mb-2 text-sm">چند امتیاز می‌خواهید تبدیل کنید؟</label>
        <input
          v-model="points"
          type="number"
          min="1"
          class="w-full rounded-lg bg-[#232323] text-white p-3 focus:outline-none focus:ring-2 focus:ring-brand border-none placeholder-gray-500 text-center"
          placeholder="همه"
        />
        <div v-if="pointsError" class="text-red-600 text-xs mt-1">{{ pointsError }}</div>
      </div>
      <!-- Dropdown: تبدیل به -->
      <div class="mb-4">
        <label class="block text-gray-300 mb-2 text-sm">تبدیل به</label>
        <div class="relative">
          <button @click="dropdownOpen = !dropdownOpen" type="button" class="w-full flex justify-between items-center bg-[#232323] text-white p-3 rounded-lg focus:outline-none">
            <span>{{ selectedOption ? selectedOption.label : 'انتخاب کنید' }}</span>
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-if="dropdownOpen" class="absolute right-0 left-0 mt-2 bg-[#232323] rounded-lg shadow-lg z-10 max-h-48 overflow-auto">
            <div v-for="option in options" :key="option.value" @click="selectOption(option)" class="p-3 cursor-pointer hover:bg-gray-750 text-white text-sm border-b border-[#222] last:border-b-0">
              {{ option.label }}
            </div>
          </div>
        </div>
        <div v-if="optionError" class="text-red-600 text-xs mt-1">{{ optionError }}</div>
      </div>
      <!-- Confirm Button -->
      <button @click="submit" class="w-full bg-brand text-white py-3 rounded-lg mt-4 font-bold text-lg hover:bg-opacity-90 transition">تبدیل</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const points = ref('')
const pointsError = ref('')
const dropdownOpen = ref(false)
const selectedOption = ref(null)
const optionError = ref('')

const options = [
  { label: 'پول نقد', value: 'cash' },
  { label: 'پول در کیف پول', value: 'wallet' },
  { label: 'استفاده از خدمات', value: 'service' },
  { label: '...', value: 'other' }
]

function selectOption(option) {
  selectedOption.value = option
  dropdownOpen.value = false
  optionError.value = ''
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
  // اینجا می‌توانید درخواست تبدیل را ارسال کنید
  // پس از موفقیت:
  $emit('close')
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