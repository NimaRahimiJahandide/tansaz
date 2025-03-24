<script setup lang="ts">
interface Card {
  id: number;
  title: string;
  icon: string;
  route?: string;
}

interface Banner {
  title: string;
  cards: Card[];
}

const props = withDefaults(defineProps<{
  banner?: Banner;
}>(), {
  banner: () => ({
    title: '',
    cards: []
  })
});

const internalBanner = reactive({
  title: props.banner?.title || '',
  cards: props.banner?.cards || []
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
            {{ internalBanner.title }}
          </h2>
        </div>
      </div>
    </div>
    <div class="max-w-[1200px] mx-auto px-5">
      <div
        class="grid md:grid-cols-4 grid-cols-2 justify-items-center lg:justify-between justify-center lg:-mt-10 gap-5 -mt-10 z-10"
      >
        <HomeCardServicesSection class="w-full"
          v-for="card in internalBanner.cards"
          :key="card.id"
          :card="card"
        />
      </div>
    </div>
  </div>
</template>
