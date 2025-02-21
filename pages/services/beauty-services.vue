<script setup lang="ts">
const firstSectionData = ref({
  title: "خدمات زیبایی در",
  description: `کلینیک زیبایی و لاغری تن‌ساز، همراه همیشگی شما برای رسیدن به زیبایی و اندام ایده‌آل، مفتخر است به‌عنوان مجهزترین و تخصصی‌ترین کلینیک زیبایی و لاغری در جنوب کشور، در کنار شما باشد.
با بهره‌گیری از پیشرفته‌ترین دستگاه‌های روز دنیا و تیمی از پزشکان مجرب و متخصص، کلینیک تن‌ساز تجربه‌ای بی‌نظیر از خدمات زیبایی، جوان‌سازی و تناسب اندام را به شما اراِئه خواهد داد.`,
});

const bannerData = ref({
  title: '" خدمات زیبایی در تن ساز "',
  cards: [
    { id: 0, text: "جراحی ها", icon: "/icons/laghari.png", route: '/services/surgery' },
    { id: 1, text: "تزریقات زیبایی", icon: "/icons/cafe.png", route: '/services/beauty-injections' },
    { id: 2, text: "دستگاه ها", icon: "/icons/Equipment.png", route: '/' },
    { id: 3, text: "بوتاکس", icon: "/icons/Dispatch-doctor.png", route: '/services/botox' },
  ],
});

const slides = ref([
  {
    id: 0,
    image: "/images/exmple1.png",
  },
  {
    id: 1,
    image: "/images/exmple2.png",
  },
  {
    id: 2,
    image: "/images/exmple3.png",
  },
  {
    id: 3,
    image: "/images/exmple4.png",
  },
  {
    id: 4,
    image: "/images/exmple5.png",
  },
  {
    id: 5,
    image: "/images/exmple6.png",
  },
  {
    id: 6,
    image: "/images/exmple7.png",
  },
  {
    id: 7,
    image: "/images/exmple8.png",
  },
  {
    id: 8,
    image: "/images/exmple9.png",
  },
  {
    id: 9,
    image: "/images/exmple10.png",
  },
  {
    id: 10,
    image: "/images/exmple11.jpg",
  },
  {
    id: 11,
    image: "/images/exmple12.png",
  },
]);

const cards = ref([
  {
    id: 0,
    text: "تخصص و تجربه‌ای بی‌نظیر در ارائه خدمات پزشکی و زیبایی",
  },
  {
    id: 1,
    text: "استفاده از جدیدترین تکنولوژی‌ها و تجهیزات پیشرفته",
  },
  {
    id: 2,
    text: "تیم حرفه‌ای و متخصص در تمامی زمینه‌های درمانی",
  },
  {
    id: 3,
    text: "ارائه مشاوره‌های شخصی‌سازی شده برای هر بیمار",
  },
  {
    id: 4,
    text: "محیطی آرام، مدرن و بهداشتی برای راحتی شما",
  },
  {
    id: 5,
    text: "رضایت بیماران و نتایج موفقیت‌آمیز، تضمین کیفیت",
  },
]);
</script>

