<script setup>
definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <div >
    <div class="w-full bg-[#ecf1f7] md:pt-10 flex">
      <div class="flex-1 max-w-[1200px] mx-auto md:p-5 p-10 flex flex-col gap-4">
        <div
          class="bg-[#e8ecf2] rounded-lg shadow p-4 flex md:flex-row flex-col justify-between items-center transition-transform duration-300 ease-in-out hover:-translate-y-1"
        >
          <div class="relative mb-4 md:mb-0">
            <div
              class="size-16 bg-[#c6c6c6] overflow-hidden rounded-full flex items-center justify-center"
            >
              <Icon
                name="ph:user-fill"
                size="60"
                class="-mb-3 overflow-hidden"
                style="color: #fff"
              />
            </div>
            <div
              class="absolute -bottom-2 -right-1 bg-[#dd3333] text-white text-xs rounded-full size-1 p-4 flex items-center justify-center"
            >
              تغییر
            </div>
          </div>
          <div class="flex items-center gap-1">
            <span class="text-sm text-gray-600">عضویت:</span>
            <span class="text-sm">۱۳۹۸-۱۰-۱۵ ••••••••</span>
          </div>
          <div class="flex items-center gap-1">
            <span class="text-sm text-gray-600">سطح:</span>
            <span class="text-sm"></span>
          </div>
          <div class="flex items-center gap-1 mt-2">
            <span class="text-sm text-gray-600">اعتبار:</span>
            <span class="text-sm">۵ تومان</span>
          </div>
          <div class="flex items-center gap-1 mt-2">
            <span class="text-sm text-gray-600">امتیاز:</span>
            <span class="text-sm">۰</span>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow p-4 transition-transform duration-300 ease-in-out hover:-translate-y-1">
          <div class="flex justify-between items-center text-[#dd3333]">
            <h3 class="font-bold">اعلان‌ها</h3>
          </div>
          <p class="text-sm text-gray-500 mt-2">اعلانی وجود ندارد.</p>
        </div>
        <div class="bg-white rounded-lg shadow p-4 transition-transform duration-300 ease-in-out hover:-translate-y-1">
          <div class="flex justify-between items-center text-[#dd3333]">
            <h3 class="font-bold">ویزیت ها</h3>
          </div>
          <p class="text-sm text-gray-500 mt-2">
            ویزیتی دریافت نشده است.
          </p>
        </div>
        <div class="bg-white rounded-lg shadow p-4 transition-transform duration-300 ease-in-out hover:-translate-y-1">
          <div class="flex justify-between items-center text-[#dd3333]">
            <h3 class="font-bold">تسک ها</h3>
          </div>
          <p class="text-sm text-gray-500 mt-2">تسکی وجود ندارد.</p>
        </div>
        <div class="bg-white rounded-lg shadow p-4 transition-transform duration-300 ease-in-out hover:-translate-y-1">
          <div class="flex justify-between items-center text-[#dd3333]">
            <h3 class="font-bold">تراکنش‌ها</h3>
          </div>
          <p class="text-sm text-gray-500 mt-2">
            تراکنشی وجود ندارد.
          </p>
        </div>
        <div class="bg-white rounded-lg shadow p-4 transition-transform duration-300 ease-in-out hover:-translate-y-1">
          <div class="flex justify-between items-center text-[#dd3333] mb-4">
            <h3 class="font-bold">مسابقات فعال</h3>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="border border-gray-200 bg-[#f9f9f9] rounded-lg p-4">
              <h4 class="mb-2 text-2xl text-[#7a7a7a]">مسابقه ۱</h4>
              <p class="text-sm text-gray-500 mb-2">جایزه: ۵۰</p>
              <div class="flex w-full justify-end">
                <button
                  class="w-28 bg-primary hover:bg-[#dd3333] cursor-pointer transition text-white py-2 rounded-md text-sm"
                >
                  شروع
                </button>
              </div>
            </div>
            <div class="border border-gray-200 bg-[#f9f9f9] rounded-lg p-4">
              <h4 class="text-2xl text-[#7a7a7a] mb-2">متن سوال من</h4>
              <p class="text-sm text-gray-500 mb-2">جایزه: ۵۰</p>
              <div class="flex w-full justify-end">
                <button
                  class="w-28 bg-primary hover:bg-[#dd3333] cursor-pointer transition text-white py-2 rounded-md text-sm"
                >
                  شروع
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white rounded-lg shadow p-4 transition-transform duration-300 ease-in-out hover:-translate-y-1">
            <h3 class="text-[#dd3333] font-bold mb-4">
              درخواست برداشت از کیف پول
            </h3>
            <input
              type="text"
              placeholder="مبلغ (تومان)"
              class="w-full border border-gray-300 rounded-md p-2 mb-4 text-sm focus:outline-primary"
            />
            <button
              class="w-full bg-primary hover:bg-[#dd3333] cursor-pointer transition text-white py-2 rounded-md text-sm"
            >
              درخواست
            </button>
          </div>
        
          <div class="bg-white rounded-lg shadow p-4 transition-transform duration-300 ease-in-out hover:-translate-y-1">
            <h3 class="text-[#dd3333] font-bold mb-4">
              معرفی خود را مشخص کنید
            </h3>
            <input
              type="text"
              placeholder="شماره تلفن معرف"
              class="w-full border border-gray-300 rounded-md p-2 mb-4 text-sm focus:outline-primary"
            />
            <button
              class="w-full bg-primary hover:bg-[#dd3333] cursor-pointer transition text-white py-2 rounded-md text-sm"
            >
              ثبت معرف
            </button>
          </div>

          <div class="bg-white rounded-lg shadow p-4 transition-transform duration-300 ease-in-out hover:-translate-y-1">
            <h3 class="text-[#dd3333] font-bold mb-4">
              انتقال اعتبار/کیف پول
            </h3>
            <input
              type="text"
              placeholder="شماره موبایل مقصد"
              class="w-full border border-gray-300 rounded-md p-2 mb-2 text-sm focus:outline-primary"
            />
            <input
              type="text"
              placeholder="مقدار"
              class="w-full border border-gray-300 rounded-md p-2 mb-2 text-sm focus:outline-primary"
            />
            <input
              type="text"
              placeholder="اعتبار/کیف پول"
              class="w-full border border-gray-300 rounded-md p-2 mb-4 text-sm focus:outline-primary"
            />
            <button
              class="w-full bg-primary hover:bg-[#dd3333] cursor-pointer transition text-white py-2 rounded-md text-sm"
            >
              انتقال
            </button>
          </div>
         
        </div>
      </div>
      <!-- <a
        href="#"
        class="absolute bottom-6 left-6 bg-green-500 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-all shadow-lg z-10"
      >
        <i class="fa-brands fa-whatsapp text-2xl"></i>
      </a>
      <a
        href="#"
        class="absolute bottom-24 left-6 bg-green-500 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-all shadow-lg z-10"
      >
        <i class="fa-brands fa-whatsapp text-2xl"></i>
      </a> -->
    </div>
  </div>
</template>
