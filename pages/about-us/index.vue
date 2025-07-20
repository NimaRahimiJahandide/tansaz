<script setup>
import { AboutUsEventsSection } from "#components";
import { useStartWebsite } from "@/store/initWebsite";
const startWebsite = useStartWebsite();
const router = useRouter();
const selectedImage = ref(0);

const goBack = () => {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push("/");
  }
};
const gallery = [
  "/images/clinic3.jpg",
  "/images/clinic1.jpg",
  "/images/clinic1.jpg",
  "/images/clinic1.jpg",
  "/images/clinic1.jpg",
];

const whyTansaz = [
  {
    id: 0,
    title: "توجه و احترام به مراجعین",
    description: 'احترام به مراجعین و نیازهای آنها و توجه به کیفیت ارئه خدمات در بالاترین سطح استانداردهای بین المللی مهمترین اصل در همه فرایندهای جاری مجموعه تن ساز است .'
  },
  {
    id: 1,
    title: "آنالیز اختصاصی",
    description: 'قبل از هر اقدام تخصصی و درمانی آنالیز کامل با پیشرفته ترین نکنولوژی روزدنیا و معاینه دقیق توسط پزشکان مجموعه انجام می گردد تا بهترین پیشنهاد اختصاصی برای هر فرد متناسب با اویتهای و هزینههای درمانی و با بیشترین اثر بخشی و ماندگاری توصیه شود تا تجربه ای متفاوت از مشاوره تخصصی دلسوزانه و مسئولانه ارائه گردد .'
  },
  {
    id: 2,
    title: "پزشکان متخصص",
    description: 'پزشکان متخصص و فوق تخصص و با تجربه و عضو انجمن های پزشکی ایران و سایر کشورهای اروپایی و آمریکا دارای مدارک معتبر بین المللی دورههای پیشرفته تخصصی پزشکی استتیک با جدیدترین متدها و آشنا به پیشرفته ترین تکنولوژی های روز دنیا در صنعت پزشکی زیبایی و لیزر پزشکی و تناسب اندام .'
  },
  {
    id: 3,
    title: "دستگاه های مجهز",
    description: 'اولین و تنها مجموعه کامل مجهز به مرکز لیزر اسکلپیون آلمان در جنوب کشور'
  },
  {
    id: 4,
    title: "چربی سوضی موضعی استاندارد",
    description: 'مركز لاغری و تناسب اندام مجهز به تنها کویتیشن چربی سوز موضعی مورد تایید امریکا در دنیا شاک ویوتراپی سوئیسی گلد استاندارد درمانی سلولیت به تایید FDA با توان 7 تسلا ICM SLIM مریکا و شبیه ساز ورزشی FDA هر نیم ساعت معادل 20 هزار حرکت ورزشی .'
  },
  {
    id: 5,
    title: "محیط لوکس",
    description: 'محیطی لوکس حرفه ای و کاملا بهداشتی با توجه ویژه به حریم خصوصی و آرامش مراجعین محترم مجموعه تن ساز در تمام زمینه ها با استانداردهای بین المللی و تجربه ای متفاوت و خاص .'
  },
  {
    id: 6,
    title: "تخفیف و جایزه های متنوع",
    description: 'فراهم آوردن شرایط برخورداری مراجعین محترم از تخفیفات ویژه سیستم cash back و كيف پول باشگاه مشتریان با امکانات و امتیازات بسیار ویژه امکان پرداخت اقساطی هزینه های درمان و پروموشن های متنوع.'
  },
]

