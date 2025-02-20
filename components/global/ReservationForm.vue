<template>
  <div class="mt-[75px] max-w-[1200px] mx-auto px-3">
    <div class="w-full bg-neutral-900 p-8 rounded-3xl">
      <div class="flex flex-col md:flex-row justify-between items-start gap-5">
        <div class="text-white text-3xl flex flex-col my-auto font-bold text-right">
          رزرو نوبت
          <p class="text-sm font-normal mt-4 text-gray-300">
            برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است.
          </p>
        </div>
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
</template>
