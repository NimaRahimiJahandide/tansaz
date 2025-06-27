<script setup>
import { useStartWebsite } from "@/store/initWebsite";
const startWebsite = useStartWebsite();

const router = useRouter();

const goBack = () => {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push('/');
  }
};

onMounted(() => {
  startWebsite.setImageClicked(true);
});
</script>

<template>
  <div class="flex flex-col bg-[#EFEFEF] pt-[84px] mb-[30px]">
    <header class="w-full px-[16px]">
      <section class="flex items-center justify-between w-full">
        <article class="flex gap-[10px]">
          <span class="bg-white flex items-center justify-center size-[34px] rounded-full">
            <Icon name="solar:share-bold-duotone" size="18" style="color: #ED1C24" />
          </span>
          <span class="bg-white flex items-center justify-center size-[34px] rounded-full">
            <Icon name="mdi:heart" size="18" style="color: #ED1C24" />
          </span>
        </article>
        <img @click="goBack" src="/icons/left-arrow.svg" alt="" />
      </section>

      <section class="text-[#2E2E2E]">
        <img class="h-[250px] object-cover object-center rounded-2xl w-full my-[20px]" src="/images/blog1.png"
          alt="blog1">
        <article class="flex flex-col gap-[12px]">
          <h1 class="text-[20px] font-bold">مراقبت پس از درمان ریزش مو</h1>
          <div class="flex gap-4">
            <span class="flex items-center gap-[5px] text-[14px] font-medium leading-[23px]">
              <Icon name="solar:calendar-outline" size="18" style="color: #ED1C24" />
              1404/01/04
            </span>
            <span class="flex items-center gap-[5px] text-[14px] font-medium leading-[23px]">
              <Icon name="iconamoon:clock" size="18" style="color: #ED1C24" />
              2 دقیقه
            </span>
            <span class="flex items-center gap-[5px] text-[14px] font-medium leading-[23px]">
              <Icon name="clarity:eye-show-line" size="18" style="color: #ED1C24" />
              555 نفر
            </span>
          </div>
        </article>
      </section>

    </header>
    <div class="flex flex-col pt-[20px] px-[16px] pb-[16px] z-[10]">
      <p class="text-[16px] text-justify text-[#2E2E2E] leading-[30px] mt-[10px]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
        هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
        متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
        پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
        سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
        طراحی اساسا مورد استفاده قرار گیرد.
      </p>
    </div>
    
    <HomeBlogsSection />

    <Comments />
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
