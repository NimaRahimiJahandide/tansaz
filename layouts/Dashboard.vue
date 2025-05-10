<script setup lang="ts">
import { useLoadingState } from "../store/loadingState";

const loadingState = useLoadingState();
const router = useRouter()
onMounted(() => {
  if (!localStorage.getItem("token")) {
    router.push("/auth/login");
    return;
  }
});
</script>

<template>
  <div class="flex">
    <div class="flex flex-col w-full">
        <DashboardNavbarComponent v-if="!loadingState.isLoading" class="sticky top-0 z-50" />
      <slot />
    </div>
  </div>
</template>
