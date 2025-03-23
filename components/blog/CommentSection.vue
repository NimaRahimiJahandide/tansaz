<template>
  <div>
    <div class="w-full" >
      <h2 class="text-2xl font-bold mb-4 text-right">دیدگاهتان را بنویسید</h2>
      <p class="text-sm mb-5 text-gray-700">
        نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند
        <span class="text-red-500">*</span>
      </p>
      <div class="mb-4">
        <label for="comment" class="block mb-1 text-right text-sm">
          دیدگاه <span class="text-red-500">*</span>
        </label>
        <textarea
          id="comment"
          class="w-full border border-gray-300 rounded p-3 min-h-[200px] transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400"
          required
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="name" class="block mb-1 text-right text-sm">
          نام <span class="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          class="w-full border border-gray-300 rounded p-2 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400"
          required
        />
      </div>
      <div class="mb-4">
        <label for="tel" class="block mb-1 text-right text-sm">
          شماره تلفن <span class="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="tel"
          class="w-full border border-gray-300 rounded p-2 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400"
          required
        />
      </div>
      <div class="mb-6 flex items-start gap-2">
        <input
          type="checkbox"
          id="save-info"
          class="w-4 h-4 accent-primary cursor-pointer transition-all hover:scale-105"
        />
        <label for="save-info" class="text-sm text-gray-700 cursor-pointer">
          ذخیره نام و شماره تلفن در مرورگر برای زمانی که دوباره دیدگاهی
          می‌نویسم.
        </label>
      </div>
      <div>
        <button
          type="submit"
          class="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-all transform hover:scale-[1.02] active:scale-[0.98] font-medium"
        >
          فرستادن دیدگاه
        </button>
      </div>
    </div>
  </div>
</template>