const doctors = [
  {
    id: 0,
    name: "دکتر شهلا فلاحی",
    specialty: "دکتری حرفه ای پزشکی (پوست، مو، زیبایی)",
    description: "بیش از 30 سال تجربه طبابت و تدریس و پژوهش در حوزه پزشکی زیبایی و مراقبت از پوست عضو انجمن علمی استتیک کانادا",
    image: "/images/doctor1.jpg",
    education: "فارغ التحصیل پزشکی شیراز",
    post: [
      "عضو انجمن علمی آموزشی پزشکی ایران",
    ],
    body: "دارای گواهینامه های رسمی دوره های تخصصی لیزر پزشکی و دیگر تکنولوژی های پزشکی زیبایی و تزریقات ژل و فیلر و بوتاکس از سازمان نظام پزشکی کشور عضو انجمن علمی پزشکی لیزر ایران",
  },
  {
    id: 1,
    name: "دکتر سروش باقری",
    specialty: "دکترای حرفه ای پزشکی ( پوست ، مو ، جراحی )",
    description: "بیش از 8 سال سابقه فعالیت در حوزه پزشکی زیبایی",
    image: "/images/doctor2.jpg",
    education: "فارغ التحصیل پزشکی شیراز",
    post: [
      "عضو انجمن علمی پزشکی لیزر ایران", 
      "عضو انجمن علمی آموزش پزشکی ایران", 
      "عضو انجمن علمی تغذیه ایران", 
    ],
    body: "دارای گواهینامههای متعدد پزشکی زیبایی معتبر بین المللی از کشورهای اروپایی و مذاکز معتبر علمی کشور",
  },
  {
    id: 2,
    name: "دکتر سبحانی",
    specialty: "دکترای حرفه ای پزشکی متخصص بیماریهای داخلی و فوق تخصص بیماری های روماتولوژی)",
    description: "بیش از 6 سال تجربه طبابت تخصصی و فوق تخصصی",
    image: "/images/doctor3.jpg",
    education: "فارغ التحصیل پزشکی شیراز",
    post: [
      "عضو انجمن روماتولوژی ایران", 
      "دارای بورد تخصصی", 
    ],
  },
]

onMounted(() => {
  startWebsite.setImageClicked(true);
});
</script>
<template>
  <div class="flex flex-col items-center bg-[#EFEFEF] pt-[84px]">
    <section class="flex items-center justify-between w-full px-[16px]">
      <header class="">
        <h1 class="text-xl font-bold">
          <span class="text-brand">ما</span> درباره
        </h1>
      </header>

      <img @click="goBack" src="/icons/left-arrow.svg" alt="" />
    </section>

    <section class="w-full flex flex-col items-center px-4">
      <!-- تصویر اصلی -->
      <div class="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden mt-5">
        <img v-for="(image, i) in gallery" :key="i" :src="image" alt=""
          class="absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-300"
          :class="i === selectedImage ? 'opacity-100 z-10' : 'opacity-0 z-0'" />
      </div>

      <!-- تصاویر کوچک -->
      <div class="flex items-center h-24 gap-4 w-full overflow-x-auto justify-center">
        <img v-for="(image, i) in gallery" :key="i" :src="image" alt=""
          class="transition-all duration-300 cursor-pointer rounded-[10px]" :class="selectedImage === i
            ? 'w-[74px] h-[74px] border-x-[3px] border-x-red-500  z-10'
            : 'w-[56px] h-[56px] scale-100 z-0'" @click="selectedImage = i" />
      </div>

    </section>


    <section class="flex flex-col px-[16px]">
      <h2 class="text-xl font-bold mt-[16px]">
        <span class="text-brand">کلینیک تــــن ساز</span> متن معرفی
      </h2>

      <p class="mt-[12px] text-[#2E2E2E] text-[14px] text-justify leading-[1.625rem]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>

      <button class="mt-[33px] w-full bg-brand text-center rounded-full h-[48px]">
        <NuxtLink to="#" class="bg-brand text-white font-semibold leading-[26px] rounded-full w-full">تور مجازی کلینیک
          تن ساز</NuxtLink>
      </button>
    </section>

    <section class="flex flex-col py-[60px] px-[16px] gap-[30px] w-full bg-[#1D1D1D] mt-[43px]">
      <p class="text-[20px] font-bold text-[#ffffff]">
        <span>چرا کلینیک </span>
        <span class="text-brand">تــــــن ســـــــــــــاز </span>
        <span>؟</span>
      </p>

      <div class="flex flex-col gap-[25px]">
        <div class="flex gap-[8px] items-start" v-for="item in whyTansaz" :key="item.id">
          <img src="/icons/books.svg" alt="" class="mt-[2px]" />

          <div class="flex flex-col gap-[2px]">
            <p class="text-[16px] font-semibold leading-[26px] text-[#ffffff]">{{ item.title }}</p>

            <p class="text-[12px] leading-[22px] text-[#ffffff]">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="flex flex-col gap-[40px] w-full px-[16px] mb-[40px]">
      <div class="flex flex-col mt-[43px] w-full">
        <p class="text-[20px] font-bold text-[#ffffff]">
          <span class="text-brand">پزشکان </span>
          <span class="text-[#000000]">مجموعه</span>
        </p>
        <p class="text-[14px] text-[#000000]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است.
        </p>
      </div>

      <div class="flex flex-col gap-y-[1.25rem]">
        <AboutUsDoctorCard v-for="doctor in doctors" :key="doctor.id" :doctor="doctor" />
      </div>
    </section>
    <AboutUsEventsSection :is-transparent="true" />
  </div>
</template>
