<script setup>
import axios from 'axios'
import { useUserStore } from '@/store/user'

const userStore = useUserStore()

const getUser = async () => {
  try {
    const { data } = await axios.get(`/user`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })    
    userStore.setUser(data.data) 
  } catch (error) {
    console.error('خطا در دریافت اطلاعات کاربر:', error)
  }
}
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  getUser()
});
</script>
<template>
  <div class="bg-[#F1F1F1]">
    <header class="bg-white p-4 shadow-md rounded-2xl mx-6 mt-2 flex justify-between items-center">
      <div class="flex items-center gap-9">
        <!-- <div class="size-[70px] rounded-full bg-gray-200 overflow-hidden"></div> -->
         <img class="md:size-[70px] size-[40px] rounded-full" :src="userStore.thumb_avatar" :alt="userStore.first_name ">
        <span class="font-bold md:text-xl text-[14px] text-black">{{userStore.first_name}} {{userStore.last_name}}</span>
      </div>
      <div>
        <button class="p-2 rounded-full hover:bg-gray-100 md:block hidden">
          <Icon name="line-md:bell" size="32" style="color: #000" />
        </button>
        <button class="flex size-[40px] items-center justify-center bg-primary rounded-[8px] md:hidden ">
          <Icon name="icon-park-outline:hamburger-button" size="24"  style="color: #fff" />
        </button>
      </div>
    </header>
  </div>
</template>

<style scoped>
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  background: #ef172e;
  transition: right 0.3s ease;
  z-index: 1000;
}

.mobile-menu.open {
  right: 0;
}
</style>