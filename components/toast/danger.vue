<template>
    <transition name="fade" mode="default">
        <!-- Error Notification -->
        <div
            class="w-[90%] sm:w-[40%] lg:w-[30%] bg-[#ffe5e6] fixed left-[50%] translate-x-[-50%] top-[180px] grid items-center grid-cols-18 rounded-[50px] border-2 border-[#FFD0D0] dark:border-2 dark:drop-shadow-[0_0px_15px_rgba(254,209,209,0.5)]">
            <div class="flex justify-center col-span-4 sm:col-span-2">
                <div class="bg-[#FED1D1] rounded-[50%] w-[37px] h-[37px] flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-[20px]">
                        <path fill="#E84546"
                            d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM178.3 178.3c-3.1 3.1-3.1 8.2 0 11.3L244.7 256l-66.3 66.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L256 267.3l66.3 66.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L267.3 256l66.3-66.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L256 244.7l-66.3-66.3c-3.1-3.1-8.2-3.1-11.3 0z" />
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
  z-index:9999999999;
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
.fade-leave-to .fade-leave-active {
    opacity: 0;
}
</style>
