<script setup lang="ts">
import { ref } from "vue";

// تعریف نوع داده برای سوالات FAQ
interface FaqItem {
  question: string;
  answer: string;
}

// داده‌های FAQ
const faqItems = ref<FaqItem[]>([
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
]);

const activeIndex = ref<number | null>(null);

const toggleItem = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <div class="max-w-[1200px] mx-auto px-3 mt-[75px]">
    <!-- start FAQ -->
    <div
      class="flex md:flex-row flex-col w-full justify-between items-start gap-20"
    >
      <div
        class="md:w-1/2 flex flex-col justify-center my-auto text-right space-y-4"
      >
        <h2 class="text-2xl font-bold">
          <span class="text-primary">سوالات متداول</span> شما از تن ساز
        </h2>
        <p class="text-gray-600 leading-relaxed text-justify">
          کلینیک زیبایی و لاغری تن ساز از سال 1401 با هدف ارائه کامل ترین و به
          روزترین خدمات پزشکی زیبایی و تناسب اندام در شهر شیراز با شعار تندرستی،
          سلامتی و زیبایی تاسیس گردید.
        </p>
        <button
          class="bg-primary w-fit text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
        >
          خواندن سوالات
        </button>
      </div>
      <div class="md:w-1/2 w-full space-y-4">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="rounded-lg transition"
        >
          <div
            class="flex items-center bg-primary rounded-lg gap-2.5 p-4 font-medium cursor-pointer text-white"
            @click="toggleItem(index)"
          >
            <Icon
              v-if="activeIndex === index"
              name="ic:baseline-minus"
              size="17px"
              style="color: #fff"
            />
            <Icon
              v-else
              name="ic:baseline-plus"
              size="17px"
              style="color: #fff"
            />
            <span>{{ item.question }}</span>
          </div>
          <div
            v-if="activeIndex === index"
            class="p-4 text-right leading-8 transition-all duration-500 ease-in-out"
            :class="{
              'max-h-0 overflow-hidden': activeIndex !== index,
              'max-h-[1000px]': activeIndex === index,
            }"
          >
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
    <!-- end FAQ -->

    <div class="text-white bg-primary w-full flex md:flex-row flex-col text-center items-center justify-center gap-5 bg-[url(/images/pattern.png)] mt-[75px] rounded-3xl py-10">
      <p class="md:text-[40px] text-[25px] leading-10">همیـن الان شانستـو امتحـان کـن (همین حالا جایزتو بگیر)</p>
      <NuxtLink to="#" class="px-[15px] whitespace-nowrap flex items-center py-2 bg-dark rounded-3xl">کلیک کن</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.transition-all {
  transition: all 0.5s ease-in-out;
}
</style>
