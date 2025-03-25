<template>
    <transition name="fade" mode="default">
            <!-- Success Notification -->
          <div
            class="w-[90%] sm:w-[40%] lg:w-[30%] bg-[#ebfaf3] fixed left-[50%] translate-x-[-50%] top-[180px] grid items-center grid-cols-18 rounded-[50px] border-2 border-[#D0E4E1] dark:border-2 dark:drop-shadow-[0_0px_15px_rgba(202,247,227,0.5)]">
            <div class="flex justify-center col-span-4 sm:col-span-2" >
              <div class="bg-[#CAF7E3] rounded-[50%] w-[37px] h-[37px] flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-[20px]">
                  <path fill="#23B785"
                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 464c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216zm141.6-275L217.2 376.1c-4.7 4.7-12.3 4.6-17-.1l-85.9-86.6c-4.7-4.7-4.6-12.3 .1-17l8.5-8.5c4.7-4.7 12.3-4.6 17 .1l69 69.5 163.4-162.1c4.7-4.7 12.3-4.6 17 .1l8.5 8.5c4.7 4.7 4.6 12.3-.1 17z" />
                </svg>
              </div>
            </div>

            <div class="col-span-16 pt-[10px] pb-[10px]">
              <h2 class="text-[#717171] text-[15px] pb-[5px] ellipsis">{{title}}</h2>
              <div class="text-[#848484] text-[10px] ellipsis">{{description}}</div>
            </div>
          </div>
    </transition>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
})

</script>

<style scoped>
.grid-cols-18{
  grid-template-columns: repeat(18, minmax(0, 1fr));
  z-index:99;
}
@media(min-width: 640px){
  .col-span-16{
    grid-column: span 16 / span 16;
  }
}

.ellipsis {
    width: 95%;
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}

.fade-enter,
.fade-leave-to

.fade-leave-active
  {
  opacity: 0;
}
</style>
