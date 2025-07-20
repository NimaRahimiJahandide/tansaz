<template>
  <div class="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 z-50">
    <div 
      v-if="!isMinimized" 
      class="bg-blue-500 rounded-lg p-4 text-white max-w-xs shadow-lg animate-fade-in"
    >
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center space-x-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4 8-9 8a9.009 9.009 0 01-5.7-2.039l-3.3.998L2.26 16.26A9 9 0 0121 12z"/>
          </svg>
          <span class="font-semibold">چت آنلاین</span>
        </div>
        <button 
          @click="minimize"
          class="text-white hover:text-gray-200 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <p class="text-sm mb-3">شما می‌توانید با دستیار هوشمند ما صحبت کنید.</p>
      <button 
        @click="startChat"
        class="w-full bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-lg text-sm transition-colors"
      >
        شروع چت
      </button>
    </div>
    
    <!-- Minimized Chat Button -->
    <button 
      v-if="isMinimized"
      @click="expand"
      class="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-colors animate-bounce"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4 8-9 8a9.009 9.009 0 01-5.7-2.039l-3.3.998L2.26 16.26A9 9 0 0121 12z"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
const isMinimized = ref(false)

const minimize = () => {
  isMinimized.value = true
}

const expand = () => {
  isMinimized.value = false
}

const startChat = () => {
  // Handle chat start logic here
  console.log('Starting chat...')
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

.animate-bounce {
  animation: bounce 1s infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translateY(0);
  }
  40%, 43% {
    transform: translateY(-5px);
  }
  70% {
    transform: translateY(-3px);
  }
  90% {
    transform: translateY(-2px);
  }
}
</style>