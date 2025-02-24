<script setup lang="ts">
const banner = reactive({
  title: '" خدمات کلینیک تن ساز "',
  cards: [
    {
      id: 0,
      title: "تزریق مزوژل جوانساز",
      description:
        "زیبایی مفهومی پیچیده و چندوجهی است که شامل جنبه‌های ظاهری، اخلاقی، و حتی معنوی می‌شود. از دیرباز زیبایی به‌عنوان یک ویژگی ارزشمند در جوامع مختلف شناخته شده است. با این حال، تعریف زیبایی می‌تواند از فردی به فرد دیگر و از فرهنگی به فرهنگ دیگر متفاوت باشد. به‌طور سنتی، زیبایی اغلب به ویژگی‌های فیزیکی مانند صورت متقارن، پوست صاف، و اندامی متناسب نسبت داده می‌شود.",
      icon: "/icons/laghari.png",
      route: "/services/1",
    },
    {
      id: 1,
      title: "ژل و فیلر",
      description:
        "زیبایی مفهومی پیچیده و چندوجهی است که شامل جنبه‌های ظاهری، اخلاقی، و حتی معنوی می‌شود. از دیرباز زیبایی به‌عنوان یک ویژگی ارزشمند در جوامع مختلف شناخته شده است. با این حال، تعریف زیبایی می‌تواند از فردی به فرد دیگر و از فرهنگی به فرهنگ دیگر متفاوت باشد. به‌طور سنتی، زیبایی اغلب به ویژگی‌های فیزیکی مانند صورت متقارن، پوست صاف، و اندامی متناسب نسبت داده می‌شود.",
      icon: "/icons/cafe.png",
      route: "/services/1",
    },
    {
      id: 2,
      title: "مزوتراپی صورت",
      description:
        "کلینیک زیبایی و لاغری تن‌ساز، همراه همیشگی شما برای رسیدن به زیبایی و اندام ایده‌آل، مفتخر است به‌عنوان مجهزترین و تخصصی‌ترین کلینیک زیبایی و لاغری در جنوب کشور، در کنار شما باشد. با بهره‌گیری از پیشرفته‌ترین دستگاه‌های روز دنیا و تیمی از پزشکان مجرب و متخصص، کلینیک تن‌ساز تجربه‌ای بی‌نظیر از خدمات زیبایی، جوان‌سازی و تناسب اندام را به شما اراِئه خواهد داد.",
      icon: "/icons/Equipment.png",
      route: "/services/1",
    },
    {
      id: 3,
      title: "PRP مو و صورت",
      description:
        "زیبایی مفهومی پیچیده و چندوجهی است که شامل جنبه‌های ظاهری، اخلاقی، و حتی معنوی می‌شود. از دیرباز زیبایی به‌عنوان یک ویژگی ارزشمند در جوامع مختلف شناخته شده است. با این حال، تعریف زیبایی می‌تواند از فردی به فرد دیگر و از فرهنگی به فرهنگ دیگر متفاوت باشد. به‌طور سنتی، زیبایی اغلب به ویژگی‌های فیزیکی مانند صورت متقارن، پوست صاف، و اندامی متناسب نسبت داده می‌شود.",
      icon: "/icons/Dispatch-doctor.png",
      route: "/services/1",
    },
  ],
});
</script>

<template>
  <div class="bg-background-input">
    <div class="mt-[75px] max-w-[1200px] mx-auto px-3">
      <div class="py-20 px-8">
        <h2 class="md:text-3xl text-xl font-semibold text-center mb-16">
          {{ banner.title }}
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink
            v-for="card in banner.cards"
            to="card.route"
            :key="card.id"
            class="bg-white  p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <img class="w-12 h-12 mb-6" :src="card.icon" :alt="card.title" />
            <h3 class="md:text-2xl text-lg font-medium mb-4">
              {{ card.title }}
            </h3>
            <p class="text-gray-600 md:text-base text-sm">
                {{ card.description && card.description.length > 150 ? card.description.substring(0, 150) + '...' : card.description }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>