<script setup lang="ts">
const firstSectionData = ref({
  title: "خدمات هایفوتراپی در",
  description: `هایفو تراپی یکی از جدیدترین و موثرترین روش‌ها برای لیفت صورت و جوانسازی پوست است که در کلینیک زیبایی تن ساز، معتبرترین و مجهزترین مرکز زیبایی در جنوب کشور، به بهترین شکل انجام می‌شود. این روش غیرجراحی، با استفاده از امواج اولتراسونیک، به لایه‌های عمیق پوست نفوذ کرده و موجب تحریک کلاژن‌سازی می‌شود. نتیجه این درمان، لیفتینگ طبیعی، سفت‌تر شدن پوست و کاهش چین و چروک‌هاست.`,
});

const bannerData = ref({
  title: '" هایفوتراپی "',
  cards: [
    {
      id: 0,
      text: "آنالیز کامل بدن",
      icon: "/icons/laghari.png",
    },
    {
      id: 1,
      text: "دستگاه CM SLIM",
      icon: "/icons/cafe.png",
    },
    { id: 2, text: "صندلی HIPEX", icon: "/icons/Equipment.png" },
    {
      id: 3,
      text: "دستگاه لاغری و تناسب اندام",
      icon: "/icons/Dispatch-doctor.png",
    },
  ],
});

const slides = ref([
  {
    id: 0,
    image: "/images/lab1.jpg",
  },
  {
    id: 1,
    image: "/images/lab2.jpg",
  },
  {
    id: 2,
    image: "/images/lab3.jpg",
  },
  {
    id: 3,
    image: "/images/lab4.jpg",
  },
]);

const cards = ref([
  {
    id: 0,
    text: "تجهیزات پیشرفته و به‌روز",
  },
  {
    id: 1,
    text: "تحت نظارت پزشکان متخصص و مجرب",
  },
  {
    id: 2,
    text: "روش‌های متنوع و شخصی‌سازی شده",
  },
  {
    id: 3,
    text: "توجه به سلامتی و ایمنی بیمار",
  },
  {
    id: 4,
    text: "تیم پشتیبانی حرفه‌ای و مشاوره قبل و بعد از درمان",
  },
  {
    id: 5,
    text: "نتایج قابل مشاهده و پایدار",
  },
]);
</script>

