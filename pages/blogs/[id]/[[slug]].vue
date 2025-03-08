<script setup lang="ts">
import { useLoadingState } from "@/store/loadingState";
const loadingState = useLoadingState();

setTimeout(() => {
  loadingState.setLoading(false);
}, 2000);
</script>
<template>
  <div>
    <!-- <div v-if="loadingState.isLoading">
      <div
        class="h-64 w-full bg-gray-300 animate-pulse relative">
       
      </div>
      <div class="max-w-[1200px] text-dark mx-auto px-3 mb-28">
        <div class="bg-white rounded-lg overflow-hidden">
          <div>
            <div class="flex md:flex-row flex-col md:gap-10 gap-5 mt-5">
              <div class="md:w-1/3 w-full h-[31rem] bg-gray-300 animate-pulse"></div>
              <div class="md:w-2/3 flex flex-col gap-3.5">
                <div class="w-80 h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
                <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
                <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
                <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
                <div class="w-80 h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
                <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
                <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
                <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div>
      <div
        class="h-64 bg-cover bg-center relative"
        style="
          background-image: url('/images/photo_2024-08-21_22-16-13-682x1024.jpg');
        "
      >
        <div
          class="absolute inset-0 bg-black/50 flex items-center justify-center"
        >
          <h1
            class="text-white text-2xl text-center px-4 font-semibold"
            dir="rtl"
          >
            "استفاده از معتبرترین برند مواد برندهای صنعت زیبایی و جراحی"
          </h1>
        </div>
      </div>
      <div class="max-w-[1200px] text-dark mx-auto px-5 mb-28">
        <div class="bg-white rounded-lg overflow-hidden">
          <div>
            <div
              class="flex items-center justify-end gap-4 text-sm text-gray-500 mb-6"
            >
              <div class="flex items-center gap-1">
                <Icon
                  name="mdi:clock-outline"
                  size="18"
                  class="text-gray-500"
                />
                <span>9:20</span>
              </div>
              <div class="flex items-center gap-1">
                <Icon name="uis:schedule" size="18" class="text-gray-500" />
                <span>3 مرداد 1403</span>
              </div>
              <div class="flex items-center gap-1">
                <Icon
                  name="mage:message-dots-round"
                  size="18"
                  class="text-gray-500"
                />
                <span>23 دیدگاه</span>
              </div>
            </div>
            <div class="flex md:flex-row flex-col md:gap-10 gap-5">
              <img
                src="/images/photo_2024-08-21_22-16-13-682x1024.jpg"
                alt="Beauty Product"
                class="md:w-1/3 max-h-[31rem] rounded-lg"
              />
              <div class="md:w-2/3 flex flex-col gap-3.5">
                <h2 class="text-xl font-bold">
                  از پرفروش ترین برند مواد برندهای صنعت زیبایی
                </h2>
                <p class="text-light-grey leading-7 text-justify">
                  در صنعت زیبایی، انتخاب محصولات مناسب برای مراقبت از پوست، مو و
                  زیبایی به‌طور کلی، از اهمیت بسیاری برخوردار است. برندهای
                  بسیاری در این حوزه فعالیت می‌کنند، اما تنها تعداد محدودی از
                  آن‌ها توانسته‌اند به عنوان پرفروش‌ترین و محبوب‌ترین برندها
                  شناخته شوند. در اینجا به بررسی برخی از این برندها می‌پردازیم
                  که در سراسر جهان محبوبیت بسیاری دارند.
                </p>
                <h3 class="text-lg font-semibold">
                  از پرفروش ترین برند مواد برندهای صنعت زیبایی
                </h3>
                <p class="text-light-grey leading-7 text-justify">
                  ### ۱. **L’Oréal**
                </p>
                <p class="text-light-grey leading-7 text-justify">
                  شرکت فرانسوی L’Oréal یکی از بزرگترین و معروف‌ترین برندهای
                  زیبایی در جهان است. این برند با بیش از صد سال سابقه، طیف
                  گسترده‌ای از محصولات زیبایی از جمله محصولات مراقبت از پوست،
                  مو، و لوازم آرایشی را تولید می‌کند. L’Oréal همیشه به دلیل
                  نوآوری در تولید محصولات با کیفیت بالا شناخته شده و دارای
                  زیرمجموعه‌های مشهوری مانند Lancôme، Maybelline، و Kiehl’s است.
                  این برند به عنوان یکی از پیشروان صنعت زیبایی، همواره توجه
                  زیادی به تحقیقات علمی و توسعه محصولات جدید داشته است.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
