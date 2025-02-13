<template>
  <div class="absolute md:-top-44 -top-72 left-1/2 transform -translate-x-1/2 w-full max-w-[950px] px-2.5">
    <div class="md:h-[350px] bg-[#EFEFEF] rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between p-8 gap-8">
      <div class="bg-primary w-full flex-1 grow h-full text-white p-8 flex flex-col justify-center gap-3.5 rounded-2xl md:w-[400px]">
        <h2 class="text-[28px] font-light text-right">مشاوره رایگان</h2>
        <p class="text-sm leading-7 text-right">
          کافیست که اسم و شماره تماس خود را وارد کنید تا کارشناسان ما با شما
          تماس بگیرند
        </p>
        <a href="tel:۰۷۱۳۶۳۸۵۰۰۴" class="text-xl font-bold text-right" dir="ltr">
          تماس : ۰۷۱۳۶۳۸۵۰۰۴
        </a>
      </div>
      <div class="flex-1 w-full h-full">
        <form class="space-y-6 text-right text-black">
          <div>
            <label class="block mb-2 text-sm">نام و نام خانوادگی *</label>
            <input
              type="text"
              class="w-full p-3 rounded-lg bg-white border-none focus:border-none transition duration-200 outline-none"
            />
          </div>
          <div>
            <label class="block mb-2 text-sm">شماره موبایل *</label>
            <input
              type="tel"
              class="w-full p-3 rounded-lg border-none focus:border-none bg-white transition duration-200 outline-none ltr text-left"
              dir="ltr"
            />
          </div>
          <button
            class="w-full cursor-pointer bg-dark text-white rounded-lg p-3 transition duration-200"
          >
            ثبت درخواست
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
