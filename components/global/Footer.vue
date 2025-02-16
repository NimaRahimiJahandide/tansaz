<script setup lang="ts"></script>

<template>
  <div class="bg-dark relative text-white rounded-t-2xl md:pt-[232px] pt-[300px] pb-3.5">
    <ContactUsComponent/>
    <div class="max-w-[1200px] flex md:flex-row flex-col flex-wrap gap-5 justify-between mx-auto px-3">
      <div class="flex flex-col gap-[20px]">
        <span class="text-[25px] font-extralight">راه های ارتباطی</span>
        <ul class="flex flex-col gap-3.5 text-sm">
          <li class="flex gap-[5px] items-center">
            <Icon name="mdi:location" size="19px" style="color: #fff" />
            <span
              >آدرس : شیراز، معالی آباد، نبش خیابان دنا، مجتمع هرم نور، طبقه
              5و6</span
            >
          </li>
          <li class="flex gap-[5px] items-center">
            <Icon name="solar:phone-bold" size="19px" style="color: #fff" />
            <a href="tel:07136385004">071-36385004</a>
          </li>
          <li class="flex gap-[5px] items-center">
            <Icon name="oi:phone" size="19px" style="color: #fff" />
            <a href="tel:09336074147">0933-6074147</a>
          </li>
          <li class="flex gap-[5px] items-center">
            <Icon name="uil:calender" size="19px"" style="color: #fff" />
            <span>شنبه تا چهارشنبه</span>
          </li>
          <li class="flex gap-[5px] items-center">
            <Icon name="mdi:clock-outline" size="19px" style="color: #fff" />
            <span>ساعت : 09:00 الی 21:00</span>
          </li>
          <li class="flex gap-[5px] items-center">
            <Icon name="mdi:clock-outline" size="19px" style="color: #fff" />
            <span>ساعت : 09:00 الی 21:00</span>
          </li>
        </ul>
      </div>
      <div class="flex justify-between gap-5">
        <div class="flex flex-col gap-[20px]">
          <span class="text-[25px] font-extralight">خدمات ما</span>
          <ul class="flex flex-col gap-3.5 text-sm">
            <li class="flex gap-[5px] items-center">
              <NuxtLink to="#">زیبایی و لاغری</NuxtLink>
            </li>
            <li class="flex gap-[5px] items-center">
              <NuxtLink to="#">کافه کلینیک</NuxtLink>
            </li>
            <li class="flex gap-[5px] items-center">
              <NuxtLink to="#">اجاره تجهیزات پزشکی</NuxtLink>
            </li>
            <li class="flex gap-[5px] items-center">
              <NuxtLink to="#">اعزام پزشک به منزل</NuxtLink>
            </li>
            <li class="flex gap-[5px] items-center">
              <NuxtLink to="#">آکادمی و آموزش</NuxtLink>
            </li>
            <li class="flex gap-[5px] items-center">
              <NuxtLink to="#">فروشگاه آنلاین غذایی رژیمی</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-[20px]">
          <span class="text-[25px] font-extralight">لینک مفید</span>
          <ul class="flex flex-col gap-3.5 text-sm">
            <li class="flex gap-[5px] items-center">
              <NuxtLink to="/">صفحه اصلی</NuxtLink>
            </li>
            <li class="flex gap-[5px] items-center">
              <NuxtLink to="#">حساب کاربری</NuxtLink>
            </li>
            <li class="flex gap-[5px] items-center">
              <NuxtLink to="/contact-us">تماس با ما</NuxtLink>
            </li>
            <li class="flex gap-[5px] items-center">
              <NuxtLink to="#">مقالات آموزشی</NuxtLink>
            </li>
            <li class="flex gap-[5px] items-center">
              <NuxtLink to="/about-us">درباره ما</NuxtLink>
            </li>
            <li class="flex gap-[5px] items-center">
              <NuxtLink to="/terms">قوانین سایت</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col gap-[20px]">
        <span class="text-[25px] font-extralight text-center md:text-start">نماد اعتماد</span>
        <ul class="flex flex-col gap-3.5 text-sm"></ul>
      </div>

    </div>
    <!-- start copyright -->
     <div class="max-w-[1200px] mx-auto px-3 border-t border-[#FFFFFF38] pt-6 mt-6">
      <div class="flex items-center justify-center gap-1">
        <a class="border border-[#FFFFFF38] flex justify-center items-center size-9 rounded-[10px]" href="#">
          <Icon name="ic:baseline-whatsapp" size="24px" style="color: #fff" />
        </a>
        <a class="border border-[#FFFFFF38] flex justify-center items-center size-9 rounded-[10px]" href="#">
          <Icon name="akar-icons:instagram-fill" size="24px" style="color: #fff" />
        </a>
        <a class="border border-[#FFFFFF38] flex justify-center items-center size-9 rounded-[10px]" href="#">
          <Icon name="ic:baseline-telegram" size="24px" style="color: #fff" />
        </a>
      </div>
      <div class="text-center text-[14px] pt-6">
        تمامی حقوق برای کلینیک تن ساز محفوظ می باشد
      </div>
     </div>
    <!-- end copyright -->
  </div>
</template>

<style scoped></style>
