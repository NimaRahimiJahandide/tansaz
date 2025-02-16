<script setup lang="ts">
interface Card {
  id: number;
  text: string;
  icon: string;
}

let cards = ref<Card[]>([
  { id: 0, text: "جراحی ها", icon: "/icons/laghari.png" },
  { id: 1, text: "تزریقات زیبایی", icon: "/icons/cafe.png" },
  { id: 2, text: "دستگاه ها", icon: "/icons/Equipment.png" },
  { id: 3, text: "بوتاکس", icon: "/icons/Dispatch-doctor.png" },
]);
</script>

<template>
  <div class="mt-[85px] text-dark">
    <div>
      <div class="bg-primary h-[222px] relative -z-10">
        <h2
          class="text-white whitespace-nowrap overflow-hidden absolute md:text-[28px] text-[24px] font-semibold text-center left-1/2 transform -translate-x-1/2 mt-[25px]"
        >
          " خدمات زیبایی در تن ساز "
        </h2>
        <img
          class="h-[222px] object-cover w-full"
          src="/images/pattern.png"
          alt="pattern"
        />
      </div>
      <div class="max-w-[1200px] mx-auto px-3">
        <div
          class="flex lg:justify-between flex-wrap justify-center lg:-mt-32 gap-5 -mt-10 z-10"
        >
          <HomeCardServicesSection
            v-for="card in cards"
            :key="card.id"
            :card="card"
          />
        </div>

        <div class="flex items-center md:flex-row flex-col gap-[20px] mt-[75px]">
          <div>
            <h3 class="text-primary text-[30px]">دستگاه هایفو دابلو گلد پریمیوم 2024</h3>
            <div class="p-6 rounded-lg">
              <h4 class="text-[28px] font-bold mb-4">مکانیسم اثر دستگاه هلیفو دابلوگلد بریمیوم؛ کلائن سازی و بازسازی بوسنت</h4>
              <ul class="list-disc list-inside space-y-2 mr-4">
                <li>تحریک فیدرو پلاست ها به ساخت کلائن در ردم رتیکوئار</li>
                <li>بازسازی و SMS کلائن ها در ردم رتیکوئار</li>
                <li>ایجاد Shermal Coagulation Zone در الیه SMAS</li>
                <li>کاهش فوری و دائمی مساحت الیه SMAS</li>
                <li>افزایش دما در اطراف نقاط حرارتی ایجاد شده باعث به راه اقتادن بوسنه ساخت و بازسازی کلائن در الیه SMAS و افزایش االستیسیته این الیه می شود.</li>
              </ul>
            </div>
          </div>
          <div>
            <img src="/images/exmple1.png" alt="example1">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
