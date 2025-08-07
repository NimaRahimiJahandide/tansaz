<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-[#2F2F2F80] bg-opacity-60">
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
      <!-- Confirm Button -->
      <div class="flex gap-2.5">
        <button @click="submit"
          :class="disabled ? 'opacity-50 cursor-not-allowed bg-[#1D1D1D] text-[#828282]' : ' cursor-pointer'"
          class="w-full bg-brand text-white py-3 rounded-full mt-4 font-bold text-lg hover:bg-opacity-90 transition">تبدیل کن</button>
        <button @click="$emit('close')"
          class="w-full bg-[#363636] text-white py-3 rounded-full mt-4 font-bold text-lg transition cursor-pointer">لغو کن</button>
      </div>
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