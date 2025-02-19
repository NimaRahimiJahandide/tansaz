<script setup lang="ts">
import { useLoadingState } from "@/store/loadingState";

const loadingState = useLoadingState();

setTimeout(() => {
  loadingState.setLoading(false);
}, 2000);
</script>

<template>
  <div>
    <div
      class="flex flex-col max-w-[1200px] text-dark mx-auto px-3 mt-[75px] leading-10 text-justify text-[14px]"
    >
      <div class="flex flex-col justify-center gap-2 items-center" v-if="loadingState.isLoading">
        <div class="w-[150px] h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
        <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
        <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
        <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
        <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
        <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
        <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
      </div>
      <div v-else>
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
