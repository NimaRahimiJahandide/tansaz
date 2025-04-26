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
  <div class="py-10">
    <div>
      <div class="flex flex-col">
        <h3 class="text-3xl font-bold mb-8">سوالات پر تکرار</h3>
      </div>
      <div class="mx-auto space-y-6">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="container rounded-lg shadow-md transition-all duration-500"
        >
          <div
            class="question flex items-center justify-between p-4 cursor-pointer"
            @click="toggleAnswer(index)"
          >
            <span class="text-lg font-semibold line-clamp-1 lg:line-clamp-none">{{ item.question }}</span>
            
            <span
              class="icon text-2xl transition-transform duration-500"
              :class="{ 'rotate-[180deg]': activeIndex === index }"
            >
            <Icon name="fe:arrow-down" size="24" style="color: #000" />
            </span>
          </div>
          <div
            class="answercont bg-gray-100 overflow-hidden rounded-b-lg transition-max-h duration-500"
            :style="{ maxHeight: activeIndex === index ? '50vh' : '0px' }"
            :class="activeIndex === index ? ' border-t border-t-gray-200' : ''"
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
}
.icon.rotate-45 {
  transform: rotate(45deg);
}
</style>