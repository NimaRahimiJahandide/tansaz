<script setup lang="ts">
import { useLoadingState } from "../store/loadingState";
import { ref } from 'vue';

const loadingState = useLoadingState();
const router = useRouter()
const isSidebarOpen = ref(true)

function openSidebar() {
  isSidebarOpen.value = true
}
function closeSidebar() {
  isSidebarOpen.value = false
}

onMounted(() => {
  if (!localStorage.getItem("token")) {
    router.push("/auth/login");
    return;
  }
});
</script>

<template>
  <div class="min-h-screen bg-[#151515] text-white flex">
    <!-- Sidebar (Desktop & Mobile) -->
    <DashboardGlobalSidebar :is-open="isSidebarOpen" @close-sidebar="closeSidebar" @open-sidebar="openSidebar" />
    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <DashboardGlobalHeader :is-sidebar-open="isSidebarOpen" @open-sidebar="openSidebar" />
      <main class="flex-1 max-w-7xl mx-auto p-4 lg:p-6 w-full">
        <slot />
      </main>
    </div>
  </div>
</template>
