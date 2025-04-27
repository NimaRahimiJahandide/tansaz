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
  <div class="py-10 container px-5 mx-auto">
    <div>
      <div class="flex flex-col">
        <h3 class="md:text-[40px] text-3xl font-bold md:mb-12 mb-8">سوالات پر تکرار</h3>
      </div>
      <div class="mx-auto space-y-6 max-w-[1240px]">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="container rounded-lg transition-all duration-500"
        >
          <div
            class="question border-[.5px] border-[rgba(153,153,153,.3)] transition-all duration-500 flex items-center justify-between p-4 cursor-pointer"
            :class="activeIndex === index ? 'rounded-t-[16px]' : 'rounded-[16px]'"
            @click="toggleAnswer(index)"
          >
            <span class="text-lg font-semibold line-clamp-1 lg:line-clamp-none">{{ item.question }}</span>
            
            <span
              class="icon text-2xl transition-transform duration-500"
            >
            <Icon v-if="activeIndex === index" name="fe:arrow-down" size="24" style="color: #000" />
            <Icon v-else name="fe:arrow-up" size="24" style="color: #000" />
            </span>
          </div>
          <div
            class="answercont mt-1 bg-gray-100 overflow-hidden rounded-b-lg transition-max-h duration-500"
            :style="{ maxHeight: activeIndex === index ? '50vh' : '0px' }"
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

.icon.rotate-45 {
  transform: rotate(45deg);
}
</style>