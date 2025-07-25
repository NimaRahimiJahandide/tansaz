<template>
  <div class="bg-white">
    <LoadingComponent v-show="loadingState.isLoading" />

    <main class="max-w-[1440px] md:px-8 px-8 mx-auto md:pt-16 pt-8" v-show="!loadingState.isLoading">
      <section class="flex flex-col md:flex-row md:gap-10">
        <div class="flex md:hidden flex-col gap-6 pb-3 pt-7">
          <h2
            class="text-[32px] leading-[140%] font-bold bg-gradient-to-r from-[#EF172E] via-[#EF172E] to-[#3D0C11] text-transparent bg-clip-text text-border">
            {{ guests?.seminar?.title }}</h2>
        </div>
        <article class="flex flex-col items-center flex-1 justify-center">
          <img class="object-center md:flex hidden items-center justify-center md:h-[73vh] h-[467px] w-[600px] max-md:w-[400px]" src="/images/flower.png" alt="flower">
          <ul class="grid pt-5 md:gap-5 gap-2.5 grid-cols-4">
            <li><img class="max-w-[80px] md:max-w-[100px] h-[80px] md:h-[100px] object-center object-contain" src="/icons/Asclepion Logo_page-0001.jpg" alt="Asclepion Logo_page-0001"></li>
            <li><img class="max-w-[80px] md:max-w-[100px] h-[80px] md:h-[100px] object-center object-contain" src="/icons/003-APTOS-new.png" alt="003-APTOS-new"></li>
            <li><img class="max-w-[80px] md:max-w-[100px] h-[80px] md:h-[100px] object-center object-contain" src="/icons/Mehrashkar_Logo.png" alt="Mehrashkar_Logo"></li>
            <li><img class="max-w-[80px] md:max-w-[100px] h-[80px] md:h-[100px] object-center object-contain" src="/icons/TansazClinic.png" alt="TansazClinic"></li>
          </ul>
        </article>
        <article class="flex-1">
          <div class="md:flex hidden flex-col gap-2">
            <h2
              class="md:text-[64px] leading-[140%] font-bold bg-gradient-to-r from-[#EF172E] via-[#EF172E] to-[#3D0C11] text-transparent bg-clip-text text-border">{{guests?.seminar?.title}}</h2>
          </div>
          <div ref="targetElement" class="md:pt-20 pt-4 flex flex-col">
            <h3 class="text-[20px] font-bold">{{ guests?.gender == 'آقا' ? 'جناب آقای' : 'سرکار خانم' }} {{ guests.name
              }} عزیز</h3>
            <p class="md:text-[20px] md:pt-6 pt-3" v-html="guests?.seminar?.question"></p>
            <button @click="guestsReady" 
              :class="guests?.is_ready ? 'bg-[#FF9EA8] cursor-not-allowed' : 'bg-primary cursor-pointer'"
              class="self-end text-white md:w-32 w-24 md:h-14 h-7 text-[14px] md:text-base font-semibold rounded-[8px] mt-3 md:mt-14">بله</button>
          </div>
          <div v-if="guests?.is_ready"
            class="pt-11 flex flex-col md:flex-row max-md:items-center gap-14 justify-between">
            <span class="text-[20px]" v-html="guests?.seminar?.final_message"></span>
            <div class="border h-fit p-5 w-fit border-primary rounded-[8px]">
              <qrcode-vue :value="qrValue" :size="qrSize" level="M" />
            </div>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<script setup>
import { useLoadingState } from "@/store/loadingState";
import axios from "axios";
import QrcodeVue from 'qrcode.vue';
const loadingState = useLoadingState();
const route = useRoute();

const guests = ref([]);
const qrSize = ref(210);
const qrValue = ref('');
const targetElement = ref(null);

const scrollToBottom = () => {
  if (window.innerWidth < 768) {
    setTimeout(() => {
      targetElement.value?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  }
};

const getGuests = async () => {
  loadingState.setLoading(false);
  await axios.get(
    `/guests/${route.params.id}`
  )
    .then(response => {
      guests.value = response.data.data
      qrValue.value = guests.value.seminar.qr_message
      loadingState.setLoading(false);
    }).catch(err => {
      console.log(err);
    })
};

const guestsReady = () => {
  axios.post(`/guests/${route.params.id}/ready`)
    .then(response => {
      getGuests()
    }).catch(err => {
      console.log(err);

    })
}

onMounted(() => {
  getGuests();
  scrollToBottom();
});

watch(
  () => guests.value.is_ready,
  (newVal) => {
    if (newVal) {
      scrollToBottom();
    }
  },
  { immediate: true }
);
</script>

<style scoped></style>
