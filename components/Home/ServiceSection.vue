<template>
  <div class="bg-white min-h-screen p-4 pt-[30px]">
    <!-- Header -->
    <header class="text-center mb-8">
      <h1 class="text-xl font-bold">
        در <span class="text-brand">کلينيک تن ساز</span> زيبايي را تجربه مي كنيد<span class="text-brand">!</span>
      </h1>
    </header>

    <!-- Services Section -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Service Card 1: خدمات زيبايي -->
      <HomeServiceCard 
        title="خدمات زيبايي"
        description="الكساندرايت ، دايود و آي بي ال"
        image="/images/service1.png"
        data-aos="fade-up" data-aos-delay="100" data-aos-once="true"
      />

      <!-- Service Card 2: خدمات ليزر موهاي زائد -->
      <HomeServiceCard
        title="خدمات ليزر موهاي زائد"
        description="الكساندرايت ، دايود و آي بي ال"
        image="/images/service2.png"
        data-aos="fade-up" data-aos-delay="100" data-aos-once="true"
      />

      <!-- Service Card 3: خدمات داغري -->
      <HomeServiceCard
        title="خدمات داغري"
        description="الكساندرايت ، دايود و آي بي ال"
        image="/images/service3.png"
        data-aos="fade-up" data-aos-delay="100" data-aos-once="true"
      />
    </section>
  </div>
</template>

<script setup>
// import ServiceCard from "./components/ServiceCard.vue";
</script>

<style scoped>
/* Custom styles if needed */
</style>