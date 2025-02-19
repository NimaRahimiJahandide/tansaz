<script setup lang="ts">
import { useLoadingState } from '../store/loadingState';

const loadingState = useLoadingState();

setTimeout(() => {
  loadingState.setLoading(false); 
}, 2000);
</script>

<template>
    <div>
        <HomeHeroComponent  />
        <HomeClinicServicesSection  />
        <HomeBeforAfterExample  />
        <HomeFaqSection />
        <HomeClinicCafeSection />
        <HomeAboutUsSection  />
        <HomeBlogsSection  />
    </div>
</template>

<style scoped></style>
