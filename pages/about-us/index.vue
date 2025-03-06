<script setup lang="ts">
import { useLoadingState } from "@/store/loadingState";

const loadingState = useLoadingState();

setTimeout(() => {
  loadingState.setLoading(false);
}, 2000);
</script>

<template>
  <div class="max-w-[1200px] text-dark mx-auto px-3 mt-[75px] mb-36">
    <!-- <div v-if="loadingState.isLoading">
      <div
        class="flex w-full flex-col-reverse md:flex-row justify-between gap-5"
      >
        <div class="md:w-1/2 w-full flex flex-col justify-center space-y-4 text-right">
          <div
            class="md:w-1/2 h-[24px] bg-gray-300 rounded-4xl animate-pulse"
          ></div>
          <ul class="space-y-3 text-[14px] list-disc list-inside">
            <div
              class="md:w-1/2 h-[24px] bg-gray-300 rounded-4xl animate-pulse"
            ></div>
            <div
              class="md:w-1/2 h-[24px] bg-gray-300 rounded-4xl animate-pulse"
            ></div>
            <div
              class="md:w-1/2 h-[24px] bg-gray-300 rounded-4xl animate-pulse"
            ></div>
            <div
              class="md:w-1/2 h-[24px] bg-gray-300 rounded-4xl animate-pulse"
            ></div>
            <div
              class="md:w-1/2 h-[24px] bg-gray-300 rounded-4xl animate-pulse"
            ></div>
            <div
              class="md:w-1/2 h-[24px] bg-gray-300 rounded-4xl animate-pulse"
            ></div>
            <div
              class="md:w-1/2 h-[24px] bg-gray-300 rounded-4xl animate-pulse"
            ></div>
            <div
              class="md:w-1/2 h-[24px] bg-gray-300 rounded-4xl animate-pulse"
            ></div>
          </ul>
        </div>
        <div class="md:w-1/2 w-full flex md:justify-end">
          <div
            class="md:w-1/2 w-full h-[400px] bg-gray-300 rounded-4xl animate-pulse"
          ></div>
        </div>
      </div>
    </div> -->
    <div>
      <div
        class="flex w-full flex-col-reverse md:flex-row justify-between gap-5"
      >
        <div class="md:w-1/2 flex flex-col justify-center space-y-4 text-right">
          <h1 class="text-3xl font-bold mb-4">
            دکتر <b class="text-primary">سروش باقری</b>
          </h1>
          <ul class="space-y-3 text-[14px] list-disc list-inside">
            <li class="flex items-center text-justify gap-2">
              فارغ التحصیل پزشکی شیراز1377
            </li>
            <li class="flex items-center text-justify gap-2">
              <span>عضو انجمن علمی آموزش پزشکی ایران</span>
            </li>
            <li class="flex items-center text-justify gap-2">
              <span>عضو انجمن علمی پزشکی لیزر ایران</span>
            </li>
            <li class="flex items-center text-justify gap-2">
              <span>عضو انجمن علمی تغذیه ایران</span>
            </li>
            <li class="flex items-center text-justify gap-2">
              <span>مدرس دوره های استتیک</span>
            </li>
            <li class="flex items-center text-justify gap-2">
              <span
                >بیش از 6 سال تجربه طبابت تخصصی در حوزه استتیک و زیبایی و
                اقدامات جراحی</span
              >
            </li>
            <li class="flex items-center text-justify gap-2">
              <span
                >دارای مدارک بین المللی حرفه استتیک از آلمان، انگلستان، کانادا و
                جمهوری چک</span
              >
            </li>
            <li class="flex items-center text-justify gap-2">
              <span
                >دارای مدارک معتبر دوره های تخصصی استتیک و تکنولوژی زیبایی از
                دانشگاه شهید بهشتی، انجمن علمی پزشکی ایران</span
              >
            </li>
          </ul>
        </div>
        <div class="md:w-1/2 flex justify-end">
          <img
            src="/images/dr-sorosh-eghbali.jpg"
            alt="دکتر سروش باقری"
            class="rounded-[35px] md:w-[300px]"
          />
        </div>
      </div>
      <div class="mt-[60px]">
        <div class="text-right">
          <h1 class="text-3xl font-bold mb-2">
            درباره کلینیک <span class="text-primary">تن ساز</span>
          </h1>
          <p class="text-gray-500 mb-6">همه‌ی آن چیزی که باید بدانید</p>
          <p class="mb-8">
            این مجموعه با رویکردی نوین در بحث پزشکی زیبایی، بویژه ترمیمی بدون
            جراحی در شیراز راه اندازی شده است.
          </p>
          <p class="mb-4">از مزایای کلینیک تن ساز میتوان به</p>
          <ul class="space-y-3 mb-8">
            <li class="flex items-center gap-2 md:text-base text-[14px]">
              <Icon name="ei:check" size="17px" style="color: #ef172e" />
              <span>استفاده از کادر پزشکی مجرب، متخصص و فوق تخصص</span>
            </li>
            <li class="flex items-center gap-2 md:text-base text-[14px]">
              <Icon name="ei:check" size="17px" style="color: #ef172e" />
              <span
                >استفاده از دستگاه های روز دنیا با پیشرفته ترین تکنولوژی (دارای
                FDA و CE)</span
              >
            </li>
            <li class="flex items-center gap-2 md:text-base text-[14px]">
              <Icon name="ei:check" size="17px" style="color: #ef172e" />
              <span
                >استفاده از مواد تزریقی با کیفیت (برند های معتبر اروپایی)</span
              >
            </li>
            <li class="flex items-center gap-2 md:text-base text-[14px]">
              <Icon name="ei:check" size="17px" style="color: #ef172e" />
              <span>محیط لوکس و کاملا بهداشتی</span>
            </li>
          </ul>
          <p class="mb-8">اشاره کرد.</p>
          <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            <div
              class="relative rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <img
                src="/images/clinic1.jpg"
                alt="کلینیک زیبایی تن ساز شیراز"
                class="w-full h-[230px] object-cover"
              />
              <div
                class="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4"
              >
                <p class="text-white text-center">کلینیک زیبایی تن ساز شیراز</p>
              </div>
            </div>
            <div
              class="relative rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <img
                src="/images/clinic2.jpg"
                alt="کلینیک زیبایی تن ساز شیراز"
                class="w-full h-[230px] object-cover"
              />
              <div
                class="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4"
              >
                <p class="text-white text-center">کلینیک زیبایی تن ساز شیراز</p>
              </div>
            </div>
            <div
              class="relative rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <img
                src="/images/clinic3.jpg"
                alt="کلینیک زیبایی تن ساز شیراز"
                class="w-full h-[230px] object-cover"
              />
              <div
                class="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4"
              >
                <p class="text-white text-center">کلینیک زیبایی تن ساز شیراز</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
