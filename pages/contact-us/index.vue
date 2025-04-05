<script setup lang="ts">
import { useLoadingState } from "@/store/loadingState";

const loadingState = useLoadingState();

</script>

<template>
  <div>
    <!-- <div v-if="loadingState.isLoading"
      class="flex flex-col md:flex-row max-w-[1200px] text-dark mx-auto px-3 mt-[75px]"
    >
      <div class="w-full h-[500px] bg-gray-300 rounded animate-pulse"></div>
    </div> -->
    <div
      class="flex flex-col md:flex-row max-w-[1200px] rounded-4xl bg-background-input text-dark mx-auto px-5 mt-[75px] shadow-2xl"
    >
      <div class="md:w-1/2 p-8">
        <h2 class="text-2xl mb-8">
          راه های <span class="text-primary">ارتباطی</span> با ما
        </h2>
        <div class="space-y-6">
          <div class="flex items-start gap-[20px]">
            <span
              class="bg-primary flex justify-center items-center rounded-[6px] min-w-[30px] h-[30px]"
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
              class="bg-primary flex justify-center items-center rounded-[6px] min-w-[30px] h-[30px]"
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
              <Icon
                name="ic:baseline-whatsapp"
                size="17px"
                style="color: #fff"
              />
            </span>
            <div class="flex flex-col gap-2.5">
              <p class="text-[20px] font-semibold">واتس اپ</p>
              <span class="text-neutral-400">09336074147</span>
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-1/2  p-8">
        <form>
          <div class="mb-6">
            <label class="block mb-2 text-sm">
              نام و نام خانوادگی <span class="text-primary">*</span>
            </label>
            <input
              type="text"
              class="w-full p-3 rounded bg-white focus:border-primary focus:outline-primary"
              required=""
            />
          </div>
          <div class="mb-6">
            <label class="block mb-2 text-sm">
              شماره موبایل <span class="text-primary">*</span>
            </label>
            <input type="tel" class="w-full p-3 rounded bg-white focus:border-primary focus:outline-primary" required="" />
          </div>
          <div class="mb-6">
            <label class="block mb-2 text-sm">
              توضیحات شما <span class="text-primary">*</span>
            </label>
            <textarea
              class="w-full p-3 resize-none rounded bg-white focus:border-primary focus:outline-primary h-40"
              required=""
            ></textarea>
          </div>
          <div class="mb-6">
            <label class="block mb-2 text-white text-sm">کپچا</label>
            <div class="g-recaptcha"></div>
          </div>
          <button
            class="w-full bg-primary text-white py-3 rounded hover:bg-red-700 transition duration-200 shadow-lg"
          >
            ثبت نظر
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
