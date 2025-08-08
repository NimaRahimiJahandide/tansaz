<template>
  <div>
    <!-- Mobile Sidebar Overlay -->
    <transition name="fade">
      <div
        v-if="isMobile && isOpen"
        class="fixed inset-0 z-50 bg-black/60 flex"
        @click.self="$emit('close-sidebar')"
      >
        <aside
          class="w-64 bg-[#212121] h-full py-8 px-4 border-l rounded-l-[28px] border-[#232323] flex flex-col relative animate-slideInRight"
        >
          <button
            class="absolute -left-3 top-20 z-50 text-white"
            @click="$emit('close-sidebar')"
            aria-label="بستن سایدبار"
          >
            <img src="/icons/arrow-right.svg" alt="arrow-right" class="w-6 h-6 cursor-pointer">
          </button>
          <div class="flex items-center mb-[1.875rem] px-2 relative">
            <img src="/icons/new-logo.png" alt="tansaz logo" class="h-7 w-full object-contain" />
          </div>
          <nav class="flex-1 border-t border-[#E1E1E16B]">
            <ul class="space-y-2">
              <li v-for="item in items" :key="item.label">
                <nuxt-link
                  class="w-full flex items-center px-4 py-3 rounded-lg transition-colors text-right gap-2 cursor-pointer"
                  :class="item.active ? 'bg-[linear-gradient(90deg,_#ED1C24_0%,_#ED1C24_70.15%,_#FA5157_84.92%,_#ED1C24_100%)] text-white' : 'hover:bg-[#232323] text-gray-300'"
                  :to="item.route"
                >
                  <Icon :name="item.icon" size="22" :class="item.active ? 'text-white' : 'text-[#828282]'" />
                  <span class="font-medium">{{ item.label }}</span>
                </nuxt-link>
              </li>
            </ul>
            <div class="mt-8 flex justify-center">
              <div class="bg-[#54A6DE] rounded-[28px] p-5 w-56 flex flex-col items-center">
                <img src="/icons/chat-online.svg" alt="chat-online">
                <div class="mt-3 text-white font-extrabold text-[20px]">چت آنلاین</div>
                <div class="mt-2 text-white text-sm font-medium text-justify leading-6">شما میتوانید با دستیار کلینیک تن ساز بصورت آنلاین چت کنید.</div>
                <button class="mt-4 cursor-pointer bg-[#2E2E2E] text-white w-full h-[48px] rounded-full px-6 py-2 text-sm font-semibold shadow-[0px_4px_24px_0px_#2E2E2E66] transition">شروع چت</button>
              </div>
            </div>
          </nav>
        </aside>
      </div>
    </transition>
    <!-- Desktop Sidebar -->
    <aside
      v-if="!isMobile" class="justify-start"
      :class="[
        'transition-all duration-300 ',
        isOpen
          ? 'lg:flex flex-col w-64 bg-[#212121] py-8 my-4 px-4 border-l rounded-l-[28px] border-[#232323]'
          : 'w-14 mt-2 px-2 rounded-l-[28px] flex flex-col items-center justify-center'
      ]"
    >
      <div v-if="isOpen" class="flex items-center mb-[1.875rem] px-2 relative">
        <img src="/icons/new-logo.png" alt="tansaz logo" class="h-7 w-full object-contain" />
        <img
          src="/icons/arrow-right.svg"
          alt="arrow-right"
          class="h-6 object-contain absolute cursor-pointer -left-7 top-12"
          @click="$emit('close-sidebar')"
        />
      </div>
      <nav v-if="isOpen" class="flex-1 border-t border-[#E1E1E16B]">
        <ul class="space-y-2">
          <li v-for="item in items" :key="item.label">
            <nuxt-link :to="item.route"
              class="w-full flex items-center px-4 py-3 rounded-lg transition-colors text-right gap-2 cursor-pointer"
              :class="item.active ? 'bg-[linear-gradient(90deg,_#ED1C24_0%,_#ED1C24_70.15%,_#FA5157_84.92%,_#ED1C24_100%)] text-white' : 'hover:bg-[#232323] text-gray-300'"
            >
              <Icon :name="item.icon" size="22" :class="item.active ? 'text-white' : 'text-[#828282]'" />
              <span class="font-medium">{{ item.label }}</span>
            </nuxt-link>
          </li>
        </ul>
        <div class="mt-8 flex justify-center">
          <div class="bg-[#54A6DE] rounded-[28px] p-5 w-56 flex flex-col items-center">
            <img src="/icons/chat-online.svg" alt="chat-online">
            <div class="mt-3 text-white font-extrabold text-[20px]">چت آنلاین</div>
            <div class="mt-2 text-white text-sm font-medium text-justify leading-6">شما میتوانید با دستیار کلینیک تن ساز بصورت آنلاین چت کنید.</div>
            <button class="mt-4 cursor-pointer bg-[#2E2E2E] text-white w-full h-[48px] rounded-full px-6 py-2 text-sm font-semibold shadow-[0px_4px_24px_0px_#2E2E2E66] transition">شروع چت</button>
          </div>
        </div>
      </nav>
      <!-- Sidebar closed: show menu icon to open -->
      <button
        v-else
        class="flex w-10 h-10 rounded-full mt-4"
        @click="$emit('open-sidebar')"
        aria-label="باز کردن سایدبار"
      >
        <img src="/icons/Menu_Alt_01-white.svg" alt="menu" class="w-6 h-6 cursor-pointer">
      </button>
    </aside>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: Boolean
})
const emit = defineEmits(['close-sidebar', 'open-sidebar'])

const route = useRoute()

const isMobile = ref(false)

function updateIsMobile() {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth < 1024
  }
}

onMounted(() => {
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile)
})

const baseItems = [
  {
    label: 'داشبورد',
    icon: `mynaui:grid`,
    active: false,
    route: '/dashboard'
  },
  {
    label: 'امتیازات من',
    icon: `mdi:gift-outline`,
    active: true,
    route: '/dashboard/points'
  },
  {
    label: 'کیف پول',
    icon: `ion:card-outline`,
    active: false,
    route: '/dashboard/wallet'
  },
  {
    label: 'پروفایل کاربری',
    icon: `bx:user`,
    active: false,
    route: '/dashboard/profile'
  },
  {
    label: 'نوبت های من',
    icon: `mdi:calendar-tick-outline`,
    active: false,
    route: '/dashboard/turns'
  },
  {
    label: 'سوابق و پرونده ها',
    icon: `ci:swatches-palette`,
    active: false,
    route: '/dashboard/records'
  },
  {
    label: 'لیست پرداخت ها',
    icon: `tdesign:check-rectangle`,
    active: false,
    route: '/dashboard/payments'
  },
  {
    label: 'لیست نحوه امتیازدهی',
    icon: `streamline-plump:book-1`,
    active: false,
    route: '/dashboard/points-methods'
  },
    {
    label: 'آنالیز اندام و چهره',
    icon: `tabler:border-corners`,
    active: false,
    route: '/dashboard/body-analysis'
  }
]

const items = computed(() =>
  baseItems.map(item => ({
    ...item,
    active: route.path === item.route
  }))
)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
@keyframes slideInRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
.animate-slideInRight {
  animation: slideInRight 0.3s cubic-bezier(0.4,0,0.2,1);
}
</style> 