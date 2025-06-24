<template>
  <div class="bg-[#EFEFEF] p-4 py-[30px] w-full">
    <img v-if="$route.path === '/'" class="object-cover pb-[30px]" src="/images/Faq-Banner.png" alt="Faq-Banner" />
    <!-- Header -->
    <header class="mb-8">
      <h1 class="text-xl font-bold"><span class="text-brand">پرسش</span> های متداول</h1>
    </header>

    <!-- FAQ Section -->
    <section class="space-y-4">
      <!-- FAQ Items -->
      <HomeFaqItem v-for="(faq, index) in faqs" :key="index" :question="faq.question" :answer="faq.answer" />
    </section>

    <!-- Button to navigate to FAQ Category Page -->
    <button class="mt-8 w-full bg-brand text-center rounded-full h-[48px]">
      <NuxtLink to="#" class="bg-brand text-white font-semibold leading-[26px] rounded-full w-full">صفحه دسته بندی پرسش
        های متداول</NuxtLink>
    </button>
  </div>
</template>

<script setup>
// Mock Data for FAQs
const faqs = [
  {
    question: "سوال مورد نظر انجا قرار میگیرد؟",
    answer:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    question: "سوال مورد نظر انجا قرار میگیرد؟",
    answer:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    question: "سوال مورد نظر انجا قرار میگیرد؟",
    answer:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    question: "سوال مورد نظر انجا قرار میگیرد؟",
    answer:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    question: "سوال مورد نظر انجا قرار میگیرد؟",
    answer:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
];
</script>

<style scoped>
/* Custom styles if needed */
</style>