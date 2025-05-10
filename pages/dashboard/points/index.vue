<template>
  <div class="min-h-screen bg-gray-100">
    <LoadingComponent v-show="loadingState.isLoading" />

    <div class="flex flex-col md:flex-row mt-4 px-4 gap-8" v-show="!loadingState.isLoading">
      <DashboardSidebarComponent class="hidden md:block"/>

      <!-- Main Content -->
      <div class="w-full md:w-3/4">
        <!-- Points Earned Section -->
        <div class="flex justify-between items-center py-6">
          <div class="text-black md:text-[40px] font-bold text-[20px]">امتیازات</div>
        </div>
        <div class="py-5 container md:px-5 mx-auto">
          <div>
            <div class="mx-auto space-y-6 max-w-[1240px]">
              <div
                v-for="(point, index) in points"
                :key="index"
                class="container bg-white rounded-[16px] transition-all duration-300"
              >
                <div
                  class="question transition-all duration-300 flex items-center justify-between p-4 cursor-pointer"
                  :class="activeIndex === index ? 'rounded-t-[16px] border-b-[.5px] border-[rgba(153,153,153,.3)]' : 'rounded-[16px]'"
                  @click="toggleAnswer(index)"
                >
                  <span class="md:text-[20px] text-[12px]  line-clamp-1 lg:line-clamp-none">{{point.point}} امتیاز بابت {{point.description}}</span>
                  
                  <span
                    class="icon text-2xl transition-transform duration-300"
                  >
                  <Icon v-if="activeIndex === index" name="fe:arrow-down" size="24" style="color: #999999" />
                  <Icon v-else name="fe:arrow-up" size="24" style="color: #999999" />
                  </span>
                </div>
                <div
                  class="answercont bg-[#FAFAFA] overflow-hidden rounded-b-[16px] transition-max-h duration-300"
                  :style="{ maxHeight: activeIndex === index ? '50vh' : '0px' }"
                >
                  <article class="answer p-4 md:text-[20px] text-[12px] leading-[180%]">
                    <div class="flex gap-5">
                      <span class="font-semibold">تاریخ:</span>
                      <span>{{point.created_at_fa}}</span>
                    </div>
                    <div class="flex gap-5">
                      <span class="font-semibold">امتیاز :</span>
                      <span>{{point.point}}</span>
                    </div>
                    <div class="flex gap-5">
                      <span class="font-semibold">توضیحات:</span>
                      <span>{{point.description }}</span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DashboardPaginationComponent  />
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
definePageMeta({
  layout: 'dashboard'
});

const activeIndex = ref<number | null>(null);

const toggleAnswer = (index: number): void => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const userStore = useUserStore()

const points = ref({});

const getPoints = async () => {
  loadingState.isLoading = true
  await axios.get(`/points`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
    .then(response => {
      points.value = response.data.data;
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
  await getPoints();
});
</script>