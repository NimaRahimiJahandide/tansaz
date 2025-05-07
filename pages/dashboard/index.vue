<template>
  <div class="min-h-screen bg-gray-100">
    <LoadingComponent v-show="loadingState.isLoading" />

    <div class="flex flex-col md:flex-row mt-4 px-4 gap-4" v-show="!loadingState.isLoading">
      <DashboardSidebarComponent />

      <!-- Main Content -->
      <div class="w-full md:w-3/4">
        <!-- Info Cards -->
        <div class="flex gap-4 mb-6">
          <div class="bg-white flex items-center justify-center w-[236px] h-[100px] rounded-[16px]">
            <div class="flex justify-between items-center gap-6">
              <div class="text-black text-[20px] font-bold">امتیاز فعلی:</div>
              <div class="text-black text-[20px] font-bold">{{userStore.point}}</div>
            </div>
          </div>
          <div class="bg-white flex items-center justify-center w-[236px] h-[100px] rounded-[16px]">
            <div class="flex justify-between items-center gap-6">
              <div class="text-black text-[20px] font-bold">کیف پول:</div>
              <div class="text-black flex gap-1 text-[20px] font-bold"><span style="direction: ltr ;">{{ userStore.credit }}</span><span class="font-normal text-base">تومان</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Points Earned Section -->
        <div class="flex justify-between items-center mb-4">
          <div class="font-bold text-black  text-[20px]">امتیازات کسب شده:</div>
          <NuxtLink to="dashboard/points" class="text-sm text-black font-semibold cursor-pointer">مشاهده همه ></NuxtLink>
        </div>
        <div class="bg-white rounded-2xl mb-6">
          <!-- Table -->
          <div class="overflow-x-auto w-full">
            <table
              class="w-full border-collapse border border-[#50505080] rounded-2xl text-sm font-semibold overflow-hidden text-black">
              <thead>
                <tr>
                  <th class="p-3 border border-[#50505080]">ردیف</th>
                  <th class="p-3 border border-[#50505080]">امتیاز</th>
                  <th class="p-3 border border-[#50505080]">بابت</th>
                  <th class="p-3 border border-[#50505080]">تاریخ</th>
                </tr>
              </thead>
              <tbody class="w-full items-center text-center">
                <tr v-for="(item, index) in points" :key="index">
                  <td class="p-3 border border-[#50505080]">{{ item.id }}</td>
                  <td class="p-3 border border-[#50505080]">{{ item.point }}</td>
                  <td class="p-3 border border-[#50505080]">{{ item.description }}</td>
                  <td class="p-3 border border-[#50505080]">{{ item.created_at_fa }}</td>
                </tr>
                <tr>
                  <!-- <td colspan="4" class="py-4 px-4 border border-[#50505080]">
                    <div class="flex justify-center gap-20">
                      <div class="font-bold">مجموع مبالغ دریافتی:</div>
                      <div class="font-bold">تومان ۴,۵۰۰,۰۰۰</div>
                    </div>
                  </td> -->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- payments Earned Section -->
        <div class="flex justify-between items-center mb-4">
          <div class="font-bold text-black  text-[20px]">لیست پرداخت ها:</div>
          <NuxtLink to="dashboard/payments" class="text-sm text-black font-semibold cursor-pointer">مشاهده همه ></NuxtLink>
        </div>
        <div class="bg-white rounded-2xl mb-6">
          <!-- Table -->
          <div class="overflow-x-auto w-full">
            <table
              class="w-full border-collapse border border-[#50505080] rounded-2xl text-sm font-semibold overflow-hidden text-black">
              <thead>
                <tr>
                  <th class="p-3 border border-[#50505080]">ردیف</th>
                  <th class="p-3 border border-[#50505080]">مبلغ</th>
                  <th class="p-3 border border-[#50505080]">هدیه</th>
                  <th class="p-3 border border-[#50505080]">بابت</th>
                  <th class="p-3 border border-[#50505080]">تاریخ</th>
                </tr>
              </thead>
              <tbody class="w-full items-center text-center">
                <tr v-for="(item, index) in payments" :key="index">
                  <td class="p-3 border border-[#50505080]">{{ item.id }}</td>
                  <td class="p-3 border border-[#50505080]">{{ item.amount }}</td>
                  <td class="p-3 border border-[#50505080]">{{ item.cash_back }}</td>
                  <td class="p-3 border border-[#50505080]">{{ item.description }}</td>
                  <td class="p-3 border border-[#50505080]">{{ item.created_at_fa }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- files Earned Section -->
        <div class="flex justify-between items-center mb-4">
          <div class="font-bold text-black  text-[20px]">لیست پرونده ها:</div>
          <NuxtLink to="dashboard/files" class="text-sm text-black font-semibold cursor-pointer">مشاهده همه ></NuxtLink>
        </div>
        <div class="bg-white rounded-2xl mb-6">
          <!-- Table -->
          <div class="overflow-x-auto w-full">
            <table
              class="w-full border-collapse border border-[#50505080] rounded-2xl text-sm font-semibold overflow-hidden text-black">
              <thead>
                <tr>
                  <th class="p-3 border border-[#50505080]">ردیف</th>
                  <th class="p-3 border border-[#50505080]">شماره پرونده</th>
                  <th class="p-3 border border-[#50505080]">تاریخ</th>
                  <th class="p-3 border border-[#50505080]">وضعیت</th>
                </tr>
              </thead>
              <tbody class="w-full items-center text-center">
                <tr v-for="(item, index) in files" :key="index">
                  <td class="p-3 border border-[#50505080]">{{ item.id }}</td>
                  <td class="p-3 border border-[#50505080]">{{ item.number }}</td>
                  <td class="p-3 border border-[#50505080]">{{ item.created_at_fa }}</td>
                  <td class="p-3 border border-[#50505080]">مشاهده</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useLoadingState } from "@/store/loadingState";
const loadingState = useLoadingState();

import { useUserStore } from '@/store/user'
definePageMeta({
  layout: 'dashboard'
});

const userStore = useUserStore()

const points = ref({});
const payments = ref({});
const files = ref({});

let loadingPoints= ref(true)
let loadingPayments= ref(true)
let loadingFiles= ref(true)

const getPoints = async () => {
  loadingPoints.value = true
  await axios.get(`/points`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(response => {
      points.value = response.data.data;
      loadingPoints.value = false
    }).catch(err => {
      console.log(err);
      loadingPoints.value = false
    })
};

const getPayments = async () => {
  loadingPayments.value = true
  await axios.get(`/payments`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(response => {
      payments.value = response.data.data;
      loadingPayments.value = false
    }).catch(err => {
      console.log(err);
      loadingPayments.value = false
    })
};

const getFiles = async () => {
  loadingFiles.value = true
  await axios.get(`/files`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(response => {
      files.value = response.data.data;
      loadingFiles.value = false
    }).catch(err => {
      console.log(err);
      loadingFiles.value = false
    })
};

watchEffect(() => {
  loadingState.setLoading(loadingPoints.value || loadingPayments.value || loadingFiles.value);
});

onMounted(async  () => {
  await getPoints();
  await getPayments();
  await getFiles();
});
</script>

<style>
table {
  border-collapse: separate;
  border-spacing: 0;
}
</style>