<template>
    <div class="bg-white rounded-[16px] p-4">
        <!-- Question -->
        <div @click="toggleAnswer" class="flex items-center justify-between cursor-pointer">
            <h3 class="text-sm font-medium leading-[23px]">{{ question }}</h3>
            <svg class="transition-transform duration-300 ease-in-out" :class="{ 'rotate-180': showAnswer }" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_362_39)">
                    <path
                        d="M8.47438 6.35397C8.80169 6.08701 9.2842 6.10584 9.58929 6.41094L15.4226 12.2443L15.4796 12.3077C15.7466 12.6351 15.7277 13.1176 15.4226 13.4227C15.1175 13.7278 14.635 13.7466 14.3077 13.4796L14.2442 13.4227L9.0001 8.17852L3.75596 13.4227C3.43052 13.7481 2.90301 13.7481 2.57757 13.4227C2.25214 13.0972 2.25214 12.5697 2.57757 12.2443L8.41091 6.41094L8.47438 6.35397Z"
                        fill="#2E2E2E" />
                    <path
                        d="M8.21081 6.03113C8.70196 5.63055 9.42601 5.6586 9.88399 6.11658L15.7173 11.9499L15.7328 11.9662L15.7897 12.0297L15.8028 12.0443L15.8728 12.1395C16.1762 12.5931 16.1517 13.2008 15.7979 13.6288L15.7173 13.7175C15.2881 14.1467 14.6252 14.198 14.1394 13.8729L14.0441 13.8029C14.0391 13.7988 14.0343 13.7943 14.0295 13.7899L13.966 13.733L13.9497 13.7175L9.0002 8.76795L4.05065 13.7175C3.59304 14.175 2.86922 14.2033 2.37829 13.8029L2.28308 13.7175C1.79494 13.2294 1.79499 12.4381 2.28308 11.9499L8.11641 6.11658L8.13268 6.10112L8.19616 6.04415L8.21081 6.03113ZM9.29479 6.70577C9.14259 6.55357 8.90163 6.54399 8.73815 6.67729L8.69665 6.71391L2.87227 12.5391C2.70962 12.7018 2.70957 12.9656 2.87227 13.1283L2.93737 13.1812C3.09908 13.2882 3.319 13.2707 3.46146 13.1283L8.7056 7.88416L8.77071 7.83045C8.93244 7.72361 9.15239 7.74176 9.29479 7.88416L14.53 13.1193L14.5715 13.1568L14.6358 13.1999C14.7935 13.2853 14.9949 13.2614 15.1281 13.1283L15.1786 13.0673C15.28 12.9178 15.2729 12.717 15.1582 12.5741L15.1192 12.5302L9.29479 6.70577Z"
                        fill="#2E2E2E" />
                </g>
                <defs>
                    <clipPath id="clip0_362_39">
                        <rect x="18" y="18.5" width="18" height="18" rx="9" transform="rotate(-180 18 18.5)"
                            fill="white" />
                    </clipPath>
                </defs>
            </svg>

        </div>

        <!-- Answer -->
        <transition name="slide-fade">
            <div v-if="showAnswer"
                class="mt-4 text-[#2E2E2E] text-sm text-justify leading-[26px] pt-[15px] border-t border-[#E1E1E1]">
                <p>{{ answer }}</p>
            </div>
        </transition>
    </div>
</template>

<script setup>
defineProps({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
});

const showAnswer = ref(false);

const toggleAnswer = () => {
    showAnswer.value = !showAnswer.value;
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.slide-fade-enter-from {
  transform: translateY(-12px);
  opacity: 0;
  max-height: 0;
}

.slide-fade-leave-to {
  transform: translateY(-8px);
  opacity: 0;
  max-height: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  transform: translateY(0);
  opacity: 1;
  max-height: 1000px;
}
</style>
