<template>
  <div class="fixed flex items-center bottom-8 left-8 z-20">
    <transition name="fade">
      <article
        v-if="tooltipOpen"
        ref="tooltipRef"
        class="relative pl-[10px]"
      >
        <div
          class="tooltip-box relative flex items-center pl-[16px] w-[240px] h-[50px] bg-white rounded-[8px] gap-[10px] p-[3px]">
          <img class="size-[44px] rounded-[7px] object-cover" src="/images/Tooltip.png" alt="Tooltip" />
          <span class="text-brand text-sm font-semibold">پشتیبانی سریع با مشاوران ما</span>
        </div>
      </article>
    </transition>

    <button
      @click="tooltipOpen = !tooltipOpen"
      class="size-[70px] bg-brand rounded-full flex items-center justify-center shadow-lg"
    >
      <Icon name="mdi-light:phone" size="35" style="color: #fff" />
    </button>
  </div>
</template>

<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'

const tooltipOpen = ref(false)
const tooltipRef = ref(null)

function handleClickOutside(event) {
  if (
    tooltipOpen.value &&
    tooltipRef.value &&
    !tooltipRef.value.contains(event.target)
  ) {
    tooltipOpen.value = false
  }
}

let listenerAdded = false

watch(tooltipOpen, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      if (!listenerAdded) {
        document.addEventListener('click', handleClickOutside)
        listenerAdded = true
      }
    }, 3000)
  } else {
    if (listenerAdded) {
      document.removeEventListener('click', handleClickOutside)
      listenerAdded = false
    }
  }
})

onBeforeUnmount(() => {
  if (listenerAdded) {
    document.removeEventListener('click', handleClickOutside)
  }
})
</script>


<style scoped>
.tooltip-box::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 8px solid white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>