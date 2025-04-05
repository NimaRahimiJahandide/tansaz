<script setup lang="ts">
import { useLoadingState } from "@/store/loadingState";

const loadingState = useLoadingState();
setTimeout(() => {
  loadingState.setLoading(false);
}, 1000);
</script>

<template>
  <div>
  <LoadingComponent v-if="loadingState.isLoading"/>

    <div v-else
      class="flex flex-col max-w-[1200px] text-dark mx-auto px-5 mt-[75px] leading-10 text-justify text-[14px]"
    >
    <Head>
      <Title>تن ساز | قوانین سایت</Title>
      <!-- <Link rel="canonical" :href="config.public.websiteURL + decodeURI(route.fullPath)" /> -->
      <Meta name="description" content="کلینیک زیبایی و لاغری تن ساز" />
      <Meta property="og:description" content="کلینیک زیبایی و لاغری تن ساز" />
      <Meta property="og:image" content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
      <Meta property="og:image:secure_url" content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
      <Meta property="og:image:width" content="400" />
      <Meta property="og:image:height" content="300" />
      <Meta property="og:image:alt" content="تن ساز | قوانین سایت" />
      <Meta property="og:url" content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
    </Head>
      <!-- <div class="flex flex-col justify-center gap-2 items-center" v-if="loadingState.isLoading">
        <div class="w-[150px] h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
        <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
        <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
        <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
        <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
        <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
        <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
      </div> -->
      <div>
        <h1 class="text-primary text-center text-[30px] mb-[14px]">
          قوانین سایت
        </h1>
        <p>
          لطفا در هنگام ثبت سفارش در وبسایت کلینیک تن ساز به کالای مورد نظر دقت
          فرمایید ، نرسیدن کالا به دلیل اشتباه وارد کردن آدرس مقصد به عهده ی
          مشتری می باشد .
        </p>
        <p>
          هزینه ی کالاها به صورت آنلاین از طریق درگاه های رسمی بانکی کشور قابل
          پرداخت می باشد .
        </p>
        <p>
          همه ی ارسال ها به جز شهر رشت به صورت پستی از طریق اداره پست جمهوری
          اسلامی ایران و شرکت تیپاکس فرستاده می شود .
        </p>
        <p>
          از هنگام ثبت سفارش کالا در کمتر از ۲۴ از ساعت کاری ( بجز ایام تعطیل )
          بسته ارسالی مورد نظر برای مشتریان ارسال می شود .
        </p>
        <p>
          در صورت عدم مغایرت کالای سفارش داده شده با مرسوله ارسالی ، کالای مورد
          نظر مرجوع داده می شود .
        </p>
        <p>
          تمامی اطلاعات وارد شده توسط کاربر به منزله ی تایید صحت اطلاعات برای
          ارسال کالا می باشد و در صورت نادرست بودن وبسایت کلینیک تن ساز مسئولیتی
          در قبال آن ندارد . (تبصره : کاربر تا قبل از ارسال کالا می تواند در
          صورت اشتباه وارد کردن آدرس و مشخصات از طریق پشتیبانی تلفنی هماهنگی
          لازم را انجام دهد . )
        </p>
      </div>
    </div>
  </div>
</template>
