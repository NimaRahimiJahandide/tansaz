
<script lang="ts" setup>
interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "چرا کلینیک تن ساز؟",
    answer:
      "زیرا کلینیک تن ساز مجموعه‌ای با تجهیزات و تکنولوژی روز دنیا و مطابق با استانداردهای بین‌المللی مانند FDA و مواد مصرفی مورد تایید اداره کل تجهیزات پزشکی و وزارت بهداشت و درمان و زیر نظر پزشکان متخصص و دوره دیده بین المللی حوزه استتیک که دارای تجربه و مهارت بسیار بالا هستند می‌باشد.",
  },
  {
    question: "هزینه‌های مشاوره لاغری و زیبایی به چه صورت است؟",
    answer:
      "مشاوره لاغری و زیبایی در کلینیک تن ساز به صورت رایگان انجام میشود.",
  },
  {
    question: "کلینیک تن ساز در چه زمینه‌هایی فعالیت دارد؟",
    answer:
      "کلیه‌ی خدمات مرتبط با جوانسازی و زیبایی پوست و بدن، رژیم غذایی و لاغری صورت و بدن، درمان ریزش موی سر و موی ابرو، لیزر موهای زائد و سایر خدمات مرتبط با لیزر مانند پاک کردن تتو و خالکوبی صورت و بدن، در مجموعه تن ساز انجام می‌شود.",
  },
  {
    question: "ساعت کاری کلینیک‌های تن ساز به چه صورت است؟",
    answer:
      "کلینیک تن ساز شنبه تا چهارشنبه ساعت 9 صبح الی 21 و روزهای پنج شنبه 9 الی 13 آماده خدمات رسانی شما عزیزان می‌باشد.",
  },
];

const activeIndex = ref<number | null>(null);

const toggleAnswer = (index: number): void => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <div class="bg-gray-100 py-10 px-4 mt-[70px]">
    <div class="max-w-[1200px] mx-auto px-5 w-full">
      <div class="flex items-center flex-col ">
        <h3 class="sm:text-3xl text-2xl font-bold text-center mb-8">سوالات <span class="text-primary">متداول</span> شما از تن ساز</h3>
        <p class="text-gray-600 max-w-2xl  mb-[14px] sm:text-base text-sm leading-relaxed text-justify">
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
            <span class="sm:text-lg text-base line-clamp-1 lg:line-clamp-none font-semibold">{{ item.question }}</span>
            <span
              class="icon text-2xl transition-transform duration-500"
              :class="{ 'rotate-45': activeIndex === index }"
            >
              +
            </span>
          </div>
          <div
            class="answercont text-white overflow-hidden rounded-b-2xl transition-max-h duration-500"
            :style="{ maxHeight: activeIndex === index ? '500px' : '0px' }"
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