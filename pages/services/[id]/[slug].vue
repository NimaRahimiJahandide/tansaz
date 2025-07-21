<script setup>
import { useStartWebsite } from "@/store/initWebsite";
const startWebsite = useStartWebsite();
const activeIndex = ref(null);

onMounted(() => {
  startWebsite.setImageClicked(true);
});

const categories = ref([
  {
    id: 1,
    title: 'بوتاکس',
  },
  {
    id: 2,
    title: 'ژل و فیلر',
  },
  {
    id: 3,
    title: 'مزوتراپی',
  },
  {
    id: 4,
    title: 'پی آر پی',
  },
  {
    id: 5,
    title: 'مزوژل ها',
  },
  {
    id: 6,
    title: 'سایر',
  },
])
</script>

<template>
  <div>
    <div class="w-full h-[354px] relative">
      <div class="absolute top-0 left-0 w-full h-[354px] bg-[#000000af] z-[2]" />
      <img src="/public/images/blog1.png" alt="" class="w-full h-[354px]" />
      <div class="flex flex-col absolute top-[94px] right-[16px] z-[3]">
        <p class="text-[#ED1C24] text-[30px] font-bold">تزریقات</p>
        <p class="text-[#FFFFFF] text-[30px] font-bold">زیبایی</p>
      </div>

      <div class="grid grid-cols-3 gap-[10px] px-[16px] w-full absolute top-[198px] right-0 z-[3]">
        <div v-for="(x, index) in categories" :key="index" @click="activeIndex = index"
          class="h-[38px] rounded-[30px] flex items-center justify-center cursor-pointer backdrop-blur-xl inset-shadow-[0px_-5px_21px_0px_#e3edef41,0px_70px_47px_-74px_#CAACFF4D]"
          :class="activeIndex === index ? 'bg-brand' : 'bg-transparent'">
          <p class="text-[14px] text-[#ffffff]">{{ x.title }}</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col pt-[20px] px-[16px] mt-[-40px] relative bg-[#F8F8F8] rounded-t-[40px] pb-[16px] z-[10]" data-aos="fade-up"> 
      <p class="text-[20px] font-bold">
        <span class="text-[#ED1C24]">مزوتراپی</span>
        <span class="text-[#000000]"> چیست ؟</span>
      </p>

      <p class="text-[16px] text-justify text-[#2E2E2E] leading-[30px] mt-[10px]">
        مزوتراپی تکنیکی است برای جوانسازی ، سفت کردن و بازسازی پوست که توسط
        تزریق عصاره گیاهان ، ویتامینها ، هورمونها در پوست انجام می گیرید . این
        تکنیک همچنین برای حذف چربی ها نیز کاربرد دارد .مزوتراپی باعث تغذیه و
        جوان سازی پوست توسط تولید کلاژن و الاستین می شود و متابولیسم پوست شما را
        تحریک می کند.این تکنیک در سال ۱۹۵۲ توسط پزشک فرانسوی به نام دکتر میکاییل
        پیستور توسعه یافت . در آن زمان از مزوتزاپی بیشتر برای کاهش درد استفاده
        می شد. ولی در سال های بعد محبوبیت زیادی در ایالات آمریکا و دیگر نقاط
        جهان پیدا کرد . کاربرد های مزوتراپی: پیشگیری از چین و چروک و جوانسازی
        پوست، محو کردن خطوط پوست، بهبود ، روشنایی پوست ملتهب و قرمز، سفت کردن
        پوست شل می باشد.
      </p>

      <div class="flex items-center justify-end">
        <ServicesFastSupport />
      </div>
    </div>

    <HomeBeforAfterExample data-aos="fade-up" data-aos-once="true"/>
    <ServicesVideoSlider :data="['/images/services2.png']" data-aos="fade-up" data-aos-once="true"/>
    <HomeFaqSection data-aos="fade-up" data-aos-once="true"/>

    <!-- slider -->
    <section class="flex flex-col w-full bg-[#F5F5F5] px-[16px] py-[30px] relative" data-aos="fade-up">
      <div class="absolute bottom-0 right-0 w-full bg-gradient-to-t h-[200px] from-[#00000016] to-[#00000000]"></div>
      <p class="text-[20px] font-bold">
        <span class="text-[#ED1C24]"> متریال درجه یک </span>

        <span class="text-[#000000]"> برای مزوتراپی </span>

        <span class="text-[#ED1C24]"> ! </span>
      </p>

      <ServicesSliderComponent />

      <p class="text-[20px] font-bold">
        <span class="text-[#000000]"> مزو تراپی در کمتر از 20 دقیقه، </span>

        <span class="text-[#ED1C24]"> بدون درد </span>

        <span class="text-[#000000]"> و با </span>
        <span class="text-[#ED1C24]"> بی حسی </span>
        <span class="text-[#000000]"> موضعی انجام می شود. </span>
      </p>
    </section>

    <Comments data-aos="fade-up" data-aos-once="true"/>
    <HomeBlogsSection data-aos="fade-up" data-aos-once="true"/>
  </div>
</template>

<style scoped>
.custom-gradient {
  @apply bg-no-repeat bg-cover;
  background-image:
    linear-gradient(0deg, #F5F5F5, #F5F5F5),
    linear-gradient(180deg, rgba(0, 0, 0, 0) 90.73%, rgba(0, 0, 0, 0.2) 110.4%);
}
</style>
