<script setup lang="ts">
import { useLoadingState } from "../store/loadingState";

const loadingState = useLoadingState();

setTimeout(() => {
  loadingState.setLoading(false);
}, 2000);

useSchemaOrg([
  defineWebSite({
    name: "تن ساز",
  }),
  defineBreadcrumb({
    itemListElement: [{ name: "خانه", item: "/" }],
  }),
]);
</script>

<template>
  <div>
    <Head>
      <Title>تن ساز | کلینیک زیبایی و لاغری تن ساز</Title>
      <!-- <Link rel="canonical" :href="config.public.websiteURL + decodeURI(route.fullPath)" /> -->
      <Meta name="description" content="کلینیک زیبایی و لاغری تن ساز" />
      <Meta property="og:description" content="کلینیک زیبایی و لاغری تن ساز" />
      <Meta property="og:image" content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
      <Meta property="og:image:secure_url" content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
      <Meta property="og:image:width" content="400" />
      <Meta property="og:image:height" content="300" />
      <Meta property="og:image:alt" content="تن ساز | صفحه اصلی" />
      <Meta property="og:url" content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
    </Head>
    <HomeHeaderComponent />
    <HomeClinicServicesSection />
    <HomeImageComparison  />
    <HomeBeforAfterExample data-aos="fade-up" data-aos-once="true" />
    <FaqSection data-aos="fade-up" data-aos-once="true" />
    <!-- <HomeClinicCafeSection data-aos="fade-up" data-aos-once="true" /> -->
    <HomeAboutUsSection data-aos="fade-up" data-aos-once="true" />
    <HomeBlogsSection data-aos="fade-up" data-aos-once="true" />
  </div>
</template>

<style scoped></style>
