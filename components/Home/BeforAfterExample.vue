<template>
  <div class="relative bg-black text-white pt-8 overflow-hidden">
    <!-- Header Section -->
    <header class="px-2 pb-[25px] z-10">
      <h1 class="text-xl font-bold leading-7">
        القاء حس از نو شکفتن در <span class="text-brand">کلینیـک تــن ســاز</span> !
      </h1>
    </header>
    <div data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
      <!-- Loading State -->
      <div v-if="pending" class="text-center py-8">
        <p class="text-white/70">در حال بارگذاری...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-8">
        <p class="text-red-400">خطا در بارگذاری اطلاعات</p>
      </div>

      <!-- No Data State -->
      <div v-else-if="!gallery.length" class="text-center py-8">
        <p class="text-white/70">No data available</p>
      </div>

      <!-- Main Content -->
      <template v-else>
        <!-- Before & After Image Section -->
        <section class="relative mx-auto px-4 z-10">
          <div class="container max-w-[1240px] mx-auto px-5">
            <div class="max-w-xl mx-auto rounded-lg overflow-hidden relative aspect-square">
              <client-only>
                <transition name="fade" mode="out-in">
                  <VueCompareImage 
                    :key="selected.after" 
                    :left-image="selected.before" 
                    :right-image="selected.after" 
                    :handle="customHandle" 
                  />
                </transition>
              </client-only>
            </div>
          </div>
        </section>
    
        <!-- Gallery Section -->
        <section class="pt-[25px] z-10">
          <div class="flex gap-4 overflow-x-auto hide-scrollbar max-w-sm mx-auto z-10">
            <div v-for="(item, index) in gallery" :key="item.id || index"
              class="relative size-[105px] overflow-hidden rounded-[22px] cursor-pointer shrink-0 z-10"
              @click="selectImages(item)">
              <img :src="item.after" :alt="`${item.serviceName} - After`"
                class="w-full h-full object-cover transition-transform duration-500 ease-in-out z-10" />
            </div>
          </div>
        </section>
        
        <section class="text-center pt-4 z-10">
          <p class="font-semibold leading-[26px]">{{ selected.serviceName || 'پیکرتراشی' }}</p>
          <p class="text-sm font-medium leading-[23px]">{{ selected.device || 'دستگاه ایواماتیک' }}</p>
        </section>
      </template>

      <section class="absolute bottom-10 z-0">
        <div class="relative inline-block">
          <img src="/icons/dot-before-after.svg" alt="dot-before-after">
          <img src="/icons/circle-before-after.svg" alt="circle-before-after"
            class="absolute -bottom-4 left-1/2 -translate-x-1/2 heartbeat">
        </div>
      </section>
      <div class="pb-20"></div>
    </div>
  </div>
</template>

<script setup>
import { useBeforeAfter } from '~/composables/home/useBeforeAfter'

// Use the composable
const { gallery, pending, error } = useBeforeAfter()

// عکس انتخاب‌شده فعلی
const selected = ref({})

// Watch for gallery changes and set initial selection
watch(gallery, (newGallery) => {
  if (newGallery.length > 0 && (!selected.value.id || !newGallery.find(item => item.id === selected.value.id))) {
    selected.value = newGallery[0]
  }
}, { immediate: true })

const selectImages = (item) => {
  selected.value = item
}