<template>
  <div>
    <PagesFirstSection :firstSectionData="firstSectionData" />
    <PagesBannerSection :bannerData="bannerData"/>
    <div class="mt-[75px] max-w-[1200px] mx-auto px-3">
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
    <SliderBeforAfterExample
      :slides="slides"
      title="نمونه های قبل و بعد"
      description="با اطمینانی کامل، زیبایی خود را با ما دو چندان کنید"
    />
    <ReservationAndContactUsBanner />
    <div
      class="text-dark flex flex-col gap-3.5 mt-[75px] max-w-[1200px] mx-auto px-3"
    >
      <p class="text-[21px] font-light leading-10">
        کلینیک زیبای لاغری تن ساز، به عنوان یکی از مجهزترین کلینیک‌های جنوب
        کشور، دارای مزیت‌های رقابتی متعددی است که می‌تواند آن را از سایر مراکز
        مشابه متمایز کند. این مزیت‌ها عبارتند از:
      </p>
      <h3 class="text-[28px] font-extrabold leading-8">
        1. تجهیزات پیشرفته و به‌روز
      </h3>
      <p class="text-[21px] font-light leading-10">
        کلینیک تن ساز با استفاده از دستگاه‌ها و فناوری‌های روز دنیا، خدماتی با
        کیفیت بالا و مطابق با استانداردهای بین‌المللی ارائه می‌دهد. استفاده از
        تجهیزات پیشرفته در درمان‌های لاغری و زیبایی باعث می‌شود که نتایج درمانی
        سریع‌تر و مؤثرتر باشند.
      </p>
      <h3 class="text-[28px] font-extrabold leading-8">
        2. تحت نظارت پزشکان متخصص و مجرب
      </h3>
      <p class="text-[21px] font-light leading-10">
        کلینیک تن ساز تحت نظر پزشکان متخصص و مجرب در زمینه لاغری و زیبایی فعالیت
        می‌کند. این پزشکان علاوه بر تجربه و دانش عمیق، به آخرین دستاوردهای علمی
        در این زمینه‌ها آگاه هستند و به‌طور مداوم در حال بروزرسانی مهارت‌های خود
        می‌باشند.
      </p>
      <h3 class="text-[28px] font-extrabold leading-8">
        3. روش‌های متنوع و شخصی‌سازی شده
      </h3>
      <p class="text-[21px] font-light leading-10">
        در این کلینیک، به هر بیمار بر اساس نیازها و شرایط خاص خود، درمان‌های
        متناسب و شخصی‌سازی شده ارائه می‌شود. این امر سبب می‌شود که نتایج درمانی
        دقیق‌تر و مطلوب‌تر باشد.
      </p>
      <h3 class="text-[28px] font-extrabold leading-8">
        4. توجه به سلامتی و ایمنی بیمار
      </h3>
      <p class="text-[21px] font-light leading-10">
        سلامت و ایمنی بیماران در این کلینیک اولویت اول است. تمام مراحل درمان با
        رعایت اصول ایمنی و بهداشتی انجام می‌شود و از بهترین مواد و داروها
        استفاده می‌شود.
      </p>
      <h3 class="text-[28px] font-extrabold leading-8">
        5. تیم پشتیبانی حرفه‌ای و مشاوره قبل و بعد از درمان
      </h3>
      <p class="text-[21px] font-light leading-10">
        پس از هر جلسه درمانی یا تغییر در رژیم غذایی، تیم پشتیبانی کلینیک در کنار
        بیماران بوده و از آنها مراقبت می‌کند. همچنین مشاوره‌های قبل از درمان به
        بیمار کمک می‌کند تا بهترین گزینه‌ها را انتخاب کند.
      </p>
      <h3 class="text-[28px] font-extrabold leading-8">
        6. فضای آرام و دلپذیر
      </h3>
      <p class="text-[21px] font-light leading-10">
        محیط کلینیک به گونه‌ای طراحی شده است که بیماران در آن احساس آرامش و
        راحتی کنند. فضای دلنشین و بهداشتی باعث می‌شود تا افراد در طول دوره درمان
        احساس راحتی بیشتری داشته باشند.
      </p>
      <h3 class="text-[28px] font-extrabold leading-8">
        7. نتایج قابل مشاهده و پایدار
      </h3>
      <p class="text-[21px] font-light leading-10">
        یکی از ویژگی‌های برجسته کلینیک تن ساز، داشتن نتایج قابل مشاهده و پایدار
        است. این کلینیک به جای وعده‌های غیرواقعی، بر ارائه نتایج طولانی‌مدت
        تأکید دارد و تلاش می‌کند که بیماران پس از اتمام دوره درمان، از نتایج آن
        بهره‌مند شوند.
      </p>
      <h3 class="text-[28px] font-extrabold leading-8">
        8. موقعیت جغرافیایی مناسب
      </h3>
      <p class="text-[21px] font-light leading-10">
        کلینیک زیبای لاغری تن ساز در جنوب کشور واقع شده است و این موقعیت
        جغرافیایی دسترسی آسان برای افراد در این منطقه و همچنین سایر نقاط کشور را
        فراهم می‌آورد.
      </p>
      <h3 class="text-[28px] font-extrabold leading-8">
        9. خدمات مشاوره آنلاین
      </h3>
      <p class="text-[21px] font-light leading-10">
        کلینیک تن ساز علاوه بر خدمات حضوری، خدمات مشاوره آنلاین نیز ارائه
        می‌دهد، که به افراد این امکان را می‌دهد که از راه دور نیز با پزشکان
        متخصص مشورت کنند.
      </p>
    </div>
    <WhyTansaz title="چرا زیبایی و لاغری در کلینیک تن ساز" :cards="cards" />
    <div
      class="text-dark flex flex-col gap-3.5 mt-[75px] max-w-[1200px] mx-auto px-3"
    >
      <p class="text-[21px] font-light leading-10">
        اگر به دنبال یک کلینیک مجهز برای انجام خدمات زیبایی و جوانسازی هستید ،
        کلینیک تن ساز می‌تواند بهترین انتخاب برای شما باشد. این کلینیک با
        بهره‌گیری از تخصص پزشکان ماهر و استفاده از با کیفیت‌ترین دستگاه های روز
        دنیا ، نتایج مطلوبی را برای شما به ارمغان خواهد آورد.
      </p>
      <p class="text-[21px] font-light leading-10">
        با مراجعه به کلینیک تن ساز و مشاوره با دکتر سروش باقری، شما می‌توانید از
        تجربه‌ای منحصر به فرد در زمینه جوانسازی پوست و لیفت صورت بهره‌مند شوید و
        به اعتماد به نفس بیشتری دست یابید.
      </p>
    </div>
    <ReservationForm />
    <FaqSection />
    <YoursSatisfaction />
    <HomeBlogsSection />
  </div>
</template>

<style scoped></style>
