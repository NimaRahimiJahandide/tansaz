<template>
  <div>
    <div class="flex flex-col md:flex-row max-w-[1200px] text-dark mx-auto px-3 mt-[75px]">
      <div class="md:w-1/2 p-8 bg-background-input md:rounded-r-3xl rounded-t-3xl">
        <div class="mb-8">
            <h2 class="text-2xl mb-2">
                رزرو نوبت <span class="text-primary">آنلاین</span> به چه صورت می باشد ؟
            </h2>
            <p class="text-[14px]">برای گرفتن نوبت مشاوره رایگان فرم رو پرکنید و منتظر تماس کارشناسان ما باشید .</p>
        </div>
        <div class="space-y-6">
          <div class="flex items-start gap-[20px]">
            <span
              class="bg-primary flex justify-center items-center rounded-[6px] size-[30px]"
            >
              <Icon name="ic:baseline-phone" size="17px" style="color: #fff" />
            </span>
            <div class="flex flex-col gap-2.5">
              <p class="text-[20px] font-semibold">شماره های تماس</p>
              <span class="text-neutral-400"
                >07136383752، 07136383751، 07136385004</span
              >
            </div>
          </div>
          <div class="flex items-start gap-[20px]">
            <span
              class="bg-primary flex justify-center items-center rounded-[6px] size-[30px]"
            >
              <Icon name="mdi:location" size="17px" style="color: #fff" />
            </span>
            <div class="flex flex-col gap-2.5">
              <p class="text-[20px] font-semibold">آدرس کلینیک</p>
              <span class="text-neutral-400"
                >شیراز، معالی آباد، نبش دنا، ساختمان هرم نور، طبقه 5 و 6</span
              >
            </div>
          </div>
          <div class="flex items-start gap-[20px]">
            <span
              class="bg-primary flex justify-center items-center rounded-[6px] size-[30px]"
            >
              <Icon name="lets-icons:insta" size="17px" style="color: #fff" />
            </span>
            <div class="flex flex-col gap-2.5">
              <p class="text-[20px] font-semibold">صفحه اینستاگرام</p>
              <span class="text-neutral-400">tansaz.clinic</span>
            </div>
          </div>
          <div class="flex items-start gap-[20px]">
            <span
              class="bg-primary flex justify-center items-center rounded-[6px] size-[30px]"
            >
              <Icon
                name="ic:baseline-telegram"
                size="17px"
                style="color: #fff"
              />
            </span>
            <div class="flex flex-col gap-2.5">
              <p class="text-[20px] font-semibold">تلگرام</p>
              <span class="text-neutral-400">09336074147</span>
            </div>
          </div>
          <div class="flex items-start gap-[20px]">
            <span
              class="bg-primary flex justify-center items-center rounded-[6px] size-[30px]"
            >
              <Icon name="ic:baseline-whatsapp" size="17px" style="color: #fff" />
            </span>
            <div class="flex flex-col gap-2.5">
              <p class="text-[20px] font-semibold">واتس اپ</p>
              <span class="text-neutral-400">09336074147</span>
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-1/2 bg-neutral-900 p-8 md:rounded-l-3xl rounded-b-3xl">
        <div class="flex flex-col md:flex-row justify-between items-start gap-5">
          <div class="w-full space-y-6">
            <div class="space-y-2">
              <label class="block text-white text-sm">
                نام و نام خانوادگی *
              </label>
              <input type="text" class="w-full p-3 rounded-lg bg-white" />
            </div>
            <div class="space-y-2">
              <label class="block text-white text-sm"> شماره موبایل * </label>
              <input type="tel" class="w-full p-3 rounded-lg bg-white" />
            </div>
            <div class="space-y-2">
              <label class="block text-white text-sm">
                در چه زمینه‌ای مشاوره میخواهید؟ *
              </label>
              <details class="relative">
                <summary
                  class="w-full p-3 rounded-lg bg-white flex justify-between items-center cursor-pointer"
                >
                  <span>پوست، مو، زیبایی</span>
                  <Icon name="ep:arrow-down" size="17px" style="color: #000" />
                </summary>
                <div class="absolute w-full mt-1 p-2 bg-white shadow rounded-lg">
                  <div class="p-2 hover:bg-gray-100 rounded cursor-pointer">
                    پوست
                  </div>
                  <div class="p-2 hover:bg-gray-100 rounded cursor-pointer">
                    مو
                  </div>
                  <div class="p-2 hover:bg-gray-100 rounded cursor-pointer">
                    زیبایی
                  </div>
                </div>
              </details>
            </div>
            <div class="space-y-2">
              <label class="block text-white text-sm">
                توضیحات در صورت نیاز
              </label>
              <textarea
                class="w-full h-32 p-3 rounded-lg bg-white resize-none"
              ></textarea>
              <p class="text-gray-400 text-xs">۰ از ۵۰۰ حرف کاراکتر</p>
            </div>
            <div class="space-y-4">
              <button
                class="w-full p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                رزرو نوبت
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
