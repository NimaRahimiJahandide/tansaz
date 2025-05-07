<template>
    <div class="min-h-screen bg-gray-100">
      <div class="flex flex-col md:flex-row mt-4 px-4 gap-4">
        <DashboardSidebarComponent />
  
        <!-- Main Content -->
        <div class="w-full md:w-3/4">
          <!-- Points Earned Section -->
          <div class="flex justify-between items-center mb-4">
            <div class="font-bold text-black text-[40px] pb-10">امتیازات</div>
          </div>
          <div class="bg-white rounded-2xl mb-6">
  
            <!-- Table -->
            <div class="overflow-x-auto w-full">
              <table
                class="w-full border-collapse border border-[#50505080] rounded-2xl text-sm font-semibold overflow-hidden text-black">
                <thead>
                  <tr>
                    <th class="p-3 border border-[#50505080]">ردیف</th>
                    <th class="p-3 border border-[#50505080]">نوع فعالیت</th>
                    <th class="p-3 border border-[#50505080]">امتیاز</th>
                    <th class="p-3 border border-[#50505080]">توضیحات</th>
                  </tr>
                </thead>
                <tbody class="w-full items-center text-center">
                  <tr v-for="(item, index) in transactions" :key="index">
                    <td class="p-3 border border-[#50505080]">{{ item.row }}</td>
                    <td class="p-3 border border-[#50505080]">{{ item.addedAmount }}</td>
                    <td class="p-3 border border-[#50505080]">{{ item.percentage }}</td>
                    <td class="p-3 border border-[#50505080]">{{ item.totalAmount }}</td>
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
  definePageMeta({
    layout: 'dashboard'
  });
  
  const transactions = [
    {
      row: 'لورم ایپسوم',
      totalAmount: '۱,۰۵۰,۰۰۰',
      percentage: '۳٪',
      addedAmount: '۱,۵۰۰,۰۰۰'
    },
    {
      row: 'لورم ایپسوم',
      totalAmount: '۱,۰۵۰,۰۰۰',
      percentage: '۳٪',
      addedAmount: '۱,۵۰۰,۰۰۰'
    },
    {
      row: 'لورم ایپسوم',
      totalAmount: '۱,۰۵۰,۰۰۰',
      percentage: '۳٪',
      addedAmount: '۱,۵۰۰,۰۰۰'
    }
  ]
  </script>
  
  <style>
  table {
    border-collapse: separate;
    border-spacing: 0;
  }
  </style>