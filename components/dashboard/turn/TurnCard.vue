<template>
  <div class="bg-[#212121] rounded-[28px] p-4 transition-colors">
    <!-- Header with service name and date -->
    <div class="flex justify-between items-start mb-4">
      <div class="flex items-center gap-2">
        <span class="text-white font-medium text-[18px]">{{ turn.service }}</span>
      </div>
      <div class="text-[#828282] text-sm">{{ turn.date }}</div>
    </div>
    
    <!-- Time and status -->
    <div class="flex justify-between items-center mb-3">
      <div class="flex items-center gap-2">
        <Icon name="mdi:clock-outline" size="16" class="text-[#828282]" />
        <span class="text-white text-sm">{{ turn.time }}</span>
      </div>
      <div class="flex items-center">
        <span 
          class="px-3 py-1 rounded-[10px] text-sm font-medium"
          :class="getStatusClass(turn.status)"
        >
          {{ turn.status }}
        </span>
      </div>
    </div>
    
    <!-- Doctor and location info -->
    <div class="space-y-2 mb-4">
      <div class="flex items-center gap-2" v-if="turn.doctor">
        <Icon name="mdi:doctor" size="16" class="text-[#828282]" />
        <span class="text-[#828282] text-sm">{{ turn.doctor }}</span>
      </div>
      <div class="flex items-center gap-2" v-if="turn.location">
        <Icon name="mdi:map-marker-outline" size="16" class="text-[#828282]" />
        <span class="text-[#828282] text-sm">{{ turn.location }}</span>
      </div>
    </div>
    
    <!-- Action button -->
    <div class="flex justify-end">
      <button 
        class="px-4 py-2 rounded-[10px] text-sm font-medium transition-colors"
        :class="getButtonClass(turn.status)"
        @click="handleAction"
      >
        {{ getButtonText(turn.status) }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  turn: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['change-turn', 'cancel-turn', 'view-details'])

const getStatusClass = (status) => {
  switch (status) {
    case 'رزرو شده':
      return 'bg-[#ED1C241A] text-brand'
    case 'لغو شده':
      return 'bg-[#FF69691A] text-[#FF6969]'
    case 'انجام شده':
      return 'bg-[#4CAF501A] text-[#4CAF50]'
    default:
      return 'bg-[#ED1C241A] text-brand'
  }
}

const getButtonClass = (status) => {
  switch (status) {
    case 'رزرو شده':
      return 'bg-brand hover:bg-brand/80 text-white'
    case 'لغو شده':
      return 'bg-[#4CAF50] hover:bg-[#4CAF50]/80 text-white'
    case 'انجام شده':
      return 'bg-[#828282] hover:bg-[#828282]/80 text-white'
    default:
      return 'bg-brand hover:bg-brand/80 text-white'
  }
}

const getButtonText = (status) => {
  switch (status) {
    case 'رزرو شده':
      return 'تغییر نوبت'
    case 'لغو شده':
      return 'رزرو مجدد'
    case 'انجام شده':
      return 'مشاهده جزئیات'
    default:
      return 'تغییر نوبت'
  }
}

const handleAction = () => {
  switch (props.turn.status) {
    case 'رزرو شده':
      emit('change-turn', props.turn)
      break
    case 'لغو شده':
      emit('change-turn', props.turn)
      break
    case 'انجام شده':
      emit('view-details', props.turn)
      break
    default:
      emit('change-turn', props.turn)
  }
}
</script>