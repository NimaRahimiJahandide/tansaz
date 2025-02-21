<script setup lang="ts">
import { useLoadingState } from "../store/loadingState";

const loadingState = useLoadingState();

setTimeout(() => {
  loadingState.setLoading(false);
}, 2000);
</script>

<template>
  <div>
    <HomeHeaderComponent />
    <HomeClinicServicesSection />
    <HomeBeforAfterExample data-aos="fade-up" data-aos-once="true" />
    <HomeFaqSection data-aos="fade-up" data-aos-once="true" />
    <HomeClinicCafeSection data-aos="fade-up" data-aos-once="true" />
    <HomeAboutUsSection data-aos="fade-up" data-aos-once="true" />
    <HomeBlogsSection data-aos="fade-up" data-aos-once="true" />
  </div>
</template>

<style scoped></style>
