<script setup>
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
  "/images/Surgery1.png",

  "/images/Surgery2.png",

  "/images/Surgery1.png",

  "/images/Surgery1.png",
];

onMounted(() => {
  startWebsite.setImageClicked(true);
});
</script>
<template>
  <div class="flex flex-col items-center bg-[#EFEFEF] pt-[84px] pb-[50px]">
    <div class="flex items-center justify-between w-full px-[16px]">
      <header class="">
        <h1 class="text-xl font-bold">
          <span class="text-brand">ما</span> درباره
        </h1>
      </header>

      <img @click="goBack" src="/icons/left-arrow.svg" alt="" />
    </div>

    <div
      class="relative w-full aspect-square rounded-[16px] overflow-hidden mt-[20px] px-[16px]"
    >
      <img
        v-for="(x, i) in gallery"
        :src="x"
        alt=""
        class="duration-300 absolute w-full aspect-square"
        :class="i == selectedImage ? 'opacity-100' : 'opacity-0'"
      />
    </div>
    <div
      class="flex items-center gap-[16px] max-w-full overflow-x-auto justify-center px-[16px]"
    >
      <img
        v-for="(x, i) in gallery"
        :src="x"
        alt=""
        class="size-[62px] aspect-square rounded-[10px] mt-[16px] cursor-pointer shadow-[0px_1px_8px_0px_#00000059]"
        :class="selectedImage == i ? 'border-[2px] border-[#ffffff]' : ''"
        @click="selectedImage = i"
      />
    </div>

    <div class="flex flex-col px-[16px]">
      <h2 class="text-xl font-bold mt-[30px]">
        <span class="text-brand">کلینیک تــــن ساز</span> متن معرفی
      </h2>

      <p class="mt-[12px] text-[14px]">
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

      <button
        class="mt-[33px] w-full bg-brand text-center rounded-full h-[48px]"
      >
        <NuxtLink
          to="#"
          class="bg-brand text-white font-semibold leading-[26px] rounded-full w-full"
          >تور مجازی کلینیک تن ساز</NuxtLink
        >
      </button>
    </div>

    <div
      class="flex flex-col py-[60px] px-[16px] gap-[30px] w-full bg-[#1D1D1D] mt-[43px]"
    >
      <p class="text-[20px] font-bold text-[#ffffff]">
        <span>مزیت های کلینیک </span>
        <span class="text-brand">تــــــن ســـــــــــــاز </span>
        <span>؟</span>
      </p>

      <div class="flex flex-col gap-[25px]">
        <div class="flex gap-[8px] items-start" v-for="x in 5">
          <img src="/icons/red-hearth.svg" alt="" class="mt-[2px]" />

          <div class="flex flex-col gap-[2px]">
            <p class="text-[16px] font-semibold leading-[26px] text-[#ffffff]">
              مواد با کیفیت
            </p>

            <p class="text-[12px] leading-[22px] text-[#ffffff]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده با تولید سادگی از طراحان گرافیک است.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-[40px] w-full px-[16px] mb-[40px]">
      <div class="flex flex-col mt-[43px] w-full">
        <p class="text-[20px] font-bold text-[#ffffff]">
          <span class="text-brand">متخصصان </span>
          <span class="text-[#000000]">ما</span>
        </p>
        <p class="text-[14px] text-[#000000]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-x-[16px] gap-y-[30px]">
        <div class="flex flex-col items-center" v-for="x in 6">
          <img
            src="/images/Surgery1.png"
            alt=""
            class="w-full rounded-[22px]"
          />

          <p class="mt-[16px] text-[16px] font-semibold text-[#2E2E2E]">
            ساغر میرعباسی
          </p>
          <p class="text-[14px] font-medium text-brand">متخصص زیبایی</p>
        </div>
      </div>
    </div>
    <HomeBlogsSection :is-transparent="true" />
  </div>
</template>
