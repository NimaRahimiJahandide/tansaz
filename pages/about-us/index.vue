<script setup>
import { AboutUsEventsSection } from "#components";
import { useStartWebsite } from "@/store/initWebsite";
import { usePersonnels } from "~/composables/about-us/usePersonnels";
import { useBenefits } from "~/composables/about-us/useBenefits";

const startWebsite = useStartWebsite();
const router = useRouter();
const selectedImage = ref(0);

// Get personnels from API
const { personnels, pending, error } = usePersonnels();

// Get benefits from API
const { benefits, pending: benefitsPending, error: benefitsError } = useBenefits();

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

    <section class="w-full flex flex-col items-center px-4" data-aos="fade-up" data-aos-once="true">
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

      <p class="mt-[12px] text-[#2E2E2E] text-[14px] text-justify leading-[1.625rem]" data-aos="fade-up"
        data-aos-once="true">
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

    <!-- start benefits -->
    <section class="flex flex-col py-[60px] px-[16px] gap-[30px] w-full bg-[#1D1D1D] mt-[43px]">
      <p class="text-[20px] font-bold text-[#ffffff]">
        <span>چرا کلینیک </span>
        <span class="text-brand">تــــــن ســـــــــــــاز </span>
        <span>؟</span>
      </p>

      <!-- Benefits Loading state -->
      <div v-if="benefitsPending" class="flex justify-center items-center py-8">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
      </div>

      <!-- Benefits Error state -->
      <div v-else-if="benefitsError" class="text-center text-red-500 py-8">
        خطا در بارگذاری اطلاعات مزایا
      </div>
      <!-- Benefits list -->
      <div v-else class="flex flex-col gap-[25px]">
        <div class="flex gap-[8px] items-start" v-for="item in benefits" :key="item.id" data-aos="fade-up"
          data-aos-once="true">
          <img src="/icons/books.svg" alt="" class="mt-[2px]" />

          <div class="flex flex-col gap-[2px]">
            <p class="text-[16px] font-semibold leading-[26px] text-[#ffffff]">{{ item.title }}</p>

            <p class="text-[12px] leading-[22px] text-[#ffffff]">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- end benefits -->

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

      <!-- Loading state -->
      <div v-if="pending" class="flex justify-center items-center py-8">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
      </div>

      <!-- Error state -->
      <div v-else-if="error" class="text-center text-red-500 py-8">
        خطا در بارگذاری اطلاعات پزشکان
      </div>

      <!-- Doctors list -->
      <div v-else class="flex flex-col gap-y-[1.25rem]">
        <AboutUsDoctorCard v-for="personnel in personnels" :key="personnel.id" :name="personnel.name"
          :education="personnel.education" :expertise="personnel.expertise" :thumb_image="personnel.thumb_image"
          :description="personnel.description" :services="personnel.services" :likes="personnel.likes"
          data-aos="fade-left" data-aos-once="true" />
      </div>
    </section>
    <AboutUsEventsSection :is-transparent="true" />
  </div>
</template>