<script setup></script>

<template>
  <div class="flex flex-col px-[16px] bg-[#f5f5f5] pt-[30px]">
    <p class="text-[20px] font-bold">
      <span class="text-[#000000]"> با</span>
      <span class="text-[#ED1C24]"> ثبت دیدگاه</span>

      <span class="text-[#000000]"> خود</span>
    </p>
    <p class="text-[20px] font-bold">
      <span class="text-[#000000]"> ما را در ارائه</span>
      <span class="text-[#ED1C24]"> خدمات بهتر </span>

      <span class="text-[#000000]"> یاری کنید</span>
    </p>

    <div class="flex flex-col gap-[4px] mt-[25px]">
      <p class="text-[14px] font-semibold text-[#000000]">نام و نام خانوادگی</p>

      <input
        type="text"
        name=""
        id=""
        class="px-[16px] py-[8px] text-[14px] placeholder-[#929AA5] bg-[#ffffff] w-full h-[42px] rounded-[16px] focus:outline-0"
        placeholder="نام کامل  خود را وارد کنید"
      />
    </div>
    <div class="flex flex-col gap-[4px] mt-[25px]">
      <p class="text-[14px] font-semibold text-[#000000]">نظر شما</p>

      <textarea
        type="text"
        name=""
        id=""
        class="px-[16px] py-[8px] text-[14px] placeholder-[#929AA5] bg-[#ffffff] w-full h-[126px] rounded-[16px] focus:outline-0"
        placeholder="نظر خود را بنویسید"
      />
    </div>

    <button
      class="w-[134px] h-[36px] flex justify-center items-center rounded-[100px] bg-[#ED1C24] text-[14px] font-semibold text-[#ffffff] my-[28px]"
    >
      ارسال و ثبت نظر
    </button>
  </div>

  <div class="flex flex-col pt-[30px] bg-[#ffffff]">
    <p class="text-[20px] font-bold">
      <span class="text-[#ED1C24]"> نظرات</span>

      <span class="text-[#000000]"> کاربران</span>
    </p>

    <div class="flex gap-[11px] mt-[25px]">
      <div class="size-[28px] rounded-full bg-[#000000]" />

      <div class="flex flex-col flex-1">
        <div class="flex items-center gap-[4px]">
          <p class="text-[12px] font-semibold text-[#000000]">هانیه کرانی</p>

          <p class="text-[12px] text-[#828282]">1 روز قبل</p>
        </div>
        <p class="text-[12px] leading-[20px] text-[#2E2E2E] mt-[5px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است.
        </p>

        <div class="flex items-center gap-[3px] mt-[10px]">
          <p class="text-[12px] font-semibold text-[#0077FF]">پاسخ</p>
        </div>
      </div>
    </div>

    <div class="flex items-center gap-[10px] mt-[15px]">
      <p class="text-[12px] font-semibold text-[#000000]">مشاهده پاسخ ها</p>

      <div class="h-[1px] flex-1 bg-[#E1E1E1]" />
    </div>
  </div>
</template>
