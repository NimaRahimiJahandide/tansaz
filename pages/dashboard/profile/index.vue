<template>
  <div class="min-h-screen bg-gray-100">
    <LoadingComponent v-show="loadingState.isLoading" />

    <div class="flex flex-col md:flex-row mt-4 px-4 gap-8" v-show="!loadingState.isLoading">
      <DashboardSidebarComponent class="hidden md:block" />

      <!-- Main Content -->
      <div class="w-full md:w-3/4">
        <!-- Points Earned Section -->
        <div class="flex justify-between items-center py-6">
          <div class="text-black md:text-[40px] font-bold text-[20px]">پروفایل کاربری</div>
        </div>
        <div class="py-5 container md:px-5 mx-auto">
          <div>
            <div class="mx-auto space-y-6 max-w-[1240px]">
              <div class="mx-auto bg-white rounded-[16px] p-6 my-8">
                <h2 class="text-xl font-bold mb-6 text-right">اطلاعات هویتی</h2>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <!-- Name and Family Name -->
                  <div class="order-3 md:order-1">
                    <label class="block text-sm font-medium text-[#212B36] mb-2 text-right">نام و نام
                      خانوادگی</label>
                    <div class="relative">
                      <input type="text" v-model="formData.fullName"
                        class="w-full px-4 pl-10 py-2 border border-[#E2E8F0] rounded-md text-right" />
                      <button class="absolute inset-y-0 left-0 px-3 flex items-center cursor-pointer" @click="clearField('fullName')">
                        <img src="/icons/message-edit.svg" alt="message-edit" class="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  <!-- National ID -->
                  <div class="order-2 md:order-2">
                    <label class="block text-sm font-medium text-[#212B36] mb-2 text-right">کد
                      ملی</label>
                    <div class="relative">
                      <input type="text" v-model="formData.nationalId"
                        class="w-full px-4 pl-10 py-2 border border-[#E2E8F0] rounded-md text-right"
                        dir="ltr" />
                      <button class="absolute inset-y-0 left-0 px-3 flex items-center cursor-pointer"
                        @click="clearField('nationalId')">
                        <img src="/icons/message-edit.svg" alt="message-edit" class="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  <!-- Mobile Number -->
                  <div class="order-1 md:order-3">
                    <label class="block text-sm font-medium text-[#212B36] mb-2 text-right">شماره
                      موبایل</label>
                    <div class="relative">
                      <input type="tel" v-model="formData.mobileNumber"
                        class="w-full px-4 py-2 border border-[#E2E8F0] rounded-md text-right"
                        dir="ltr" />
                      <button class="absolute cursor-pointer inset-y-0 left-0 px-3 flex items-center"
                        @click="clearField('mobileNumber')">
                        <img src="/icons/message-edit.svg" alt="message-edit" class="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                </div>

                <div class="mt-8 flex self-end w-full justify-end">
                  <button @click="submitForm"
                    class="bg-primary text-white font-bold py-2 px-8 rounded-md transition duration-300">
                    ثبت اطلاعات
                  </button>
                </div>
              </div>
              <div class="mx-auto bg-white rounded-[16px] p-6 my-8">
                <h2 class="text-xl font-bold mb-6 text-right">اطلاعات هویتی</h2>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <!-- Name and Family Name -->
                  <div class="order-3 md:order-1">
                    <label class="block text-sm font-medium text-[#212B36] mb-2 text-right">رمز جدیدی را وارد کنید</label>
                    <div class="relative">
                      <input type="text" v-model="formData.fullName"
                        class="w-full px-4 pl-10 py-2 border border-[#E2E8F0] rounded-md text-right" />
                    </div>
                  </div>

                  <!-- National ID -->
                  <div class="order-2 md:order-2">
                    <label class="block text-sm font-medium text-[#212B36] mb-2 text-right">تکرار رمز ورود</label>
                    <div class="relative">
                      <input type="text"
                        class="w-full px-4 pl-10 py-2 border border-[#E2E8F0] rounded-md text-right"
                        dir="ltr" />
                    </div>
                  </div>
                </div>

                <div class="mt-8 flex self-end w-full justify-end">
                  <button @click="submitForm"
                    class="bg-primary text-white font-bold py-2 px-8 rounded-md transition duration-300">
                    تغییر رمز
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import numeral from "numeral";
import axios from "axios";
import { useLoadingState } from "@/store/loadingState";
const loadingState = useLoadingState();
import { useUserStore } from '@/store/user'

loadingState.isLoading = false

definePageMeta({
  layout: 'dashboard'
});

const formData = ref({
  fullName: '',
  nationalId: '۱۲۳۴۵۶۷۸۹۵۵',
  mobileNumber: '۰۹۱۲۳۴۵۶۷۸۹۰'
});

const clearField = (field) => {
  formData.value[field] = '';
};

const submitForm = () => {
  console.log('Form submitted:', formData.value);
};
</script>

<style scoped>
.rtl {
  direction: rtl;
}
</style>