// handle سفارشی برای VueCompareImage
const customHandle = `
  <div style="border: 1px solid white; display: flex; border-radius: 50%; width: 40px; height: 40px; justify-content: center; align-items: center; background-color: white">
    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.10198 3.93533C8.43759 3.59973 8.96834 3.57901 9.32838 3.87267L9.39821 3.93533L15.8149 10.352C16.1729 10.71 16.1729 11.2902 15.8149 11.6482L9.39821 18.0649C9.04022 18.4229 8.45996 18.4229 8.10198 18.0649C7.744 17.7069 7.744 17.1266 8.10198 16.7687L13.8705 11.0001L8.10198 5.23156L8.03932 5.16173C7.74566 4.80169 7.76638 4.27094 8.10198 3.93533Z" fill="#2E2E2E"/>
      <path d="M7.77769 3.61161C8.24996 3.13934 8.97898 3.0828 9.51345 3.44063L9.61819 3.51762L9.6343 3.53194L9.70412 3.5946L9.72203 3.61161L16.1387 10.0283L16.2327 10.1321C16.6441 10.6362 16.644 11.3637 16.2327 11.8679L16.1387 11.9726L9.72203 18.3893C9.1851 18.9261 8.31465 18.9261 7.77769 18.3893C7.24075 17.8523 7.24079 16.9819 7.77769 16.4449L13.2222 11.0004L7.77769 5.55595L7.76068 5.53804L7.69802 5.46822L7.6837 5.45121C7.2433 4.91098 7.27407 4.11531 7.77769 3.61161ZM8.96739 4.18005C8.79385 4.08619 8.5723 4.11323 8.4258 4.25972C8.25872 4.42688 8.24772 4.69135 8.39358 4.87113L8.43476 4.91679L14.1944 10.6764C14.2802 10.7623 14.3286 10.879 14.3286 11.0004C14.3286 11.1219 14.2803 11.2386 14.1944 11.3245L8.4258 17.0931C8.24689 17.2721 8.24684 17.5622 8.4258 17.7412C8.60478 17.92 8.89497 17.92 9.07392 17.7412L15.4906 11.3245L15.5488 11.252C15.6495 11.0994 15.6496 10.9005 15.5488 10.748L15.4906 10.6764L9.08287 4.26868L9.03811 4.22839L8.96739 4.18005Z" fill="#2E2E2E"/>
    </svg>
    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.6715 3.87267C14.0315 3.57901 14.5623 3.59973 14.8979 3.93533C15.2335 4.27094 15.2542 4.80169 14.9605 5.16173L14.8979 5.23156L9.12933 11.0001L14.8979 16.7687L14.9605 16.8385C15.2542 17.1985 15.2335 17.7293 14.8979 18.0649C14.5623 18.4005 14.0315 18.4212 13.6715 18.1276L13.6017 18.0649L7.18499 11.6482C6.82701 11.2902 6.82701 10.71 7.18499 10.352L13.6017 3.93533L13.6715 3.87267Z" fill="#2E2E2E"/>
      <path d="M13.4864 3.44059C14.0209 3.08283 14.7499 3.13933 15.2222 3.61157C15.6943 4.08384 15.7509 4.81292 15.3932 5.34733L15.3162 5.45117C15.3116 5.45676 15.3067 5.46281 15.3019 5.46818L15.2392 5.53801C15.2337 5.5441 15.228 5.55011 15.2222 5.55591L9.77769 11.0004L15.2222 16.4449L15.2392 16.4628L15.3019 16.5326L15.3162 16.5487C15.7568 17.089 15.7259 17.8855 15.2222 18.3892C14.75 18.8614 14.0208 18.9178 13.4864 18.5602L13.3817 18.4832C13.3761 18.4787 13.3709 18.4737 13.3656 18.4689L13.2958 18.4063C13.2897 18.4008 13.2836 18.395 13.2779 18.3892L6.86119 11.9726C6.32424 11.4356 6.32429 10.5652 6.86119 10.0282L13.2779 3.61157L13.2958 3.59456L13.3656 3.5319L13.3817 3.51758L13.4864 3.44059ZM14.5741 4.25968C14.4067 4.09226 14.1416 4.08173 13.9618 4.22835L13.9161 4.26864L7.5093 10.6764C7.33038 10.8553 7.33033 11.1455 7.5093 11.3245L13.9161 17.7313L13.9618 17.7725L14.0325 17.8199C14.206 17.9138 14.4276 17.8876 14.5741 17.7411C14.7407 17.5745 14.7515 17.3113 14.6072 17.1315L14.5642 17.0832L8.80552 11.3245C8.71962 11.2386 8.6713 11.1219 8.67125 11.0004C8.67125 10.8789 8.71962 10.7623 8.80552 10.6764L14.5642 4.91675L14.6054 4.87109C14.7516 4.69133 14.7412 4.42696 14.5741 4.25968Z" fill="#2E2E2E"/>
    </svg>
  </div>
`
</script>

<style scoped>
.gallery-item:hover img {
  transform: scale(1.05);
}

/* مخفی کردن scrollbar در مرورگرهای مختلف */
.hide-scrollbar {
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE/Edge */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari */
}

@keyframes heartbeat {

  0%,
  100% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
}

.heartbeat {
  animation: heartbeat 1.5s ease-in-out infinite;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
