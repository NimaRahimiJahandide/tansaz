<template>
  <div>
    <!-- Category Selection -->
    <div class="mb-4">

      <!-- Dropdown Container -->
      <div class="relative">
        <!-- Dropdown Header -->
        <div @click="toggleDropdown"
          class="bg-[#212121] rounded-xl shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow">
          <div class="flex items-center justify-between">
            <!-- Selected Item Display -->
            <div class="flex items-center space-x-2 space-x-reverse">
              <Icon name="mdi:gift-outline" size="22" class="text-brand ml-2"/>
              <span class="text-base font-medium text-white">
                {{ selectedItem.title }}
              </span>
            </div>

            <!-- Home Icon -->
            <svg class="w-5 h-5 text-red-500 transform transition-transform duration-200"
              :class="{ 'rotate-180': isOpen }" fill="none" stroke="#828282" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <!-- Dropdown Menu -->
        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100" leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
          <div v-show="isOpen"
            class="absolute top-full left-0 right-0 mt-2 bg-[#212121] rounded-xl shadow-lgz-10 overflow-hidden">
            <!-- Menu Items -->
            <div class="py-2">
              <div v-for="item in menuItems" :key="item.id" @click="selectMenuItem(item)"
                class="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors flex items-center justify-between"
                :class="{
                  'bg-red-500 text-white hover:bg-red-600': item.active,
                  'text-gray-700': !item.active
                }">
                <span class="text-sm" :class="{ 'font-medium': item.active }">
                  {{ item.title }}
                </span>

                <!-- Check icon for selected item -->
                <svg v-if="item.active" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- Overlay to close dropdown when clicked outside -->
      <div v-if="isOpen" @click="closeDropdown" class="fixed inset-0 z-0"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Dropdown state
const isOpen = ref(false)

// Menu items data
const menuItems = ref([
  { id: 1, title: 'امتیازات من', active: true }
])

// Get selected item
const selectedItem = ref(menuItems.value.find(item => item.active))

// Toggle dropdown
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

// Close dropdown
const closeDropdown = () => {
  isOpen.value = false
}

// Handle menu item selection
const selectMenuItem = (item) => {
  // Update active states
  menuItems.value.forEach(menuItem => {
    menuItem.active = menuItem.id === item.id
  })

  // Update selected item
  selectedItem.value = item

  // Close dropdown
  closeDropdown()
}

// Close dropdown on Escape key
const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeDropdown()
  }
}

// Add keyboard event listener
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

// Remove keyboard event listener
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* Custom styles for Persian/RTL text */
.font-persian {
  font-family: 'Vazir', 'Tahoma', sans-serif;
}

/* Ensure proper RTL rendering */
* {
  text-align: right;
}

/* Custom scrollbar for dropdown if needed */
.dropdown-menu::-webkit-scrollbar {
  width: 4px;
}

.dropdown-menu::-webkit-scrollbar-track {
  background: #f1f5f9;
}

.dropdown-menu::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 2px;
}
</style>