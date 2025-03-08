<script setup lang="ts">
const banner = reactive({
  title: '" خدمات کلینیک تن ساز "',
  cards: [
    {
      id: 0,
      title: "تزریق مزوژل جوانساز",
      icon: "/icons/laghari.png",
      route: "/services/1",
    },
    {
      id: 1,
      title: "ژل و فیلر",
      icon: "/icons/cafe.png",
      route: "/services/1",
    },
    {
      id: 2,
      title: "مزوتراپی صورت",
      icon: "/icons/Equipment.png",
      route: "/services/1",
    },
    {
      id: 3,
      title: "PRP مو و صورت",
      icon: "/icons/Dispatch-doctor.png",
      route: "/services/1",
    },
  ],
});
</script>

<template>
  <div>
    <div class="bg-primary bg-[url(/images/pattern.png)]">
      <div class="mt-[75px] max-w-[1200px] mx-auto px-5">
        <div class="py-10 px-8">
          <h2
            class="md:text-3xl text-xl text-white font-semibold text-center mb-16"
          >
            {{ banner.title }}
          </h2>
        </div>
      </div>
    </div>
    <div class="max-w-[1200px] mx-auto px-5">
      <div
        class="grid md:grid-cols-4 grid-cols-2 justify-items-center lg:justify-between justify-center lg:-mt-10 gap-5 -mt-10 z-10"
      >
        <HomeCardServicesSection class="w-full"
          v-for="card in banner.cards"
          :key="card.id"
          :card="card"
        />
      </div>
    </div>
  </div>
</template>
