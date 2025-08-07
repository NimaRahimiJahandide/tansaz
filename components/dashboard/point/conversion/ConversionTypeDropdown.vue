<template>
  <div class="mb-4">
    <label class="block text-white mb-2 text-sm font-medium">تبدیل به</label>
    <div class="relative">
      <button 
        @click="toggle" 
        type="button"
        class="w-full flex justify-between items-center cursor-pointer bg-[#232323] text-white p-3 rounded-lg focus:outline-none"
      >
        <span>{{ selectedOption ? selectedOption.label : 'انتخاب کنید' }}</span>
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div v-if="isOpen" class="absolute right-0 left-0 mt-2 bg-[#232323] rounded-lg shadow-lg z-10 max-h-48 overflow-auto p-2.5">
        <div 
          v-for="option in options" 
          :key="option.value" 
          @click="selectOption(option)"
          class="p-3 cursor-pointer hover:bg-[#444444] rounded-[14px] text-white text-sm border-b border-[#222] last:border-b-0"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
    <div v-if="error" class="text-red-600 text-xs mt-1">{{ error }}</div>
  </div>
</template>

<script setup>
const { isOpen, toggle, close } = useDropdown()

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    type: Object,
    default: null
  },
  error: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const selectedOption = computed(() => props.modelValue)

const selectOption = (option) => {
  emit('update:modelValue', option)
  close()
}
// Close dropdown when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.relative')) {
      close()
    }
  })
})
</script>