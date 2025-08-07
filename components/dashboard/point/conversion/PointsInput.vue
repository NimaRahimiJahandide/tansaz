<template>
  <div class="mb-4">
    <label class="block text-white mb-2 text-sm font-medium">چند امتیاز می‌خواهید تبدیل کنید؟</label>
    <div class="relative">
      <input 
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)"
        type="text" 
        min="1"
        class="w-full rounded-lg bg-[#232323] text-white p-3 focus:outline-none focus:ring-2 focus:ring-brand border-none placeholder-gray-500 text-right" 
      />
      <span class="absolute cursor-pointer left-4 top-1/2 transform -translate-y-1/2 text-brand font-semibold text-sm">
        همه
      </span>
    </div>
    <div v-if="error" class="text-red-600 text-xs mt-1">{{ error }}</div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  error: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue'])
</script>