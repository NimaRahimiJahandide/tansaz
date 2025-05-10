<template>
  <div class="min-h-screen bg-gray-100">
    <LoadingComponent v-show="loadingState.isLoading" />

    <div class="flex flex-col md:flex-row mt-4 px-4 gap-8" v-show="!loadingState.isLoading">
      <DashboardSidebarComponent class="hidden md:block"/>

      <!-- Main Content -->
      <div class="w-full md:w-3/4">
        <!-- files Earned Section -->
        <div class="flex justify-between items-center py-6">
          <div class="text-black md:text-[40px] font-bold text-[20px]">سوابق و پرونده ها</div>
        </div>
        <div class="py-5 container md:px-5 mx-auto">
          <div>
            <div class="mx-auto space-y-6 max-w-[1240px]">
              <div
                v-for="(file, index) in files"
                :key="index"
                class="container bg-white rounded-[16px] transition-all duration-300"
              >
                <div
                  class="question transition-all duration-300 flex items-center justify-between p-4 cursor-pointer"
                  :class="activeIndex === index ? 'rounded-t-[16px] border-b-[.5px] border-[rgba(153,153,153,.3)]' : 'rounded-[16px]'"
                  @click="toggleAnswer(index)"
                >
                  <div class="md:text-[20px] text-[12px] flex justify-between w-full  line-clamp-1">
                    <span>پرونده {{file.number}}</span>
                  </div>
                  
                  <span
                    class="icon text-2xl flex transition-transform duration-300"
                  >
                  <Icon v-if="activeIndex === index" name="fe:arrow-down" size="24" style="color: #999999" />
                  <Icon v-else name="fe:arrow-up" size="24" style="color: #999999" />
                  </span>
                </div>
                <div
                  class="answercont bg-[#FAFAFA] overflow-hidden rounded-b-[16px] transition-max-h duration-300"
                  :style="{ maxHeight: activeIndex === index ? '50vh' : '0px' }"
                >
                  <article class="answer flex lg:flex-row flex-col gap-2.5 md:items-center justify-between p-4 md:text-[20px] text-[12px] leading-[180%]">
                    <div class="flex gap-5">
                      <span class="font-semibold">تاریخ:</span>
                      <span>{{file.created_at_fa}}</span>
                    </div>
                    <div class="flex gap-5">
                      <span class="font-semibold">شماره پرونده :</span>
                      <span>{{file.number}}</span>
                    </div>
                    <div class="flex gap-5">
                      <span class="font-semibold">نوع خدمت:</span>
                      <span>{{file.service.name}}</span>
                    </div>
                    <div class="flex items-center justify-center gap-5">
                      <NuxtLink :to="`/dashboard/files/${file.number} `" class="bg-primary flex items-center justify-center text-white text-[12px] font-semibold w-[91px] h-[25px] rounded-lg" to="/">جزییات</NuxtLink>
                    </div>
                  </article>
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

definePageMeta({
  layout: 'dashboard'
});

const activeIndex = ref<number | null>(null);

const toggleAnswer = (index: number): void => {
  activeIndex.value = activeIndex.value === index ? null : index;
};


const files = ref({});

const getFiles = async () => {
  loadingState.isLoading = true
  await axios.get(`/files`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(response => {
      files.value = response.data.data;
      loadingState.isLoading = false
    }).catch(err => {
      console.log(err);
      loadingState.isLoading = false
    }) 
};

const formatPrice = (price) => {
  return numeral(price).format("0,0");
};

onMounted(async  () => {
  await getFiles();
});
</script>