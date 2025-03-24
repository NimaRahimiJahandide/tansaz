<script lang="ts" setup>
import axios from 'axios'
const router = useRouter()

interface FaqItem {
  id: Number,
  question: string;
  answer: string;
}

const faqItems = ref<FaqItem[]>([]);

let isResponseOk = ref(false);
let loading = ref(true);

const getFaq = async () => {
  loading.value = true;
  isResponseOk.value = false;
  await axios
    .get("/faqs")
    .then((response) => {
      if (response.status == 200) {
        isResponseOk.value = true;
      }
      faqItems.value = response.data.data      
      loading.value = false;
    })
    .catch((error) => {
      console.error("مشکلی در نمایش سوالات متداول پیش آمده!");
    });
};

await getFaq();

const activeIndex = ref<number | null>(null);

const toggleAnswer = (index: number): void => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <div class="bg-gray-100 py-10 px-4 mt-[70px]">
    <div class="max-w-[1200px] mx-auto px-5 w-full">
      <div class="flex items-center flex-col ">
        <h3 class="text-3xl font-bold text-center mb-8">سوالات <span class="text-primary">متداول</span> شما از تن ساز</h3>
        <p class="text-gray-600 max-w-2xl  mb-[14px] leading-relaxed text-justify">
          کلینیک زیبایی و لاغری تن ساز از سال 1401 با هدف ارائه کامل ترین و به
          روزترین خدمات پزشکی زیبایی و تناسب اندام در شهر شیراز با شعار تندرستی،
          سلامتی و زیبایی تاسیس گردید.
        </p>
      </div>
      <div class="mx-auto space-y-6">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="container bg-primary text-white rounded-lg shadow-md transition-all duration-500"
        >
          <div
            class="question flex items-center justify-between p-4 cursor-pointer"
            @click="toggleAnswer(index)"
          >
            <span class="text-lg font-semibold line-clamp-1 lg:line-clamp-none">{{ item.question }}</span>
            <span
              class="icon text-2xl transition-transform duration-500"
              :class="{ 'rotate-45': activeIndex === index }"
            >
              +
            </span>
          </div>
          <div
            class="answercont text-white overflow-hidden rounded-b-2xl transition-max-h duration-500"
            :style="{ maxHeight: activeIndex === index ? '50vh' : '0px' }"
            :class="activeIndex === index ? ' border-t' : ''"
          >
            <div class="answer p-4">
              <p v-html="item.answer"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.container {
  border-radius: 0.5rem;
}
.question:hover {
  border-radius: 0.5rem;
  background-color: #C50E21;
}
.icon.rotate-45 {
  transform: rotate(45deg);
}
</style>