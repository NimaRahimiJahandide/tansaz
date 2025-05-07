<template>
  <div class="w-full md:w-1/4 bg-white max-w-[340px] h-fit rounded-lg shadow-sm p-4">
    <div class="flex flex-col">
      <NuxtLink :to="menuItem.route == 'dashboard' ? menuItem.route : 'dashboard/' + menuItem.route" v-for="(menuItem, index) in menuItems" :key="index" :class="$route.name == menuItem.route ? 'bg-[#F94A5D]/30 first:rounded-t-2xl last:rounded-b-2xl' : ''"
        class="flex items-center p-6 border-b border-[#80808080] gap-5 cursor-pointer last:border-b-0">
        <img v-if="$route.name == menuItem.route" src="/icons/grid-active.svg" alt="grid"> 
        <img v-else src="/icons/grid.svg" alt="grid">
        <div class="text-[20px] font-bold text-black">{{ menuItem.title }}</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const menuItems = [
  {
    id: 0,
    route: 'dashboard',
    title: 'داشبورد'
  },
  // {
  //   id: 1,
  //   route: 'profile',
  //   title: 'پروفایل '
  // },
  {
    id: 2,
    route: 'dashboard-points',
    title: 'امتیازات '
  },
  {
    id: 3,
    route: 'dashboard-wallet',
    title: 'کیف پول '
  },
  {
    id: 4,
    route: 'dashboard-records',
    title: 'سوابق و پرونده ها'
  },
  {
    id: 5,
    route: 'dashboard-payment',
    title: 'لیست پرداخت ها'
  },
]

</script>