<template>
  <div>
    <PagesFirstSection :firstSectionData="firstSectionData" />
    <PagesBannerSection :bannerData="bannerData" />
    <div class="mt-[75px] max-w-[1200px] mx-auto px-3">
      <div class="flex items-center md:flex-row flex-col gap-[20px] mt-[75px]">
        <div>
          <h3 class="text-primary text-[30px]">
            دستگاه هایفو دابلو گلد پریمیوم 2024
          </h3>
          <div class="p-6 rounded-lg">
            <ul class="list-disc list-inside space-y-2 mr-4">
              <li>
                جدیدترین و تنها دستگاه استاندارد دارای تکنولوژی Mfu،دستگاه هایفو
                دابلو گلد پریمیوم2023 فقط در کلینیک تن ساز
              </li>
              <li>لیفت کامل صورت،گردن و نواحی مختلف بدن</li>
              <li>کاهش عمق خط لبخند و چین و چروک ها</li>
              <li>رفع غبغب و درمان افتادگی پوست</li>
              <li>
                لیفت شقیقه و ابروها و پیشانی،گونه هاو قسمت میانی و تحتانی صورت
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img src="/images/exmple1.png" alt="example1" />
        </div>
      </div>
    </div>
    <SliderBeforAfterExample
      :slides="slides"
      title="نمونه های قبل و بعد"
      description="با اطمینانی کامل، زیبایی خود را با ما دو چندان کنید"
    />
    <ReservationAndContactUsBanner />
    <div
      class="text-dark flex flex-col gap-3.5 mt-[75px] max-w-[1200px] mx-auto px-3"
    >
      <p class="text-[21px] text-justify font-light leading-10">
        هایفو تراپی یکی از جدیدترین و موثرترین روش‌ها برای لیفت صورت و جوانسازی
        پوست است که در کلینیک زیبایی تن ساز، معتبرترین و مجهزترین مرکز زیبایی در
        جنوب کشور، به بهترین شکل انجام می‌شود. این روش غیرجراحی، با استفاده از
        امواج اولتراسونیک، به لایه‌های عمیق پوست نفوذ کرده و موجب تحریک
        کلاژن‌سازی می‌شود. نتیجه این درمان، لیفتینگ طبیعی، سفت‌تر شدن پوست و
        کاهش چین و چروک‌هاست.
      </p>
      <p class="text-[21px] text-justify font-light leading-10">
        اگر به دنبال یک راهکار موثر و بدون درد برای جوانسازی پوست صورت خود
        هستید، هایفو تراپی در کلینیک تن ساز انتخابی بی‌نظیر است. این درمان نه
        تنها به شما ظاهری شاداب و جوان می‌بخشد، بلکه با کمترین زمان و بدون نیاز
        به دوره نقاهت، به نتایج فوق‌العاده‌ای دست خواهید یافت. تیم متخصص و مجرب
        ما در کلینیک تن ساز به شما کمک می‌کنند تا بهترین نتیجه را از هایفو تراپی
        بگیرید و اعتماد به نفس خود را بازیابی کنید.
      </p>
      <p class="text-[21px] text-justify font-light leading-10">
        برای مشاوره و تعیین وقت درمان، همین حالا با ما تماس بگیرید!
      </p>
    </div>
    <WhyTansaz title="چرا زیبایی و لاغری در کلینیک تن ساز" :cards="cards" />
    <div
      class="text-dark flex flex-col gap-3.5 mt-[75px] max-w-[1200px] mx-auto px-3"
    >
      <p class="text-[21px] text-justify font-light leading-10">
        دستگاه دابلوگلد پریمیوم (God Premium)، نسل جدید سیستم‌های هایفو، مجهز به
        تکنولوژی mfuاست. تکنولوژی mfu به امواج ماورای صوت با شدت بالاتر از 5 وات
        بر سانتی‌متر مربع گفته می‌شود. این امواج به‌صورت کاملاً متمرکز و در یک
        عمق مشخص و قابل پیش‌بینی و کانونی‌شده، توانایی نفوذ به عمق دلخواه در
        بدن، بدون آسیب به بافت‌های موجود در مسیر را دارد.
      </p>
      <p class="text-[21px] text-justify font-light leading-10">
        این ویژگی منحصر به‌ فرد در هایفو دابلو گلد پریمیوم (Gold Premium) باعث
        شده دستیابی به لایه SMAS بدون نیاز به جراحی قابل انجام باشد. به واسطه
        کاهش مساحت این لایه و افزایش قوام آن، همراه با تحریک فرآیند جوان‌سازی در
        درم، دستگاه هایفو دابلو گلد را به یکی از بهترین محصولات تبدل کرده است.
      </p>
      <h3 class="text-[28px] font-extrabold leading-8">مکانیسم اثر دستگاه هایفو دابلو گلد پریمیوم؛ کلاژن سازی و بازسازی پوست</h3>
      <ul class="list-disc list-inside text-justify text-[18px] font-light leading-10">
        <li>تحریک فیبرو بلاست‌ها به ساخت کلاژن در درم رتیکولار</li>
        <li>بازسازی و Remodeling کلاژن‌ها در درم رتیکولار</li>
        <li>ایجاد Thermal Coagulation Zone در لایه SMAS</li>
        <li>کاهش فوری و دائمی مساحت لایه SMAS</li>
        <li>افزایش دما در اطراف نقاط حرارتی ایجاد شده باعث به راه افتادن پروسه ساخت و بازسازی کلاژن در لایه SMAS و افزایش الاستیسیته این لایه می‌شود.</li>
      </ul>
    </div>
    <ReservationForm />
    <FaqSection />
    <YoursSatisfaction />
    <HomeBlogsSection />
  </div>
</template>

<style scoped></style>
