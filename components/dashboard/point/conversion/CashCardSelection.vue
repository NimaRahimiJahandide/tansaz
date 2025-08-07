<template>
  <section v-if="show">
    <div class="flex justify-between bg-[#1EAC741A] text-white text-sm rounded-2xl py-2.5 px-4 mb-4">
      <span>تبدیل {{ conversionRate }} امتیاز</span>
      <Icon name="mage:reload-reverse" size="18" style="color: #1EAC74" />
      <span>دریافتی {{ calculatedAmount }} تومان</span>
    </div>
    
    <div class="mb-4">
      <label class="block text-white mb-2 text-sm font-medium">شماره کارت</label>
      <div class="relative">
        <button 
          @click="toggle" 
          type="button"
          class="w-full flex justify-between items-center cursor-pointer bg-[#232323] text-white p-3 rounded-lg focus:outline-none"
        >
          <span>{{ selectedCard ? `${selectedCard.number} - ${selectedCard.name}` : 'شماره کارت خود را انتخاب کنید' }}</span>
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <div v-if="isOpen" class="absolute right-0 left-0 mt-2 bg-[#232323] rounded-lg shadow-lg z-10 max-h-48 overflow-auto p-2.5">
          <div 
            v-for="card in cards" 
            :key="card.id" 
            @click="selectCard(card)"
            class="p-3 cursor-pointer hover:bg-[#444444] rounded-[14px] text-white text-sm border-b border-[#222] last:border-b-0"
          >
            <div class="flex justify-between w-full">
              <span>{{ card.number }}</span> 
              <span>{{ card.name }}</span>
            </div>
            <span class="text-xs text-gray-400">{{ card.shaba }}</span>
          </div>
          
          <div 
            @click="$emit('add-card')"
            class="flex items-center text-[#589ED4] text-sm font-medium cursor-pointer p-3"
          >
            <Icon name="ic:round-plus" size="18" style="color: #589ED4" class="ml-1" /> 
            اضافه کردن شماره کارت
          </div>
        </div>
      </div>
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
  cards: {
    type: Array,
    required: true
  },
  modelValue: {
    type: Object,
    default: null
  },
  conversionRate: {
    type: Number,
    default: 10
  },
  calculatedAmount: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['update:modelValue', 'add-card'])

const selectedCard = computed(() => props.modelValue)

const selectCard = (card) => {
  emit('update:modelValue', card)
  close()
}
</script>