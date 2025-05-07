<script setup lang="ts">
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
        <DashboardNavbarComponent class="sticky top-0 z-50" />
      <slot />
    </div>
  </div>
</template>
