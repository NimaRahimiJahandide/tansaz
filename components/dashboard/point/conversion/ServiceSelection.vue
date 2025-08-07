<template>
  <section v-if="show">
    <div class="mb-4">
      <label class="block text-white mb-2 text-sm font-medium">انتخاب خدمت</label>
      <div class="relative">
        <button 
          @click="toggle" 
          type="button"
          class="w-full flex justify-between items-center cursor-pointer bg-[#232323] text-white p-3 rounded-lg focus:outline-none"
        >
          <span>{{ selectedService ? selectedService.title : 'خدمت مورد نظر خود را انتخاب کنید' }}</span>
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div v-if="isOpen" class="absolute right-0 left-0 mt-2 bg-[#232323] rounded-lg shadow-lg z-10 max-h-80 overflow-auto p-2.5">
          <div 
            v-for="service in services" 
            :key="service.id" 
            @click="selectService(service)"
            class="p-3 cursor-pointer hover:bg-[#444444] rounded-[14px] text-white text-sm border-b border-[#222] last:border-b-0 transition-colors"
          >
            <div class="flex justify-between items-center mb-2">
              <span class="font-medium text-sm">{{ service.title }}</span>
              <div class="flex items-center flex-row-reverse">
                <template v-for="star in 5" :key="star">
                  <svg 
                    class="w-3 h-3" 
                    :class="star <= service.rating ? 'text-[#F7C41B]' : 'text-gray-600'"
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </template>
              </div>
            </div>

            <div class="flex justify-between items-center">
              <span class="text-[#D4D4D4] text-xs px-2 py-1 rounded-lg">
                {{ service.points }} امتیاز
              </span>
              <div class="flex items-center space-x-1 space-x-reverse">
                <span class="text-xs" :class="service.completed ? 'text-white' : 'text-[#589ED4]'">
                  {{ service.completed ? 'تکمیل شده' : 'می خواهم تکمیل کنم' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="error" class="text-red-600 text-xs mt-1">{{ error }}</div>
    </div>
  </section>
</template>

<script setup>
const { isOpen, toggle, close } = useDropdown()

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  services: {
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

const selectedService = computed(() => props.modelValue)

const selectService = (service) => {
  emit('update:modelValue', service)
  close()
}
</script>