<template>
  <div class="bg-black text-white min-h-screen">
    <!-- Header -->
    <header class="flex justify-center items-center py-6">
      <img src="/icons/web-logo2.svg" alt="Tansaz Logo" class="h-12 w-auto" />
    </header>

    <!-- Social Media Icons -->
    <div class="flex justify-center space-x-4 mb-8">
      <a href="#">
        <img src="/icons/x.svg" alt="x">
      </a>
      <a href="#">
        <img src="/icons/threads.svg" alt="x">
      </a>
      <a href="#">
        <img src="/icons/whatsapp.svg" alt="x">
      </a>
      <a href="#">
        <img src="/icons/instagram.svg" alt="x">
      </a>

    </div>

    <!-- Services Section -->
    <section class="container mx-auto px-4">
      <!-- Zebaii Services -->
      <div class="mb-5">
        <h2 class="text-lg font-medium leading-[24px] mb-[11px]"><span class="text-brand">خدمات</span> زیبایی</h2>
        <ul class="grid text-[#D4D4D4] text-sm leading-[26px] grid-cols-2 gap-4">
          <li>پزشکان زیبایی</li>
          <li>اقدامات جراحی</li>
          <li>جوان سازی</li>
          <li>تزريقات زيبايي</li>
          <li>هايفو ترابي</li>
          <li>آنالیز چهره</li>
        </ul>
        <hr class="my-5 border-[#FFFFFF40]" />
      </div>

      <!-- Fit Services -->
      <div class="mb-5">
        <h2 class="text-lg font-medium leading-[24px] mb-[11px]"><span class="text-brand">خدمات</span> لاغری</h2>
        <ul class="grid text-[#D4D4D4] text-sm leading-[26px] grid-cols-2 gap-4">
          <li>پزشکان</li>
          <li>شبیه ساز ورزش</li>
          <li>آنالیز اندام</li>
          <li>عضله ساز</li>
          <li>کویشن چربی سوز</li>
          <li>چربی سوزی موضعی</li>
        </ul>
        <hr class="my-5 border-[#FFFFFF40]" />
      </div>

      <!-- Laser Services -->
      <div class="mb-5">
        <h2 class="text-lg font-medium leading-[24px] mb-[11px]"><span class="text-brand">خدمات</span> لیزر</h2>
        <ul class="grid text-[#D4D4D4] text-sm leading-[26px] grid-cols-2 gap-4">
          <li>لیزر ضایعات پوستی</li>
          <li>لیزر ضایعات عروقی</li>
          <li>لیزر موهای زائد</li>
          <li>لیزر ضایعات پوستی</li>
        </ul>
        <hr class="my-5 border-[#FFFFFF40]" />
      </div>

      <!-- Articles and Resources -->
      <div class="mb-5">
        <h2 class="text-lg font-medium leading-[24px] mb-[11px]"><span class="text-brand">دسترسی</span> آسان</h2>
        <ul class="grid text-[#D4D4D4] text-sm leading-[26px] grid-cols-2 gap-4">
          <li>باشگاه مشتریان</li>
          <li>مقالات</li>
          <li>گالری تصاویر</li>
          <li>درباره ما</li>
          <li>تور مجازی</li>
          <li>ارتباط با ما</li>
          <li>پرسش های متداول</li>
        </ul>
        <hr class="my-5 border-[#FFFFFF40]" />
      </div>

      <!-- Contact Information -->
      <div class="text-[#D4D4D4]">
        <h2 class="text-lg font-medium mb-4"><span class="text-brand">ارتباط</span> با ما</h2>
        <p class="text-sm mb-1">071-36385004</p>
        <p class="text-sm mb-1">info@tansaz.com</p>
        <p class="text-sm mb-1">
          شیراز، معاون آباد، نبش دنا، ساختمان هرم نور، طبقه 5
        </p>
      </div>
      <hr class="my-5 border-[#FFFFFF40]" />
    </section>

    <!-- Footer -->
    <footer class="bg-black text-[#D4D4D4] py-[10px] text-sm leading-[23px]">
      <div class="container mx-auto px-4 text-center ">
        <p class="ltr">copyright 2022 publisher representatives limited.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.ltr{
  direction: ltr;
}
</style>
